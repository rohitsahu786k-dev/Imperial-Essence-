"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MapPin, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full bg-white pt-20">
      {/* Main Hero Banner Container */}
      <section className="relative w-full bg-slate-50 py-6 sm:py-10 lg:bg-transparent lg:py-20 lg:min-h-[720px] lg:flex lg:items-center overflow-hidden">
        
        {/* Desktop Full-Bleed Background Image (hidden on mobile, visible on lg) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <Image
            src="/dubai-skyline-hero.jpg"
            alt="Luxury perfume and fragrance product for Imperial Essence Trading LLC"
            fill
            priority
            className="object-cover object-center filter saturate-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-white/50 to-white/70" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Mobile Image Banner (Visible on mobile, hidden on lg) */}
          <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-amber-200/80 mb-6 lg:hidden">
            <Image
              src="/dubai-skyline-hero.jpg"
              alt="Luxury perfume and fragrance product for Imperial Essence Trading LLC"
              fill
              priority
              className="object-cover object-center filter saturate-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-[#B8860B]">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Dubai, UAE – Global HQ</span>
              </span>
            </div>
          </div>

          {/* 50% Width White Shadow Text Card */}
          <div className="w-full lg:w-1/2 rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-xl lg:shadow-2xl border border-amber-200/80 space-y-6">
            {/* Location & Heritage Tag (Desktop View) */}
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-gold-shimmer px-4 py-1.5 text-xs font-extrabold text-[#B8860B] shadow-xs">
              <MapPin className="h-4 w-4 shrink-0 text-[#D4AF37]" />
              <span>{t(siteData.company.location.badge.en, siteData.company.location.badge.es)}</span>
            </div>

            {/* Main Headline - High Contrast Bold Typography */}
            <h1 className="text-2xl font-extrabold tracking-tight text-[#071321] leading-[1.15] sm:text-4xl lg:text-5xl">
              {t(siteData.company.tagline.en, siteData.company.tagline.es)}
            </h1>

            {/* Sub-headline */}
            <p className="text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
              {t(siteData.company.subTagline.en, siteData.company.subTagline.es)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-xl transition hover:scale-105 active:scale-95"
              >
                <span>{t("Explore Categories", "Explorar Categorías")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/our-sourcing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition hover:bg-amber-50 hover:border-[#D4AF37] hover:text-[#B8860B]"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>{t("Our Sourcing (T1 & T2)", "Nuestro Abastecimiento")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Hero Trust Highlights Bar */}
      <section className="relative z-30 border-y border-amber-200/80 bg-gold-shimmer py-6 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Stats Items */}
            <div className="grid grid-cols-3 gap-4 border-b border-amber-200/80 pb-5 lg:col-span-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8860B]">40+</span>
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  {t("Years Legacy", "Años de Legado")}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8860B]">Global</span>
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  {t("Distribution", "Distribución")}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#071321]">T1 & T2</span>
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  {t("European Sourcing", "Suministro Europeo")}
                </span>
              </div>
            </div>

            {/* Brand Group Highlights */}
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#B8860B]" />
                <span>{t("Work with products from premier international groups:", "Trabajamos con productos de grandes grupos internacionales:")}</span>
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {siteData.company.highlights.brandGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-amber-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-2xs"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
