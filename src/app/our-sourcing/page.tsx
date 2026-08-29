"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Building2, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function OurSourcingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#071321]">
      <Header />

      <main className="pt-28 pb-20">
        {/* Page Banner */}
        <section className="bg-gold-shimmer border-b border-amber-200/80 py-16 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t("Direct European Sourcing", "Abastecimiento Europeo Directo")}</span>
              </span>
              <h1 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-[#071321]">
                {t(siteData.sourcingModel.title.en, siteData.sourcingModel.title.es)}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                {t(siteData.sourcingModel.desc.en, siteData.sourcingModel.desc.es)}
              </p>
            </div>
          </div>
        </section>

        {/* Core T1 & T2 Breakdown */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            {/* 2 Column Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Clean T2 Card */}
              <div className="rounded-3xl border border-amber-200/80 bg-white p-8 sm:p-12 shadow-md space-y-6 hover:border-[#D4AF37] transition">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-[#B8860B] flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">European Clean Origin</span>
                  <h3 className="text-2xl font-extrabold text-[#071321]">Clean T2 Merchandise</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Direct European sourcing providing clean T2 merchandise with pristine origin, full market compliance, and complete traceability for prestige retail stores and boutique partners.
                  </p>
                </div>
                <ul className="space-y-3 pt-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B8860B]" />
                    <span>Direct European origin with full documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B8860B]" />
                    <span>Ideal for official domestic retail and department stores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B8860B]" />
                    <span>Consistent inventory availability across key luxury categories</span>
                  </li>
                </ul>
              </div>

              {/* Flexible T1 Card */}
              <div className="rounded-3xl border border-amber-200/80 bg-white p-8 sm:p-12 shadow-md space-y-6 hover:border-[#D4AF37] transition">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-[#B8860B] flex items-center justify-center">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">Global Trade Flexibility</span>
                  <h3 className="text-2xl font-extrabold text-[#071321]">Non-European T1 Supply</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Flexible non-European T1 merchandise structured for international trade routes, duty-free freezone operators, and cross-border commercial wholesale channels.
                  </p>
                </div>
                <ul className="space-y-3 pt-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B8860B]" />
                    <span>Optimized for duty-free and travel retail channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B8860B]" />
                    <span>Flexible order quantities tailored to global market demand</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B8860B]" />
                    <span>Full commercial discretion and territory compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Brand Representation Note */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 space-y-4">
              <h3 className="text-xl font-extrabold text-[#071321]">Brand Relationships & Trademark Respect</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                We work with products and brands from major international luxury conglomerates such as LVMH, PUIG, L’Oréal Luxe, and COTY, as well as selected niche perfume houses. References to brand groups reflect product sourcing capabilities and do not imply official representation unless specifically authorized.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md transition hover:opacity-95"
                >
                  <span>Request Sourcing Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
