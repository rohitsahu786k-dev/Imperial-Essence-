"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const marqueeItems = [
  "Luxury Wholesale",
  "Travel Retail",
  "Global Sourcing",
  "FMCG Distribution",
  "Africa Expansion",
  "Long-Term Partnerships",
];

function MarqueeItem() {
  return (
    <div className="flex items-center space-x-10 px-5">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span>{item}</span>
          <span className="text-[#C6A128]/70">✦</span>
        </span>
      ))}
    </div>
  );
}

function MagneticLink({
  href,
  children,
  className,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(element, { x: x * 0.24, y: y * 0.24, scale: 1.04, duration: 0.35, ease: "power2.out" });
    };
    const leave = () => gsap.to(element, { x: 0, y: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.35)" });

    element.addEventListener("mousemove", move as EventListener);
    element.addEventListener("mouseleave", leave);
    return () => {
      element.removeEventListener("mousemove", move as EventListener);
      element.removeEventListener("mouseleave", leave);
    };
  }, []);

  const classes = cn(
    "footer-glass-pill inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white/78 transition hover:text-white",
    className,
  );

  if (href) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.86, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 88%", end: "bottom bottom", scrub: 1 },
        },
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 50%", end: "bottom bottom", scrub: 1 },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="cinematic-footer-wrapper relative min-h-screen w-full overflow-hidden"
    >
      <footer className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#071B2D] text-white">
        <div className="footer-aurora absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px]" />
        <div className="footer-bg-grid absolute inset-0 z-0" />

        <div
          ref={giantTextRef}
          className="footer-giant-bg-text pointer-events-none absolute -bottom-[2vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
        >
          WORLDWIDE
        </div>

        <div className="absolute left-0 top-12 z-10 w-full -rotate-2 scale-110 overflow-hidden border-y border-white/10 bg-[#071B2D]/70 py-4 backdrop-blur-md">
          <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold uppercase tracking-[0.3em] text-white/55 md:text-sm">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-20 flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 text-center">
          <Image src={site.logo} alt={`${site.name} logo`} width={160} height={90} className="mb-8 h-auto w-36 object-contain" />
          <h2 ref={headingRef} className="footer-text-glow mb-8 text-5xl font-black tracking-normal md:text-8xl">
            Ready to partner?
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-white/68">
            Build long-term wholesale opportunities across luxury, travel retail, FMCG, and international distribution markets with Worldwide Supply 28.
          </p>

          <div ref={linksRef} className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full flex-wrap justify-center gap-4">
              <MagneticLink href="/contact" className="px-10 py-5 text-sm md:text-base">
                Request Wholesale Inquiry
              </MagneticLink>
              <MagneticLink href={`mailto:${site.email}`} className="px-10 py-5 text-sm md:text-base">
                {site.email}
              </MagneticLink>
            </div>

            <div className="mt-2 flex w-full flex-wrap justify-center gap-3 md:gap-5">
              {navItems.map((item) => (
                <MagneticLink key={item.href} href={item.href}>
                  {item.label}
                </MagneticLink>
              ))}
              <MagneticLink href="/privacy-policy">Privacy Policy</MagneticLink>
              <MagneticLink href="/terms">Terms</MagneticLink>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex w-full flex-col items-center justify-between gap-5 px-6 pb-8 md:flex-row md:px-12">
          <div className="order-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 md:order-1 md:text-left md:text-xs">
            <p>Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p className="mt-2">
              Powered and developed by{" "}
              <a href="https://icraftads.com" target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white">
                iCraftAds.com
              </a>
            </p>
          </div>

          <div className="footer-glass-pill order-1 flex rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/62 md:order-2 md:text-xs">
            {site.tagline}
          </div>

          <MagneticLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="order-3 size-12 px-0 py-0 text-lg">
            ↑
          </MagneticLink>
        </div>
      </footer>
    </div>
  );
}
