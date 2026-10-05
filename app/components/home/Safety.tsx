import React from "react";
import Image from "next/image";

export default function Safety() {
  const safetyFeatures = [
    {
      title: "ADVANCED DRIVER ASSISTANCE",
      desc: "Comprehensive active collision mitigation, blind-spot monitoring, and lane-centering systems operating in real time.",
    },
    {
      title: "360° SENSOR COVERAGE",
      desc: "Surround optical arrays and ultrasonic sensors creating a continuous defensive perimeter around the vehicle.",
    },
    {
      title: "MULTI-AIRBAG SYSTEM",
      desc: "Curtain and front dual-stage airbags engineered to deploy selectively based on occupant position and impact vectors.",
    },
    {
      title: "VEHICLE STABILITY SYSTEM",
      desc: "Active torque vectoring and electronic stability control providing instantaneous traction response across all surfaces.",
    },
  ];

  return (
    <section id="safety" className="w-full bg-white py-10 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-heading mt-3 text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
            PROTECTION,
            <br />
            ENGINEERED IN.
          </h2>
          <p className="font-body mt-3 text-sm md:text-base leading-relaxed text-black/70">
            Engineered with a high-strength aluminum-steel cell and dedicated crumple zones to deliver
            maximum passenger protection under every conceivable driving condition.
          </p>
        </div>

        {/* Vehicle Safety Visual */}
        <div className="relative my-8 flex h-[280px] md:h-[360px] w-full items-center justify-center border border-black/10 bg-[#FAFAFA]">
          <div className="relative h-full w-full max-w-[900px]">
            <Image
              src="/images/car.png"
              alt="AURA High-Strength Safety Architecture"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 4 Minimal Safety Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-black/10 pt-8">
          {safetyFeatures.map((item) => (
            <div key={item.title} className="flex flex-col">
              <h3 className="font-heading mt-1.5 text-sm font-bold uppercase tracking-wider text-black">
                {item.title}
              </h3>
              <p className="font-body mt-1.5 text-xs leading-relaxed text-black/65">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
