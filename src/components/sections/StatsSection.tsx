import { stats } from "@/data/site";
import { BadgeCheck, Clock, Globe2, Store } from "lucide-react";

const statIcons = [Clock, Globe2, BadgeCheck, Store];

export function StatsSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = statIcons[index] ?? BadgeCheck;

          return (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F4F4] text-[#7D8490]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none text-[#090909]">{stat.value}</p>
                <p className="mt-2 text-sm leading-none text-[#777777]">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
