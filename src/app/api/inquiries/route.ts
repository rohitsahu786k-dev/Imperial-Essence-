import { NextRequest, NextResponse } from "next/server";
import { getMongoClient } from "@/lib/db";
import { validateLead } from "@/lib/validations";
import { site } from "@/data/site";

const attempts = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = validateLead(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry.", details: parsed.errors }, { status: 400 });
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const now = new Date();
  const lead = {
    ...parsed.data,
    phone: parsed.data.phone || "",
    estimatedMonthlyVolume: parsed.data.estimatedMonthlyVolume || "",
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  const client = (await getMongoClient()) as { db: () => { collection: (name: string) => { insertOne: (lead: unknown) => Promise<unknown> } } } | null;
  if (client) {
    await client.db().collection("leads").insertOne(lead);
  }

  if (process.env.RESEND_API_KEY) {
    const { Resend } = (await Function("return import('resend')")()) as { Resend: new (key: string) => { emails: { send: (message: unknown) => Promise<unknown> } } };
    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminEmail = process.env.ADMIN_EMAIL || site.email;
    await resend.emails.send({
      from: `Worldwide Supply 28 <onboarding@resend.dev>`,
      to: adminEmail,
      subject: `New wholesale inquiry from ${lead.companyName}`,
      text: `New inquiry\n\nName: ${lead.fullName}\nCompany: ${lead.companyName}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCountry: ${lead.country}\nBusiness Type: ${lead.businessType}\nCategories: ${lead.interestedCategories.join(", ")}\nVolume: ${lead.estimatedMonthlyVolume}\n\n${lead.message}`,
    });
    await resend.emails.send({
      from: `Worldwide Supply 28 <onboarding@resend.dev>`,
      to: lead.email,
      subject: "Thank You for Contacting Worldwide Supply 28",
      text: `Thank you for reaching out to Worldwide Supply 28. We have received your wholesale inquiry and our team will review your requirements shortly.\n\nWorldwide Supply 28 specializes in luxury wholesale, travel retail, FMCG distribution, and international sourcing solutions for retailers, duty-free operators, distributors, and wholesalers.\n\nA member of our team will contact you soon to discuss your business needs.\n\nWorldwide Supply 28\nA Legacy of Trust. A World of Opportunities.`,
    });
  }

  return NextResponse.json({ ok: true });
}
