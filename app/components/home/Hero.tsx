"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  const specs = [
    { label: "RANGE", value: "610 KM" },
    { label: "TOP SPEED", value: "200 KM/H" },
    { label: "POWER", value: "500 HP" },
    { label: "BATTERY", value: "100 KWH" },
  ];

  useGSAP(
    () => {
      if (!heroRef.current || !carRef.current) return;

      gsap.to(carRef.current, {
        x: -1200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          pin: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-white pt-24 pb-8"
    >
      {/* Main Composition: Left-Aligned Editorial Headline matching Header Logo */}
      <div className="mx-auto my-auto flex w-full max-w-full flex-col items-center px-8">
        {/* Large Editorial Headline */}
        <div className="text-left">
          <h1 className="font-heading text-[12vw] text-center font-bold leading-[0.88] tracking-[-0.04em]
           text-black uppercase select-none">
            MOVE
            <br />
            WITHOUT
            <br />
            LIMITS
          </h1>
        </div>

        {/* Vehicle Image (Animates to the left on scroll) */}
        <div
          ref={carRef}
          className="relative -mt-[14vw] self-center z-10 w-full max-w-[1000px] h-[360px] will-change-transform"
        >
          <Image
            src="/images/car.png"
            alt="AURA Electric Vehicle"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}