import type { Metadata } from "next";
import { UnderConstruction } from "@/components/sections/UnderConstruction";

export const metadata: Metadata = {
  title: "Imperial Essence Trading LLC | Under Construction",
  description:
    "Imperial Essence Trading LLC is preparing its new home. Please check back soon.",
};

export default function Home() {
  return <UnderConstruction />;
}
