"use client";

import { useState } from "react";
import { categoryInterests, businessTypes, monthlyVolumes } from "@/lib/validations";

type Status = "idle" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setErrors({});
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      businessType: formData.get("businessType"),
      interestedCategories: formData.getAll("interestedCategories"),
      estimatedMonthlyVolume: formData.get("estimatedMonthlyVolume"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      sourcePage: "contact",
      companyWebsite: formData.get("companyWebsite"),
    };

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitting(false);
    if (!response.ok) {
      const body = await response.json().catch(() => null);
      setErrors(body?.details || {});
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-amber-200 bg-white p-6 sm:p-8 shadow-md">
      <input name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.fullName}><input name="fullName" className="input" /></Field>
        <Field label="Company Name" error={errors.companyName}><input name="companyName" className="input" /></Field>
        <Field label="Email Address" error={errors.email}><input name="email" type="email" className="input" /></Field>
        <Field label="Phone / WhatsApp" error={errors.phone}><input name="phone" className="input" /></Field>
        <Field label="Country / Market" error={errors.country}><input name="country" className="input" /></Field>
        <Field label="Business Type" error={errors.businessType}>
          <select name="businessType" className="input" defaultValue="">
            <option value="">Select business type</option>
            {businessTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Interested Categories" error={errors.interestedCategories}>
        <div className="grid gap-2 sm:grid-cols-2">
          {categoryInterests.map((category) => (
            <label key={category} className="flex items-center gap-2 rounded-xl border border-amber-200/80 px-3 py-2 text-sm hover:bg-amber-50">
              <input name="interestedCategories" type="checkbox" value={category} className="accent-[#D4AF37]" />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </Field>
      <Field label="Estimated Monthly Volume" error={errors.estimatedMonthlyVolume}>
        <select name="estimatedMonthlyVolume" className="input" defaultValue="">
          <option value="">Select estimated volume</option>
          {monthlyVolumes.map((volume) => <option key={volume} value={volume}>{volume}</option>)}
        </select>
      </Field>
      <Field label="Message" error={errors.message}><textarea name="message" rows={5} className="input resize-y" /></Field>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
        <input name="consent" type="checkbox" className="mt-1 accent-[#D4AF37]" />
        <span>I agree to be contacted by Imperial Essence Trading LLC regarding this inquiry.</span>
      </label>
      {errors.consent ? <p className="text-sm text-red-700">{errors.consent}</p> : null}
      <button type="submit" disabled={submitting} className="rounded-full bg-gold-gradient px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-md hover:opacity-95 disabled:opacity-60 transition">
        {submitting ? "Submitting..." : "Submit Wholesale Inquiry"}
      </button>
      {status === "success" ? <p className="rounded-2xl bg-amber-50 border border-amber-300 p-4 text-sm font-bold text-[#B8860B]">Thank you. Your inquiry has been received by our Dubai team.</p> : null}
      {status === "error" ? <p className="rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-700">Please review the highlighted fields or email office@theimperialessence.com.</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#071321]">
      <span>{label}</span>
      {children}
      {error ? <span className="text-sm font-normal text-red-700">{error}</span> : null}
    </label>
  );
}
