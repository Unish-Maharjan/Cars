"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroCar from "./HeroCar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // 1. Initial state setup (Car positioned from the header direction downwards)
      gsap.set(carWrapperRef.current, { yPercent: -80, opacity: 0.8, scale: 0.96 });
      gsap.set(shadowRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(".animate-left", { opacity: 0, x: -35 });
      gsap.set(".animate-right", { opacity: 0, x: 35 });

      // 2. Initial Page Entrance Animation: Car arrives from the header facing downwards
      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl.to(carWrapperRef.current, {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      });

      introTl.to(
        shadowRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1.0"
      );

      // Stagger in left editorial column
      introTl.to(
        ".animate-left",
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Stagger in right editorial column
      introTl.to(
        ".animate-right",
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // 3. SCROLL TIMELINE: CAR DRIVES DOWNWARDS TO MEETAURA AS USER SCROLLS
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      // Hero left and right text fades away
      scrollTl.to(
        leftColRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 35,
          ease: "power2.inOut",
        },
        0
      );

      scrollTl.to(
        rightColRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 35,
          ease: "power2.inOut",
        },
        0
      );

      // Car drives continuously DOWNWARDS into MeetAura
      scrollTl.to(
        carWrapperRef.current,
        {
          yPercent: 115,
          scale: 0.95,
          opacity: 1,
          duration: 85,
          ease: "none",
        },
        10
      );

      scrollTl.to(
        shadowRef.current,
        {
          scale: 0.85,
          opacity: 0.35,
          yPercent: 85,
          duration: 85,
          ease: "none",
        },
        10
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen bg-white text-[#111315] overflow-x-clip overflow-y-visible flex flex-col justify-center select-none py-10 lg:py-0 z-30"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[90vh] relative z-10 overflow-visible">
        
        {/* LEFT COLUMN: HERO INFORMATION */}
        <div
          ref={leftColRef}
          className="lg:col-span-4 flex flex-col justify-center items-start z-30 pt-6 lg:pt-0 will-change-transform"
        >
          {/* Main Headline */}
          <h1 className="animate-left text-5xl sm:text-6xl lg:text-7xl font-bold text-[#111315] uppercase font-sans mb-4">
            MINI
            <span className="block font-extrabold text-[#111315]">ELECTRIC</span>
          </h1>

          {/* Clean Automotive Copy */}
          <p className="animate-left text-sm sm:text-base text-[#555B66] max-w-sm font-normal">
            Next-generation all-electric performance. Engineered with precision, agility, and pure electric torque.
          </p>
        </div>

        {/* CENTER COLUMN: DOWNWARD FACING CAR (Drives downward across boundary into MeetAura) */}
        <div className="lg:col-span-4 relative flex justify-center items-center pointer-events-none z-50 overflow-visible">
          <HeroCar
            carWrapperRef={carWrapperRef}
            shadowRef={shadowRef}
            facing="down"
            className="w-full flex justify-center items-center"
          />
        </div>

        {/* RIGHT COLUMN: EDITORIAL DETAILS */}
        <div
          ref={rightColRef}
          className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right z-30 pt-6 lg:pt-0 will-change-transform"
        >
          <div className="animate-right max-w-sm flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111315] uppercase
             tracking-tight leading-snug">
              Instant Torque.
              <br />
              Zero Compromise.
            </h3>
            <p className="text-sm text-[#555B66] font-normal leading-relaxed">
              Crafted for responsive handling, aerodynamically balanced weight distribution, and pure electric freedom.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
