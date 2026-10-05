import React from "react";

export default function Ownership() {
  const pillars = [
    {
      title: "WARRANTY",
      subtitle: "LONG-TERM CONFIDENCE",
      desc: "8-year or 160,000 km comprehensive battery and powertrain coverage with 70% capacity retention guarantee.",
    },
    {
      title: "SERVICE",
      subtitle: "DEDICATED SUPPORT",
      desc: "Mobile service technicians dispatched to your location and seamless remote health diagnostics.",
    },
    {
      title: "SOFTWARE",
      subtitle: "CONTINUOUS EVOLUTION",
      desc: "Regular over-the-air firmware updates continuously improving vehicle performance, efficiency, and safety.",
    },
    {
      title: "SUPPORT",
      subtitle: "24/7 CONCIERGE",
      desc: "Direct digital concierge assistance whenever you need it, backed by complimentary roadside coverage.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between border-b border-black/10 pb-8 gap-4">
          <div>
            <h2 className="font-heading mt-3 text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
              LIFE WITH AURA.
            </h2>
          </div>
          <p className="font-body max-w-md text-sm leading-relaxed text-black/60">
            A seamless ecosystem designed to make every aspect of driving, charging, and
            maintaining your vehicle effortless.
          </p>
        </div>

        {/* Four Simple Editorial Columns */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => (
            <div key={item.title} className="flex flex-col border-l border-black/10 pl-5">
              <span className="font-heading text-base md:text-lg font-bold tracking-tight text-black uppercase">
                {item.title}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase mt-1">
                {item.subtitle}
              </span>
              <p className="font-body mt-3 text-xs leading-relaxed text-black/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
