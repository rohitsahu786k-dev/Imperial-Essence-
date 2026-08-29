"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { Building2, FileText, Globe2, Handshake, ShieldCheck, Truck } from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: { en: "Global Market Expansion", es: "Expansión Comercial Global" },
    desc: {
      en: "Serving wholesale, luxury retail, and duty-free travel retail clients across Middle East, Europe, Africa, and North America.",
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
    <section className="bg-white py-16 text-[#071321] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
              <Building2 className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>{t("Business Overview", "Información de la Empresa")}</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#071321] sm:text-5xl">
                {t("About Imperial Essence Trading LLC", "Sobre Imperial Essence Trading LLC")}
              </h1>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                {t(siteData.about.overview.en, siteData.about.overview.es)}
              </p>
            </div>
            <div className="rounded-3xl border border-amber-200/80 bg-gold-shimmer p-6 shadow-sm">
              <FileText className="mb-4 h-6 w-6 text-[#B8860B]" />
              <h2 className="text-lg font-bold text-[#071321]">
                {t("Company Profile / Brochure", "Perfil de Empresa / Brochure")}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {t(
                  "A downloadable company brochure PDF can be provided upon request for official B2B evaluation.",
                  "Se puede proporcionar un folleto corporativo en PDF bajo solicitud para evaluación B2B."
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title.en} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#D4AF37] hover:shadow-md space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-[#B8860B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#071321]">
                    {t(item.title.en, item.title.es)}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
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
