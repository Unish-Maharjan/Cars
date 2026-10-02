import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="w-full bg-white py-24 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex items-end pb-10">
          <div>
            <h2 className="font-heading mt-4 text-5xl font-bold uppercase tracking-tight text-black">
              BUILT AROUND
              <br />
              THE WAY YOU MOVE.
            </h2>
          </div>
        </div>

        {/* Unified Editorial Grid */}
        <div className="mt-14 grid grid-cols-12 gap-8">
          {/* Left Column: Large Hero Feature (Exterior Design) */}
          <div className="col-span-7 flex h-[580px] flex-col justify-between border border-black/10 bg-[#F9F9F9] p-8">
            <div className="flex items-center justify-between pb-4">
              <span className="text-[14px] font-semibold text-black uppercase">
                EXTERIOR DESIGN
              </span>
            </div>

            <div className="relative my-4 flex-1 w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/behind.avif"
                alt="Exterior Design Silhouette"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Two Balanced Stacked Features */}
          <div className="col-span-5 flex flex-col justify-between gap-8">
            {/* Item 2: Interior Comfort */}
            <div className="flex h-[274px] flex-col justify-between border border-black/10 bg-[#F9F9F9] p-6">
              <div className="flex items-center justify-between pb-3">
                <span className="text-[14px] font-semibold text-black uppercase">
                  INTERIOR COMFORT
                </span>
              </div>

              <div className="relative my-2 flex-1 w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/images/carseat.avif"
                  alt="Interior Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Item 3: Connected Technology */}
            <div className="flex h-[274px] flex-col justify-between border border-black/10 bg-[#F9F9F9] p-6">
              <div className="flex items-center justify-between pb-3">
                <span className="text-[14px] font-semibold text-black uppercase">
                  CONNECTED TECHNOLOGY
                </span>
              </div>

              <div className="relative my-2 flex-1 w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/images/carinside.avif"
                  alt="Connected Cockpit Display"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
