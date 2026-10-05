import React from "react";
import Image from "next/image";

export default function Technology() {
  const techFeatures = [
    {
      title: "CONNECTED",
      desc: "Seamless digital interaction between driver and vehicle with real-time telemetry and wireless over-the-air updates.",
    },
    {
      title: "INTELLIGENT",
      desc: "Technology designed around the driver's needs, offering intuitive cabin control, automated thermal pre-conditioning, and natural interaction.",
    },
    {
      title: "ADAPTIVE",
      desc: "Systems designed to continuously respond to the road, modulating chassis dynamics and energy distribution in milliseconds.",
    },
  ];

  return (
    <section id="technology" className="w-full bg-[#0E0E0E] py-10 px-8 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-heading mt-3 text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            INTELLIGENCE
            <br />
            IN MOTION.
          </h2>
        </div>

        {/* Showcase Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Display */}
          <div className="lg:col-span-7 relative flex h-[380px] md:h-[440px] w-full flex-col 
          justify-between border border-white/10 bg-[#141414]">  
            <div className="relative my-auto h-full w-full">
              <Image
                src="/images/cardriving.jpg"
                alt="AURA Intelligent Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: 3 Verified Tech Features */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/10">
            {techFeatures.map((item) => (
              <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-heading mt-1.5 text-lg md:text-xl font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
