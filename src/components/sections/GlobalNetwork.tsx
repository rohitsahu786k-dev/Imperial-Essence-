import Link from "next/link";
import { ArrowRight, MapPin, Ship, UsersRound } from "lucide-react";
import { WorldMap } from "@/components/ui/WorldMap";

const dubai = { lat: 25.2048, lng: 55.2708, label: "Dubai (HQ)" };

const distributionRoutes = [
  { start: dubai, end: { lat: 50.1109, lng: 8.6821, label: "Europe" } },
  { start: dubai, end: { lat: 40.7128, lng: -74.0060, label: "United States" } },
  { start: dubai, end: { lat: -1.2921, lng: 36.8219, label: "Africa" } },
  { start: dubai, end: { lat: 1.3521, lng: 103.8198, label: "Asia" } },
  { start: dubai, end: { lat: -23.5505, lng: -46.6333, label: "South America" } },
  { start: dubai, end: { lat: -33.8688, lng: 151.2093, label: "Australia" } },
];

const markets = ["Dubai HQ", "Europe", "Middle East", "North America", "Africa", "Asia", "South America", "Australia"];

const distributionPoints = [
  { label: "Base", value: "Dubai Bay Square, UAE", icon: MapPin },
  { label: "Reach", value: "Middle East, Europe, USA, Africa, South America & Australia", icon: Ship },
  { label: "Sourcing", value: "Direct European T1 & T2", icon: UsersRound },
];

const capabilities = ["Sourcing review", "Wholesale planning", "Duty-free coordination", "Partner support"];

export function GlobalNetwork() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-base font-bold text-[#B8860B] sm:text-xl uppercase tracking-wider">Dubai Headquarters</p>
        <h2 className="mx-auto mt-2 max-w-5xl text-4xl font-extrabold leading-none tracking-tight text-[#071321] sm:text-6xl lg:text-7xl">
          Global Distribution Gateway
        </h2>
        <div className="mx-auto mt-5 h-1.5 w-32 rounded-full bg-gold-gradient sm:w-40" />
        <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-700 sm:mt-8 sm:text-xl">
          Imperial Essence Trading LLC supports retailers, duty-free operators, distributors, and brand owners from our Dubai headquarters.
        </p>
        <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
          Our distribution operations focus on reliable sourcing, wholesale planning, logistics coordination, and strategic market expansion across international territories.
        </p>

        <div className="relative mx-auto mt-8 max-w-6xl sm:mt-10">
          <WorldMap dots={distributionRoutes} lineColor="#D4AF37" theme="light" />
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-3">
          {markets.map((market) => (
            <span key={market} className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-2 text-xs font-bold text-[#B8860B] shadow-sm">
              <span>{market}</span>
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {distributionPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div key={point.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:border-[#D4AF37] transition">
                <Icon className="mb-4 h-6 w-6 text-[#B8860B]" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">{point.label}</p>
                <p className="mt-2 text-lg font-extrabold text-[#071321]">{point.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {capabilities.map((item) => (
            <span key={item} className="rounded-full border border-amber-200 bg-gold-shimmer px-4 py-2 text-sm font-semibold text-slate-800">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-base font-extrabold uppercase tracking-wider text-slate-950 transition hover:opacity-95 shadow-lg"
          >
            <span>Request Distribution Support</span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
