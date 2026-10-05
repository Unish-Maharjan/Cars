"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { MODELS } from "./modelsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ModelsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  // Refs for each model's image and text block
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !pinWrapRef.current) return;

      const n = MODELS.length;
      MODELS.forEach((_, i) => {
        const img = imageRefs.current[i];
        const txt = textRefs.current[i];

        if (i === 0) {
          gsap.set(img, { x: "0%", opacity: 1, scale: 1 });
          gsap.set(txt, { x: "0%", opacity: 1, y: 0 });
        } else {
          gsap.set(img, { x: "60%", opacity: 0, scale: 0.92 });
          gsap.set(txt, { x: "0%", opacity: 0, y: 30 });
        }
      });
      indicatorRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0.25, scale: i === 0 ? 1 : 0.7 });
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${n * 120}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });
      const STEP = 1;
      for (let i = 0; i < n - 1; i++) {
        const currentImg = imageRefs.current[i];
        const currentTxt = textRefs.current[i];
        const nextImg = imageRefs.current[i + 1];
        const nextTxt = textRefs.current[i + 1];
        const offset = i * STEP;

        // Current model OUT
        tl.to(
          currentImg,
          { x: "-55%", opacity: 0, scale: 0.92, duration: STEP * 0.5, ease: "power2.inOut" },
          offset
        );
        tl.to(
          currentTxt,
          { opacity: 0, y: -24, duration: STEP * 0.4, ease: "power2.in" },
          offset
        );

        // Next model IN
        tl.fromTo(
          nextImg,
          { x: "60%", opacity: 0, scale: 0.92 },
          { x: "0%", opacity: 1, scale: 1, duration: STEP * 0.5, ease: "power2.out" },
          offset + STEP * 0.5
        );
        tl.fromTo(
          nextTxt,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: STEP * 0.45, ease: "power2.out" },
          offset + STEP * 0.55
        );

        // Progress indicator
        const currentDot = indicatorRefs.current[i];
        const nextDot = indicatorRefs.current[i + 1];

        if (currentDot) {
          tl.to(
            currentDot,
            { opacity: 0.25, scale: 0.7, duration: STEP * 0.3, ease: "power2.out" },
            offset + STEP * 0.5
          );
        }
        if (nextDot) {
          tl.to(
            nextDot,
            { opacity: 1, scale: 1, duration: STEP * 0.3, ease: "power2.out" },
            offset + STEP * 0.5
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0A0A0A]">
      {/* Pinned Stage */}
      <div
        ref={pinWrapRef}
        className="relative h-screen w-full overflow-hidden flex items-center"
      >
        {/* ── Model Layers (stacked, transitioned via GSAP) ── */}
        {MODELS.map((model, i) => (
          <div
            key={model.id}
            className="absolute inset-0 flex items-center"
          >
            {/* Left: Text Block */}
            <div
              ref={(el) => { textRefs.current[i] = el; }}
              className="relative z-20 flex h-full flex-col justify-center px-24 will-change-transform"
              style={{ width: "42%" }}
            >
              {/* Model Name */}
              <h2 className="font-heading mt-3 text-[5vw] font-bold uppercase tracking-tight leading-[0.9] text-white">
                {model.name}
              </h2>
              {/* Description */}
              <p className="font-body mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
                {model.description}
              </p>

              {/* Specifications */}
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
                <div className="flex flex-col">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">
                    RANGE
                  </span>
                  <span className="font-numbers mt-1 text-xl font-bold text-white">
                    {model.spec.range}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">
                    0–100 KM/H
                  </span>
                  <span className="font-numbers mt-1 text-xl font-bold text-white">
                    {model.spec.acceleration}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">
                    BATTERY
                  </span>
                  <span className="font-numbers mt-1 text-xl font-bold text-white">
                    {model.spec.battery}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">
                    TOP SPEED
                  </span>
                  <span className="font-numbers mt-1 text-xl font-bold text-white">
                    {model.spec.topSpeed}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase">
                  Starting from
                </span>
                <span className="font-numbers text-2xl font-bold text-white">
                  {model.price}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={model.href}
                  className="inline-block border border-white/25 px-6 py-3 text-[10px] font-semibold tracking-[0.25em] text-white uppercase"
                >
                  EXPLORE MODEL →
                </Link>
              </div>
            </div>

            {/* Right: Vehicle Image */}
            <div
              ref={(el) => { imageRefs.current[i] = el; }}
              className="absolute right-0 top-0 h-full will-change-transform"
              style={{ width: "66%" }}
              aria-label={`${model.name} — ${model.category}`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={model.image}
                  alt={`${model.name} ${model.category}`}
                  fill
                  priority={i === 0}
                  className={model.isPng ? "object-contain object-center" : "object-cover object-center"}
                  sizes="66vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
