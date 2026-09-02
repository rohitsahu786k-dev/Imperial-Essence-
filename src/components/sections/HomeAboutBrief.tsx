"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowRight, BadgeCheck, Building2, Globe2, MapPin, Sparkles, UserCheck, Shield } from "lucide-react";

export function HomeAboutBrief() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FAF8F5] py-20 text-[#071321] relative overflow-hidden border-b border-amber-200/50">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8860B] shadow-xs">
            <Building2 className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{t("Dubai Headquarters — Bay Square, Business Bay", "Sede Central en Dubái — Bay Square")}</span>
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#071321] sm:text-5xl leading-tight">
            {t(
              "A Dubai-Based Gateway Backed by 40+ Years of Family Legacy",
              "Una Puerta de Entrada en Dubái Respaldada por 40+ Años de Legado"
            )}
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            {t(
              "Imperial Essence Trading LLC connects international luxury brand houses, duty-free operators, and global distributors across the Middle East, Europe, Africa, USA, South America, and Australia.",
              "Imperial Essence Trading LLC conecta a firmas internacionales de lujo, operadores duty-free y distribuidores globales en Oriente Medio, Europa, África y EE. UU."
            )}
          </p>
        </div>

        {/* 2-Column Content: Left = Story & Founders, Right = Interactive Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Founders & Legacy Highlight Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-amber-200/80 p-8 sm:p-10 shadow-xl space-y-6 relative">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span>{t("Our Founders & Leadership", "Nuestros Fundadores y Liderazgo")}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071321] leading-snug">
              {t("Built on Reliability, Transparency & Family Spirit", "Construido sobre Fiabilidad, Transparencia y Espíritu Familiar")}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              {t(
                "Co-founded by Siddharth Thakker (born and raised in Dubai, immersed in family wholesale) and Sakina Idmouhine (originally from Spain, with 15+ years in luxury cosmetics), Imperial Essence bridges European sourcing with global luxury demand.",
                "Cofundada por Siddharth Thakker (nacido y criado en Dubái) y Sakina Idmouhine (originaria de España, 15+ años en cosmética de lujo), Imperial Essence conecta el abastecimiento europeo con la demanda global."
              )}
            </p>

            {/* Founder Avatars / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 p-4 space-y-1">
                <span className="text-xs font-extrabold text-[#071321] block">Siddharth Thakker</span>
                <span className="text-[11px] font-semibold text-[#B8860B] block">{t("Co-Founder & Managing Director", "Cofundador y Director General")}</span>
                <span className="text-[11px] text-slate-500 block">{t("Dubai native, family wholesale roots", "Nativo de Dubái, raíces mayoristas")}</span>
              </div>

              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 p-4 space-y-1">
                <span className="text-xs font-extrabold text-[#071321] block">Sakina Idmouhine</span>
                <span className="text-[11px] font-semibold text-[#B8860B] block">{t("Co-Founder & Managing Director", "Cofundadora y Directora General")}</span>
                <span className="text-[11px] text-slate-500 block">{t("Spain, 15+ yrs luxury perfumery", "España, 15+ años en perfumería")}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md transition hover:scale-105"
              >
                <span>{t("Read Full Company Legacy", "Leer Legado Completo")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Luxury Key Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 shadow-md flex items-start gap-4 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="p-3 rounded-2xl bg-amber-50 text-[#B8860B] shrink-0 border border-amber-200/60">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-[#071321]">40+ {t("Years", "Años")}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                  {t("Family Heritage", "Herencia Familiar")}
                </p>
                <p className="text-xs text-slate-600">
                  {t("Deep roots in travel retail, luxury perfumery, and international trade.", "Profundas raíces en travel retail y perfumería de lujo.")}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 shadow-md flex items-start gap-4 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="p-3 rounded-2xl bg-amber-50 text-[#B8860B] shrink-0 border border-amber-200/60">
                <Globe2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-[#071321]">{t("Global Markets", "Mercados Globales")}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                  {t("Worldwide Reach", "Alcance Mundial")}
                </p>
                <p className="text-xs text-slate-600">
                  {t("Middle East, Europe, Africa, USA, South America, and Australia.", "Oriente Medio, Europa, África, EE. UU., Sudamérica y Australia.")}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 shadow-md flex items-start gap-4 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="p-3 rounded-2xl bg-amber-50 text-[#B8860B] shrink-0 border border-amber-200/60">
                <Shield className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-[#071321]">T1 & T2 {t("Sourcing", "Suministro")}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                  {t("Direct European Network", "Red Europea Directa")}
                </p>
                <p className="text-xs text-slate-600">
                  {t("Clean European T2 merchandise and non-European T1 supply flexibility.", "Mercancía T2 limpia europea y opciones T1.")}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
