"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "@/components/ui/icons";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-[#123A5A]/10 bg-white/88 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <Image src={site.logo} alt={`${site.name} logo`} width={150} height={112} priority className="h-16 w-auto object-contain sm:h-[72px]" />
        </Link>

        <nav className="hidden items-center rounded-full border border-[#123A5A]/10 bg-white/70 p-1 backdrop-blur lg:flex" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.label === "Categories" ? (
              <div className="group relative" key={item.href}>
                <Link href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-[#102033] transition hover:bg-white hover:text-[#123A5A]">
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[#123A5A]/10 bg-white/92 p-4 backdrop-blur-xl">
                    {categories.slice(0, 8).map((category) => (
                      <Link key={category.slug} href={`/categories#${category.slug}`} className="rounded-xl p-3 transition hover:bg-white">
                        <span className="block text-sm font-semibold text-[#123A5A]">{category.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-[#102033]/70">{category.summary}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-[#102033] transition hover:bg-white hover:text-[#123A5A]">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="group inline-flex rounded-full bg-[#123A5A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B2239]">
            Request Inquiry
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-[#123A5A]/15 text-[#123A5A] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-[#123A5A]/10 bg-white/95 px-4 pb-6 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 pt-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-[#102033] hover:bg-white">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-md bg-[#123A5A] px-4 py-3 text-center text-sm font-semibold text-white">
              Request Wholesale Inquiry
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
