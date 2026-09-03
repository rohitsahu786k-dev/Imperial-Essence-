"use client";

import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#fffdf7] text-[#1f190f]">
      <InternalPageHero
        eyebrow={t("Contact Us", "Contacto")}
        title={t("Connect with Imperial Essence Trading LLC", "Conecte con Imperial Essence Trading LLC")}
        copy={t(
          "Our Dubai commercial office and WhatsApp support are ready to answer your luxury wholesale, distribution, and European sourcing inquiries.",
          "Nuestra oficina comercial en Dubái y soporte de WhatsApp están listos para responder sus consultas."
        )}
      />

      {/* Map & Office Information Section */}
      <section className="py-16 bg-[#faf6ee] border-t border-[#d4af37]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Google Map Embed */}
            <div className="lg:col-span-7 relative h-[400px] rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-md">
              <iframe
                title="Imperial Essence Trading Bay Square Dubai Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178491873111!2d55.2818967!3d25.1875152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68285ff7f6f1%3A0x8673a5a415a77dd6!2sBay%20Square%20Building%2011!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.02] brightness-[0.95]"
              />
            </div>

            {/* Office Info Card */}
            <div className="lg:col-span-5 rounded-3xl border border-[#d4af37]/35 bg-white p-8 space-y-6 shadow-md">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#8a640f] uppercase tracking-widest">
                <MapPin className="h-4 w-4 text-[#b8860b]" />
                <span>Dubai Head Office</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#1f190f]">
                Bay Square, Business Bay
              </h3>

              <div className="space-y-4 text-xs font-medium text-[#4a3c28]">
                <p className="leading-relaxed font-semibold text-[#2c2214]">
                  {siteData.company.location.address}
                </p>

                <div className="pt-3 border-t border-[#d4af37]/20 space-y-3 font-bold">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#b8860b]" />
                    <span>Tel: +971 4 552 1257</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <a href="https://wa.me/971563930666" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8860b]">
                      Mobile/WhatsApp: +971 56 393 0666 (24/7)
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#b8860b]" />
                    <a href="mailto:office@theimperialessence.com" className="hover:text-[#b8860b]">
                      office@theimperialessence.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-[#b8860b]" />
                    <span>www.theimperialessence.com</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#5a4a30]">
                    <Clock className="h-4 w-4 text-[#b8860b]" />
                    <span>Office: Mon–Fri 9:00 AM – 5:00 PM (GST)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}
