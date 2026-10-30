"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollRestoration } from "@/components/animations/ScrollRestoration";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { InquiryModal } from "@/components/ui/InquiryModal";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
      <InquiryModal />
    </>
  );
}
