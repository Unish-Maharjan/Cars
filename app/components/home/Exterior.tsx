import React from "react";
import Image from "next/image";

export default function Exterior() {
  const details = [
    {
      num: "01",
      title: "AERODYNAMIC SILHOUETTE",
      desc: "A drag coefficient of 0.21 Cd minimizes resistance while extending highway range and high-speed stability.",
    },
    {
      num: "02",
      title: "SIGNATURE LIGHTING",
      desc: "Ultra-thin continuous matrix LED lightbar creates an unmistakable visual signature.",
    },
    {
      num: "03",
      title: "PRECISION SURFACES",
      desc: "Flush surfaces, integrated air curtains, and concealed sensors create uninterrupted exterior flow.",
    },
  ];

  return (
    <section
      id="design"
      className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#FAFAFA] py-8 border-t border-black/10"
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-8">
        {/* Centered Editorial Header */}
        <div className="flex flex-col items-center text-center mx-auto max-w-[700px]">
          <h2 className="font-heading mt-2 text-4xl font-bold uppercase tracking-tight leading-[0.92] text-black">
            SCULPTED BY AIR.
          </h2>
          <p className="font-body mt-2 max-w-[560px] text-xs leading-relaxed text-black/70">
            The exterior combines aerodynamic efficiency with a distinctive visual identity. Every
            surface is shaped to move air more efficiently while creating a clear visual signature.
          </p>
        </div>

        {/* Cinematic Vehicle Image (Fills available space within 100vh) */}
        <div className="relative my-3 flex-1 min-h-[280px] w-full overflow-hidden bg-neutral-200">
          <Image
            src="/images/behind.avif"
            alt="AURA Exterior Aerodynamic Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* 3-Column Specifications Row */}
        <div className="mt-3 grid grid-cols-3 gap-8 border-t border-black/10 pt-4">
          {details.map((item) => (
            <div key={item.num} className="flex flex-col items-center text-center">
              <h3 className="font-heading mt-1 text-xs font-bold uppercase tracking-wide text-black">
                {item.title}
              </h3>
              <p className="font-body mt-1 max-w-[320px] text-xs leading-relaxed text-black/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
