import React from "react";
import Image from "next/image";

export default function Interior() {
  return (
    <section className="w-full bg-[#FAFAFA] py-10 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-heading mt-4 text-5xl font-bold uppercase tracking-tight text-black">
            COMFORT,
            <br />
            REDEFINED.
          </h2>
        </div>

        {/* Asymmetric Two-Column Composition */}
        <div className="mt-16 grid grid-cols-12 gap-10 items-start">
          {/* Dominant Large Image (Cockpit) */}
          <div className="col-span-8 flex flex-col">
            <div className="relative h-[560px] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/carinside.avif"
                alt="Minimalist EV Interior Cockpit"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Secondary Column: Detailed Image & Narrative */}
          <div className="col-span-4 flex flex-col">
            <div className="relative h-[320px] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/carseat.avif"
                alt="Artisan Leather and Flax Upholstery"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8 border-t border-black/10 pt-8">
              <span className="text-[11px] font-semibold text-black uppercase">
                A SPACE DESIGNED AROUND YOU.
              </span>
              <p className="font-body mt-4 text-sm leading-relaxed text-black/70">
                Every surface, tactile control, and acoustic element is curated to foster a tranquil
                sanctuary. Ambient low-glare illumination and acoustic laminated glass isolate the
                cabin from external disturbances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
