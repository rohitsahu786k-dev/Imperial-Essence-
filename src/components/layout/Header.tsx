"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage, LANGUAGES, Language } from "@/context/LanguageContext";
import { useInquiryModal } from "@/context/InquiryModalContext";
import { ArrowRight, ChevronDown, Menu, X, Phone, Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { openInquiryModal } = useInquiryModal();

  const currentLangObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navLinks = [
    { href: "/", label: t("Home", "Inicio") },
    { href: "/about", label: t("About Us", "Nosotros") },
    { href: "/categories", label: t("Categories", "Categorías"), hasDropdown: true },
    { href: "/our-sourcing", label: t("European Sourcing", "Sourcing Europeo") },
    { href: "/global-distribution", label: t("Logistics", "Logística") },
    { href: "/why-choose-us", label: t("Why Us", "Por Qué Elegirnos") },
    { href: "/contact", label: t("Contact", "Contacto") },
  ];

  const categoryDropdown = [
    { href: "/categories#perfumes-fragrances", label: t("Perfumes & Fragrances", "Perfumes y Fragancias") },
    { href: "/categories#niche-fragrances", label: t("Niche Fragrances", "Perfumes de Nicho") },
    { href: "/categories#cosmetics-makeup", label: t("Cosmetics & Makeup", "Cosmética y Maquillaje") },
    { href: "/categories#skincare", label: t("Skincare", "Cuidado de la Piel") },
    { href: "/categories#fashion-textiles", label: t("Fashion & Textiles", "Moda y Textiles") },
    { href: "/categories#travel-sets", label: t("Travel Sets & Duty Free", "Juegos de Viaje y Duty Free") },
    { href: "/categories#accessories", label: t("Luxury Accessories", "Accesorios de Lujo") },
    { href: "/categories#jewelry", label: t("Jewelry & Watchmaking", "Joyería y Relojería") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#d4af37]/30 bg-white/95 py-2 shadow-md backdrop-blur-xl"
          : "bg-gradient-to-b from-white/90 via-white/70 to-transparent py-4"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Imperial Essence Trading LLC">
          <div className="relative overflow-hidden rounded-lg p-1 transition group-hover:scale-[1.02]">
            <Image
              src="/imperial-essence-logo.png"
              alt="Imperial Essence Trading LLC Logo"
              width={200}
              height={85}
              priority
              className="h-14 w-auto object-contain sm:h-16 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition hover:text-[#b8860b]",
                      isActive ? "text-[#b8860b] font-bold" : "text-[#2c2214]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 text-[#b8860b]", dropdownOpen && "rotate-180")} />
                  </Link>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="rounded-xl border border-[#d4af37]/35 bg-white/98 p-3 shadow-2xl backdrop-blur-2xl">
                        <div className="mb-2 border-b border-[#d4af37]/20 pb-2 text-[10px] font-bold uppercase tracking-widest text-[#8a640f]">
                          {t("Product Categories", "Categorías de Productos")}
                        </div>
                        <div className="space-y-1">
                          {categoryDropdown.map((cat) => (
                            <Link
                              key={cat.href}
                              href={cat.href}
                              className="block rounded-lg px-3 py-2 text-xs font-semibold text-[#2c2214] transition hover:bg-[#faf4e6] hover:text-[#b8860b]"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-xs font-bold uppercase tracking-wider transition hover:text-[#b8860b]",
                  isActive ? "text-[#b8860b] font-extrabold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37] after:rounded-full" : "text-[#2c2214]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden items-center gap-4 lg:flex">
          
          {/* Desktop Language Selector Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6]/90 px-3.5 py-1.5 text-xs font-extrabold text-[#2c2214] backdrop-blur transition hover:border-[#b8860b] hover:bg-[#d4af37]/20 shadow-sm"
              aria-label="Select Language"
            >
              <Globe className="h-3.5 w-3.5 text-[#b8860b]" />
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="uppercase">{currentLangObj.label}</span>
              <ChevronDown className={cn("h-3 w-3 text-[#b8860b] transition-transform duration-200", langDropdownOpen && "rotate-180")} />
            </button>

            {/* Language Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-48 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="rounded-xl border border-[#d4af37]/40 bg-white p-2 shadow-2xl backdrop-blur-2xl">
                  <div className="mb-1 border-b border-[#d4af37]/20 pb-1.5 px-3 text-[10px] font-extrabold uppercase tracking-widest text-[#8a640f]">
                    {t("Select Language", "Seleccionar Idioma")}
                  </div>
                  <div className="space-y-1">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-bold transition",
                          language === lang.code
                            ? "bg-[#faf4e6] text-[#b8860b] font-extrabold"
                            : "text-[#2c2214] hover:bg-[#faf4e6]/70 hover:text-[#b8860b]"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                        {language === lang.code && <Check className="h-3.5 w-3.5 text-[#b8860b]" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Inquiry CTA */}
          <button
            type="button"
            onClick={() => openInquiryModal()}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-[#1f190f] shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] cursor-pointer"
          >
            <span>{t("Inquire Now", "Consulta Ahora")}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle & Language Dropdown */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-2.5 py-1 text-[11px] font-bold text-[#b8860b]"
            >
              <Globe className="h-3 w-3" />
              <span>{currentLangObj.flag}</span>
              <span className="uppercase">{currentLangObj.label}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-44 z-50">
                <div className="rounded-xl border border-[#d4af37]/40 bg-white p-2 shadow-2xl">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-bold transition",
                        language === lang.code ? "bg-[#faf4e6] text-[#b8860b]" : "text-[#2c2214]"
                      )}
                    >
                      <span className="flex items-center gap-2"><span>{lang.flag}</span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d4af37]/40 bg-white/90 text-[#2c2214] backdrop-blur transition hover:border-[#b8860b]"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-[#b8860b]" /> : <Menu className="h-5 w-5 text-[#2c2214]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <div className="border-t border-[#d4af37]/30 bg-white/98 px-6 pb-8 pt-4 shadow-2xl backdrop-blur-2xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wide transition",
                  pathname === item.href
                    ? "bg-[#faf4e6] text-[#b8860b] border border-[#d4af37]/30"
                    : "text-[#2c2214] hover:bg-[#faf4e6] hover:text-[#b8860b]"
                )}
              >
                <span>{item.label}</span>
                {item.hasDropdown ? <ChevronDown className="h-4 w-4 text-[#b8860b]" /> : null}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#d4af37]/20 space-y-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openInquiryModal();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] py-3.5 text-xs font-extrabold uppercase tracking-wide text-[#1f190f] shadow-md cursor-pointer"
            >
              <span>{t("Inquire Now", "Consulta Ahora")}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="https://wa.me/34614655587"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#d4af37]/40 bg-[#faf4e6] py-3 text-xs font-bold text-[#b8860b]"
            >
              <Phone className="h-4 w-4 text-[#b8860b]" />
              <span>WhatsApp 24/7 (+34 614 65 55 87)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
