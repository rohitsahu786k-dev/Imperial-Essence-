import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";

export const metadata: Metadata = {
  title: "Cookie Policy | Imperial Essence Trading LLC",
  description: "Learn about how Imperial Essence Trading LLC uses cookies and tracking technologies to ensure optimal user experience across international markets.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#fffdf7] text-[#1f190f]">
      <InternalPageHero
        eyebrow="Legal & Compliance"
        title="Cookie Policy"
        copy="Information on how Imperial Essence Trading LLC uses cookies and standard web analytics."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-xs font-medium text-[#4a3c28] leading-relaxed">
          
          <div className="space-y-3">
            <h3 className="text-xl font-extrabold text-[#1f190f]">1. Introduction</h3>
            <p>
              Imperial Essence Trading LLC ("we", "our", or "us") respects your privacy. This Cookie Policy explains how our website (www.theimperialessence.com) uses cookies and similar technologies to provide you with a smooth and secure browsing experience.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-extrabold text-[#1f190f]">2. What are Cookies?</h3>
            <p>
              Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They allow the website to recognize your device, store language preferences, and optimize site navigation.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-extrabold text-[#1f190f]">3. Types of Cookies We Use</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for fundamental site operations, navigation, and secure forms.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Help us analyze site traffic and improve page loading speed without collecting personal identification.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferred language settings (English / Spanish) across sessions.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-extrabold text-[#1f190f]">4. Managing Your Preferences</h3>
            <p>
              You can control and manage cookies through your web browser settings. Disabling essential cookies may impact specific features of the website.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-extrabold text-[#1f190f]">5. Contact Information</h3>
            <p>
              If you have any questions regarding our Cookie Policy, please contact our compliance team at <strong>office@theimperialessence.com</strong>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
