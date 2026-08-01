import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  className,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#207B68]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-normal text-[#102033] sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-[#102033]/72">{copy}</p> : null}
    </div>
  );
}

