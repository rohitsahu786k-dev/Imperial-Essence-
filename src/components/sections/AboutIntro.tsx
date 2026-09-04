import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const aboutImages = [
  {
    src: "/images/brand-free-images/28-luxury-duty-free-shopping-corridor.webp",
    alt: "Luxury duty-free retail corridor with premium product displays",
  },
  {
    src: "/images/brand-free-images/17-pink-gold-quilted-makeup-compact.webp",
    alt: "Elegant pink and gold quilted makeup compact in a luxury beauty display",
  },
  {
    src: "/images/brand-free-images/26-luxury-handbag-boutique-display.webp",
    alt: "Premium handbags displayed inside an elegant luxury boutique",
  },
];

export function AboutIntro() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <FadeIn className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-wider text-[#B8860B]">Company Profile</p>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#071321] sm:text-5xl lg:text-6xl">
            A trusted international wholesale partner
          </h2>
          <div className="mt-6 max-w-xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Drawing on over 40 years of family legacy, Imperial Essence Trading LLC combines reliable sourcing, direct European supply, and long-term business relationships to support global retailers, duty-free operators, distributors, and strategic partners.
            </p>
            <p>
              Built for B2B partnerships from our Dubai headquarters, the company brings luxury category access, professional communication, and international distribution discipline.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start">
            <Button href="/categories" className="bg-gold-gradient text-slate-950 font-extrabold shadow-md">
              Explore Categories
            </Button>
            <Button href="/contact" variant="ghost" className="border border-amber-300 text-[#B8860B] hover:bg-amber-50">
              Contact Team
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="relative min-h-[360px] w-full sm:min-h-[520px]">
          <div className="absolute left-1/2 top-5 h-48 w-48 -translate-x-1/2 rounded-3xl bg-white p-2 shadow-xl border border-amber-200 sm:top-6 sm:h-64 sm:w-64">
            <Image src={aboutImages[0].src} alt={aboutImages[0].alt} fill sizes="(min-width: 640px) 256px, 224px" className="rounded-2xl object-cover p-2" />
          </div>
          <div className="absolute right-0 top-[38%] h-36 w-36 rounded-3xl bg-white p-2 shadow-xl border border-amber-200 sm:top-[34%] sm:h-56 sm:w-56">
            <Image src={aboutImages[1].src} alt={aboutImages[1].alt} fill sizes="(min-width: 640px) 224px, 176px" className="rounded-2xl object-cover p-2" />
          </div>
          <div className="absolute bottom-2 left-2 h-32 w-32 rounded-3xl bg-white p-2 shadow-xl border border-amber-200 sm:h-48 sm:w-48">
            <Image src={aboutImages[2].src} alt={aboutImages[2].alt} fill sizes="(min-width: 640px) 192px, 160px" className="rounded-2xl object-cover p-2" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
