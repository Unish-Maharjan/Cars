import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MODELS } from "./modelsData";

export default function ModelsLineup() {
  return (
    <section className="w-full bg-[#0A0A0A] py-32 border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Headline */}
        <div className="flex items-end justify-between border-b border-white/10 pb-12">
          <div>
            <span className="text-[10px] font-medium tracking-[0.25em] text-white/30 uppercase">
              COMPLETE LINEUP
            </span>
            <h2 className="font-heading mt-4 text-6xl font-bold uppercase tracking-tight leading-[0.92] text-white">
              FIND YOUR
              <br />
              DRIVE.
            </h2>
            <p className="font-body mt-5 max-w-md text-sm leading-relaxed text-white/50">
              Explore every model and find the one built for your journey.
            </p>
          </div>

          <Link
            href="/#configure"
            className="border border-white bg-white px-10 py-4 text-xs font-semibold tracking-[0.25em] text-black uppercase"
          >
            VIEW ALL MODELS →
          </Link>
        </div>

        {/* Model Grid — horizontal strip */}
        <div className="grid grid-cols-4 divide-x divide-white/10 border-b border-white/10">
          {MODELS.map((model) => (
            <div key={model.id} className="flex flex-col p-7">
              {/* Number + Category */}
              <div className="flex items-center justify-between">
                <span className="font-numbers text-xs font-semibold text-white/30">
                  {model.id}
                </span>
                <span className="text-[8px] font-semibold tracking-[0.18em] text-white/30 uppercase">
                  {model.category}
                </span>
              </div>

              {/* Vehicle image */}
              <div className="relative mt-6 h-40 w-full overflow-hidden border border-white/5 bg-[#141414]">
                <Image
                  src={model.image}
                  alt={`${model.name} ${model.category}`}
                  fill
                  className={model.isPng ? "object-contain p-3" : "object-cover"}
                  sizes="25vw"
                />
              </div>

              {/* Name */}
              <h3 className="font-heading mt-5 text-2xl font-bold uppercase text-white tracking-tight">
                {model.name}
              </h3>

              {/* Key specs */}
              <div className="mt-4 space-y-1.5 border-t border-white/5 pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-[8px] tracking-[0.18em] text-white/30 uppercase">Range</span>
                  <span className="font-numbers text-xs font-bold text-white">{model.spec.range}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[8px] tracking-[0.18em] text-white/30 uppercase">0–100</span>
                  <span className="font-numbers text-xs font-bold text-white">{model.spec.acceleration}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[8px] tracking-[0.18em] text-white/30 uppercase">From</span>
                  <span className="font-numbers text-xs font-bold text-white">{model.price}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 border-t border-white/5 pt-5">
                <Link
                  href={model.href}
                  className="text-[9px] font-semibold tracking-[0.22em] text-white/50 uppercase"
                >
                  EXPLORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
