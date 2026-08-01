"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid2X2, Home, Mail, Package, UsersRound } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const dockItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Categories", icon: Grid2X2 },
  { href: "/services", label: "Services", icon: Package },
  { href: "/partners", label: "Partners", icon: UsersRound },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function MobileDock() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4 lg:hidden" aria-label="Mobile bottom navigation">
      <div className="mobile-dock-float flex items-center gap-1 rounded-2xl border border-[#123A5A]/10 bg-white/88 p-2 backdrop-blur-xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex size-11 items-center justify-center rounded-xl transition duration-300 hover:-translate-y-1 hover:bg-white",
                active && "bg-[#123A5A] text-white",
                !active && "text-[#123A5A]",
              )}
              aria-label={item.label}
            >
              <Icon className="size-5" />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#0B2239] px-2 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
