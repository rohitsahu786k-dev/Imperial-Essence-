"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowRight, Sparkles, Globe, Truck, Building2, TrendingUp } from "lucide-react";

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  const serviceImages = [
    "/images/brand-free-images/28-luxury-duty-free-shopping-corridor.webp",
    "/images/brand-free-images/29-futuristic-duty-free-retail-interior.webp",
    "/images/brand-free-images/37-opulent-modern-jewelry-retail-hall.webp",
    "/images/brand-free-images/26-luxury-handbag-boutique-display.webp"
  ];

  const icons = [Globe, Truck, Building2, TrendingUp];

  return (
    <section className={`${compact ? "py-16 sm:py-20" : "py-24 sm:py-28"} bg-[#FAF8F5] text-[#071321] relative overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto ${compact ? "mb-12" : "mb-20"} space-y-4`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-300/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8860B] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{t("Core Capabilities", "Capacidades Principales")}</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-[#071321] leading-tight">
            {t("Strategic Wholesale Services", "Servicios Estratégicos Mayoristas")}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t(
              "End-to-end B2B distribution solutions bridging luxury brand houses, travel retail operators, and commercial partners worldwide.",
              "Soluciones integrales de distribución B2B que conectan firmas de lujo, operadores duty-free y distribuidores en todo el mundo."
            )}
          </p>
        </div>

        {/* 4 Spacious Luxury Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteData.services.map((svc, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={svc.id}
                className="group relative overflow-hidden rounded-3xl border border-amber-200/90 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37] flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-slate-900">
                  <Image
                    src={serviceImages[index % serviceImages.length]}
                    alt={svc.title.en}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 via-[#071321]/20 to-transparent" />
                  
                  {/* Top Pill & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="rounded-full bg-[#071321]/80 backdrop-blur-md px-4 py-1.5 text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider border border-[#D4AF37]/30 shadow-md">
                      {t(`Service 0${index + 1}`, `Servicio 0${index + 1}`)}
                    </span>
                    <div className="h-10 w-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#B8860B] shadow-md border border-amber-200">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title overlay on image bottom */}
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#D4AF37] transition leading-snug">
                      {t(svc.title.en, svc.title.es)}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {t(svc.fullDesc.en, svc.fullDesc.es)}
                  </p>

                  {/* Action Link */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Dubai HQ • Global Trade
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition hover:scale-105 shadow-md"
                    >
                      <span>{t("Inquire Service", "Consultar Servicio")}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
