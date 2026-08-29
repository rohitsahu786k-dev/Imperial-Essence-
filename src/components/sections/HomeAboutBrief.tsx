"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowRight, BadgeCheck, Globe2, MapPin, Sparkles } from "lucide-react";

export function HomeAboutBrief() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 text-[#071321]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{t("Dubai Headquarters, UAE", "Sede Central en Dubái, EAU")}</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#071321] sm:text-5xl">
              {t("A trusted international wholesale & distribution gateway", "Una plataforma mayorista y de distribución internacional de confianza")}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {t(
                "Imperial Essence Trading LLC is a Dubai-based B2B wholesale company supporting global retailers, duty-free operators, distributors, and strategic partners with luxury perfumery, cosmetics, skincare, niche fragrances, travel sets, and direct European T1 & T2 sourcing.",
                "Imperial Essence Trading LLC es una empresa mayorista B2B con sede en Dubái que apoya a minoristas globales, operadores duty-free y distribuidores con perfumería de lujo y suministro europeo directo."
              )}
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md transition hover:opacity-95"
          >
            <span>{t("Read Our Legacy", "Leer Nuestro Legado")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-3xl border border-amber-200/80 bg-gold-shimmer p-6 shadow-sm">
            <BadgeCheck className="mb-4 h-6 w-6 text-[#B8860B]" />
            <p className="text-3xl font-extrabold text-[#B8860B]">{siteData.company.highlights.yearsExperience}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              {t("Years family legacy in travel retail & luxury perfumery", "Años de legado familiar en travel retail y perfumería de lujo")}
            </p>
          </div>
          <div className="rounded-3xl border border-amber-200/80 bg-gold-shimmer p-6 shadow-sm">
            <Globe2 className="mb-4 h-6 w-6 text-[#B8860B]" />
            <p className="text-3xl font-extrabold text-[#071321]">{siteData.company.highlights.countriesServed}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              {t("Global distribution across Middle East, Europe, USA, and Africa", "Distribución global en Oriente Medio, Europa, EE. UU. y África")}
            </p>
          </div>
          <div className="rounded-3xl border border-amber-200/80 bg-gold-shimmer p-6 shadow-sm">
            <Sparkles className="mb-4 h-6 w-6 text-[#B8860B]" />
            <p className="text-2xl font-extrabold text-[#071321]">T1 & T2</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              {t("Direct European clean T2 & non-European T1 supply", "Suministro europeo T2 limpio y T1 no europeo")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
