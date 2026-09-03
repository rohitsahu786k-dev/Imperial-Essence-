"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid2X2, Home, Mail, Package, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Categories", icon: Grid2X2 },
  { href: "/our-sourcing", label: "Sourcing", icon: Globe2 },
  { href: "/services", label: "Services", icon: Package },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function MobileDock() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4 lg:hidden" aria-label="Mobile bottom navigation">
      <div className="mobile-dock-float flex items-center gap-1 rounded-2xl border border-[#d4af37]/50 bg-white/95 p-2 backdrop-blur-xl shadow-xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex size-11 items-center justify-center rounded-xl transition duration-300 hover:-translate-y-1",
                active && "bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] text-[#1f190f] font-extrabold shadow-md",
                !active && "text-[#1f190f] hover:bg-[#faf4e6] hover:text-[#b8860b]",
              )}
              aria-label={item.label}
            >
              <Icon className="size-5" />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#1f190f] px-2 py-1 text-xs font-bold text-[#e5b85c] opacity-0 transition group-hover:opacity-100 shadow-md">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
