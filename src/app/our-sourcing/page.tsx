"use client";

import Link from "next/link";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { useLanguage } from "@/context/LanguageContext";
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Globe, Layers } from "lucide-react";

export default function OurSourcingPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#fffdf7] text-[#1f190f]">
      {/* Internal Page Hero */}
      <InternalPageHero
        eyebrow={t("Direct European Sourcing", "Abastecimiento Europeo Directo")}
        title={t("European T1 & T2 Sourcing Flexibility", "Flexibilidad de Sourcing Europeo T1 y T2")}
        copy={t(
          "Direct sourcing from Europe providing both European clean T2 products and non-European T1 merchandise for flexible, consistent wholesale supply tailored to your market.",
          "Abastecimiento directo desde Europa que proporciona productos T2 limpios europeos y mercancía T1 no europea para un suministro flexible y constante."
        )}
      />

      {/* Core T1 & T2 Breakdown */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 2 Column Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Clean T2 Card */}
            <div className="rounded-3xl border border-[#d4af37]/35 bg-white p-8 sm:p-12 shadow-md space-y-6 hover:border-[#b8860b] transition">
              <div className="h-12 w-12 rounded-2xl bg-[#faf4e6] text-[#b8860b] border border-[#d4af37]/30 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                  {t("European Clean Origin", "Origen Limpio Europeo")}
                </span>
                <h3 className="text-2xl font-extrabold text-[#1f190f]">
                  {t("European Clean T2 Merchandise", "Mercancía T2 Limpia Europea")}
                </h3>
                <p className="text-xs text-[#4a3c28] leading-relaxed sm:text-sm font-medium">
                  {t(
                    "Direct European sourcing providing clean T2 merchandise with pristine origin, full market compliance, and complete traceability for prestige retail stores and boutique partners.",
                    "Abastecimiento directo europeo que proporciona mercancía T2 limpia con origen impecable y trazabilidad completa para minoristas y boutiques."
                  )}
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs font-bold text-[#2c2214]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span>Direct European origin with full documentation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span>Ideal for official domestic retail and department stores</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span>Consistent inventory availability across key luxury categories</span>
                </li>
              </ul>
            </div>

            {/* Flexible T1 Card */}
            <div className="rounded-3xl border border-[#d4af37]/35 bg-white p-8 sm:p-12 shadow-md space-y-6 hover:border-[#b8860b] transition">
              <div className="h-12 w-12 rounded-2xl bg-[#faf4e6] text-[#b8860b] border border-[#d4af37]/30 flex items-center justify-center">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                  {t("Global Trade Flexibility", "Flexibilidad de Comercio Global")}
                </span>
                <h3 className="text-2xl font-extrabold text-[#1f190f]">
                  {t("Non-European T1 Supply", "Suministro T1 No Europeo")}
                </h3>
                <p className="text-xs text-[#4a3c28] leading-relaxed sm:text-sm font-medium">
                  {t(
                    "Flexible non-European T1 merchandise structured for international trade routes, duty-free freezone operators, and cross-border commercial wholesale channels.",
                    "Mercancía T1 no europea flexible estructurada para rutas comerciales internacionales y operadores duty-free."
                  )}
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs font-bold text-[#2c2214]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span>Optimized for duty-free and travel retail channels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span>Flexible order quantities tailored to global market demand</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span>Full commercial discretion and territory compliance</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Brand Relationships Note */}
          <div className="rounded-3xl border border-[#d4af37]/35 bg-[#faf4e6] p-8 sm:p-12 space-y-4 shadow-sm">
            <h3 className="text-xl font-extrabold text-[#1f190f]">
              {t("Brand Relationships & Trademark Respect", "Relaciones con Marcas y Respeto de Marcas Registradas")}
            </h3>
            <p className="text-xs text-[#4a3c28] leading-relaxed sm:text-sm max-w-4xl font-medium">
              {t(
                "We work with products and brands from major international luxury conglomerates such as LVMH, PUIG, L'Oréal Luxe, and COTY, as well as selected niche perfume houses. References to brands and groups on the website reflect sourcing capabilities and respect trademark guidelines.",
                "Trabajamos con productos y marcas de grandes grupos internacionales como LVMH, PUIG, L'Oréal Luxe y COTY, así como casas de nicho seleccionadas."
              )}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-md transition hover:scale-105"
              >
                <span>{t("Request Sourcing Consultation", "Solicitar Consulta de Sourcing")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}
