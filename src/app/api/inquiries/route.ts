import { NextRequest, NextResponse } from "next/server";
import { getMongoClient } from "@/lib/db";
import { validateLead } from "@/lib/validations";
import { site } from "@/data/site";
import { Resend } from "resend";

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

  try {
    const client = await getMongoClient();
    if (client) {
      await client.db().collection("leads").insertOne(lead);
    }
  } catch (err) {
    console.error("Database lead save warning:", err);
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const adminEmail = process.env.ADMIN_EMAIL || site.email;
      await resend.emails.send({
        from: `Imperial Essence <onboarding@resend.dev>`,
        to: adminEmail,
        subject: `New wholesale inquiry from ${lead.companyName}`,
        text: `New inquiry\n\nName: ${lead.fullName}\nCompany: ${lead.companyName}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCountry: ${lead.country}\nBusiness Type: ${lead.businessType}\nCategories: ${lead.interestedCategories.join(", ")}\nVolume: ${lead.estimatedMonthlyVolume}\n\n${lead.message}`,
      });
      await resend.emails.send({
        from: `Imperial Essence <onboarding@resend.dev>`,
        to: lead.email,
        subject: "Thank You for Contacting Imperial Essence Trading LLC",
        text: `Thank you for reaching out to Imperial Essence Trading LLC. We have received your wholesale inquiry and our executive team will review your requirements shortly.\n\nImperial Essence Trading LLC specializes in luxury perfumery, niche fragrances, cosmetics, skincare, travel sets, and European T1 & T2 sourcing for international retailers, duty-free operators, and distributors.\n\nA member of our team will contact you soon to discuss your business needs.\n\nImperial Essence Trading LLC\nDubai Headquarters | Bay Square, Business Bay`,
      });
    } catch (emailErr) {
      console.error("Resend email warning:", emailErr);
    }
  }

  return NextResponse.json({ ok: true });
}
