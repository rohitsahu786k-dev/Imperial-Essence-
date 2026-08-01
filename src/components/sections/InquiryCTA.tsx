import { Check } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

export function InquiryCTA() {
  const items = ["Qualified wholesale inquiries", "Global sourcing conversations", "Travel retail and FMCG support", "Long-term partnership planning"];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-md bg-[#123A5A] p-8 text-white md:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">Ready to Build a Long-Term Wholesale Partnership?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
              Whether you are a retailer, duty-free operator, distributor, or wholesaler, Worldwide Supply 28 has the products, expertise, and global network to support your business growth.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="bg-[#C6A128] text-[#0B2239] hover:bg-[#d5b84d]">Request Wholesale Inquiry</Button>
              <Button href="/contact" variant="secondary">Contact Our Team</Button>
            </div>
          </div>
          <ul className="space-y-4 text-sm font-medium text-white/86">
            {items.map((item) => (
              <li key={item} className="flex gap-3"><Check className="size-5 text-[#2FA866]" /> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
