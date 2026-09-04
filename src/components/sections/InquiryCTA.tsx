"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageCircle, Clock, Sparkles } from "lucide-react";

export function InquiryCTA() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="relative bg-[#fffdf7] py-24 text-[#1f190f] overflow-hidden border-t border-[#d4af37]/30" id="inquiry-form">
      
      {/* Background Decorative Gold Ambient Radial Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#d4af37]/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Modern Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-extrabold text-[#8a640f] backdrop-blur-md">
              <MessageCircle className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>{t("GET IN TOUCH WITH OUR TEAM", "PONTE EN CONTACTO CON NUESTRO EQUIPO")}</span>
            </div>

            <h2 className="text-3xl font-normal tracking-tight text-[#1f190f] sm:text-5xl leading-[1.15]">
              {t("Commercial Inquiries & Wholesale Requests", "Consultas Comerciales y Solicitudes Mayoristas")}
            </h2>

            <p className="text-sm font-medium text-[#4a3c28] leading-relaxed sm:text-base">
              {t(
                "Whether you are a prospective client evaluating luxury fragrance & skincare portfolios or a brand seeking official distribution access in Dubai and international duty free channels.",
                "Tanto si es un cliente potencial que evalúa portafolios de perfumería como si es una marca que busca distribución en Dubái."
              )}
            </p>

            {/* 4 Interactive Contact Detail Cards */}
            <div className="space-y-3.5 pt-2">
              
              {/* Dubai HQ */}
              <div className="group flex items-start gap-4 rounded-2xl border border-[#d4af37]/30 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#b8860b] hover:shadow-md hover:-translate-y-0.5">
                <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-3 text-[#b8860b] shrink-0 group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">Dubai Headquarters</h4>
                  <p className="text-xs font-bold text-[#1f190f] leading-relaxed pt-0.5">
                    203, Building No. 11, Bay Square, Business Bay, Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Telephone & Mobile */}
              <div className="group flex items-start gap-4 rounded-2xl border border-[#d4af37]/30 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#b8860b] hover:shadow-md hover:-translate-y-0.5">
                <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-3 text-[#b8860b] shrink-0 group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">Telephone & Mobile</h4>
                  <p className="text-xs font-bold text-[#1f190f] pt-0.5">
                    Tel: +971 4 552 1257 | Mobile: +34 614 65 55 87
                  </p>
                </div>
              </div>

              {/* WhatsApp 24/7 Highlight */}
              <a
                href="https://wa.me/34614655587"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-50/60 p-4 shadow-sm transition-all duration-300 hover:border-emerald-600 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-100 p-3 text-emerald-700 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">WhatsApp Support (24/7)</h4>
                    <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] font-extrabold text-white">LIVE</span>
                  </div>
                  <p className="text-xs font-extrabold text-emerald-900 pt-0.5 group-hover:underline">
                    +34 614 65 55 87 (Click to Chat 24/7)
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:office@theimperialessence.com"
                className="group flex items-start gap-4 rounded-2xl border border-[#d4af37]/30 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#b8860b] hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-3 text-[#b8860b] shrink-0 group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">Official Email</h4>
                  <p className="text-xs font-bold text-[#1f190f] pt-0.5 group-hover:text-[#b8860b] transition-colors">
                    office@theimperialessence.com
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Modern Glassmorphic Form Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-[#d4af37]/40 bg-white p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Top Accent Gold Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c]" />

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-500/40 shadow-inner">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-normal text-[#1f190f]">{t("Inquiry Received", "Consulta Recibida")}</h3>
                  <p className="text-xs font-semibold text-[#5a4a30] max-w-md mx-auto leading-relaxed">
                    {t(
                      "Thank you for contacting Imperial Essence Trading LLC. Our commercial distribution team will review your inquiry and reach out within 24 business hours.",
                      "Gracias por contactar con Imperial Essence Trading LLC. Nuestro equipo revisará su consulta a la brevedad."
                    )}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-extrabold text-[#b8860b] underline hover:text-[#8a640f]"
                  >
                    {t("Send Another Message", "Enviar Otro Mensaje")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-normal text-[#1f190f]">
                      {t("Send Business Inquiry", "Enviar Consulta Comercial")}
                    </h3>
                    <span className="text-[10px] font-bold text-[#8a640f] uppercase tracking-wider bg-[#faf4e6] px-3 py-1 rounded-full border border-[#d4af37]/30">
                      B2B SOURCING
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#8a640f] mb-2">
                        {t("Full Name *", "Nombre Completo *")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3.5 text-xs text-[#1f190f] font-semibold outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#8a640f] mb-2">
                        {t("Company Name *", "Nombre de Empresa *")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Luxury Retail Group LLC"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3.5 text-xs text-[#1f190f] font-semibold outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30 transition"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#8a640f] mb-2">
                        {t("Country *", "País *")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="United Arab Emirates / Spain / USA"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3.5 text-xs text-[#1f190f] font-semibold outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#8a640f] mb-2">
                        {t("Email Address *", "Correo Electrónico *")}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="office@company.com"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3.5 text-xs text-[#1f190f] font-semibold outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#8a640f] mb-2">
                      {t("Phone Number (with country code) *", "Número de Teléfono *")}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3.5 text-xs text-[#1f190f] font-semibold outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#8a640f] mb-2">
                      {t("Commercial Message / Inquiry Details *", "Mensaje / Detalles de Consulta *")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t(
                        "Please describe your wholesale requirements, product categories of interest, or target markets...",
                        "Por favor describa sus requerimientos mayoristas o categorías de interés..."
                      )}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fffdfa] px-4 py-3.5 text-xs text-[#1f190f] font-semibold outline-none focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] py-4 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
                  >
                    <span>{loading ? t("Sending Inquiry...", "Enviando Consulta...") : t("Submit Business Inquiry", "Enviar Consulta Comercial")}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
