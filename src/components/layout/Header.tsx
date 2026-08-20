"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const targetCountries = [
    { code: "en", flag: "🇬🇧", country: "United Kingdom & Global", langName: "English" },
    { code: "es", flag: "🇪🇸", country: "España (Spain - HQ)", langName: "Español" },
    { code: "fr", flag: "🇫🇷", country: "France & Europe", langName: "Français" },
    { code: "ae", flag: "🇦🇪", country: "United Arab Emirates", langName: "العربية / EN" },
    { code: "us", flag: "🇺🇸", country: "United States", langName: "English (US)" },
  ];

  const currentCountry = targetCountries.find((c) => c.code === language) || targetCountries[0];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close dropdown when clicking outside
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
    { href: "/services", label: t("Services", "Servicios") },
    { href: "/why-choose-us", label: t("Why Choose Us", "Por qué Elegirnos") },
    { href: "/contact", label: t("Contact Us", "Contacto") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white border-b border-slate-200/90 shadow-sm",
        scrolled ? "py-1.5" : "py-2.5"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Clean, Prominent Tightly-Cropped Logo */}
        <Link href="/" className="flex items-center shrink-0 group py-1" aria-label="Worldwide Supply 28 SL">
          <Image
            src="/world-wide-logo.png"
            alt="Worldwide Supply 28 SL Logo"
            width={240}
            height={100}
            priority
            className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center rounded-full border border-slate-200 bg-slate-50/90 p-1.5 lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-bold text-slate-800 transition hover:bg-white hover:text-[#00A884] hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Country/Language Dropdown */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Target Country & Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:bg-slate-100 shadow-2xs"
              title="Select Target Country & Language"
            >
              <Globe className="h-4 w-4 text-[#00A884]" />
              <span>{currentCountry.flag} {currentCountry.code.toUpperCase()}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Target Markets & Languages
                </div>
                <div className="py-1 space-y-1">
                  {targetCountries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setLanguage(c.code === "es" ? "es" : "en");
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition text-left",
                        language === c.code || (language === "en" && (c.code === "en" || c.code === "us" || c.code === "fr" || c.code === "ae"))
                          ? "bg-slate-100 text-[#071321] font-bold"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{c.flag}</span>
                        <div>
                          <span className="block font-bold text-slate-800">{c.country}</span>
                          <span className="block text-[10px] text-slate-400">{c.langName}</span>
                        </div>
                      </div>
                      {(language === c.code || (language === "en" && c.code === "en")) && (
                        <Check className="h-4 w-4 text-[#00A884]" />
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
            className="inline-flex items-center gap-2 rounded-full bg-[#00A884] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#009272]"
          >
            <span>{t("Inquire Now", "Consulta Ahora")}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-800"
          >
            <span>{language === "en" ? "🇬🇧 EN" : "🇪🇸 ES"}</span>
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-100"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pt-3 pb-6 lg:hidden shadow-lg space-y-4">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Target Countries List on Mobile */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-4">
              Target Markets & Languages
            </span>
            <div className="grid grid-cols-2 gap-2 px-2">
              {targetCountries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setLanguage(c.code === "es" ? "es" : "en");
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 text-left text-xs bg-slate-50"
                >
                  <span>{c.flag}</span>
                  <span className="truncate font-semibold text-slate-800">{c.country}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-[#00A884] py-3 text-center text-xs font-bold uppercase tracking-wider text-white"
            >
              {t("Inquire Now", "Consulta Ahora")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
