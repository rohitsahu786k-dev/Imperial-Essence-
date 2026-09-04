"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MapPin, ShieldCheck, Globe2, Building2, PhoneCall } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  const desktopBannerImage = "/images/imperial-essence-trading-llc/desktop/imperial-essence-premium-wholesale-banner-desktop-02.png";
  const mobileBannerImage = "/images/imperial-essence-trading-llc/mobile/imperial-essence-dubai-luxury-products-banner-mobile-01.png";

  return (
    <section className="relative min-h-[110vh] sm:min-h-[90vh] lg:min-h-[76vh] xl:min-h-[80vh] w-full overflow-hidden bg-[#fffdf7] pt-20 lg:pt-24 text-[#1f190f] flex flex-col justify-between">
      
      {/* Background Banner Image Container */}
      <div className="absolute inset-0 z-0">
        
        {/* Desktop Single Banner Image */}
        <div className="hidden sm:block relative h-full w-full">
          <Image
            src={desktopBannerImage}
            alt="Imperial Essence Trading LLC Luxury Banner"
            fill
            priority
            className="object-cover object-right filter brightness-[0.96] contrast-[1.02]"
          />
          {/* Strong Left-to-Right White Gradient Vignette for Text Area */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-3/5 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />
        </div>

        {/* Mobile Single Banner Image */}
        <div className="block sm:hidden relative h-full w-full">
          <Image
            src={mobileBannerImage}
            alt="Imperial Essence Trading LLC Luxury Banner Mobile"
            fill
            priority
            className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          />
          {/* Top Left Merging Soft White Radial Shadow Overlay behind text */}
          <div className="absolute top-0 left-0 w-full h-[480px] bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.98)_0%,_rgba(255,255,255,0.85)_40%,_rgba(255,255,255,0.4)_65%,_transparent_85%)] pointer-events-none" />
        </div>

      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-8 pb-4 sm:pb-8 flex-1 flex flex-col justify-start sm:justify-center items-start">
        
        {/* Main Text Content - Positioned Top Left on Mobile in the Red Box Area */}
        <div className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl space-y-2 sm:space-y-4 text-left">
          
          {/* Location Pill Badge */}
          <div className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-2.5 py-0.5 text-[9px] sm:text-xs font-extrabold text-[#8a640f] shadow-sm backdrop-blur-md self-start">
            <MapPin className="h-2.5 w-2.5 text-[#b8860b]" />
            <span>{t("DUBAI, UAE – Bay Square, Business Bay", "DUBÁI, EAU – Bay Square, Business Bay")}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-lg sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#1f190f] uppercase leading-[1.2] font-sans">
            {t("CONNECTING MARKETS, DELIVERING EXCELLENCE", "CONECTANDO MERCADOS, ENTREGANDO EXCELENCIA")}
          </h1>

          {/* Description */}
          <p className="text-[11px] sm:text-sm font-medium leading-relaxed text-[#4a3c28]">
            {t(
              "Your trusted partner in luxury perfumery, cosmetics, lifestyle products and more, with reliable supply solutions worldwide.",
              "Su socio de confianza en perfumería de lujo, cosméticos, productos de estilo de vida y más, con soluciones de suministro fiables en todo el mundo."
            )}
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3.5 pt-1">
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] text-[#1f190f] hover:brightness-110 px-4 sm:px-6 py-2 sm:py-3 text-[9px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-105"
            >
              <span>{t("EXPLORE CATEGORIES", "EXPLORAR CATEGORÍAS")}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>

            <Link
              href="/our-sourcing"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/95 hover:bg-white text-[#1f190f] px-4 sm:px-6 py-2 sm:py-3 text-[9px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm transition-all duration-300 hover:border-[#b8860b] hover:text-[#b8860b] hover:scale-105"
            >
              <span>{t("REQUEST SOURCING", "SOLICITAR SOURCING")}</span>
            </Link>
          </div>

        </div>

      </div>

      {/* Bottom Highlights & Metrics Bar */}
      <div className="relative z-10 border-t border-[#d4af37]/30 bg-white/95 py-4 backdrop-blur-xl shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            
            <div className="flex items-center gap-3 border-r border-[#d4af37]/20 pr-4 last:border-0">
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-2 text-[#b8860b]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#1f190f]">40+ Years</p>
                <p className="text-[11px] font-semibold text-[#5a4a30]">{t("Family Legacy", "Legado Familiar")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-[#d4af37]/20 pr-4 last:border-0">
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-2 text-[#b8860b]">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#1f190f]">Dubai Hub</p>
                <p className="text-[11px] font-semibold text-[#5a4a30]">{t("Bay Square, Business Bay", "Bay Square, Dubái")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-[#d4af37]/20 pr-4 last:border-0">
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-2 text-[#b8860b]">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#1f190f]">European T1 & T2</p>
                <p className="text-[11px] font-semibold text-[#5a4a30]">{t("Direct Sourcing", "Sourcing Directo")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pr-4">
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] p-2 text-[#b8860b]">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#1f190f]">WhatsApp 24/7</p>
                <p className="text-[11px] font-semibold text-[#5a4a30]">+34 614 65 55 87</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
