"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Award, Building2, MapPin, Users, ArrowRight, ShieldCheck, History } from "lucide-react";

export function HomeAboutBrief() {
  const { t } = useLanguage();
  const founders = siteData.company.founders;

  return (
    <section className="relative bg-[#fffdf7] py-24 text-[#1f190f] overflow-hidden border-t border-[#d4af37]/30">
      
      {/* Background Decorative Gold Light */}
      <div className="absolute top-1/2 left-0 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-white p-3 shadow-xl">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/brand-free-images/48-watch-collection-marble-desk-workspace.webp"
                  alt="Imperial Essence Family Legacy & Desk Workspace"
                  fill
                  className="object-cover object-center filter brightness-[0.95] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#d4af37]/40 bg-white/95 p-5 backdrop-blur-xl shadow-xl space-y-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-2.5 text-[#b8860b]">
                    <History className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#1f190f]">40+ Years Legacy</h4>
                    <p className="text-xs font-bold text-[#8a640f]">{t("Family Heritage in Travel Retail", "Herencia Familiar en Travel Retail")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Founders */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-bold text-[#8a640f]">
              <MapPin className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>{t("DUBAI HEADQUARTERS | BAY SQUARE", "SEDE EN DUBÁI | BAY SQUARE")}</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#1f190f] sm:text-5xl leading-tight">
              {t("Born from Family Legacy & Industry Passion", "Nacidos del Legado Familiar y Pasión Comercial")}
            </h2>

            <p className="text-sm text-[#4a3c28] leading-relaxed sm:text-base">
              {t(
                "Imperial Essence Trading LLC was born from the shared vision of two partners whose paths in duty free, wholesale, and luxury retail were destined to meet. Built on over 40 years of family legacy in travel retail and luxury perfumery.",
                "Imperial Essence Trading LLC nació de la visión compartida de dos socios cuyos caminos en duty free, venta al por mayor y comercio de lujo estaban destinados a encontrarse."
              )}
            </p>

            {/* Founders Cards */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {founders.map((founder, idx) => (
                <div key={idx} className="rounded-2xl border border-[#d4af37]/30 bg-white/90 p-5 space-y-2 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d4af37]">
                      <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#1f190f]">{founder.name}</h4>
                      <p className="text-[11px] font-bold text-[#b8860b]">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5a4a30] leading-relaxed line-clamp-3">
                    {founder.bio}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Values Pill List */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#faf4e6] px-3.5 py-1.5 text-xs font-semibold text-[#2c2214]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
                <span>{t("Reliability & Transparency", "Fiabilidad y Transparencia")}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#faf4e6] px-3.5 py-1.5 text-xs font-semibold text-[#2c2214]">
                <Building2 className="h-3.5 w-3.5 text-[#b8860b]" />
                <span>{t("Direct European Sourcing", "Sourcing Europeo Directo")}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#faf4e6] px-3.5 py-1.5 text-xs font-semibold text-[#2c2214]">
                <Award className="h-3.5 w-3.5 text-[#b8860b]" />
                <span>{t("Duty Free Channel Growth", "Crecimiento en Duty Free")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-md transition hover:scale-105"
              >
                <span>{t("Read Full Company Story", "Leer Historia Completa")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
