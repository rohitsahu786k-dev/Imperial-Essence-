"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { categories } from "@/data/categories";
import { ArrowRight, Layers, Sparkles, Eye, X, ShieldCheck } from "lucide-react";

export function CategoryInteractiveGallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [previewImage, setPreviewImage] = useState<any>(null);

  const imagesList = siteData.brandFreeImages;

  const filteredImages = activeCategory === "all"
    ? imagesList
    : imagesList.filter((img) => img.category === activeCategory);

  return (
    <section className="bg-[#fffdf7] py-20 text-[#1f190f] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] px-4 py-1.5 text-xs font-extrabold text-[#8a640f] backdrop-blur-md">
            <Layers className="h-3.5 w-3.5 text-[#b8860b]" />
            <span>{t("BRAND-FREE PRODUCT PORTFOLIO SHOWCASE", "MUESTRARIO DE PRODUCTOS DE LUJO")}</span>
          </div>

          <h3 className="text-2xl font-extrabold sm:text-4xl tracking-tight text-[#1f190f]">
            {t("Comprehensive Wholesale Portfolio Gallery", "Galería de Portafolio Mayorista Integral")}
          </h3>
        </div>

        {/* Disclaimer Notice */}
        <div className="mb-8 flex items-center justify-center gap-2 text-xs font-bold text-[#8a640f] bg-[#faf4e6] border border-[#d4af37]/40 rounded-xl p-3 max-w-2xl mx-auto shadow-sm">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#b8860b]" />
          <span>{t("All imagery features brand-free luxury bottles & items respecting trademark guidelines.", "Todas las imágenes cumplen strictly con las normas de marcas registradas.")}</span>
        </div>

        {/* 49 Image Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setPreviewImage(img)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#d4af37]/35 bg-white aspect-square transition duration-300 hover:border-[#b8860b] hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)]"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f190f]/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-bold text-white truncate">{img.title}</span>
                  <Eye className="h-3.5 w-3.5 text-[#e5b85c]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md">
            <div className="relative max-w-2xl w-full rounded-2xl border border-[#d4af37]/50 bg-white p-6 shadow-2xl space-y-4 text-[#1f190f]">
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 rounded-full border border-[#d4af37]/40 bg-[#faf4e6] p-2 text-[#1f190f] hover:bg-[#b8860b] hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-xl border border-[#d4af37]/30 bg-[#faf4e6]">
                <Image src={previewImage.src} alt={previewImage.title} fill className="object-contain" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-[#1f190f]">{previewImage.title}</h4>
                  <p className="text-xs text-[#8a640f] uppercase font-bold">{previewImage.category}</p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setPreviewImage(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c] px-5 py-2.5 text-xs font-extrabold text-[#1f190f] shadow-md"
                >
                  <span>{t("Inquire Sourcing", "Consultar Sourcing")}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
