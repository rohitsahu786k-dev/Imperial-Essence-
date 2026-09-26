import Image from "next/image";
import { Layers } from "lucide-react";

export function InternalPageHero({
  eyebrow,
  title,
  copy,
  backgroundImage = "/dubai-skyline-hero.jpg",
  backgroundAlt = "Imperial Essence Trading LLC Dubai HQ Skyline",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#14110a] px-4 pb-16 pt-32 text-center text-white sm:px-6 sm:pb-20 sm:pt-40 lg:px-8 border-b border-[#d4af37]/30">

      {/* Background Image Overlay */}
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center filter brightness-[0.9] blur-[1px]"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      {/* Top Shadow for Header Legibility */}
      <div className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

      {/* Radial Gold Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a640f] backdrop-blur-xl shadow-md">
          <Layers className="h-3.5 w-3.5 text-[#b8860b]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-gold-gradient-bright">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xs font-medium leading-relaxed text-white/85 sm:text-base">
          {copy}
        </p>
      </div>
    </section>
  );
}
