"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Truck, Ship, Plane, Globe, ArrowRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

// Dynamic import for 21st.dev animated WorldMap component
const WorldMap = dynamic(
  () => import("@/components/ui/WorldMap").then((mod) => mod.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] rounded-3xl bg-[#faf4e6]/50 border border-[#d4af37]/30 flex items-center justify-center text-[#8a640f] text-xs font-bold animate-pulse">
        Loading interactive global map...
      </div>
    )
  }
);

export function GlobalNetwork({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  const transportModes = [
    {
      title: { en: "Road Freight", es: "Transporte por Carretera" },
      desc: { en: "Pan-European express & Middle East road corridors.", es: "Redes terrestres expresas paneuropeas y de Oriente Medio." },
      image: "/logistics-road.jpg",
      icon: Truck,
      tag: "MODE 01"
    },
    {
      title: { en: "Sea Freight", es: "Transporte Marítimo" },
      desc: { en: "FCL & LCL containerized global sea shipping lines.", es: "Líneas de transporte marítimo global en contenedores FCL y LCL." },
      image: "/logistics-sea.jpg",
      icon: Ship,
      tag: "MODE 02"
    },
    {
      title: { en: "Air Freight", es: "Transporte Aéreo" },
      desc: { en: "Priority express air cargo for high-value luxury goods.", es: "Carga aérea exprés prioritaria para mercancías de lujo de gran valor." },
      image: "/logistics-air.jpg",
      icon: Plane,
      tag: "MODE 03"
    },
    {
      title: { en: "Global Hub Network", es: "Red de Centros Globales" },
      desc: { en: "Dubai Bay Square HQ and European supply hubs.", es: "Sede en Dubái Bay Square y centros de suministro en Europa." },
      image: "/logistics-hub.jpg",
      icon: Globe,
      tag: "MODE 04"
    }
  ];

  // Dubai Trade Connection Routes with Real Global Coordinates
  const dubaiTradeRoutes = [
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" },
      end: { lat: 50.1109, lng: 8.6821, label: "Europe (Frankfurt)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" },
      end: { lat: 40.7128, lng: -74.0060, label: "United States (NYC)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" },
      end: { lat: -1.2921, lng: 36.8219, label: "Africa (Nairobi)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" },
      end: { lat: 1.3521, lng: 103.8198, label: "Asia (Singapore)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" },
      end: { lat: -23.5505, lng: -46.6333, label: "South America (Sao Paulo)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" },
      end: { lat: -33.8688, lng: 151.2093, label: "Australia (Sydney)" }
    }
  ];

  return (
    <section className={`${compact ? "py-16" : "py-24"} bg-[#fffdf7] text-[#1f190f] overflow-hidden border-t border-[#d4af37]/30`} id="logistics-section">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${compact ? "space-y-12" : "space-y-16"}`}>
        
        {/* Logistics Capabilities Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-extrabold text-[#8a640f] backdrop-blur-md">
            <Globe className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>{t("GLOBAL FREIGHT & SUPPLY CHAIN", "FLETE GLOBAL Y CADENA DE SUMINISTRO")}</span>
          </div>

          <h2 className="text-3xl font-normal sm:text-5xl tracking-tight text-[#1f190f]">
            {t("Logistics & Transport Management", "Gestión de Logística y Transporte")}
          </h2>

          <p className="text-sm font-medium text-[#4a3c28] sm:text-base leading-relaxed">
            {t(
              "Operating out of our Dubai headquarters in Bay Square and European trade hubs, we coordinate seamless cross-border road, sea, and air freight.",
              "Operando desde nuestra sede en Dubái Bay Square y centros logísticos en Europa, coordinamos fletes transfronterizos sin problemas."
            )}
          </p>
        </div>

        {/* 4 Realistic Transport Cards Grid with Image Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportModes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-[#1f190f] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#b8860b] flex flex-col justify-between h-[360px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={mode.image}
                    alt={mode.title.en}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-95"
                  />
                  {/* Dark Vignette Overlay for High Contrast Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                </div>

                {/* Top Badge */}
                <div className="relative z-20 p-5 flex justify-between items-center">
                  <div className="h-10 w-10 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#b8860b] shadow-sm border border-white/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold text-[#e5b85c] uppercase tracking-wider border border-white/10">
                    {mode.tag}
                  </span>
                </div>

                {/* Content Area */}
                <div className="relative z-20 p-6 space-y-2 text-white text-left">
                  <h3 className="text-xl font-normal text-white group-hover:text-[#e5b85c] transition-colors leading-tight">
                    {t(mode.title.en, mode.title.es)}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed font-medium">
                    {t(mode.desc.en, mode.desc.es)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 21st.dev Animated Interactive World Map Container */}
        <div className="rounded-3xl border border-[#d4af37]/35 bg-white p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#faf4e6] border border-[#d4af37]/40 px-3.5 py-1 text-[11px] font-extrabold text-[#8a640f] uppercase tracking-wider">
                <Globe className="h-3.5 w-3.5 text-[#b8860b]" />
                <span>{t("Global Distribution Network", "Red de Distribución Global")}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-normal text-[#1f190f] tracking-tight">
                {t("Target Markets & Trade Corridors", "Mercados Objetivo y Rutas de Distribución")}
              </h3>

              <p className="text-sm sm:text-base text-[#4a3c28] leading-relaxed font-medium">
                {t(
                  "Emanating from our Dubai headquarters in Bay Square and European supply network, connecting Middle East, Europe, United States, Africa, Asia, South America, and Australia.",
                  "Desde nuestra sede en Dubái Bay Square y red de suministro europea, conectando Oriente Medio, Europa, EE. UU., África, Asia, Sudamérica y Australia."
                )}
              </p>

              {/* Regional Corridor Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {siteData.logistics.targetMarkets.map((reg) => (
                  <span
                    key={reg}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#faf4e6] border border-[#d4af37]/30 px-3.5 py-1.5 text-xs font-extrabold text-[#2c2214]"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#b8860b]" />
                    <span>{reg}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right space-y-3">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#b8860b]">40+</span>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#8a640f]">
                  {t("Years Family Logistics Legacy", "Años de Legado Logístico Familiar")}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-md transition hover:scale-105"
              >
                <span>{t("Check Shipping Routes", "Consultar Rutas de Envío")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 21st.dev Light World Map Canvas */}
          <div className="pt-2">
            <WorldMap dots={dubaiTradeRoutes} lineColor="#D4AF37" theme="light" />
          </div>
        </div>

      </div>
    </section>
  );
}
