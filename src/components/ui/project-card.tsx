import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  className?: string;
};

export function ProjectCard({
  className,
  imgSrc,
  title,
  description,
  link,
  linkText = "Read Insight",
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-amber-200 bg-white text-[#071321] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-xl",
        className,
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-[#071321] transition-colors duration-300 group-hover:text-[#B8860B]">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
        <Link
          href={link}
          className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#B8860B] transition-all duration-300 hover:text-[#071321]"
        >
          {linkText}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
