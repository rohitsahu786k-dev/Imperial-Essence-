"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowRight, BadgeCheck, Boxes, Globe2, Handshake, ShieldCheck, Sparkles, Award } from "lucide-react";

export function WhyChooseUs({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  const coreValuesCards = [
    {
      icon: Handshake,
      label: "Value 01",
      title: { en: "Reliability & Long-Term Partnership", es: "Fiabilidad y Alianza a Largo Plazo", ar: "الموثوقية والشراكة طويلة الأمد" },
      copy: {
        en: "Consistent, dependable supply and transparent collaboration built to endure over decades.",
        es: "Suministro constante y fiable con colaboración transparente orientada a perdurar.",
      },
    },
    {
      icon: ShieldCheck,
      label: "Value 02",
      title: { en: "Product Authenticity & Quality", es: "Autenticidad y Calidad del Producto", ar: "أصالة وجودة المنتجات" },
      copy: {
        en: "Strict quality assurance and genuine product sourcing across all 7 luxury categories.",
        es: "Garantía estricta de calidad y abastecimiento genuino en todas las categorías de lujo.",
      },
    },
    {
      icon: Boxes,
      label: "Value 03",
      title: { en: "Flexibility Across T1 & T2 Supply", es: "Flexibilidad en Fuentes T1 y T2", ar: "مرونة في مصادر التوريد T1 و T2" },
      copy: {
        en: "Direct European clean T2 merchandise alongside flexible non-European T1 supply options.",
        es: "Mercancía T2 limpia europea directa y opciones flexibles de mercancía T1 no europea.",
      },
    },
    {
      icon: Award,
      label: "Value 04",
      title: { en: "40+ Years Family Heritage", es: "40+ Años de Herencia Familiar", ar: "إرث عائلي وخبرة لأكثر من 40 عامًا" },
      copy: {
        en: "Deep industry roots in Dubai and travel retail, market intuition, and dedicated leadership.",
        es: "Profundas raíces en el sector en Dubái y travel retail, intuición de mercado y liderazgo.",
      },
    },
  ];

  return (
    <section className={`${compact ? "py-16 sm:py-20" : "py-24 sm:py-28"} bg-[#FAF8F5] text-[#071321] relative overflow-hidden border-b border-amber-200/50`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          
          {/* Left Column: Core Value Pitch */}
          <div className="flex flex-col justify-between rounded-3xl border border-amber-200/90 bg-white p-8 sm:p-10 shadow-xl lg:col-span-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8860B] shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{t("Why Imperial Essence Trading LLC", "Por qué Imperial Essence Trading LLC")}</span>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#071321] sm:text-5xl">
                {t("Reliable Wholesale Support for Luxury Retailers & Distributors Worldwide", "Soporte Mayorista Fiable para Minoristas y Distribuidores de Lujo")}
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 font-normal">
                {t(
                  "We combine over 40 years of family legacy, trusted supplier relationships, and direct European sourcing from our Dubai Bay Square headquarters to support leading retail groups and duty-free channels.",
                  "Combinamos más de 40 años de legado familiar, relaciones con proveedores de confianza y suministro europeo directo desde nuestra sede en Dubái Bay Square."
                )}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
              <div>
                <p className="text-3xl font-extrabold text-[#B8860B]">40+</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t("Family Legacy", "Legado Familiar")}
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#071321]">Global</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t("Trade Reach", "Alcance Comercial")}
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#071321]">Dubai HQ</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t("Bay Square, UAE", "Bay Square, EAU")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#071321] shadow-2xl lg:col-span-5">
            <Image
              src="/images/brand-free-images/29-futuristic-duty-free-retail-interior.webp"
              alt="Imperial Essence Duty Free Operations"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover opacity-85 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/60 to-transparent" aria-hidden="true" />
            
            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-8 text-white">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#071321]/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 shadow-md">
                  <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                  Dubai Commercial Entity
                </span>
                <Globe2 className="h-6 w-6 text-[#D4AF37]" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  {t("Dubai-Based Global Gateway", "Puerta de Entrada Global en Dubái")}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {t("Built for enduring, transparent distribution partnerships", "Construido para alianzas de distribución transparentes")}
                </h3>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Value Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValuesCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.label}
                className="rounded-3xl border border-amber-200/90 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#B8860B] border border-amber-200/60 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8860B] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                      {card.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold leading-tight text-[#071321]">
                    {t(card.title.en, card.title.es)}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 font-normal">
                    {t(card.copy.en, card.copy.es)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#D4AF37]/40 bg-[#071321] p-8 text-white sm:flex-row sm:items-center shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-slate-950 shadow-md">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">
                {t("Ready to discuss a wholesale or distribution requirement?", "¡Listo para hablar de sus requisitos de distribución?")}
              </h3>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300 font-light">
                {t("Share your product category, target market, and volume requirements with our Dubai team.", "Comparta sus requisitos de categoría, mercado y volumen con nuestro equipo en Dubái.")}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-slate-950 transition hover:scale-105 shadow-xl"
          >
            <span>{t("Start Inquiry", "Iniciar Consulta")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
