"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

export function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello Worldwide Supply 28 SL, I would like to inquire about your wholesale luxury products."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-emerald-500/20 active:scale-95 group"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
        </span>
      </div>
      <span className="hidden text-sm font-semibold sm:inline group-hover:underline">
        WhatsApp 24/7
      </span>
    </a>
  );
}
