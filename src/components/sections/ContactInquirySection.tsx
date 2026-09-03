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
    <section className={`${compact ? "py-16" : "py-24"} bg-[#faf6ee] text-[#1f190f] border-t border-[#d4af37]/30`} id="contact-form">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto ${compact ? "mb-10" : "mb-16"} space-y-4`}>
          <span className="inline-block rounded-full bg-[#faf4e6] border border-[#d4af37]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8a640f]">
            {t("Business Inquiries", "Consultas Comerciales")}
          </span>
          <h2 className="text-3xl font-extrabold sm:text-5xl text-[#1f190f] tracking-tight">
            {t("Connect with Imperial Essence Trading LLC", "Conéctese con Imperial Essence Trading LLC")}
          </h2>
          <p className="text-base text-[#4a3c28] font-medium">
            {t(
              "Send us your wholesale requirement or distribution proposal. Our executive team will respond promptly.",
              "Envíenos sus requisitos de compra al por mayor o propuesta de distribución. Nuestro equipo ejecutivo le responderá con rapidez."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Col 1: Contact Details & Info */}
          <div className="space-y-8 bg-gradient-to-br from-[#fffdf8] via-[#faf4e6] to-[#f5ead4] text-[#1f190f] p-8 sm:p-10 rounded-3xl border border-[#d4af37]/40 flex flex-col justify-between shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#8a640f] mb-2">
                  {t("Dubai Headquarters", "Sede Central en Dubái")}
                </h3>
                <p className="text-xs text-[#5a4a30] font-semibold">Imperial Essence Trading LLC</p>
              </div>

              <ul className="space-y-5 text-xs font-bold text-[#2c2214]">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1f190f] block mb-0.5">{t("Address", "Dirección")}</span>
                    <span>{siteData.company.location.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1f190f] block mb-0.5">{t("Mobile / WhatsApp (24/7)", "Móvil / WhatsApp (24/7)")}</span>
                    <a href={`tel:${siteData.company.contact.mobile}`} className="hover:text-[#b8860b] font-extrabold">
                      {siteData.company.contact.mobile}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1f190f] block mb-0.5">{t("Office Telephone", "Teléfono de Oficina")}</span>
                    <a href={`tel:${siteData.company.contact.phone}`} className="hover:text-[#b8860b] font-extrabold">
                      {siteData.company.contact.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1f190f] block mb-0.5">{t("Email", "Correo Electrónico")}</span>
                    <a href={`mailto:${siteData.company.contact.email}`} className="hover:text-[#b8860b] font-extrabold">
                      {siteData.company.contact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1f190f] block mb-0.5">{t("Business Hours", "Horario Comercial")}</span>
                    <span>{t(siteData.company.contact.hours.en, siteData.company.contact.hours.es)}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#d4af37]/30 text-[11px] text-[#5a4a30] space-y-1">
              <p>Registered Commercial Entity in Dubai, UAE: <span className="text-[#1f190f] font-extrabold">{siteData.company.license}</span></p>
            </div>
          </div>

          {/* Col 2 & 3: Official Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-[#d4af37]/35 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1f190f]">
                  {t("Inquiry Received Successfully!", "¡Consulta Recibida con Éxito!")}
                </h3>
                <p className="text-sm text-[#4a3c28] max-w-md mx-auto font-medium">
                  {t(
                    "Thank you for reaching out to Imperial Essence Trading LLC. Our executive team will review your inquiry and get back to you shortly.",
                    "Gracias por ponerse en contacto con Imperial Essence Trading LLC. Nuestro equipo ejecutivo revisará su consulta y le responderá a la brevedad."
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-md transition hover:scale-105"
                >
                  {t("Submit Another Inquiry", "Enviar Otra Consulta")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                      {t("Full Name", "Nombre Completo")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3 text-sm text-[#1f190f] focus:border-[#b8860b] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                      {t("Company Name", "Nombre de la Empresa")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Luxury Duty Free Retailers"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3 text-sm text-[#1f190f] focus:border-[#b8860b] focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Country */}
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                      {t("Country", "País")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. UAE / Spain / USA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3 text-sm text-[#1f190f] focus:border-[#b8860b] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                      {t("Email Address", "Correo Electrónico")} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="office@theimperialessence.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3 text-sm text-[#1f190f] focus:border-[#b8860b] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                      {t("Phone Number", "Teléfono")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 501 0056"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3 text-sm text-[#1f190f] focus:border-[#b8860b] focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                    {t("Inquiry Message / Product Categories Required", "Mensaje de Consulta / Categorías Requeridas")} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your wholesale inquiry, brand distribution proposal, or sourcing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3 text-sm text-[#1f190f] focus:border-[#b8860b] focus:bg-white focus:outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-md transition hover:scale-105"
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
