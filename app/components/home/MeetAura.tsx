"use client";

import React, { useRef } from "react";

export default function MeetAura() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "90+", label: "YEARS OF", sublabel: "ENGINEERING" },
    { value: "500+", label: "KM", sublabel: "RANGE" },
    { value: "10K", label: "VEHICLES", sublabel: "DELIVERED" },
  ];

  return (
    <section
      ref={aboutSectionRef}
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-x-clip overflow-y-visible bg-white py-16 sm:py-20 border-t border-black/10 z-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[75vh]">
          
          {/* Left Column: Editorial Headline & Story */}
          <div ref={contentRef} className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-black leading-[1.02]">
              ENGINEERED FOR
              <br />
              WHAT COMES
              <br />
              NEXT.
            </h2>

            <p className="font-body mt-6 text-sm sm:text-base font-normal text-black/70 leading-relaxed max-w-sm">
              AURA represents the culmination of advanced aeronautical aerodynamics, sustainable
              material architecture, and proprietary electric powertrains. Every contour is
              sculpted with intention, balancing timeless luxury with ultra-efficient performance.
            </p>
          </div>

          {/* Center Column: Open Center Stage for the animated Car to arrive */}
          <div className="lg:col-span-4 relative flex justify-center items-center h-[420px] sm:h-[500px] lg:h-[720px] pointer-events-none z-20 overflow-visible" />

          {/* Right Column: Key Statistics & Metrics */}
          <div ref={statsRef} className="lg:col-span-4 flex flex-col justify-center gap-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-black/10 pt-8 lg:pt-0">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-numbers text-3xl sm:text-4xl font-bold text-black tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1.5 text-[10px] font-medium text-black/60 tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
                <span className="text-[10px] font-medium text-black/60 tracking-[0.2em] uppercase">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}