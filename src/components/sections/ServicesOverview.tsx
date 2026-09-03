"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Globe, Truck, Building2, Award, TrendingUp, Users, ArrowUpRight, Sparkles } from "lucide-react";

export function ServicesOverview() {
  const { t } = useLanguage();
  const services = siteData.services;

  const iconMap: Record<string, any> = {
    Globe,
    Truck,
    Building2,
    Award,
    TrendingUp,
    Users
  };

  const serviceImageMap: Record<string, string> = {
    "global-wholesale-distribution": "/images/services/global-distribution.jpg",
    "logistics-management": "/images/services/logistics-management.jpg",
    "direct-european-sourcing": "/images/services/sourcing-development.jpg",
    "official-brand-representation": "/images/services/brand-entry.jpg",
    "duty-free-travel-retail": "/images/brand-free-images/28-luxury-duty-free-shopping-corridor.webp",
    "brand-partnerships": "/images/brand-free-images/48-watch-collection-marble-desk-workspace.webp"
  };

  return (
    <section className="relative bg-[#fffdf7] py-24 text-[#1f190f] overflow-hidden border-t border-[#d4af37]/30" id="services-section">
      
      {/* Background Decorative Ambient */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-extrabold text-[#8a640f] backdrop-blur-md">
            <Building2 className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>{t("COMMERCIAL CAPABILITIES & SERVICES", "CAPACIDADES COMERCIALES Y SERVICIOS")}</span>
          </div>

          <h2 className="text-3xl font-normal tracking-tight text-[#1f190f] sm:text-5xl leading-tight">
            {t("Global Wholesale & Sourcing Services", "Servicios de Distribución y Sourcing Global")}
          </h2>

          <p className="text-sm font-medium text-[#4a3c28] sm:text-base leading-relaxed">
            {t(
              "Providing end-to-end luxury wholesale solutions, European T1/T2 sourcing flexibility, duty free supply, and multi-modal logistics across road, sea, and air.",
              "Soluciones integrales de venta al por mayor de lujo, flexibilidad de sourcing europeo T1/T2, suministro duty free y logística multimodal."
            )}
          </p>
        </div>

        {/* 6 Luxury Image-Backed Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => {
            const Icon = iconMap[svc.iconName] || Globe;
            const bgImage = serviceImageMap[svc.id] || "/service-01.jpg";

            return (
              <div
                key={svc.id}
                className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-[#1f190f] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#b8860b] h-[380px] flex flex-col justify-between"
              >
                {/* Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={bgImage}
                    alt={svc.title.en}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center filter brightness-[0.8] group-hover:scale-105 group-hover:brightness-95 transition-transform duration-700"
                  />
                  {/* Dark Vignette Overlay for Text Clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-20 p-6 flex justify-between items-center">
                  <div className="h-10 w-10 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#b8860b] shadow-sm border border-white/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[9px] font-extrabold text-[#e5b85c] uppercase tracking-wider border border-white/10">
                    SERVICE 0{idx + 1}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-20 p-6 sm:p-8 space-y-2 text-white text-left">
                  <h3 className="text-xl font-normal text-white group-hover:text-[#e5b85c] transition-colors leading-tight">
                    {t(svc.title.en, svc.title.es)}
                  </h3>

                  <p className="text-xs text-white/80 leading-relaxed font-medium line-clamp-3">
                    {t(svc.fullDesc.en, svc.fullDesc.es)}
                  </p>

                  <div className="pt-3 border-t border-white/15 mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#e5b85c] uppercase tracking-wider">
                      {t("COMMERCIAL SERVICE", "SERVICIO COMERCIAL")}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-400 group-hover:text-[#e5b85c] uppercase tracking-wider transition-colors"
                    >
                      <span>{t("INQUIRE", "CONSULTAR")}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
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
