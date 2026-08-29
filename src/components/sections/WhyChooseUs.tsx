"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { ArrowRight, BadgeCheck, Boxes, Globe2, Handshake, ShieldCheck, Sparkles, Truck } from "lucide-react";

const capabilityCards = [
  {
    icon: Handshake,
    label: "Premier Groups",
    title: { en: "Prestige Group Partnerships", es: "Alianzas con Grupos Prestige" },
    copy: {
      en: "Relationships across LVMH, PUIG, L'Oréal Luxe, COTY, and selected niche perfume houses.",
      es: "Relaciones con LVMH, PUIG, L'Oréal Luxe, COTY y casas de perfume nicho seleccionadas.",
    },
  },
  {
    icon: Truck,
    label: "Logistics",
    title: { en: "Cross-Border Supply Discipline", es: "Disciplina de Suministro Internacional" },
    copy: {
      en: "Practical coordination for duty-free operators, distributors, retailers, and buying offices worldwide.",
      es: "Coordinación práctica para operadores duty-free, distribuidores, minoristas y oficinas de compra.",
    },
  },
  {
    icon: Boxes,
    label: "European Sourcing",
    title: { en: "Direct T1 & T2 Sourcing Flexibility", es: "Flexibilidad de Suministro T1 y T2 Directo" },
    copy: {
      en: "Direct European clean T2 merchandise alongside flexible non-European T1 supply options.",
      es: "Mercancía T2 limpia europea directa y opciones flexibles de mercancía T1 no europea.",
    },
  },
];

export function WhyChooseUs({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className={`${compact ? "py-14" : "py-20"} bg-slate-50 text-[#071321]`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl border border-amber-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{t("Why Imperial Essence Trading LLC", "Por qué Imperial Essence Trading LLC")}</span>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#071321] sm:text-5xl">
                {t("Reliable wholesale support for global luxury retailers and distributors", "Soporte mayorista fiable para minoristas y distribuidores de lujo")}
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {t(
                  "We combine 40+ years of family legacy, brand relationships, and direct European sourcing from Dubai, UAE to support retailers, duty-free operators, and strategic distribution partners.",
                  "Combinamos 40+ años de legado familiar, relaciones de marca y suministro europeo directo desde Dubái para apoyar a minoristas y distribuidores."
                )}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="border-t border-slate-200 pt-4">
                <p className="text-3xl font-extrabold text-[#B8860B]">{siteData.company.highlights.yearsExperience}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t("Family Legacy", "Legado Familiar")}
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-3xl font-extrabold text-[#071321]">{siteData.company.highlights.countriesServed}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t("Markets Supported", "Mercados Atendidos")}
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-xl font-extrabold text-[#071321]">Dubai HQ</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t("Bay Square, UAE", "Bay Square, EAU")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-[#071321] shadow-sm lg:col-span-5">
            <Image
              src="/images/why-us-luxury.jpg"
              alt="Imperial Essence Trading LLC wholesale and logistics operations"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover opacity-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/54 to-transparent" aria-hidden="true" />
            <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between p-6 text-white sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#071321]">
                  <ShieldCheck className="h-4 w-4 text-[#B8860B]" />
                  Dubai Commercial Entity
                </span>
                <Globe2 className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  {t("Dubai-based B2B Gateway", "Socio B2B con Sede en Dubái")}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {t("Built for long-term distribution partnerships", "Construido para alianzas de distribución a largo plazo")}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {capabilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.label} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-md">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#B8860B]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{card.label}</span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-tight text-[#071321]">
                  {t(card.title.en, card.title.es)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {t(card.copy.en, card.copy.es)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-amber-300/60 bg-[#071321] p-8 text-white sm:flex-row sm:items-center shadow-xl">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-slate-950">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">
                {t("Ready to discuss a wholesale or distribution requirement?", "¡Listo para hablar de sus requisitos de distribución?")}
              </h3>
              <p className="mt-1 text-sm leading-6 text-white/80">
                {t("Share your category, market, and volume requirements with our Dubai team.", "Comparta sus requisitos de categoría, mercado y volumen con nuestro equipo en Dubái.")}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition hover:opacity-95 shadow-md"
          >
            <span>{t("Start Inquiry", "Iniciar Consulta")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
