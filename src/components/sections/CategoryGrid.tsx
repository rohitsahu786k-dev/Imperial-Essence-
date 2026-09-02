"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

export function CategoryGrid({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className={`${compact ? "py-16 sm:py-20" : "py-24 sm:py-28"} bg-[#071321] text-white relative overflow-hidden`}>
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between ${compact ? "mb-10" : "mb-16"} gap-6 border-b border-slate-800 pb-8`}>
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0c1c2e] border border-[#D4AF37]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>{t("Product Sectors", "Sectores de Productos")}</span>
            </span>

            <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-white leading-tight">
              {t("Luxury Wholesale Categories", "Categorías Mayoristas de Lujo")}
            </h2>

            <p className="text-base text-slate-300 font-light">
              {t(
                "High-volume B2B supply solutions across premier luxury categories for international distributors and prestige retail groups.",
                "Soluciones de suministro B2B de alto volumen en categorías de lujo para distribuidores internacionales y grupos minoristas."
              )}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-slate-950 hover:scale-105 transition shadow-2xl"
            >
              <span>{t("Inquire Wholesale Supply", "Consultar Suministro Mayorista")}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 7 Distinct Luxury Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {siteData.categories.map((cat) => (
            <Link
              key={cat.id}
              href="/contact"
              className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37] flex flex-col justify-between h-[390px]"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.name.en}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/60 via-50% to-transparent" />
              </div>

              {/* Badge Top Header */}
              <div className="relative z-10 p-5 flex justify-between items-start">
                <span className="rounded-full bg-[#071321]/80 backdrop-blur-md px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/40 shadow-md">
                  {t(cat.badge.en, cat.badge.es)}
                </span>
                <div className="h-9 w-9 rounded-full bg-[#071321]/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40 transition-all group-hover:bg-gold-gradient group-hover:text-slate-950 group-hover:border-transparent">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 p-6 space-y-2 text-white">
                <p className="text-[11px] font-semibold text-[#D4AF37]/80 uppercase tracking-wider">
                  {cat.name.ar || ""}
                </p>
                <h3 className="text-xl font-extrabold text-white group-hover:text-[#D4AF37] transition leading-tight">
                  {t(cat.name.en, cat.name.es)}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                  {t(cat.description.en, cat.description.es)}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-wider group-hover:underline pt-2">
                  <span>{t("Request Supply Details", "Solicitar Detalles")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Guarantee Note */}
        <div className="mt-12 text-center text-xs text-slate-400 border-t border-slate-800 pt-6 font-medium flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
          <span>
            {t(
              "Official B2B wholesale product sectors. Serving commercial clients worldwide from Dubai, UAE.",
              "Sectores mayoristas B2B oficiales. Atendiendo a clientes comerciales en todo el mundo desde Dubái, EAU."
            )}
          </span>
        </div>

      </div>
    </section>
  );
}
