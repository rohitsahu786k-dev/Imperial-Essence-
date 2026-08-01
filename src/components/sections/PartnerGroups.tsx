import { SectionHeader } from "./SectionHeader";

export function PartnerGroups() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partner Network"
          title="Connected with leading international groups"
          copy="Our network includes recognized international luxury, beauty, fragrance, and FMCG groups, enabling us to support premium sourcing and distribution opportunities across markets."
          className="mx-auto"
        />
        <p className="mt-8 rounded-md border border-[#123A5A]/10 bg-white p-6 text-base leading-8 text-[#102033]/76">
          In text-only context, relevant groups may include LVMH, Puig, L&apos;Oreal Luxe, Coty, and other leading international luxury, beauty, fragrance, and FMCG groups.
        </p>
      </div>
    </section>
  );
}
