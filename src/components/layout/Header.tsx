"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ChevronDown, Check, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteData } from "@/data/siteData";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en" as const, label: "English", shortLabel: "EN" },
    { code: "es" as const, label: "Español", shortLabel: "ES" },
  ];

  const currentLanguage = languages.find((item) => item.code === language) || languages[0];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: t("Home", "Inicio") },
    { href: "/about", label: t("About Us", "Sobre Nosotros") },
    { href: "/categories", label: t("Product Categories", "Categorías de Productos") },
    { href: "/our-sourcing", label: t("Our Sourcing", "Nuestro Abastecimiento") },
    { href: "/services", label: t("Services", "Servicios") },
    { href: "/why-choose-us", label: t("Why Choose Us", "Por qué Elegirnos") },
    { href: "/contact", label: t("Contact Us", "Contacto") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#071321] via-[#0f243a] to-[#071321] text-white py-1.5 border-b border-[#D4AF37]/20 text-[11px] font-medium tracking-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#D4AF37]">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-semibold text-slate-200">Dubai, UAE — Bay Square HQ</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">
              {t(
                "40+ Years Family Legacy in Luxury Perfumery, Beauty & Duty Free",
                "40+ Años de Legado Familiar en Perfumería de Lujo y Travel Retail"
              )}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`tel:${siteData.company.contact.mobile}`} className="flex items-center gap-1.5 hover:text-[#D4AF37] transition">
              <Phone className="h-3 w-3 text-[#D4AF37]" />
              <span>{siteData.company.contact.mobile}</span>
            </a>
            <a href={`mailto:${siteData.company.contact.email}`} className="flex items-center gap-1.5 hover:text-[#D4AF37] transition">
              <Mail className="h-3 w-3 text-[#D4AF37]" />
              <span>{siteData.company.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "transition-all duration-300 backdrop-blur-xl border-b",
          scrolled
            ? "bg-white/95 border-amber-200/80 shadow-lg py-2"
            : "bg-white/90 border-slate-200/80 py-3"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1" aria-label="Imperial Essence Trading LLC">
            <Image
              src="/imperial-essence-logo.png"
              alt="Imperial Essence Trading LLC Logo"
              width={260}
              height={100}
              priority
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center rounded-full border border-amber-300/40 bg-amber-50/50 p-1.5 lg:flex shadow-inner" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs font-bold text-slate-800 transition-all hover:bg-white hover:text-[#B8860B] hover:shadow-xs"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA & Language Dropdown */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-amber-300/60 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:border-[#D4AF37] hover:bg-amber-50/50 shadow-xs"
                title="Select Language"
              >
                <Globe className="h-4 w-4 text-[#B8860B]" />
                <span>{currentLanguage.shortLabel}</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-amber-200/90 bg-white p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Language
                  </div>
                  <div className="py-1 space-y-1">
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLanguage(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition text-left",
                          language === item.code
                            ? "bg-amber-50 text-[#071321] font-bold border border-amber-200/80"
                            : "text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        <div>
                          <span className="block font-bold text-slate-800">{item.label}</span>
                          <span className="block text-[10px] text-slate-400">{item.shortLabel}</span>
                        </div>
                        {language === item.code && (
                          <Check className="h-4 w-4 text-[#B8860B]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Inquiry CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md transition hover:scale-105 active:scale-95"
            >
              <span>{t("Inquire Now", "Consulta Ahora")}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center gap-1 rounded-full border border-amber-300/80 bg-amber-50 px-3 py-1.5 text-xs font-bold text-[#B8860B]"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === "en" ? "EN" : "ES"}</span>
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5 text-[#071321]" /> : <Menu className="size-5 text-[#071321]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      {open && (
        <div className="border-t border-amber-200 bg-white px-4 pt-3 pb-6 lg:hidden shadow-2xl space-y-4 animate-in slide-in-from-top-2">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-amber-50 hover:text-[#B8860B]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-gold-gradient py-3 text-center text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md"
            >
              {t("Inquire Now", "Consulta Ahora")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
