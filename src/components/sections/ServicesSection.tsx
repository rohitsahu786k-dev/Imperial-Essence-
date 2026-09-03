"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { BarChart3, Boxes, Globe2, PackageCheck } from "lucide-react";

const serviceIcons = [Globe2, PackageCheck, Boxes, BarChart3];
const partnerBrands = ["GIVENCHY", "GUERLAIN", "L'OREAL", "Dior", "ESTEE LAUDER", "CHANEL"];

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className={`${compact ? "py-16" : "py-24"} bg-[#fffdf7] text-[#1f190f] border-t border-[#d4af37]/30`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#8a640f]">
            {t("Our Services", "Nuestros servicios")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#1f190f] sm:text-5xl">
            {t("Comprehensive Wholesale Solutions", "Soluciones mayoristas integrales")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-7 text-[#4a3c28]">
            {t(
              "From product sourcing to global delivery, we provide tailored solutions to help your business grow.",
              "Desde abastecimiento hasta entrega global, ofrecemos soluciones a medida para hacer crecer su negocio."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteData.services.map((svc, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <article key={svc.id} className="rounded-2xl border border-[#d4af37]/35 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[#b8860b]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] text-[#b8860b]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-extrabold leading-snug text-[#1f190f]">
                  {t(svc.title.en, svc.title.es)}
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[#5a4a30]">
                  {t(svc.shortDesc.en, svc.shortDesc.es)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {partnerBrands.map((brand) => (
            <p key={brand} className="font-serif text-xl font-bold text-[#8a640f] sm:text-2xl">
              {brand}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
