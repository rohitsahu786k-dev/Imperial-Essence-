import type { Metadata } from "next";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Product Categories | Worldwide Supply 28 SL",
  description: "Wholesale luxury sourcing categories: Perfumes, Niche Fragrances, Cosmetics & Skincare, Wines & Spirits, Textiles, Accessories, Jewelry, Travel Sets.",
};

export default function CategoriesPage() {
  return (
    <div className="pt-20">
      <CategoryGrid />
      <ContactInquirySection />
    </div>
  );
}
