"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MapPin, ArrowRight, ShieldCheck, Sparkles, Building2, Globe2, Award } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full bg-[#071321] text-white pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Background Dubai Skyline Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <Image
          src="/images/valencia-hero-waterfront.png"
          alt="Dubai Skyline Waterfront Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/80 to-[#071321]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
      </div>

      {/* Main Hero Container */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Location & Legacy Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#071321]/80 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] shadow-xl">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              <span>{t(siteData.company.location.badge.en, siteData.company.location.badge.es)}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">
                <span className="block text-white">
                  {t("YOUR GLOBAL PARTNER IN", "TU SOCIO GLOBAL EN")}
                </span>
                <span className="text-gold-gradient block">
                  {t("LUXURY & PREMIUM PRODUCTS", "PRODUCTOS DE LUJO Y DE PRIMERA CALIDAD")}
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D4AF37]/90">
                {t(siteData.company.tagline.ar || "", "")}
              </p>
            </div>

            {/* Sub-headline Description */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl font-light">
              {t(siteData.company.subTagline.en, siteData.company.subTagline.es)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-slate-950 shadow-2xl transition hover:scale-105 active:scale-95"
              >
                <span>{t("Explore Product Sectors", "Explorar Sectores de Productos")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/our-sourcing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#071321]/80 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>{t("Direct Sourcing (T1 & T2)", "Abastecimiento Directo (T1 y T2)")}</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span className="text-slate-300 font-medium">{t("Bay Square, Dubai", "Bay Square, Dubái")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span className="text-slate-300 font-medium">{t("40+ Years Legacy", "40+ Años de Legado")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span className="text-slate-300 font-medium">{t("Duty Free Supply", "Suministro Duty Free")}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Product Showcase Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: Perfumes & Fragrances */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-slate-900/80 shadow-2xl h-56 transition-all duration-500 hover:border-[#D4AF37] hover:scale-[1.02]">
                <Image
                  src="/images/brand-free-images/04-black-gold-perfume-bottles-water-splash.webp"
                  alt="Luxury Perfumes & Fragrances"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">{t("Prestige", "Prestigio")}</span>
                  <span className="text-xs font-extrabold text-white">{t("Perfumes & Fragrances", "Perfumes y Fragancias")}</span>
                </div>
              </div>

              {/* Card 2: Niche Fragrances */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-slate-900/80 shadow-2xl h-56 transition-all duration-500 hover:border-[#D4AF37] hover:scale-[1.02] mt-6">
                <Image
                  src="/images/brand-free-images/02-gold-crowned-luxury-perfume-bottle.webp"
                  alt="Niche Fragrances"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">{t("Artisanal", "Artesanal")}</span>
                  <span className="text-xs font-extrabold text-white">{t("Niche Fragrances", "Fragancias de Nicho")}</span>
                </div>
              </div>

              {/* Card 3: Luxury Cosmetics & Skincare */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-slate-900/80 shadow-2xl h-56 transition-all duration-500 hover:border-[#D4AF37] hover:scale-[1.02] -mt-6">
                <Image
                  src="/images/brand-free-images/10-amber-glow-beauty-skincare-collection.webp"
                  alt="Luxury Cosmetics & Skincare"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">{t("Beauty", "Belleza")}</span>
                  <span className="text-xs font-extrabold text-white">{t("Cosmetics & Skincare", "Cosmética y Skincare")}</span>
                </div>
              </div>

              {/* Card 4: Fine Jewelry & Travel Sets */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-slate-900/80 shadow-2xl h-56 transition-all duration-500 hover:border-[#D4AF37] hover:scale-[1.02]">
                <Image
                  src="/images/brand-free-images/44-emerald-sapphire-diamond-necklace-portrait.webp"
                  alt="Jewelry & Travel Sets"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">{t("Exclusives", "Exclusivos")}</span>
                  <span className="text-xs font-extrabold text-white">{t("Jewelry & Accessories", "Joyería y Accesorios")}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sub-Hero Trust Highlights Bar */}
      <section className="relative z-20 border-t border-[#D4AF37]/30 bg-[#0c1c2e] py-6 shadow-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            
            {/* Stats Items */}
            <div className="grid grid-cols-3 gap-4 border-b border-slate-800 pb-5 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-slate-800 lg:pb-0 lg:pr-8">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">40+</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t("Years Family Legacy", "Años Legado Familiar")}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">Dubai</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t("Global Headquarters", "Sede Central Global")}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">T1 & T2</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t("European Sourcing", "Suministro Europeo")}
                </span>
              </div>
            </div>

            {/* Brand Group Highlights */}
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{t("Working with products from international brand groups:", "Trabajando con productos de grandes grupos internacionales:")}</span>
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {siteData.company.highlights.brandGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-[#D4AF37]/30 bg-[#071321] px-3.5 py-1 text-xs font-bold text-slate-200 shadow-sm"
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
