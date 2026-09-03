import Image from "next/image";
import { Layers } from "lucide-react";

export function InternalPageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#fffdf7] px-4 pb-16 pt-32 text-center text-[#1f190f] sm:px-6 sm:pb-20 sm:pt-40 lg:px-8 border-b border-[#d4af37]/30">
      
      {/* Background Image Overlay */}
      <Image
        src="/dubai-skyline-hero.jpg"
        alt="Imperial Essence Trading LLC Dubai HQ Skyline"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center filter brightness-[0.9] blur-[1px]"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
      
      {/* Radial Gold Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a640f] backdrop-blur-xl shadow-md">
          <Layers className="h-3.5 w-3.5 text-[#b8860b]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="text-3xl font-normal leading-tight tracking-tight text-[#1f190f] sm:text-5xl lg:text-6xl text-gold-gradient-bright">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xs font-medium leading-relaxed text-[#4a3c28] sm:text-base">
          {copy}
        </p>
      </div>
    </section>
  );
}
