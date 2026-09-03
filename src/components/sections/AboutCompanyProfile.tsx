"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Building2, FileText, Globe2, Handshake, ShieldCheck, Truck } from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: { en: "Global Market Expansion", es: "Expansión Comercial Global" },
    desc: {
      en: "Serving wholesale, luxury retail, and duty-free travel retail clients across Middle East, Europe, Africa, North America, South America, and Australia.",
      es: "Atendiendo a clientes mayoristas, retail de lujo y duty free en Oriente Medio, Europa, África y Norteamérica."
    }
  },
  {
    icon: Truck,
    title: { en: "Logistics Management", es: "Gestión Logística Global" },
    desc: {
      en: "Multi-modal road, sea, and air freight network coordinating international logistics efficiently across global destinations.",
      es: "Red de fletes por carretera, mar y aire que coordina la logística internacional con total eficiencia."
    }
  },
  {
    icon: Handshake,
    title: { en: "Luxury Group Sourcing", es: "Abastecimiento de Grupos de Lujo" },
    desc: {
      en: "Established access to merchandise from major groups including LVMH, PUIG, L'Oréal Luxe, COTY, and selected niche perfume houses.",
      es: "Acceso consolidado a productos de grandes grupos como LVMH, PUIG, L'Oréal Luxe, COTY y firmas de nicho."
    }
  },
  {
    icon: ShieldCheck,
    title: { en: "Registered in Dubai, UAE", es: "Entidad Registrada en Dubái, EAU" },
    desc: {
      en: `Dubai commercial entity operating out of Bay Square, Business Bay (${siteData.company.license}).`,
      es: `Entidad comercial en Dubái operando desde Bay Square, Business Bay (${siteData.company.license}).`
    }
  }
];

export function AboutCompanyProfile() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#faf6ee] py-20 text-[#1f190f] border-b border-[#d4af37]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8a640f]">
              <Building2 className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>{t("Business Overview", "Información de la Empresa")}</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1f190f] sm:text-5xl">
                {t("About Imperial Essence Trading LLC", "Sobre Imperial Essence Trading LLC")}
              </h2>
              <p className="text-sm leading-relaxed text-[#4a3c28] sm:text-base font-medium">
                {t(siteData.company.subTagline.en, siteData.company.subTagline.es)}
              </p>
            </div>
            <div className="rounded-3xl border border-[#d4af37]/35 bg-white p-6 shadow-md space-y-2">
              <FileText className="h-6 w-6 text-[#b8860b]" />
              <h3 className="text-lg font-extrabold text-[#1f190f]">
                {t("Company Profile / Brochure", "Perfil de Empresa / Brochure")}
              </h3>
              <p className="text-xs leading-relaxed text-[#5a4a30] font-medium">
                {t(
                  "A downloadable company brochure PDF can be provided upon request for official B2B evaluation.",
                  "Se puede proporcionar un folleto corporativo en PDF bajo solicitud para evaluación B2B."
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-3xl border border-[#d4af37]/35 bg-white p-6 shadow-md space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#faf4e6] text-[#b8860b] border border-[#d4af37]/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1f190f]">
                    {t(item.title.en, item.title.es)}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5a4a30] font-medium">
                    {t(item.desc.en, item.desc.es)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
