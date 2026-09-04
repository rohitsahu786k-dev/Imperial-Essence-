"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MessageCircle, Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/about", label: t("About Us", "Nosotros") },
    { href: "/categories", label: t("Product Categories", "Categorías de Productos") },
    { href: "/our-sourcing", label: t("European Sourcing (T1 & T2)", "Sourcing Europeo (T1 y T2)") },
    { href: "/global-distribution", label: t("Logistics & Transport", "Logística y Transporte") },
    { href: "/why-choose-us", label: t("Why Choose Us", "Por Qué Elegirnos") },
    { href: "/contact", label: t("Contact Us", "Contacto") },
  ];

  const categoriesList = [
    { href: "/categories#perfumes-fragrances", label: t("Perfumes & Fragrances", "Perfumes y Fragancias") },
    { href: "/categories#niche-fragrances", label: t("Niche Fragrances", "Perfumes de Nicho") },
    { href: "/categories#cosmetics-makeup", label: t("Cosmetics & Makeup", "Cosmética y Maquillaje") },
    { href: "/categories#skincare", label: t("Skincare", "Cuidado de la Piel") },
    { href: "/categories#travel-sets", label: t("Travel Sets & Duty Free", "Juegos de Viaje y Duty Free") },
    { href: "/categories#jewelry", label: t("Jewelry & Watchmaking", "Joyería y Relojería") },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: t("Privacy Policy", "Política de Privacidad") },
    { href: "/terms", label: t("Terms & Conditions", "Términos y Condiciones") },
    { href: "/cookie-policy", label: t("Cookie Policy", "Política de Cookies") },
  ];

  return (
    <footer className="relative border-t-2 border-[#d4af37] bg-gradient-to-b from-[#fffdf9] via-[#faf4e6] to-[#f3e7cd] text-[#1f190f]">
      {/* Gold Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b]" />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-[#d4af37]/25 pb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1: Brand & Overview */}
          <div className="space-y-6">
            <Link href="/" aria-label="Imperial Essence Trading LLC" className="inline-block">
              <Image
                src="/imperial-essence-logo.png"
                alt="Imperial Essence Trading LLC Logo"
                width={210}
                height={90}
                className="h-16 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
              />
            </Link>

            <p className="text-xs leading-relaxed text-[#4a3c28] font-medium">
              {t(
                "Dubai-based wholesale and distribution company specializing in luxury perfumery, premium cosmetics, skincare, niche fragrances, fashion, travel sets, accessories, and jewelry.",
                "Empresa de distribución y venta al por mayor con sede en Dubái especializada en perfumería de lujo, cosmética premium y travel retail."
              )}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
                <span>WhatsApp 24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#8a640f]">
              {t("Company & Sourcing", "Empresa y Sourcing")}
            </h3>
            <ul className="mt-6 space-y-3 text-xs font-bold text-[#3a2e1c]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#b8860b] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b]"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories & Channels */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#8a640f]">
              {t("Product Categories", "Categorías de Productos")}
            </h3>
            <ul className="mt-6 space-y-3 text-xs font-bold text-[#3a2e1c]">
              {categoriesList.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#b8860b] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b]"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#8a640f]">
              {t("Dubai Headquarters", "Sede en Dubái")}
            </h3>
            <ul className="mt-6 space-y-4 text-xs font-bold text-[#2c2214]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#b8860b]" />
                <span className="leading-relaxed">{siteData.company.location.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#b8860b]" />
                <span>Tel: {siteData.company.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600" />
                <a href="https://wa.me/34614655587" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8860b]">
                  Mobile / WhatsApp: +34 614 65 55 87
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#b8860b]" />
                <a href="mailto:office@theimperialessence.com" className="hover:text-[#b8860b]">
                  {siteData.company.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#5a4a30]">
                <Clock className="h-4 w-4 shrink-0 text-[#b8860b]" />
                <span>Office: Mon–Fri 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs font-bold text-[#5a4a30] sm:flex-row">
          <p>© {new Date().getFullYear()} Imperial Essence Trading LLC. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            {legalLinks.map((legal) => (
              <Link key={legal.href} href={legal.href} className="hover:text-[#b8860b] transition">
                {legal.label}
              </Link>
            ))}
          </div>

          <p className="flex items-center gap-1.5 text-[#8a640f]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>Dubai Bay Square Registered Firm</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
