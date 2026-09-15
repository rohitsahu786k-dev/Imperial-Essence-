"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { InquiryModal } from "@/components/ui/InquiryModal";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

// Routes that render bare, with no header, footer or floating widgets.
const BARE_ROUTES = ["/"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.includes(pathname);

  if (bare) {
    return <main>{children}</main>;
  }

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
      <InquiryModal />
    </>
  );
}
