import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Charging() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="relative h-[520px] w-full overflow-hidden border border-black/10 bg-neutral-100">
            <Image
              src="/images/behind.avif"
              alt="AURA Charging & Infrastructure"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center pl-8">
            <h2 className="font-heading mt-6 text-6xl font-bold uppercase tracking-tight leading-[1.02] text-black">
              POWER
              <br />
              WHEREVER
              <br />
              YOU GO.
            </h2>

            <p className="font-body mt-8 max-w-lg text-base font-normal leading-relaxed text-black/70">
              Seamlessly tap into an expansive high-voltage ultra-fast charging ecosystem. With
              predictive thermal battery conditioning, the vehicle prepares its cell chemistry
              prior to arrival, ensuring peak charging velocity and zero wasted downtime.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <Link
                href="#technology"
                className="border border-black bg-black px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white uppercase inline-flex items-center gap-3"
              >
                <span>EXPLORE TECHNOLOGY</span>
              </Link>

              <div className="flex flex-col">
                <span className="font-numbers text-xl font-bold text-black">350 KW</span>
                <span className="text-[10px] tracking-widest text-black/50 uppercase">PEAK CHARGE RATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
