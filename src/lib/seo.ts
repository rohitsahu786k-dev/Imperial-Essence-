import type { Metadata } from "next";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
};

export function pageMetadata({ title, description = site.description, path = "/" }: SeoInput): Metadata {
  const canonical = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      images: [{ url: site.logo, width: 1536, height: 864, alt: `${site.name} logo` }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.logo],
    },
  };
}

