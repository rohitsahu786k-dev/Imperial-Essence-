"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Eye, MapPin, Sparkles, Target, HeartHandshake } from "lucide-react";

const founders = [
  {
    name: "Siddharth Thakker",
    role: { en: "Co-Founder & Managing Director", es: "Cofundador y Director General" },
    location: "Dubai, UAE",
    bio: {
      en: "Born and raised in Dubai, immersed in the family's wholesale and distribution business with deep experience in supplier strategy, cross-border logistics, and market instinct.",
      es: "Nacido y criado en Dubái, inmerso en el negocio familiar de distribución al por mayor con amplia experiencia en estrategia de proveedores y logística transfronteriza."
    },
    image: "/images/team/siddharth-thakker.jpg",
    alt: "Siddharth Thakker Co-Founder Imperial Essence Trading LLC",
  },
  {
    name: "Sakina Idmouhine",
    role: { en: "Co-Founder & Managing Director", es: "Cofundadora y Directora General" },
    location: "Dubai, UAE / Spain",
    bio: {
      en: "Originally from Spain, built her career over 15+ years in perfumery and luxury cosmetics, mastering brand relationships and international retail distribution.",
      es: "Originaria de España, desarrolló su carrera durante más de 15 años en perfumería y cosmética de lujo, dominando las relaciones con las marcas y la distribución internacional."
    },
    image: "/images/team/sakina-idmouhine.jpg",
    alt: "Sakina Idmouhine Co-Founder Imperial Essence Trading LLC",
  },
];

export function AboutStorySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 text-[#071321] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{t("Leadership & 40+ Years Legacy", "Liderazgo y 40+ Años de Legado")}</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#071321] sm:text-5xl">
            {t("Meet Our Founders", "Conozca a Nuestros Fundadores")}
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t(
              "Drawing on over 40 years of family legacy in travel retail, luxury perfumery, and global distribution.",
              "Con el respaldo de más de 40 años de legado familiar en travel retail, perfumería de lujo y distribución global."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-xl"
            >
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-amber-50 shadow-md">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    sizes="112px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 space-y-2">
                  <span className="inline-block rounded-full bg-amber-100/70 border border-amber-200/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#B8860B]">
                    {t(founder.role.en, founder.role.es)}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#071321]">
                    {founder.name}
                  </h3>
                  <p className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 sm:justify-start">
                    <MapPin className="h-3.5 w-3.5 text-[#B8860B]" />
                    {founder.location}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {t(founder.bio.en, founder.bio.es)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Shared Culture & Vision Card */}
        <div className="rounded-3xl border border-amber-200/80 bg-gold-shimmer p-8 sm:p-12 mb-16 shadow-sm relative overflow-hidden">
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-[#B8860B] uppercase tracking-wider block flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-[#D4AF37]" />
              <span>{t("Shared Philosophy & Family Spirit", "Filosofía Compartida y Espíritu Familiar")}</span>
            </span>
            <p className="text-base sm:text-xl font-semibold leading-relaxed text-[#071321]">
              &quot;{t(siteData.about.story.together.en, siteData.about.story.together.es)}&quot;
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#B8860B] pt-2">
              {t(siteData.about.story.familySpirit.en, siteData.about.story.familySpirit.es)}
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#D4AF37]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-[#B8860B]">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-[#071321]">
              {t(siteData.about.missionVision.mission.title.en, siteData.about.missionVision.mission.title.es)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {t(siteData.about.missionVision.mission.desc.en, siteData.about.missionVision.mission.desc.es)}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#D4AF37]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071321] text-amber-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-[#071321]">
              {t(siteData.about.missionVision.vision.title.en, siteData.about.missionVision.vision.title.es)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {t(siteData.about.missionVision.vision.desc.en, siteData.about.missionVision.vision.desc.es)}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-3xl font-extrabold text-[#071321]">
              {t("Our Core Values", "Nuestros Valores Fundamentales")}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.about.coreValues.map((val, idx) => (
              <div
                key={val.title.en}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-[#D4AF37] hover:shadow-md space-y-3"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-[#B8860B]">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-[#071321]">
                  {t(val.title.en, val.title.es)}
                </h4>
                <p className="text-xs leading-6 text-slate-600">
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
