"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Truck, Ship, Plane, Globe, ArrowRight, Sparkles, MapPin } from "lucide-react";

// Dynamic import with SSR disabled for Vercel deployment compatibility
const WorldMap = dynamic(
  () => import("@/components/ui/WorldMap").then((mod) => mod.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] rounded-3xl bg-slate-900 flex items-center justify-center text-slate-400 text-xs font-semibold border border-[#D4AF37]/30">
        Loading interactive global map...
      </div>
    )
  }
);

export function LogisticsTargetMarkets({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  const transportModes = [
    {
      title: { en: "Road Freight", es: "Transporte por Carretera", ar: "الشحن البري" },
      desc: { en: "Pan-European express & Middle East road freight networks.", es: "Redes terrestres expresas paneuropeas y de Oriente Medio." },
      image: "/logistics-road.jpg",
      icon: Truck
    },
    {
      title: { en: "Sea Freight", es: "Transporte Marítimo", ar: "الشحن البحري" },
      desc: { en: "Full container (FCL) & LCL global sea shipping lines.", es: "Líneas de transporte marítimo global en contenedores FCL y LCL." },
      image: "/logistics-sea.jpg",
      icon: Ship
    },
    {
      title: { en: "Air Freight", es: "Transporte Aéreo", ar: "الشحن الجوي" },
      desc: { en: "Priority express air cargo for high-value luxury goods.", es: "Carga aérea exprés prioritaria para mercancías de lujo de gran valor." },
      image: "/logistics-air.jpg",
      icon: Plane
    },
    {
      title: { en: "Global Network", es: "Red de Centros Globales", ar: "الشبكة العالمية" },
      desc: { en: "Dubai Bay Square HQ and European supply hubs.", es: "Sede en Dubái Bay Square y centros de suministro en Europa." },
      image: "/logistics-hub.jpg",
      icon: Globe
    }
  ];

  // Dubai Trade Connection Routes for Interactive World Map
  const dubaiTradeRoutes = [
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai HQ (Bay Square)" },
      end: { lat: 50.1109, lng: 8.6821, label: "Europe (Frankfurt)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai HQ (Bay Square)" },
      end: { lat: 40.7128, lng: -74.0060, label: "United States (NYC)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai HQ (Bay Square)" },
      end: { lat: -1.2921, lng: 36.8219, label: "Africa (Nairobi)" }
    },
    {
      start: { lat: 25.2048, lng: 55.2708, label: "Dubai HQ (Bay Square)" },
      end: { lat: 29.3759, lng: 47.9774, label: "Middle East (GCC)" }
    }
  ];

  return (
    <section className={`${compact ? "py-16 sm:py-20" : "py-24 sm:py-28"} bg-[#071321] text-white relative overflow-hidden`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${compact ? "space-y-12" : "space-y-20"}`}>
        
        {/* Logistics Capabilities Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0c1c2e] border border-[#D4AF37]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{t("Global Supply Chain & Logistics", "Cadena de Suministro y Logística Global")}</span>
          </span>

          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-white leading-tight">
            {t("Logistics & Global Supply Solutions", "Soluciones de Logística y Suministro Global")}
          </h2>

          <p className="text-base text-slate-300 font-light">
            {t(
              "Operating from Dubai Bay Square HQ with trusted freight partners across road, sea, and air freight corridors worldwide.",
              "Operando desde la sede central en Dubái Bay Square con socios transitarios de confianza por carretera, mar y aire."
            )}
          </p>
        </div>

        {/* 4 Transport Modes Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportModes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37] flex flex-col justify-between h-[360px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={mode.image}
                    alt={mode.title.en}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/60 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex justify-between items-center">
                  <div className="h-10 w-10 rounded-full bg-[#071321]/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#071321]/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider border border-[#D4AF37]/30">
                    {mode.title.ar || `Mode 0${idx + 1}`}
                  </span>
                </div>

                {/* Content Area */}
                <div className="relative z-10 p-6 space-y-2 text-white">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#D4AF37] transition">
                    {t(mode.title.en, mode.title.es)}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {t(mode.desc.en, mode.desc.es)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Merged Interactive Map & Target Markets Container */}
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-slate-900/90 p-8 sm:p-12 shadow-2xl space-y-10">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-800 pb-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#071321] border border-[#D4AF37]/40 px-3.5 py-1 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{t("Dubai Headquarters & Trade Corridors", "Sede Central en Dubái y Corredores Comerciales")}</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t("Target Markets & Distribution Network", "Mercados Objetivo y Red de Distribución")}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {t(
                  "We work closely with trusted forwarders and an extensive logistics network to serve primary target markets: Middle East, Europe, Africa, and the United States.",
                  "Trabajamos en estrecha colaboración con transitarios consolidados y una amplia red logística para atender a nuestros principales mercados objetivo: Oriente Medio, Europa, África y Estados Unidos."
                )}
              </p>

              {/* Target Markets Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {siteData.logistics.targetMarkets.map((reg) => (
                  <span
                    key={reg}
                    className="rounded-full bg-[#071321] border border-[#D4AF37]/40 px-4 py-1.5 text-xs font-bold text-[#D4AF37]"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right space-y-3">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-gold-gradient">40+</span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t("Years Family Logistics Legacy", "Años de Legado Logístico Familiar")}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-slate-950 shadow-md transition hover:scale-105"
              >
                <span>{t("Inquire Freight Routes", "Consultar Rutas")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Interactive World Map */}
          <div className="pt-2">
            <WorldMap dots={dubaiTradeRoutes} lineColor="#D4AF37" theme="dark" />
          </div>

        </div>

      </div>
    </section>
  );
}
