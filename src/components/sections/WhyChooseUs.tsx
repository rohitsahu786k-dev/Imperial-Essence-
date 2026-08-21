"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ShieldCheck, Award, Globe, Layers, ArrowUpRight, Sparkles } from "lucide-react";

export function WhyChooseUs({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className={`${compact ? "py-16" : "py-24"} bg-slate-50 text-[#071321]`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00A884]/10 border border-[#00A884]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00A884]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("Why Worldwide Supply 28 SL", "Por Qué Worldwide Supply 28 SL")}</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-[#071321]">
            {t("Key Competitive Advantages", "Ventajas Competitivas Clave")}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {t(
              "Combining sector specialization with cross-border logistics discipline to deliver reliable supply solutions.",
              "Combinando la especialización en el sector con la disciplina logística transfronteriza para ofrecer soluciones de suministro fiables."
            )}
          </p>
        </div>

        {/* 50% 50% Balanced Bento Grid Layout */}
        <div className="space-y-6">
          {/* Top Row: Full-width Hero Visual Card */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-white flex flex-col justify-between group shadow-xl border border-slate-200 min-h-[360px] sm:min-h-[420px]">
            {/* Background Image */}
            <Image
              src="/images/why-us-luxury.jpg"
              alt="Worldwide Supply 28 SL Luxury Logistics Fulfillment Center"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/95 via-[#071321]/45 to-transparent" />

            {/* Top Badges */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#071321] shadow-md border border-slate-200">
                <ShieldCheck className="h-4 w-4 text-[#00A884]" />
                <span>Spanish CIF: {siteData.company.cif}</span>
              </div>
              <span className="rounded-full bg-[#00A884] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-md">
                15+ Yrs Industry Leadership
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-3 pt-16">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {t(
                  "15+ Years of Proven Excellence in Wholesale & Travel Retail",
                  "Más de 15 Años de Excelencia en Venta al Por Mayor y Travel Retail"
                )}
              </h3>
              <p className="max-w-2xl text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {t(
                  "Deep-rooted supplier relationships, market instinct, and cross-border distribution reliability from our Mediterranean hub in Valencia, Spain.",
                  "Profundas relaciones con proveedores, instinto de mercado y fiabilidad en la distribución transfronteriza desde nuestra sede en Valencia, España."
                )}
              </p>
            </div>
          </div>

          {/* Middle Row: 50% 50% Equal Split Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Brand Partnerships (50%) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#00A884] transition group min-h-[220px]">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-full bg-[#00A884]/10 text-[#00A884] flex items-center justify-center font-bold">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Premier Groups
                </span>
              </div>
              <div className="space-y-2 pt-4">
                <h4 className="text-xl font-extrabold text-[#071321] group-hover:text-[#00A884] transition">
                  {t("Prestige Group Partnerships", "Alianzas con Grupos Prestige")}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    "Strong relationships with LVMH, PUIG, L'Oréal Luxe, COTY, P&G, and Niche perfume houses.",
                    "Relaciones sólidas con LVMH, PUIG, L'Oréal Luxe, COTY, P&G y casas de perfume de nicho."
                  )}
                </p>
              </div>
            </div>

            {/* Card 2: Global Reach (50%) */}
            <div className="rounded-3xl bg-[#071321] text-white p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group min-h-[220px]">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00A884]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-3xl sm:text-4xl font-black text-[#00A884]">50+</span>
                <Globe className="h-6 w-6 text-slate-400" />
              </div>
              <div className="relative z-10 space-y-1 pt-4">
                <h4 className="text-xl font-bold text-white">
                  {t("Global Distribution Footprint", "Huella de Distribución Global")}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {t(
                    "Multi-modal supply servicing Europe, Middle East, North America, Asia & Africa.",
                    "Suministro multimodal en Europa, Oriente Medio, Norteamerica, Asia y África."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Lower Row: 50% 50% Equal Split Cards (Niche Vale Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lower Card 1: Flexible B2B Sourcing (50%) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#00A884] transition group min-h-[220px]">
              <div className="h-10 w-10 rounded-full bg-[#071321] text-white flex items-center justify-center font-bold">
                <Layers className="h-5 w-5" />
              </div>
              <div className="space-y-2 pt-4">
                <h4 className="text-xl font-bold text-[#071321] group-hover:text-[#00A884] transition">
                  {t("Flexible B2B Sourcing", "Suministro B2B Flexible")}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    "Supply tailored to duty-free operators, luxury retailers & international distributors.",
                    "Suministro adaptado a operadores duty-free, minoristas y distribuidores internacionales."
                  )}
                </p>
              </div>
            </div>

            {/* Lower Card 2: Partner With Us CTA Card (50%) */}
            <Link
              href="/contact"
              className="rounded-3xl bg-[#00A884] text-white p-8 flex flex-col justify-between shadow-xl transition hover:bg-[#009272] group min-h-[220px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
                  B2B Sourcing
                </span>
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <h4 className="text-2xl font-extrabold text-white">
                  {t("Partner With Us", "Asóciese con Nosotros")}
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
                  {t(
                    "Request customized wholesale supply solutions from Valencia, Spain.",
                    "Solicite soluciones de suministro al por mayor personalizadas desde Valencia, España."
                  )}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
