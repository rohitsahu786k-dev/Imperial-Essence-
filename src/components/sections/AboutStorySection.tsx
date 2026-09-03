"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Award, MapPin, Target, Eye, ShieldCheck, HeartHandshake } from "lucide-react";

export function AboutStorySection() {
  const { t } = useLanguage();
  const founders = siteData.company.founders;
  const mission = siteData.company.mission;
  const vision = siteData.company.vision;
  const coreValues = siteData.company.coreValues;

  return (
    <section className="bg-[#fffdf7] py-24 text-[#1f190f] border-t border-[#d4af37]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-bold text-[#8a640f]">
            <Award className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>{t("LEADERSHIP & 40+ YEARS FAMILY LEGACY", "LIDERAZGO Y 40+ AÑOS DE LEGADO FAMILIAR")}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#1f190f] sm:text-5xl">
            {t("Meet Our Founders", "Conozca a Nuestros Fundadores")}
          </h2>

          <p className="text-sm text-[#4a3c28] sm:text-base leading-relaxed">
            {t(
              "Imperial Essence Trading LLC was born from the shared vision of two partners whose paths in duty free, wholesale, and luxury retail were destined to meet.",
              "Imperial Essence Trading LLC nació de la visión compartida de dos socios cuyos caminos en duty free, venta al por mayor y comercio de lujo estaban destinados a encontrarse."
            )}
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
          {founders.map((founder, idx) => (
            <article
              key={idx}
              className="group rounded-3xl border border-[#d4af37]/35 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:border-[#b8860b] hover:shadow-xl"
            >
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-[#d4af37] bg-[#faf4e6] shadow-md">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="112px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 space-y-2">
                  <span className="inline-block rounded-full bg-[#faf4e6] border border-[#d4af37]/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#8a640f]">
                    {founder.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1f190f]">
                    {founder.name}
                  </h3>
                  <p className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#5a4a30] sm:justify-start">
                    <MapPin className="h-3.5 w-3.5 text-[#b8860b]" />
                    {founder.origin}
                  </p>
                  <p className="text-xs text-[#4a3c28] leading-relaxed pt-1 font-medium">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Shared Culture Card */}
        <div className="rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#fffdf8] via-[#faf4e6] to-[#fffdf8] p-8 sm:p-12 mb-16 shadow-lg relative overflow-hidden">
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-xs font-extrabold text-[#8a640f] uppercase tracking-wider flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-[#b8860b]" />
              <span>{t("Shared Philosophy & Family Spirit", "Filosofía Compartida y Espíritu Familiar")}</span>
            </span>
            <p className="text-base sm:text-xl font-bold leading-relaxed text-[#1f190f]">
              "{t(
                "Beyond being business partners, Sakina and Siddharth work together like family, sharing the same drive, values, and ambition to keep growing. That spirit of partnership and continuous growth defines Imperial Essence Trading today.",
                "Más allá de ser socios comerciales, Sakina y Siddharth trabajan juntos como una familia, compartiendo el mismo impulso, valores y ambición de seguir creciendo."
              )}"
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
          <div className="rounded-3xl border border-[#d4af37]/35 bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#faf4e6] text-[#b8860b] border border-[#d4af37]/30">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-[#1f190f]">
              {t("Our Mission", "Nuestra Misión")}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#4a3c28] font-medium">
              {mission.en}
            </p>
          </div>

          <div className="rounded-3xl border border-[#d4af37]/35 bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#faf4e6] text-[#b8860b] border border-[#d4af37]/30">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-[#1f190f]">
              {t("Our Vision", "Nuestra Visión")}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#4a3c28] font-medium">
              {vision.en}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-3xl font-extrabold text-[#1f190f]">
              {t("Our Core Values", "Nuestros Valores Fundamentales")}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#d4af37]/35 bg-white p-6 text-center shadow-sm space-y-3"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#faf4e6] text-sm font-extrabold text-[#8a640f] border border-[#d4af37]/30">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-extrabold text-[#1f190f]">
                  {val.title.en}
                </h4>
                <p className="text-xs leading-relaxed text-[#5a4a30] font-medium">
                  {val.desc.en}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
