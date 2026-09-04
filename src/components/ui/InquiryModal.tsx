"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useInquiryModal } from "@/context/InquiryModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { X, CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, Sparkles, Building2, Send } from "lucide-react";

export function InquiryModal() {
  const { isOpen, selectedCategory, selectedImage, closeInquiryModal } = useInquiryModal();
  const { t } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    message: "",
  });

  useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, category: selectedCategory }));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  // Find image for selected category or default luxury image
  const matchedCategoryObj = siteData.categories.find(
    (c) => c.name.en.toLowerCase() === (selectedCategory || "").toLowerCase() || c.id === selectedCategory
  );
  
  const displayImage =
    selectedImage ||
    matchedCategoryObj?.image ||
    "/images/brand-free-images/48-watch-collection-marble-desk-workspace.webp";

  const categoryOptions = siteData.categories.map((c) => t(c.name.en, c.name.es));

  return (
    <div
      className="fixed inset-x-0 inset-y-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto"
      onClick={closeInquiryModal}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-white shadow-2xl transition-all my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeInquiryModal}
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/40 bg-white/90 text-[#1f190f] shadow-md backdrop-blur-md transition-all hover:bg-[#b8860b] hover:text-white hover:scale-110"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* Left Column: Premium Visual & Branding Banner (5 Cols on lg) */}
          <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-8 text-white overflow-hidden bg-black">
            {/* Background Image */}
            <Image
              src={displayImage}
              alt="Imperial Essence Luxury Wholesale"
              fill
              priority
              className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
            />

            {/* Dark & Gold Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/25 via-transparent to-black/80 z-10" />

            {/* Top Content */}
            <div className="relative z-20 space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/60 bg-black/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#e5b85c] backdrop-blur-md shadow-md">
                <Sparkles className="h-3 w-3 text-[#d4af37]" />
                <span>{t("B2B WHOLESALE SOURCING", "SUMINISTRO MAYORISTA B2B")}</span>
              </div>

              <h3 className="text-2xl font-normal text-white tracking-tight leading-snug drop-shadow-md">
                {selectedCategory ? t(selectedCategory, selectedCategory) : t("Luxury Perfumery & Beauty Supply", "Perfumería de Lujo y Cosmética")}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                {t(
                  "Direct European T1 & T2 merchandise for official distributors, travel retail, and global duty-free outlets.",
                  "Mercancía T1 y T2 europea directa para distribuidores oficiales y tiendas Duty Free."
                )}
              </p>
            </div>

            {/* Bottom Content / Highlights */}
            <div className="relative z-20 space-y-4 pt-6">
              <div className="space-y-2.5 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[#e5b85c] shrink-0" />
                  <span>{t("100% Authentic T1 & T2 Supply", "Suministro 100% Auténtico T1 y T2")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building2 className="h-4 w-4 text-[#e5b85c] shrink-0" />
                  <span>{t("Dubai Headquarters & European Clean Sourcing", "Sede en Dubái y Abastecimiento Europeo")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="h-4 w-4 text-[#e5b85c] shrink-0" />
                  <span>{t("24/7 WhatsApp Commercial Support", "Soporte Comercial por WhatsApp 24/7")}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/34614655587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#d4af37]/50 bg-[#1f190f] py-2.5 px-4 text-xs font-bold text-[#e5b85c] backdrop-blur-md transition-all hover:bg-black hover:text-white"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>{t("Direct WhatsApp: +34 614 65 55 87", "WhatsApp Directo: +34 614 65 55 87")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form & Header (7 Cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-[#fffdf7]">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#faf4e6] border border-[#d4af37] text-[#b8860b] shadow-lg">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f190f]">
                  {t("Inquiry Received!", "¡Consulta Recibida!")}
                </h3>
                <p className="text-xs text-[#4a3c28] max-w-md mx-auto font-medium leading-relaxed">
                  {t(
                    "Thank you for contacting Imperial Essence Trading LLC. Our commercial sourcing team will review your wholesale inquiry and get back to you within 24 hours.",
                    "Gracias por contactar a Imperial Essence Trading LLC. Nuestro equipo comercial revisará su consulta mayorista y le responderá en 24 horas."
                  )}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/34614655587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-6 py-2.5 text-xs font-extrabold text-[#1f190f] shadow-md transition hover:brightness-110"
                  >
                    <span>{t("Chat Now on WhatsApp", "Chatear Ahora por WhatsApp")}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <button
                    onClick={closeInquiryModal}
                    className="rounded-full border border-[#d4af37]/60 bg-white px-6 py-2.5 text-xs font-extrabold text-[#1f190f] shadow-sm hover:bg-[#faf4e6]"
                  >
                    {t("Close Window", "Cerrar Ventana")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#8a640f]">
                    <Sparkles className="h-3 w-3 text-[#b8860b]" />
                    <span>{t("COMMERCIAL REQUEST FORM", "FORMULARIO DE SOLICITUD COMERCIAL")}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1f190f] tracking-tight">
                    {t("Request Wholesale Portfolio Quote", "Solicitar Cotización de Portafolio")}
                  </h3>
                  <p className="text-xs text-[#5a4a30] font-medium pt-1">
                    {t(
                      "Fill out your details to receive customized volume pricing and product catalogs.",
                      "Complete sus datos para recibir precios de volumen personalizados y catálogos."
                    )}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                        {t("Full Name", "Nombre Completo")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                        {t("Company Name", "Nombre de Empresa")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Luxury Trading LLC"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                        {t("Work Email", "Correo Trabajo")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                        {t("Phone / WhatsApp", "Teléfono / WhatsApp")} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                        {t("Country", "País")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Spain / UAE / USA"
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                        {t("Sector / Category", "Sector / Categoría")}
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                      >
                        <option value="">{t("Select Category...", "Seleccionar Categoría...")}</option>
                        {categoryOptions.map((cat, idx) => (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-[#2c2214] mb-1">
                      {t("Estimated Quantity & Specifications", "Cantidad Estimada y Especificaciones")}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t(
                        "Specify target brands, volume, or delivery requirements...",
                        "Especifique marcas deseadas, volumen o requisitos..."
                      )}
                      className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1f190f] shadow-sm outline-none transition focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] py-3.5 text-xs font-extrabold uppercase tracking-wide text-[#1f190f] shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] disabled:opacity-50"
                    >
                      {loading ? (
                        <span>{t("Processing...", "Procesando...")}</span>
                      ) : (
                        <>
                          <span>{t("Submit Wholesale Inquiry", "Enviar Solicitud Mayorista")}</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
