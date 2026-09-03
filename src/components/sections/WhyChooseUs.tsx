"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ShieldCheck, Sparkles, Building2, ArrowRight, Award, Globe, TrendingUp, MapPin } from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const partnershipFeatures = [
    {
      title: { en: "40+ Years Family Legacy", es: "40+ Años de Legado Familiar" },
      desc: {
        en: "Built on over 40 years of family heritage and proven track record in travel retail, wholesale, and luxury perfumery & cosmetics.",
        es: "Basado en más de 40 años de herencia familiar y trayectoria demostrada en travel retail, mayorista y cosmética de lujo."
      },
      tag: "FAMILY HERITAGE",
      icon: Award
    },
    {
      title: { en: "Direct European Sourcing", es: "Sourcing Europeo Directo" },
      desc: {
        en: "Direct sourcing from European hubs, offering clean T2 and non-European T1 merchandise with total supply flexibility.",
        es: "Abastecimiento directo desde centros europeos, ofreciendo mercancía T2 limpia y T1 con total flexibilidad."
      },
      tag: "T1 & T2 FLEXIBILITY",
      icon: Building2
    },
    {
      title: { en: "Major Group Relations", es: "Relaciones con Grandes Grupos" },
      desc: {
        en: "Established commercial relationships working with major international groups (LVMH, PUIG, L'Oréal Luxe, COTY) and niche houses.",
        es: "Relaciones comerciales consolidadas con grandes grupos internacionales (LVMH, PUIG, L'Oréal Luxe, COTY) y firmas de nicho."
      },
      tag: "COMMERCIAL RELATIONS",
      icon: ShieldCheck
    },
    {
      title: { en: "Duty Free & Travel Channels", es: "Canales Duty Free y Travel Retail" },
      desc: {
        en: "Active presence and strategic expansion across international airport duty-free stores and regional wholesale distribution networks.",
        es: "Presencia activa y expansión estratégica en tiendas duty-free de aeropuertos internacionales y redes de distribución."
      },
      tag: "GLOBAL CHANNELS",
      icon: Globe
    },
    {
      title: { en: "Global Market Expansion", es: "Expansión Global de Mercado" },
      desc: {
        en: "Committed to opening new geographic markets and forming transparent, mutually beneficial long-term commercial partnerships.",
        es: "Comprometidos con la apertura de nuevos mercados geográficos y la creación de alianzas transparentes a largo plazo."
      },
      tag: "GLOBAL GROWTH",
      icon: TrendingUp
    },
    {
      title: { en: "Dubai Headquarters Infrastructure", es: "Infraestructura de Sede en Dubái" },
      desc: {
        en: "Operating from Bay Square, Business Bay Dubai with complete air, sea, and road freight logistics transport management.",
        es: "Operando desde Bay Square, Business Bay Dubái con gestión completa de transporte logístico aéreo, marítimo y terrestre."
      },
      tag: "BAY SQUARE HQ",
      icon: MapPin
    }
  ];

  return (
    <section className="relative bg-[#fffdf7] py-24 text-[#1f190f] overflow-hidden border-t border-[#d4af37]/30" id="why-choose-us-section">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-extrabold text-[#8a640f] backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>{t("WHY PARTNER WITH IMPERIAL ESSENCE", "POR QUÉ ASOCIARSE CON IMPERIAL ESSENCE")}</span>
          </div>

          <h2 className="text-3xl font-normal tracking-tight text-[#1f190f] sm:text-5xl leading-tight">
            {t("A Trusted Gateway for Clients & Brand Partners", "Una Plataforma Confiable para Clientes y Marcas")}
          </h2>

          <p className="text-sm font-medium text-[#4a3c28] sm:text-base leading-relaxed">
            {t(
              "Connecting Europe, the Middle East, Africa, the Americas, and global duty-free travel retail channels through over 40 years of domain heritage.",
              "Conectando Europa, Oriente Medio, África, las Américas y los canales de travel retail duty-free global con más de 40 años de experiencia."
            )}
          </p>
        </div>

        {/* 6 Feature Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-[#d4af37]/35 bg-gradient-to-br from-white via-[#fffdf9] to-[#faf4e6]/60 p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b8860b] hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl border border-[#d4af37]/40 bg-[#faf4e6] flex items-center justify-center text-[#b8860b] shadow-sm group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#d4af37]/30 bg-white/90 px-3 py-1 text-[9px] font-extrabold text-[#8a640f] uppercase tracking-wider backdrop-blur-md">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-xl font-normal text-[#1f190f] group-hover:text-[#b8860b] transition-colors pt-2">
                    {t(feat.title.en, feat.title.es)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a3c28] leading-relaxed font-medium">
                    {t(feat.desc.en, feat.desc.es)}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#d4af37]/20 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#8a640f] uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
                    <span>{t("AUTHENTIC & VERIFIED", "AUTÉNTICO Y VERIFICADO")}</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#b8860b]/40 group-hover:bg-[#b8860b] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Partnership Callout Banner */}
        <div className="rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#fffdf8] via-[#faf4e6] to-[#fffdf8] p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl font-normal text-[#1f190f]">
              {t("Explore Strategic Brand & Supplier Opportunities", "Explore Oportunidades Estratégicas para Marcas")}
            </h3>
            <p className="text-xs sm:text-sm text-[#4a3c28] leading-relaxed font-medium">
              {t(
                "Learn more about our European clean T2 sourcing models, non-European T1 supply lines, and official distribution capabilities.",
                "Conozca más sobre nuestros modelos de sourcing T2 limpios europeos y líneas T1 no europeas."
              )}
            </p>
          </div>

          <Link
            href="/why-choose-us"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg shrink-0"
          >
            <span>{t("Explore Partnership Capabilities", "Explorar Capacidades de Alianza")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
