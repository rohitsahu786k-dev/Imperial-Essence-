export const businessTypes = [
  "Retailer",
  "Duty-Free Operator",
  "Distributor",
  "Wholesaler",
  "Importer",
  "Buying Office",
  "Other",
] as const;

export const categoryInterests = [
  "Perfumes & Fragrances",
  "Cosmetics & Makeup",
  "Niche Fragrances",
  "Jewelry",
  "Travel Sets",
  "Fashion",
  "Accessories",
  "Watches",
  "Beverages",
  "Retail Products",
  "Home & Personal Care",
  "Other",
] as const;

export const monthlyVolumes = [
  "Starter Wholesale Inquiry",
  "Regular Monthly Supply",
  "Large Volume Distribution",
  "Market Expansion Partnership",
  "Not Sure Yet",
] as const;

export type LeadInput = {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  country: string;
  businessType: string;
  interestedCategories: string[];
  estimatedMonthlyVolume?: string;
  message: string;
  consent: boolean;
  sourcePage: string;
  companyWebsite?: string;
};

export function validateLead(input: unknown): { success: true; data: LeadInput } | { success: false; errors: Record<string, string> } {
  const value = typeof input === "object" && input ? (input as Record<string, unknown>) : {};
  const errors: Record<string, string> = {};
  const categories = Array.isArray(value.interestedCategories) ? value.interestedCategories.map(String) : [];

  const data: LeadInput = {
    fullName: String(value.fullName || "").trim(),
    companyName: String(value.companyName || "").trim(),
    email: String(value.email || "").trim(),
    phone: String(value.phone || "").trim(),
    country: String(value.country || "").trim(),
    businessType: String(value.businessType || "").trim(),
    interestedCategories: categories,
    estimatedMonthlyVolume: String(value.estimatedMonthlyVolume || "").trim(),
    message: String(value.message || "").trim(),
    consent: value.consent === true || value.consent === "true" || value.consent === "on",
    sourcePage: String(value.sourcePage || "website"),
    companyWebsite: String(value.companyWebsite || "").trim(),
  };

  if (data.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (data.companyName.length < 2) errors.companyName = "Please enter your company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.country.length < 2) errors.country = "Please enter your market or country.";
  if (!businessTypes.includes(data.businessType as (typeof businessTypes)[number])) errors.businessType = "Select a business type.";
  if (!data.interestedCategories.length) errors.interestedCategories = "Select at least one category.";
  if (data.message.length < 20) errors.message = "Please add a short message about your inquiry.";
  if (!data.consent) errors.consent = "Consent is required.";

  return Object.keys(errors).length ? { success: false, errors } : { success: true, data };
}
