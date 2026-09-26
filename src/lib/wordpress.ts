/**
 * Headless WordPress API Client for The Imperial Essence
 */

const WP_URL = (process.env.NEXT_PUBLIC_WP_BASE_URL || 'https://admin.theimperialessence.com').replace(/\/+$/, '');
const AUTH_HEADER = process.env.WP_BASIC_AUTH || '';

export interface SiteSettingsACF {
  company_name?: string;
  company_license?: string;
  contact_phone?: string;
  contact_whatsapp?: string;
  contact_email?: string;
  contact_address?: string;
  contact_city?: string;
  contact_country?: string;
  contact_hours?: string;
  company_tagline?: string;
  company_subtagline?: string;
  brand_header_logo?: { id: number; url: string; alt?: string } | string;
  brand_footer_logo?: { id: number; url: string; alt?: string } | string;
  brand_favicon?: { id: number; url: string; alt?: string } | string;
  hero_desktop_banner_1?: { id: number; url: string; alt?: string } | string;
  hero_desktop_banner_2?: { id: number; url: string; alt?: string } | string;
  hero_badge?: string;
  hero_title?: string;
  hero_stat_legacy?: string;
  hero_stat_sourcing?: string;
  founder_siddharth_name?: string;
  founder_siddharth_role?: string;
  founder_siddharth_bio?: string;
  founder_siddharth_image?: { id: number; url: string; alt?: string } | string;
  founder_sakina_name?: string;
  founder_sakina_role?: string;
  founder_sakina_bio?: string;
  founder_sakina_image?: { id: number; url: string; alt?: string } | string;
  cat_perfumes_image?: { id: number; url: string; alt?: string } | string;
  cat_cosmetics_image?: { id: number; url: string; alt?: string } | string;
  cat_accessories_image?: { id: number; url: string; alt?: string } | string;
  logistics_air_image?: { id: number; url: string; alt?: string } | string;
  logistics_sea_image?: { id: number; url: string; alt?: string } | string;
  logistics_road_image?: { id: number; url: string; alt?: string } | string;
  logistics_hub_image?: { id: number; url: string; alt?: string } | string;
  [key: string]: unknown;
}

export async function getSiteSettings(): Promise<SiteSettingsACF | null> {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (AUTH_HEADER) {
      headers['Authorization'] = AUTH_HEADER;
    }

    const res = await fetch(`${WP_URL}/wp-json/wp/v2/pages?slug=site-settings`, {
      headers,
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const pages = await res.json();
    if (!Array.isArray(pages) || pages.length === 0) return null;

    return (pages[0]?.acf as SiteSettingsACF) || null;
  } catch (error) {
    console.error('Error fetching site-settings from WordPress:', error);
    return null;
  }
}
