import { SectionHeader } from "./SectionHeader";

export function PartnerGroups() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partner Network"
          title="Connected with leading international groups"
          copy="Our network includes recognized international luxury, beauty, fragrance, and travel retail groups, enabling us to support premium sourcing and distribution opportunities across global markets."
          className="mx-auto"
        />
        <p className="mt-8 rounded-3xl border border-amber-200 bg-gold-shimmer p-6 text-base leading-8 text-slate-700 shadow-sm">
          Relevant groups include LVMH, Puig, L&apos;Oréal Luxe, Coty, Procter & Gamble, and leading niche fragrance houses with direct European T1 & T2 sourcing.
        </p>
      </div>
    </section>
  );
}
