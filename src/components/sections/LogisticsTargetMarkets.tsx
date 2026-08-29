"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Truck, Ship, Plane, Globe, ArrowRight, Sparkles } from "lucide-react";

// Dynamic import with SSR disabled for Vercel deployment compatibility
const WorldMap = dynamic(
  () => import("@/components/ui/WorldMap").then((mod) => mod.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-semibold">
        Loading interactive map...
      </div>
    )
  }
);

export function LogisticsTargetMarkets({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  const transportModes = [
    {
      title: { en: "Road Freight", es: "Transporte por Carretera" },
      desc: { en: "Pan-European express & Middle East road networks.", es: "Redes terrestres expresas paneuropeas y de Oriente Medio." },
      image: "/images/logistics/road-freight.jpg",
      icon: Truck
    },
    {
      title: { en: "Sea Freight", es: "Transporte Marítimo" },
      desc: { en: "FCL & LCL containerized global sea shipping lines.", es: "Líneas de transporte marítimo global en contenedores FCL y LCL." },
      image: "/images/logistics/sea-freight.jpg",
      icon: Ship
    },
    {
      title: { en: "Air Freight", es: "Transporte Aéreo" },
      desc: { en: "Priority express air cargo for high-value luxury goods.", es: "Carga aérea exprés prioritaria para mercancías de lujo de gran valor." },
      image: "/images/logistics/air-freight.jpg",
      icon: Plane
    },
    {
      title: { en: "Global Hub Network", es: "Red de Centros Globales" },
      desc: { en: "Dubai Bay Square HQ and European supply hubs.", es: "Sede en Dubái Bay Square y centros de suministro en Europa." },
      image: "/images/logistics/global-network.jpg",
      icon: Globe
    }
  ];

  // Dubai Trade Connection Routes for Interactive World Map
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
    }
  ];

  return (
    <section className={`${compact ? "py-16" : "py-24"} bg-white text-[#071321]`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${compact ? "space-y-12" : "space-y-20"}`}>
        {/* Logistics Capabilities Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block rounded-full bg-amber-50 border border-amber-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            {t("Global Freight & Supply Chain", "Flete Global y Cadena de Suministro")}
          </span>
          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-[#071321]">
            {t("Logistics & Transport Management", "Gestión de Logística y Transporte")}
          </h2>
          <p className="text-base text-slate-600">
            {t(
              "Operating out of our Dubai headquarters in Bay Square and European trade hubs, we coordinate seamless cross-border freight.",
              "Operando desde nuestra sede en Dubái Bay Square y centros logísticos en Europa, coordinamos fletes transfronterizos sin problemas."
            )}
          </p>
        </div>

        {/* 4 Realistic Transport Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportModes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#D4AF37] flex flex-col justify-between h-[360px]"
              >
                {/* Image Frame */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={mode.image}
                    alt={mode.title.en}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/60 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex justify-between items-center">
                  <div className="h-10 w-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#B8860B] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#071321]/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider border border-white/10">
                    Mode 0{idx + 1}
                  </span>
                </div>

                {/* Content Area */}
                <div className="relative z-10 p-6 space-y-2 text-white">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition">
                    {t(mode.title.en, mode.title.es)}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {t(mode.desc.en, mode.desc.es)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Unified Merged Card Container */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-10">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/80 px-3.5 py-1 text-[11px] font-bold text-[#B8860B] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{t("Global Distribution Network", "Red de Distribución Global")}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#071321] tracking-tight">
                {t("Target Markets & Distribution Routes", "Mercados Objetivo y Rutas de Distribución")}
              </h3>
              <p className="text-sm sm:text-base text-[#071321] leading-relaxed">
                {t(
                  "Emanating from our Dubai headquarters in Bay Square and European supply network, connecting Middle East, Europe, United States, Africa, and Asia.",
                  "Desde nuestra sede en Dubái Bay Square y red de suministro europea, conectando Oriente Medio, Europa, EE. UU., África y Asia."
                )}
              </p>

              {/* Regional Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {siteData.logistics.targetMarkets.map((reg) => (
                  <span
                    key={reg}
                    className="rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-800"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right space-y-3">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#B8860B]">40+</span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t("Years Family Logistics Legacy", "Años de Legado Logístico Familiar")}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md transition hover:opacity-95"
              >
                <span>{t("Check Shipping Routes", "Consultar Rutas de Envío")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Merged Light World Map Canvas */}
          <div className="pt-2">
            <WorldMap dots={dubaiTradeRoutes} lineColor="#D4AF37" theme="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
