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
    <section className="relative overflow-hidden bg-white px-4 pb-20 pt-32 text-center text-[#102033] sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 26%, rgba(32, 123, 104, 0.12) 0%, transparent 44%),
            radial-gradient(circle at 62% 18%, rgba(198, 161, 40, 0.12) 0%, transparent 34%),
            linear-gradient(to right, rgba(18, 58, 90, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18, 58, 90, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 80px 80px, 80px 80px",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-b from-transparent to-white" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-5xl flex-col items-center justify-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#207B68] sm:text-sm">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-[#0B2239] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#102033]/70 sm:text-lg">{copy}</p>
      </div>
    </section>
  );
}
