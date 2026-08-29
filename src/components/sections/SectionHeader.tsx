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
      {eyebrow ? <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#B8860B]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-[#071321] sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-slate-600">{copy}</p> : null}
    </div>
  );
}
