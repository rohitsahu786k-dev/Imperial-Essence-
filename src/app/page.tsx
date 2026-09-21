import type { Metadata } from "next";
import { HomeContent } from "@/components/sections/HomeContent";

export const metadata: Metadata = {
  title: "Imperial Essence Trading LLC | Luxury Wholesale & Duty Free Distribution",
  description:
    "Dubai-based wholesale and distribution gateway for luxury perfumery, cosmetics, skincare, lifestyle products, travel retail, and duty-free channels.",
};

export default function Home() {
  return <HomeContent />;
}
