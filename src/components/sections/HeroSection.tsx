import { CheckCircle2 } from "@/components/ui/icons";
import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";

const tags = ["Luxury Wholesale", "Travel Retail", "International Distribution", "Global Sourcing"];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto min-h-screen w-full overflow-hidden bg-white px-4 pb-14 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-36 lg:px-8"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 28%, rgba(32, 123, 104, 0.18) 0%, transparent 42%),
            radial-gradient(circle at 46% 54%, rgba(18, 58, 90, 0.12) 0%, transparent 48%),
            radial-gradient(circle at 68% 18%, rgba(198, 161, 40, 0.14) 0%, transparent 34%)
          `,
          opacity: 0.9,
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 opacity-55"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18, 58, 90, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18, 58, 90, 0.08) 1px, transparent 1px),
            radial-gradient(circle, rgba(32, 123, 104, 0.18) 1px, transparent 1.5px)
          `,
          backgroundSize: "72px 72px, 72px 72px, 22px 22px",
          maskImage: "radial-gradient(ellipse 82% 58% at 50% 28%, black 45%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 82% 58% at 50% 28%, black 45%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl">
          <a href="/global-distribution" className="group inline-flex">
            <span className="mx-auto flex w-fit items-center justify-center rounded-3xl border-2 border-[#123A5A]/10 bg-white/70 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#123A5A] shadow-sm backdrop-blur">
              Spain-based B2B wholesale distributor
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          <h1 className="animate-fade-in mt-6 text-balance bg-gradient-to-br from-[#0B2239] from-30% via-[#123A5A] to-[#207B68] bg-clip-text text-4xl font-semibold leading-none tracking-normal text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            Premium Wholesale Distribution for Global Markets
          </h1>

          <p className="animate-fade-in mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 tracking-normal text-[#102033]/72 md:text-xl">
            Worldwide Supply 28 is a Valencia-based international wholesale company specializing in luxury goods, travel retail, FMCG products, and global distribution solutions for retailers, duty-free operators, distributors, and wholesalers.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Become a Partner</Button>
            <Button href="/categories" variant="secondary">Explore Categories</Button>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center justify-center gap-2 rounded-full border border-[#123A5A]/10 bg-white/65 px-3 py-2 text-sm font-medium text-[#123A5A] backdrop-blur">
                <CheckCircle2 className="size-4 text-[#2FA866]" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex min-h-[360px] max-w-6xl flex-col items-center justify-center overflow-hidden rounded-md bg-transparent sm:mt-12 sm:min-h-[590px] lg:min-h-[640px]">
          <InteractiveGlobe size={660} className="max-h-[430px] max-w-full sm:max-h-[660px]" />
          <div className="pointer-events-none mt-4 grid w-full gap-3 text-left sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:mt-0 sm:w-auto sm:grid-cols-3">
            <div className="rounded-md border border-[#123A5A]/10 bg-white/72 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#207B68]">Base</p>
              <p className="mt-1 text-sm font-semibold text-[#0B2239]">Valencia, Spain</p>
            </div>
            <div className="rounded-md border border-[#123A5A]/10 bg-white/72 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#207B68]">Reach</p>
              <p className="mt-1 text-sm font-semibold text-[#0B2239]">Europe, GCC & Africa</p>
            </div>
            <div className="rounded-md border border-[#123A5A]/10 bg-white/72 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#207B68]">Focus</p>
              <p className="mt-1 text-sm font-semibold text-[#0B2239]">Africa Expansion Markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
