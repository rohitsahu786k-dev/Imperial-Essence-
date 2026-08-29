"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from "lucide-react";

export function ContactInquirySection({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={`${compact ? "py-16" : "py-24"} bg-slate-50 text-[#071321]`} id="contact-form">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto ${compact ? "mb-10" : "mb-16"} space-y-4`}>
          <span className="inline-block rounded-full bg-amber-50 border border-amber-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            {t("Business Inquiries", "Consultas Comerciales")}
          </span>
          <h2 className="text-3xl font-extrabold sm:text-5xl text-[#071321] tracking-tight">
            {t("Connect with Imperial Essence Trading LLC", "Conéctese con Imperial Essence Trading LLC")}
          </h2>
          <p className="text-base text-slate-600">
            {t(
              "Send us your wholesale requirement or distribution proposal. Our executive team will respond promptly.",
              "Envíenos sus requisitos de compra al por mayor o propuesta de distribución. Nuestro equipo ejecutivo le responderá con rapidez."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Col 1: Contact Details & Info */}
          <div className="space-y-8 bg-[#071321] text-white p-8 sm:p-10 rounded-3xl border border-[#071321] flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-amber-400 mb-2">
                  {t("Dubai Headquarters", "Sede Central en Dubái")}
                </h3>
                <p className="text-xs text-white/70">Imperial Essence Trading LLC</p>
              </div>

              <ul className="space-y-5 text-xs text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{t("Address", "Dirección")}</span>
                    <span>{siteData.company.location.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{t("Mobile / WhatsApp (24/7)", "Móvil / WhatsApp (24/7)")}</span>
                    <a href={`tel:${siteData.company.contact.mobile}`} className="hover:text-[#D4AF37] font-semibold">
                      {siteData.company.contact.mobile}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{t("Office Telephone", "Teléfono de Oficina")}</span>
                    <a href={`tel:${siteData.company.contact.phone}`} className="hover:text-[#D4AF37] font-semibold">
                      {siteData.company.contact.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{t("Email", "Correo Electrónico")}</span>
                    <a href={`mailto:${siteData.company.contact.email}`} className="hover:text-[#D4AF37] font-semibold">
                      {siteData.company.contact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{t("Business Hours", "Horario Comercial")}</span>
                    <span>{t(siteData.company.contact.hours.en, siteData.company.contact.hours.es)}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 text-[11px] text-white/50 space-y-1">
              <p>Registered Commercial Entity in Dubai, UAE: <span className="text-white font-semibold">{siteData.company.license}</span></p>
            </div>
          </div>

          {/* Col 2 & 3: Official Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-amber-100 text-[#B8860B] flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#071321]">
                  {t("Inquiry Received Successfully!", "¡Consulta Recibida con Éxito!")}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {t(
                    "Thank you for reaching out to Imperial Essence Trading LLC. Our executive team will review your inquiry and get back to you shortly.",
                    "Gracias por ponerse en contacto con Imperial Essence Trading LLC. Nuestro equipo ejecutivo revisará su consulta y le responderá a la brevedad."
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-full bg-gold-gradient px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md transition hover:opacity-95"
                >
                  {t("Submit Another Inquiry", "Enviar Otra Consulta")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t("Full Name", "Nombre Completo")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#071321] focus:border-[#D4AF37] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t("Company Name", "Nombre de la Empresa")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Luxury Duty Free Retailers"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#071321] focus:border-[#D4AF37] focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Country */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t("Country", "País")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. UAE / Spain / USA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#071321] focus:border-[#D4AF37] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t("Email Address", "Correo Electrónico")} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="office@theimperialessence.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#071321] focus:border-[#D4AF37] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t("Phone Number", "Teléfono")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 56 393 0666"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#071321] focus:border-[#D4AF37] focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t("Inquiry Message / Product Categories Required", "Mensaje de Consulta / Categorías Requeridas")} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your wholesale inquiry, brand distribution proposal, or sourcing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#071321] focus:border-[#D4AF37] focus:bg-white focus:outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-lg transition hover:opacity-95"
                >
                  <Send className="h-4 w-4" />
                  <span>{t("Send Wholesale Inquiry", "Enviar Consulta Mayorista")}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
