import React from "react";
import Image from "next/image";

export default function Technology() {
  const techPoints = [
    {
      num: "01",
      title: "ADVANCED DRIVER ASSISTANCE",
      desc: "High-resolution LiDAR, radar arrays, and surround-view optical sensors operating on real-time neural computation for Level 3 autonomous driving capabilities.",
    },
    {
      num: "02",
      title: "INTELLIGENT CONNECTIVITY",
      desc: "Continuous over-the-air evolutionary firmware updates with predictive thermal pre-conditioning and natural conversational vehicle intelligence.",
    },
    {
      num: "03",
      title: "NEXT-GENERATION BATTERY",
      desc: "Solid-state cell integration on an ultra-efficient 800V silicon-carbide architecture offering 10% to 80% ultra-fast charging in just 16 minutes.",
    },
  ];

  return (
    <section id="technology" className="w-full bg-[#0E0E0E] py-10 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between pb-12">
          <div>
            <h2 className="font-heading mt-4 text-5xl font-bold uppercase tracking-tight text-white">
              INTELLIGENCE
              <br />
              IN MOTION.
            </h2>
          </div>
        </div>

        {/* Vehicle & Technology Showcase */}
        <div className="mt-5 grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="col-span-7 relative h-[480px] w-full border border-white/10 bg-[#161616] p-8">
            <div className="relative my-auto h-[340px] w-full">
              <Image
                src="/images/car.png"
                alt="AURA Intelligent Architecture"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: 3 Key Tech Points */}
          <div className="col-span-5 flex flex-col divide-y divide-white/10">
            {techPoints.map((item) => (
              <div key={item.num} className="py-8 first:pt-0 last:pb-0">
                <h3 className="font-heading mt-2 text-xl font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="font-body mt-3 text-xs leading-relaxed text-white/60">
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
