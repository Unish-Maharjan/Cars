"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroCarProps {
  carWrapperRef?: React.RefObject<HTMLDivElement | null>;
  shadowRef?: React.RefObject<HTMLDivElement | null>;
  initialSrc?: string;
  fallbackSrc?: string;
  className?: string;
  facing?: "up" | "down";
}

export default function HeroCar({
  carWrapperRef,
  shadowRef,
  initialSrc = "/images/hero.png",
  fallbackSrc = "/images/herop.png",
  className = "",
  facing = "down",
}: HeroCarProps) {
  const [imgSrc, setImgSrc] = useState(initialSrc);

  return (
    <div
      className={`lg:col-span-4 relative flex justify-center items-center h-[420px] sm:h-[500px] lg:h-[720px] pointer-events-none z-20 overflow-visible ${className}`}
    >
      {/* Ambient Directional Floor Shadows */}
      <div
        ref={shadowRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {/* Primary soft shadow cast */}
        <div
          className="w-[320px] sm:w-[420px] h-[520px] sm:h-[620px] rounded-full blur-[45px] translate-x-4 translate-y-6"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(30, 35, 45, 0.35) 0%, rgba(30, 35, 45, 0.1) 50%, transparent 75%)",
          }}
        />
        {/* Direct ground contact shadow */}
        <div
          className="absolute w-[240px] sm:w-[300px] h-[460px] sm:h-[540px] rounded-full blur-[24px] translate-x-2 translate-y-3"
          style={{
            background: "rgba(10, 15, 25, 0.25)",
          }}
        />
      </div>

      {/* Car Image Wrapper (facing downwards) */}
      <div
        ref={carWrapperRef}
        className={`relative w-[280px] sm:w-[350px] md:w-[390px] lg:w-[430px] xl:w-[450px] max-w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] will-change-transform flex justify-center items-center pb-0 ${
          facing === "down" ? "rotate-180" : ""
        }`}
      >
        <Image
          src={imgSrc}
          alt="Electric Vehicle Top Down"
          width={720}
          height={1440}
          priority
          onError={() => {
            if (imgSrc !== fallbackSrc) {
              setImgSrc(fallbackSrc);
            }
          }}
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
