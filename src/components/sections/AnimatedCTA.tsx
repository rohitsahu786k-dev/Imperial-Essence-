"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

export function AnimatedCTA() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["luxury perfumery", "niche fragrance", "duty-free retail", "European sourcing", "global distribution"], []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTitleNumber((value) => (value === titles.length - 1 ? 0 : value + 1));
    }, 2100);
    return () => window.clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex rounded-full border border-amber-300/80 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
          Partnership Inquiry
        </div>
        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-[#071321] sm:text-6xl">
          Build your next
          <span className="relative mt-2 flex min-h-[1.15em] w-full justify-center overflow-hidden pb-2 text-[#B8860B]">
            {titles.map((title, index) => (
              <span
                key={title}
                className="animated-title-word absolute font-extrabold text-gold-gradient"
                data-active={titleNumber === index}
                data-past={titleNumber > index}
              >
                {title}
              </span>
            ))}
          </span>
          opportunity
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Speak with Imperial Essence Trading LLC about luxury categories, European T1 & T2 sourcing, long-term distribution planning, and strategic B2B partnerships.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" className="bg-gold-gradient text-slate-950 font-extrabold shadow-md">
            Request Wholesale Inquiry
          </Button>
          <Button href="/services" variant="secondary" className="border-amber-300/80 text-[#B8860B]">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
