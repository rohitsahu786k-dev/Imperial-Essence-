"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/ui/icons";
import { categories } from "@/data/categories";

const categoryImages = [
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=82",
];

export function CategoryGrid({ detailed = false }: { detailed?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 2);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction === "left" ? -track.clientWidth * 0.82 : track.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    checkScrollability();
    track.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    return () => {
      track.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#207B68]">Product Categories</p>
            <h2 className="text-3xl font-bold tracking-normal text-[#0B2239] sm:text-5xl">Product Categories</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#102033]/72">
              Category conversations are handled as B2B availability discussions, not consumer product listings.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll categories left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B2239]/12 bg-white text-[#0B2239] transition hover:border-[#207B68]/35 hover:text-[#207B68] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll categories right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B2239]/12 bg-white text-[#0B2239] transition hover:border-[#207B68]/35 hover:text-[#207B68] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="categories-scroll-track flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
          aria-label="Product categories carousel"
        >
          {categories.map((category, index) => (
            <article
              key={category.slug}
              id={category.slug}
              className="group flex h-[400px] shrink-0 basis-[86%] snap-start flex-col overflow-hidden rounded-3xl bg-white transition duration-500 hover:-translate-y-1 sm:h-[440px] sm:basis-[46%] lg:basis-[calc(25%_-_16px)]"
            >
              <div className="relative h-[62%] overflow-hidden bg-white">
                <img
                  src={categoryImages[index % categoryImages.length]}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-end bg-white p-6">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#C6A128]" />
                <h3 className="text-xl font-semibold text-[#123A5A] transition group-hover:text-[#207B68]">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.capabilities.map((item) => (
                    <span key={item} className="rounded-full border border-[#123A5A]/10 bg-white px-3 py-1 text-xs font-medium text-[#123A5A]">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#207B68] hover:text-[#123A5A]">
                  Discuss Category Availability
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
