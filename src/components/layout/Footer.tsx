"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, ArrowUp, Building2 } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-[#071321] pt-20 pb-24 lg:pb-10 border-t border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info & Imperial Essence Logo */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src="/imperial-essence-logo.png"
                alt="Imperial Essence Trading LLC Logo"
                width={260}
                height={110}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {t(siteData.company.subTagline.en, siteData.company.subTagline.es)}
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Registered Commercial Entity in Dubai, UAE</p>
              <p className="font-bold text-[#071321]">{siteData.company.license}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-[#B8860B] uppercase tracking-wider mb-6">
              {t("Quick Links", "Enlaces Rápidos")}
            </h3>
            <ul className="space-y-3 text-xs font-semibold text-slate-700">
              <li>
                <Link href="/" className="hover:text-[#B8860B] transition">{t("Home", "Inicio")}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B8860B] transition">{t("About Us", "Sobre Nosotros")}</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#B8860B] transition">{t("Product Categories", "Categorías de Productos")}</Link>
              </li>
              <li>
                <Link href="/our-sourcing" className="hover:text-[#B8860B] transition">{t("Our Sourcing (T1 & T2)", "Nuestro Abastecimiento (T1 y T2)")}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#B8860B] transition">{t("Services & Logistics", "Servicios y Logística")}</Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-[#B8860B] transition">{t("Why Choose Us", "Por qué Elegirnos")}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B8860B] transition">{t("Contact Us", "Contacto")}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Sectors */}
          <div>
            <h3 className="text-sm font-bold text-[#B8860B] uppercase tracking-wider mb-6">
              {t("Luxury Categories", "Categorías de Lujo")}
            </h3>
            <ul className="space-y-3 text-xs font-semibold text-slate-700">
              {siteData.categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link href="/categories" className="hover:text-[#B8860B] transition">
                    {t(cat.name.en, cat.name.es)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dubai Headquarters */}
          <div>
            <h3 className="text-sm font-bold text-[#B8860B] uppercase tracking-wider mb-6">
              {t("Dubai Headquarters", "Sede en Dubái")}
            </h3>
            <ul className="space-y-4 text-xs font-medium text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>{siteData.company.location.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#B8860B] shrink-0" />
                <a href={`tel:${siteData.company.contact.mobile}`} className="hover:text-[#B8860B] font-semibold">
                  {siteData.company.contact.mobile}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-[#B8860B] shrink-0" />
                <a href={`tel:${siteData.company.contact.phone}`} className="hover:text-[#B8860B] font-semibold">
                  {siteData.company.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#B8860B] shrink-0" />
                <a href={`mailto:${siteData.company.contact.email}`} className="hover:text-[#B8860B] font-semibold">
                  {siteData.company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>{t(siteData.company.contact.hours.en, siteData.company.contact.hours.es)}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Imperial Essence Trading LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#B8860B] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#B8860B] transition">Terms & Conditions</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 hover:bg-slate-50 text-slate-700 font-semibold transition lg:mr-28"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#B8860B]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
