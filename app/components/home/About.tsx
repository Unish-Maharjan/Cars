"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const carImageRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "90+", label: "YEARS OF", sublabel: "ENGINEERING" },
    { value: "500+", label: "KM", sublabel: "RANGE" },
    { value: "10K", label: "VEHICLES", sublabel: "DELIVERED" },
  ];

  useGSAP(
    () => {
      if (!aboutSectionRef.current || !carImageRef.current) return;

      gsap.fromTo(
        carImageRef.current,
        {
          x: -900,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        }
      );
    },
    { scope: aboutSectionRef }
  );

  return (
    <section
      ref={aboutSectionRef}
      id="about"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-white py-20 border-t border-black/10"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="flex flex-col pr-8">
            <h2 className="font-heading mt-6 text-6xl font-bold uppercase leading-[1.02]
             tracking-tight text-black">
              ENGINEERED FOR
              <br />
              WHAT COMES
              <br />
              NEXT.
            </h2>

            <p className="font-body mt-8 max-w-lg text-base font-normal leading-relaxed text-black/70">
              AURA represents the culmination of advanced aeronautical aerodynamics, sustainable
              material architecture, and proprietary electric powertrains. Every contour is
              sculpted with intention, balancing timeless luxury with ultra-efficient performance.
            </p>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-black/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-numbers text-4xl font-bold tracking-tight text-black">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[10px] font-medium tracking-[0.2em] text-black/60 uppercase">
                    {stat.label}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-black/60 uppercase">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Car Image appearing from the left */}
          <div className="relative flex h-[480px] w-full items-center justify-center
           overflow-visible">
            <div
              ref={carImageRef}
              className="relative h-[380px] -scale-x-100 w-full max-w-[750px] will-change-transform"
            >
              <Image
                src="/images/car.png"
                alt="AURA Electric Flagship"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
