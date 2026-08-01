import { ShieldCheck, Ship, Sparkles, UsersRound } from "@/components/ui/icons";
import { SectionHeader } from "./SectionHeader";

const items = [
  { title: "Premium B2B Focus", icon: Sparkles, copy: "No retail flows, no consumer checkout, and no distracting commerce language." },
  { title: "Trust-Led Relationships", icon: ShieldCheck, copy: "Partnerships are built around reliability, communication, and long-term planning." },
  { title: "International Coordination", icon: Ship, copy: "Support across sourcing, market expansion, logistics coordination, and wholesale supply." },
  { title: "Partner Support", icon: UsersRound, copy: "Relevant for retailers, duty-free operators, distributors, wholesalers, and importers." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="Built for serious wholesale partnerships" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-md bg-white p-6 shadow-sm">
                <Icon className="size-7 text-[#207B68]" />
                <h3 className="mt-5 text-lg font-semibold text-[#123A5A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#102033]/72">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
