import { Check } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

export function InquiryCTA() {
  const items = [
    "Qualified B2B wholesale inquiries",
    "Direct European T1 & T2 sourcing",
    "Duty-free and travel retail supply",
    "Long-term distribution planning"
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-amber-300/60 bg-[#071321] p-8 text-white md:grid-cols-[1.2fr_0.8fr] lg:p-12 shadow-2xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Ready to Build a Long-Term Distribution Partnership?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
              Whether you are an international retailer, duty-free operator, distributor, or brand owner, Imperial Essence Trading LLC has the expertise, sourcing infrastructure, and Dubai HQ network to support your growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="bg-gold-gradient text-slate-950 font-extrabold hover:opacity-95 shadow-md">
                Request Wholesale Inquiry
              </Button>
              <Button href="/contact" variant="secondary" className="border-amber-300/80 text-amber-300 hover:bg-amber-400/10">
                Contact Dubai Team
              </Button>
            </div>
          </div>
          <ul className="space-y-4 text-sm font-semibold text-white/90">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="size-5 text-[#D4AF37]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
