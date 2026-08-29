import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Product Categories | Imperial Essence Trading LLC",
  description: "Wholesale luxury sourcing categories: Perfumes & Fragrances, Niche Fragrances, Cosmetics & Makeup, Skincare, Fashion & Textiles, Travel Sets, Accessories, Jewelry.",
};

export default function CategoriesPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="Product Categories"
        title="Luxury categories for international wholesale"
        copy="Category-led B2B sourcing across luxury perfumery, niche fragrances, cosmetics, skincare, fashion & textiles, travel sets, accessories, and jewelry."
      />
      <CategoryGrid compact />
      <ContactInquirySection compact />
    </div>
  );
}
