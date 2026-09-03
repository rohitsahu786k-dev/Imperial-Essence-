"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowUpRight, Layers, ShieldCheck } from "lucide-react";

export function CategoryGrid() {
  const { t } = useLanguage();
  const categories = siteData.categories;

  return (
    <section className="relative bg-[#fffdf7] py-24 text-[#1f190f] overflow-hidden border-t border-[#d4af37]/30" id="categories-section">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-extrabold text-[#8a640f] backdrop-blur-md">
            <Layers className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>{t("PRODUCT SECTORS", "SECTORES DE PRODUCTOS")}</span>
          </div>

          <h2 className="text-3xl font-normal tracking-tight text-[#1f190f] sm:text-5xl">
            {t("Curated Product Portfolios", "Portafolios de Productos Seleccionados")}
          </h2>

          <p className="text-sm font-medium text-[#4a3c28] sm:text-base leading-relaxed">
            {t(
              "Supplying wholesale perfumery, niche fragrances, premium cosmetics, skincare, fashion, travel sets, luxury accessories, and fine jewelry to commercial partners worldwide.",
              "Suministrando perfumería al por mayor, perfumes de nicho, cosmética premium, cuidado de la piel, moda, juegos de viaje, accesorios y alta joyería."
            )}
          </p>

          <div className="pt-1 text-xs font-bold text-[#8a640f] flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#b8860b]" />
            <span>{t("Direct European Sourcing & Global Logistics", "Abastecimiento Europeo Directo y Logística Global")}</span>
          </div>
        </div>

        {/* 8 Uniform Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-[#1f190f] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#b8860b] h-[350px] flex flex-col justify-between"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.name.en}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                {/* Bottom Dark Gradient Overlay for Text Clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              </div>

              {/* Top Row: Left Pill Badge & Right Arrow Circle */}
              <div className="relative z-20 p-5 flex items-center justify-between">
                <span className="rounded-full bg-white/95 text-[#1f190f] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm border border-white/20">
                  {cat.badge.en}
                </span>

                <Link
                  href={`/categories#${cat.id}`}
                  className="h-9 w-9 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1f190f] shadow-sm group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300"
                  aria-label={`Explore ${cat.name.en}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Bottom Row: Title & Action Link */}
              <div className="relative z-20 p-6 space-y-1 text-left">
                <h3 className="text-xl font-normal text-white tracking-tight group-hover:text-[#e5b85c] transition-colors duration-300 leading-tight">
                  {t(cat.name.en, cat.name.es)}
                </h3>

                <Link
                  href={`/categories#${cat.id}`}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-400 group-hover:text-[#e5b85c] uppercase tracking-wider transition-colors pt-1"
                >
                  <span>{t("REQUEST SUPPLY", "SOLICITAR SUMINISTRO")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Luxury CTA Banner with Image Background & Overlay */}
        <div className="mt-16 rounded-[32px] border border-[#d4af37]/50 bg-black p-8 text-center sm:p-14 relative overflow-hidden shadow-2xl group">
          
          {/* Background Generated Luxury Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/luxury_cta_banner_bg.jpg"
              alt="Imperial Essence Luxury Wholesale Sourcing"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
            />
            {/* Dark & Gold Overlay for Ultra-High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-transparent to-black/80 z-10" />
          </div>

          {/* Banner Content Container */}
          <div className="relative z-20 max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-black/60 px-4 py-1.5 text-xs font-extrabold text-[#e5b85c] backdrop-blur-md shadow-md">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-ping" />
              <span>{t("B2B WHOLESALE SOURCING", "SOURCING MAYORISTA B2B")}</span>
            </div>

            <h3 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight drop-shadow-md">
              {t("Require Specific Sourcing or Volume Quotes?", "¿Requiere Cotizaciones de Volumen Específicas?")}
            </h3>

            <p className="text-sm font-medium text-white/90 leading-relaxed sm:text-base max-w-xl mx-auto drop-shadow-sm">
              {t(
                "Our team coordinates directly with European T1 and T2 supply hubs to structure competitive wholesale portfolios for your target market.",
                "Nuestro equipo coordina directamente con centros de suministro T1 y T2 europeos para estructurar portafolios competitivos."
              )}
            </p>

            <div className="pt-3">
              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-9 py-4 text-xs font-extrabold uppercase tracking-wider text-[#1f190f] shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.65)]"
              >
                <span>{t("Submit Commercial Inquiry", "Enviar Consulta Comercial")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
