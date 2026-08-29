"use client";

import { clientGroups } from "@/data/clients";
import { cn } from "@/lib/utils";

type ClientGroup = (typeof clientGroups)[number];

const badgeColors = [
  "bg-[#EAF2FF] text-[#123A5A] border-[#123A5A]/10",
  "bg-[#EAF7F2] text-[#207B68] border-[#207B68]/12",
  "bg-[#FFF6DC] text-[#8A6A12] border-[#C6A128]/18",
  "bg-[#F1ECFF] text-[#59409A] border-[#59409A]/12",
  "bg-[#FFEDEF] text-[#9A3947] border-[#9A3947]/12",
  "bg-[#EAF8FF] text-[#116A8A] border-[#116A8A]/12",
  "bg-[#F3F6E8] text-[#5B6F1B] border-[#5B6F1B]/12",
  "bg-[#F7EEF7] text-[#7C3B74] border-[#7C3B74]/12",
];

const shortNames: Record<string, string> = {
  "L'Oreal Luxe": "LO",
  "Estee Lauder": "EL",
  "Procter & Gamble": "PG",
  "Pernod Ricard": "PR",
  "Gebr. Heinemann": "GH",
};

function getShortName(name: string) {
  if (shortNames[name]) return shortNames[name];

  const words = name
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  return name.slice(0, 3).toUpperCase();
}

function ClientColumn({
  clients,
  className,
  duration = 18,
  offset = 0,
}: {
  clients: ClientGroup[];
  className?: string;
  duration?: number;
  offset?: number;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <div
        className="client-column-motion flex flex-col gap-6 pb-6"
        style={{ ["--client-duration" as string]: `${duration}s` }}
      >
        {[0, 1].map((loop) => (
          <div key={loop} className="flex flex-col gap-6">
            {clients.map((client, index) => (
              <article
                className="w-full rounded-3xl border border-[#123A5A]/10 bg-white p-7 text-left shadow-lg shadow-[#123A5A]/5"
                key={`${client.name}-${loop}`}
              >
                <p className="text-sm leading-7 text-[#102033]/72">{client.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-full border text-sm font-semibold tracking-normal",
                      badgeColors[(offset + index) % badgeColors.length],
                    )}
                    aria-label={`${client.name} short name`}
                  >
                    {getShortName(client.name)}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="truncate font-semibold leading-5 tracking-normal text-[#123A5A]">{client.name}</div>
                    <div className="truncate text-sm leading-5 tracking-normal text-[#102033]/58">{client.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientShowcase() {
  const firstColumn = clientGroups.slice(0, 5);
  const secondColumn = clientGroups.slice(5, 10);
  const thirdColumn = clientGroups.slice(10, 15);
  const fourthColumn = clientGroups.slice(15, 20);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,58,90,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,58,90,0.045)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_20%,#000_55%,transparent_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center">
          <div className="flex justify-center">
            <div className="rounded-lg border border-[#123A5A]/10 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#207B68]">
              International Groups
            </div>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-normal text-[#0B2239] sm:text-4xl lg:text-5xl">
            Recognized market names across luxury, beauty, FMCG and travel retail
          </h2>
          <p className="mt-5 text-base leading-8 text-[#102033]/70">
            These real international groups and operators represent the kind of premium wholesale, sourcing, travel retail, and FMCG ecosystems Worldwide Supply 28 is built to support.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-h-[620px] max-w-7xl grid-cols-1 gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] sm:mt-12 sm:max-h-[760px] sm:grid-cols-2 lg:grid-cols-4">
          <ClientColumn clients={firstColumn} duration={18} offset={0} />
          <ClientColumn clients={secondColumn} duration={23} offset={5} />
          <ClientColumn clients={thirdColumn} duration={20} offset={10} />
          <ClientColumn clients={fourthColumn} duration={25} offset={15} />
        </div>
      </div>
    </section>
  );
}
