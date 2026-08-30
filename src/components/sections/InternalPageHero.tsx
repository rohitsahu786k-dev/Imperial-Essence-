import Image from "next/image";

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
    <section className="relative overflow-hidden bg-[#071321] px-4 pb-14 pt-32 text-center text-white sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
      <Image
        src="/dubai-skyline-hero.jpg"
        alt="Imperial Essence Trading LLC Dubai HQ"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-30 saturate-110"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071321]/90 via-[#071321]/80 to-[#071321]" aria-hidden="true" />
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.25) 0%, transparent 50%),
            linear-gradient(to right, rgba(212, 175, 55, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "auto, 80px 80px, 80px 80px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-[220px] max-w-5xl flex-col items-center justify-center">
        <p className="mb-5 rounded-full border border-amber-300/40 bg-white/10 backdrop-blur-md px-5 py-1.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#D4AF37] shadow-sm sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-relaxed text-slate-200 sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}
