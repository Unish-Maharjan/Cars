"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const specs = [
  { label: "0–100 km/h", value: 3.8, decimals: 1, unit: "sec" },
  { label: "Top speed", value: 200, decimals: 0, unit: "km/h" },
  { label: "Range", value: 610, decimals: 0, unit: "km" },
  { label: "Battery", value: 100, decimals: 0, unit: "kWh" },
];

export default function Performance() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !videoWrapperRef.current || !headlineRef.current || !specsRef.current) return;

      const videoWrapper = videoWrapperRef.current;
      const shade = shadeRef.current;
      const headline = headlineRef.current;
      const specsEl = specsRef.current;
      const leftLines = headline.querySelectorAll<HTMLElement>("[data-line='left']");
      const rightLines = headline.querySelectorAll<HTMLElement>("[data-line='right']");
      const items = specsEl.querySelectorAll<HTMLElement>("[data-spec]");
      const numbers = specsEl.querySelectorAll<HTMLElement>("[data-count]");

      // Initial States: Centered small window with opacity 0
      gsap.set(videoWrapper, {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "1vw",
        minWidth: "1px",
        height: "1px",
        borderRadius: "0px",
        opacity: 0,
      });

      gsap.set(shade, { opacity: 0 });
      gsap.set(items, { opacity: 0, y: 30 });
      gsap.set([leftLines, rightLines], { opacity: 1, xPercent: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      // 1. Headline splits sideways to left and right
      tl.to(
        leftLines,
        {
          xPercent: -65,
          opacity: 0,
          duration: 0.45,
          stagger: 0.05,
        },
        0
      );

      tl.to(
        rightLines,
        {
          xPercent: 65,
          opacity: 0,
          duration: 0.45,
          stagger: 0.05,
        },
        0
      );

      // 2. Video window fades in at small centered size
      tl.to(
        videoWrapper,
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0
      );

      // 3. Small video expands outward to full screen (100vw x 100vh)
      tl.to(
        videoWrapper,
        {
          width: "100vw",
          minWidth: "100vw",
          height: "100vh",
          borderRadius: "0px",
          duration: 0.85,
          ease: "power2.inOut",
        },
        0.2
      );

      // 4. Dark gradient shade fades in for readability
      if (shade) {
        tl.to(
          shade,
          {
            opacity: 1,
            duration: 0.45,
          },
          0.8
        );
      }

      // 5. Specifications rise up from bottom
      tl.to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.9
      );

      // 6. Spec numbers count up smoothly
      numbers.forEach((el, i) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const counter = { n: 0 };
        el.textContent = (0).toFixed(decimals);

        tl.to(
          counter,
          {
            n: target,
            duration: 0.7,
            ease: "power1.out",
            onUpdate: () => {
              el.textContent = counter.n.toFixed(decimals);
            },
          },
          0.95 + i * 0.08
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="performance"
      aria-label="Performance"
      className="relative h-screen w-full overflow-hidden bg-white text-black select-none"
    >
      {/* Centered video wrapper: starts small (opacity 0) and expands outward to 100vw x 100vh */}
      <div
        ref={videoWrapperRef}
        className="absolute z-0 overflow-hidden shadow-2xl will-change-[transform,width,height,opacity]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover object-center pointer-events-none"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bottom gradient for spec readability */}
      <div
        ref={shadeRef}
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0"
      />

      {/* Centered Headline in the Middle of Viewport */}
      <div
        ref={headlineRef}
        className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.88] tracking-tight text-black">
          <span data-line="left" className="block will-change-transform">Power</span>
          <span data-line="right" className="block will-change-transform">Without</span>
          <span data-line="left" className="block will-change-transform">Compromise.</span>
        </h2>
      </div>

      {/* Specs (revealed after video is full screen) */}
      <div
        ref={specsRef}
        className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-end p-8 md:p-16"
      >
        <dl className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {specs.map((item, index) => (
            <div
              key={item.label}
              data-spec
              className={`flex flex-col ${
                index !== 0 ? "md:border-l md:border-white/25 md:pl-8" : ""
              }`}
            >
              <dt className="text-xs font-medium tracking-wide text-white/70 uppercase">
                {item.label}
              </dt>
              <dd className="font-numbers mt-1 flex items-baseline gap-2 text-white">
                <span
                  data-count={item.value}
                  data-decimals={item.decimals}
                  className="text-4xl font-bold tabular-nums tracking-tight md:text-5xl"
                >
                  {item.value.toFixed(item.decimals)}
                </span>
                <span className="text-sm font-medium text-white/70">
                  {item.unit}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}