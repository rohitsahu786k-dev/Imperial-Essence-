"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

export function AnimatedCTA() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["luxury wholesale", "travel retail", "FMCG supply", "Africa expansion", "global sourcing"], []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTitleNumber((value) => (value === titles.length - 1 ? 0 : value + 1));
    }, 2100);
    return () => window.clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,58,90,0.08),transparent_42%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex rounded-full border border-[#123A5A]/10 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#207B68]">
          Partnership inquiry
        </div>
        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-normal text-[#0B2239] sm:text-6xl">
          Build your next
          <span className="relative mt-2 flex min-h-[1.15em] w-full justify-center overflow-hidden pb-2 text-[#207B68]">
            {titles.map((title, index) => (
              <span
                key={title}
                className="animated-title-word absolute font-semibold"
                data-active={titleNumber === index}
                data-past={titleNumber > index}
              >
                {title}
              </span>
            ))}
          </span>
          opportunity
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#102033]/70">
          Speak with Worldwide Supply 28 about categories, market availability, long-term distribution planning, and strategic wholesale partnerships.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact">Request Wholesale Inquiry</Button>
          <Button href="/services" variant="secondary">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
