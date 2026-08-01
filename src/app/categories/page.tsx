import type { Metadata } from "next";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wholesale Product Categories | Worldwide Supply 28",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Categories", path: "/categories" }])) }} />
      <InternalPageHero eyebrow="Categories" title="Wholesale Product Categories" copy="Each category is presented as a B2B capability area for availability discussion, sourcing fit, and wholesale partnership planning." />
      <CategoryGrid detailed />
    </>
  );
}
