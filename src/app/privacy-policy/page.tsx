import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Imperial Essence Trading LLC",
  description: "Privacy Policy and data protection guidelines for Imperial Essence Trading LLC.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fffdf7] text-[#1f190f]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#1f190f]">Privacy Policy</h1>
        <p className="text-sm font-bold text-[#8a640f]">Last updated: August 2026</p>
        <div className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-[#4a3c28] font-medium">
          <p>
            Imperial Essence Trading LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), headquartered at {site.address}, respects your privacy and is committed to protecting your commercial and personal data.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">1. Data We Collect</h2>
          <p>
            We collect B2B inquiry details submitted through our website contact form, email, or 24/7 WhatsApp support, including full name, company name, country, email address, phone number, and category interests.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">2. How We Use Data</h2>
          <p>
            Your information is utilized strictly to evaluate B2B wholesale proposals, manage distribution communications, coordinate international logistics, and maintain professional commercial partnerships.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">3. Data Protection & Inquiries</h2>
          <p>
            For any inquiries regarding data protection, please contact us at <strong>{site.email}</strong> or by mail to {site.address}.
          </p>
        </div>
      </div>
    </div>
  );
}
