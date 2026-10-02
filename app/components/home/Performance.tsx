"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Performance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  const specs = [
    { label: "RANGE", value: "610 KM" },
    { label: "ACCELERATION 0–100", value: "3.8 SEC" },
    { label: "TOP SPEED", value: "200 KM/H" },
    { label: "BATTERY CAPACITY", value: "100 KWH" },
  ];

  useGSAP(
    () => {
      if (!containerRef.current || !videoWrapperRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Expand video container to full viewport
      tl.to(
        videoWrapperRef.current,
        {
          width: "100vw",
          height: "100vh",
          maxWidth: "100vw",
          borderRadius: 0,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out top headline slightly as video expands to full screen
      if (headlineRef.current) {
        tl.to(
          headlineRef.current,
          {
            opacity: 0,
            y: -40,
            ease: "power2.inOut",
          },
          0
        );
      }

      // Keep specs clean and slide them into a refined overlay at full screen
      if (specsRef.current) {
        tl.to(
          specsRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
          },
          0.3
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white text-black"
    >
      {/* Editorial Headline (Fades smoothly on scroll) */}
      <div
        ref={headlineRef}
        className="absolute top-12 z-20 flex flex-col items-center text-center px-8"
      >
        <h2 className="font-heading mt-3 text-5xl font-bold uppercase tracking-tight leading-[0.95] text-black">
          POWER WITHOUT COMPROMISE.
        </h2>
      </div>

      {/* Video Box that Expands to Full Screen */}
      <div
        ref={videoWrapperRef}
        className="relative z-10 flex h-[60vh] w-[90vw] max-w-[1440px] items-center justify-center overflow-hidden bg-black shadow-2xl transition-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

        {/* Specifications Overlay Row (Reveals as it expands) */}
        <div
          ref={specsRef}
          className="absolute bottom-12 left-0 right-0 z-20 mx-auto w-full max-w-[1440px] px-8 opacity-90"
        >
          <div className="grid grid-cols-4 border-t border-white/20 pt-6 backdrop-blur-xs">
            {specs.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col px-6 ${
                  index !== 0 ? "border-l border-white/20" : ""
                }`}
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase">
                  {item.label}
                </span>
                <span className="font-numbers mt-1 text-2xl font-bold tracking-tight text-white uppercase">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
