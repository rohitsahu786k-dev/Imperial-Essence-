"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MapPin, ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full bg-slate-50 pt-20">
      {/* Main Hero Banner with Responsive Mobile & Desktop Banners */}
      <section className="relative w-full h-[92vh] sm:h-[90vh] min-h-[620px] sm:min-h-[640px] overflow-hidden">
        {/* Desktop Background Image (Hidden on Mobile) */}
        <div className="absolute inset-0 z-0 hidden sm:block">
          <Image
            src="/images/valencia-hero-waterfront.png"
            alt="Luxury Products by Futuristic Waterfront Architecture Valencia Desktop"
            fill
            priority
            className="object-cover object-right lg:object-center filter saturate-105"
          />
        </div>

        {/* Mobile Background Image (Visible ONLY on Mobile Screens) */}
        <div className="absolute inset-0 z-0 block sm:hidden">
          <Image
            src="/images/luxury-commerce-premium-products-valencia-mobile-banner.webp"
            alt="Luxury Products Valencia Mobile Banner"
            fill
            priority
            className="object-cover object-top filter saturate-105"
          />
        </div>

        {/* Hero Content Layer - Responsive Positioning */}
        <div className="relative z-20 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-start pt-6 sm:pt-12 lg:pt-14">
          {/* Mobile Glass Card Container in Top Open Sky Space */}
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl space-y-4 sm:space-y-5 bg-white/85 sm:bg-white/40 md:bg-transparent backdrop-blur-md sm:backdrop-blur-[2px] md:backdrop-blur-none p-5 sm:p-4 md:p-0 rounded-2xl border border-white/60 sm:border-none shadow-md sm:shadow-none">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/95 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-[#00A884] shadow-xs">
              <MapPin className="h-3.5 sm:h-4 w-3.5 sm:w-4 shrink-0" />
              <span>{t(siteData.company.location.badge.en, siteData.company.location.badge.es)}</span>
            </div>

            {/* Main Headline - High Contrast Bold Typography */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#071321] leading-[1.18]">
              {t(siteData.company.tagline.en, siteData.company.tagline.es)}
            </h1>

            {/* Sub-headline */}
            <p className="text-xs sm:text-base font-semibold text-slate-800 leading-relaxed max-w-md bg-white/60 sm:bg-white/40 backdrop-blur-xs p-2.5 sm:p-3 rounded-xl border border-white/40">
              {t(siteData.company.subTagline.en, siteData.company.subTagline.es)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 rounded-full bg-[#00A884] px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/25 transition hover:bg-[#009272] hover:scale-105 active:scale-95"
              >
                <span>{t("Explore Categories", "Explorar Categorías")}</span>
                <ArrowRight className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-xs transition hover:bg-white hover:border-[#00A884] hover:text-[#00A884]"
              >
                <span>{t("Request Sourcing", "Solicitar Suministro")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Hero Section: Dedicated Trust & Brand Highlights Bar Below Hero */}
      <section className="bg-white border-y border-slate-200 py-8 shadow-sm relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stats Items */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#00A884]">15+</span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  {t("Years Experience", "Años Experiencia")}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#00A884]">50+</span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  {t("Global Markets", "Mercados Globales")}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#071321]">CIF</span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  {siteData.company.cif}
                </span>
              </div>
            </div>

            {/* Brand Group Highlights */}
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {t("Representing products from premier international groups:", "Representando productos de grupos internacionales principales:")}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {siteData.company.highlights.brandGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-2xs"
                  >
                    {group}
                  </span>
                ))}
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-[#00A884]">
                  + Selected Niche Perfume Houses
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
