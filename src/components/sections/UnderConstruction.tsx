import Image from "next/image";

export function UnderConstruction() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#fffdf7] px-6 text-center text-[#1f190f]">
      <Image
        src="/imperial-essence-logo.png"
        alt="Imperial Essence Trading LLC"
        width={280}
        height={110}
        priority
        className="h-auto w-[200px] sm:w-[260px]"
      />

      <span className="mt-12 h-px w-16 bg-[#d4af37]/60" aria-hidden="true" />

      <h1 className="mt-12 text-2xl font-light tracking-[0.2em] uppercase sm:text-3xl">
        Under Construction
      </h1>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-[#1f190f]/60">
        We are putting the finishing touches on something worth the wait.
        Please check back soon.
      </p>
    </section>
  );
}
