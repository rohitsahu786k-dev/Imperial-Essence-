"use client";

import { clientGroups } from "@/data/clients";
import { cn } from "@/lib/utils";

type ClientGroup = (typeof clientGroups)[number];

const badgeColors = [
  "bg-amber-50 text-[#B8860B] border-amber-300/80",
  "bg-gold-shimmer text-[#071321] border-amber-400/60",
  "bg-amber-100/60 text-[#8A6A12] border-amber-300",
  "bg-slate-900 text-amber-300 border-amber-400/40",
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
                className="w-full rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm hover:border-[#D4AF37] transition"
                key={`${client.name}-${loop}`}
              >
                <p className="text-sm leading-7 text-slate-600">{client.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold tracking-normal",
                      badgeColors[(offset + index) % badgeColors.length],
                    )}
                    aria-label={`${client.name} short name`}
                  >
                    {getShortName(client.name)}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="truncate font-extrabold leading-5 tracking-normal text-[#071321]">{client.name}</div>
                    <div className="truncate text-sm leading-5 tracking-normal text-slate-500">{client.role}</div>
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center">
          <div className="flex justify-center">
            <div className="rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
              International Luxury Groups
            </div>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#071321] sm:text-4xl lg:text-5xl">
            Recognized global leaders across luxury perfumery, cosmetics & travel retail
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            These international brand ecosystems represent the high standards of luxury perfumery, cosmetics, and duty-free travel retail that Imperial Essence Trading LLC supports.
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
