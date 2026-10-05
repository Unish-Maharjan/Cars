import React from "react";
import Image from "next/image";

export default function Approach() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#FAFAFA] py-10 border-b border-black/10">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-8">
        <h2 className="font-heading text-5xl font-bold uppercase tracking-tight leading-[0.95] text-black max-w-3xl">
          LESS COMPLEX.
          <br />
          MORE INTENTIONAL.
        </h2>

        <div className="relative my-4 flex-1 min-h-[280px] w-full overflow-hidden bg-neutral-200">
          <Image
            src="/images/cardriving.jpg"
            alt="AURA Driving Dynamics"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-12 border-t border-black/10 pt-4">
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-black">
              01 / DESIGN
            </h3>
            <p className="font-body mt-1 max-w-[320px] text-xs leading-relaxed text-black/60">
              Every surface is shaped with purpose, balancing visual character with aerodynamic efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-black">
              02 / ENGINEERING
            </h3>
            <p className="font-body mt-1 max-w-[320px] text-xs leading-relaxed text-black/60">
              Technology should solve real problems, not exist simply for the sake of technology.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-black">
              03 / EXPERIENCE
            </h3>
            <p className="font-body mt-1 max-w-[320px] text-xs leading-relaxed text-black/60">
              From the first interaction to every journey after it, the vehicle should feel intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}