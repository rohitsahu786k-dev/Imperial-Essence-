"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Target, Eye, Quote, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export function AboutStorySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 text-[#071321]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00A884]/10 border border-[#00A884]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00A884]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("Executive Leadership", "Liderazgo Ejecutivo")}</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-[#071321]">
            {t("Meet Our Founders & Directors", "Conozca a Nuestros Fundadores y Directores")}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {t(
              "Deep expertise in international luxury trade, duty-free distribution, and high-end cosmetics.",
              "Amplia experiencia en comercio internacional de lujo, distribución duty-free y cosmética de alta gama."
            )}
          </p>
        </div>

        {/* 2 Modern Dribbble Executive Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Executive 1: Siddharth Thakker */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#00A884] transition group flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Card Header Profile Row */}
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#00A884] shadow-md bg-slate-100">
                  <Image
                    src="/images/team/siddharth-thakker.jpg"
                    alt="Siddharth Thakker Co-Founder & Director Worldwide Supply 28 SL"
                    fill
                    sizes="80px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-block rounded-full bg-[#00A884]/10 px-3 py-0.5 text-[10px] font-extrabold text-[#00A884] uppercase tracking-wider">
                    Co-Founder & Director
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#071321] group-hover:text-[#00A884] transition">
                    Siddharth Thakker
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#00A884]" />
                    Valencia, Spain (HQ)
                  </p>
                </div>
              </div>

              {/* Bio & Expertise */}
              <div className="space-y-3 pt-2">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  {t(
                    siteData.about.story.siddharth.bio.en,
                    siteData.about.story.siddharth.bio.es
                  )}
                </p>
                {/* Expertise Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                    {t("Duty-Free Retail", "Retail Duty-Free")}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                    {t("Wholesale Distribution", "Distribución Mayorista")}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                    {t("Supply Chain Sourcing", "Suministro y Logística")}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Footer */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <Quote className="h-4 w-4 text-[#00A884]" />
                <span>Valencia Hub Leadership</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#00A884]"
              >
                <span>{t("Contact Co-Founder", "Contactar Co-Fundador")}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Executive 2: Sakina Idmouhine */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#00A884] transition group flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Card Header Profile Row */}
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#00A884] shadow-md bg-slate-100">
                  <Image
                    src="/images/team/sakina-idmouhine.jpg"
                    alt="Sakina Idmouhine Co-Founder & Director Worldwide Supply 28 SL"
                    fill
                    sizes="80px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-block rounded-full bg-[#00A884]/10 px-3 py-0.5 text-[10px] font-extrabold text-[#00A884] uppercase tracking-wider">
                    Co-Founder & Director
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#071321] group-hover:text-[#00A884] transition">
                    Sakina Idmouhine
                  </h3>
                  <p className="text-xs font-semibold text-[#00A884] flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#00A884]" />
                    Valencia, Spain (HQ)
                  </p>
                </div>
              </div>

              {/* Bio & Expertise */}
              <div className="space-y-3 pt-2">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  {t(
                    siteData.about.story.sakina.bio.en,
                    siteData.about.story.sakina.bio.es
                  )}
                </p>
              </div>

              {/* Domain Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
                  15+ Years Cosmetics Master
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
                  International Retail Partner
                </span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-[#00A884]" />
                <span>Valencia, Spain</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#00A884]"
              >
                <span>{t("Contact Co-Founder", "Contactar Co-Fundadora")}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Shared Culture & Vision Card on Light Background */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 mb-20 shadow-sm relative overflow-hidden">
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-[#00A884] uppercase tracking-wider block">
              {t("Shared Philosophy & Culture", "Filosofía y Cultura Compartida")}
            </span>
            <p className="text-base sm:text-xl font-semibold leading-relaxed text-[#071321]">
              &quot;{t(siteData.about.story.together.en, siteData.about.story.together.es)}&quot;
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#00A884] pt-2">
              {t(siteData.about.story.familySpirit.en, siteData.about.story.familySpirit.es)}
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-4 hover:border-[#00A884] transition">
            <div className="h-12 w-12 rounded-xl bg-[#00A884]/10 text-[#00A884] flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#071321]">
              {t(siteData.about.missionVision.mission.title.en, siteData.about.missionVision.mission.title.es)}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t(siteData.about.missionVision.mission.desc.en, siteData.about.missionVision.mission.desc.es)}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-4 hover:border-[#00A884] transition">
            <div className="h-12 w-12 rounded-xl bg-[#071321] text-white flex items-center justify-center">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#071321]">
              {t(siteData.about.missionVision.vision.title.en, siteData.about.missionVision.vision.title.es)}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t(siteData.about.missionVision.vision.desc.en, siteData.about.missionVision.vision.desc.es)}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold text-[#071321]">
              {t("Our Core Values", "Nuestros Valores Fundamentales")}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {siteData.about.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center space-y-3 shadow-xs hover:border-[#00A884] hover:shadow-md transition"
              >
                <div className="h-10 w-10 mx-auto rounded-full bg-[#00A884]/10 text-[#00A884] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-[#071321]">
                  {t(val.title.en, val.title.es)}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(val.desc.en, val.desc.es)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
