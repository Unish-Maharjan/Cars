"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Interior() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Background Image Layer Refs
  const bg1Ref = useRef<HTMLDivElement>(null); // Wide cabin overview (carinterior.jpg)
  const bg2Ref = useRef<HTMLDivElement>(null); // Driver cockpit / steering / screens (carinside.avif)
  const bg3Ref = useRef<HTMLDivElement>(null); // Executive seat upholstery / craftsmanship (carseat.avif)

  // Scene Content Refs
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const hotspot1Ref = useRef<HTMLDivElement>(null);
  const hotspot2Ref = useRef<HTMLDivElement>(null);
  const hotspot3Ref = useRef<HTMLDivElement>(null);
  const scene5Ref = useRef<HTMLDivElement>(null);
  const scene6Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Initial State Setup
      gsap.set(bg1Ref.current, {
        opacity: 1,
        scale: 1.18,
        xPercent: 0,
        yPercent: 0,
        transformOrigin: "center center",
      });

      gsap.set(bg2Ref.current, {
        opacity: 0,
        scale: 1.12,
        xPercent: 0,
        yPercent: 0,
        transformOrigin: "center center",
      });

      gsap.set(bg3Ref.current, {
        opacity: 0,
        scale: 1.1,
        xPercent: 0,
        yPercent: 0,
        transformOrigin: "center center",
      });

      gsap.set(overlayRef.current, { opacity: 0.55 });
      gsap.set(scene1Ref.current, { opacity: 1, y: 0, scale: 1 });
      gsap.set(scene3Ref.current, { opacity: 0, y: 25 });
      gsap.set([hotspot1Ref.current, hotspot2Ref.current, hotspot3Ref.current], {
        opacity: 0,
        y: 20,
        scale: 0.94,
      });
      gsap.set(scene5Ref.current, { opacity: 0, y: 35 });
      gsap.set(scene6Ref.current, { opacity: 0, y: 25 });

      // 2. Master ScrollTrigger Timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=650%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power1.inOut" },
      });

      // ----------------------------------------------------
      // TIMELINE MAP: (0 to 100 timeline units)
      // ----------------------------------------------------

      // [0 -> 18] SCENE 01: "STEP INSIDE" -> Camera moves into the wide cabin (bg1)
      masterTl.to(
        bg1Ref.current,
        {
          scale: 1.08,
          duration: 18,
        },
        0
      );

      masterTl.to(
        overlayRef.current,
        {
          opacity: 0.4,
          duration: 18,
        },
        0
      );

      // [18 -> 32] SCENE 02: INTERIOR REVEAL (Step Inside exits, bg1 expands to 1.0)
      masterTl.to(
        scene1Ref.current,
        {
          opacity: 0,
          y: -40,
          scale: 0.96,
          duration: 12,
        },
        18
      );

      masterTl.to(
        bg1Ref.current,
        {
          scale: 1.0,
          duration: 14,
        },
        18
      );

      masterTl.to(
        overlayRef.current,
        {
          opacity: 0.25,
          duration: 14,
        },
        18
      );

      // [30 -> 45] SCENE 03: FULL CABIN ("EVERYTHING, WITHIN REACH")
      masterTl.to(
        scene3Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 10,
        },
        28
      );

      masterTl.to(
        scene3Ref.current,
        {
          opacity: 0,
          y: -20,
          duration: 8,
        },
        42
      );

      // [44 -> 54] BG TRANSITION: Wide Cabin (bg1) -> Driver Cockpit Focus (bg2)
      masterTl.to(
        bg1Ref.current,
        {
          opacity: 0,
          scale: 0.98,
          duration: 12,
        },
        44
      );

      masterTl.to(
        bg2Ref.current,
        {
          opacity: 1,
          scale: 1.04,
          duration: 12,
        },
        44
      );

      // [46 -> 74] SCENE 04: INTERIOR HOTSPOTS (Sequential Activation over Driver Cockpit)
      // Hotspot 1: DRIVER, CONNECTED
      masterTl.to(
        hotspot1Ref.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 7,
        },
        47
      );

      // Hotspot 2: COMFORT, REDEFINED (Hotspot 1 dims slightly)
      masterTl.to(
        hotspot1Ref.current,
        {
          opacity: 0.3,
          duration: 6,
        },
        56
      );

      masterTl.to(
        hotspot2Ref.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 7,
        },
        56
      );

      // Hotspot 3: QUIET BY DESIGN (Hotspot 2 dims)
      masterTl.to(
        hotspot2Ref.current,
        {
          opacity: 0.3,
          duration: 6,
        },
        65
      );

      masterTl.to(
        hotspot3Ref.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 7,
        },
        65
      );

      // Hotspots Exit
      masterTl.to(
        [hotspot1Ref.current, hotspot2Ref.current, hotspot3Ref.current],
        {
          opacity: 0,
          y: -15,
          duration: 8,
        },
        74
      );

      // [74 -> 86] SCENE 05: DRIVER'S PERSPECTIVE ("THIS IS YOUR SPACE")
      masterTl.to(
        bg2Ref.current,
        {
          scale: 1.08,
          duration: 12,
        },
        74
      );

      masterTl.to(
        overlayRef.current,
        {
          opacity: 0.45,
          duration: 12,
        },
        74
      );

      masterTl.to(
        scene5Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 10,
        },
        75
      );

      masterTl.to(
        scene5Ref.current,
        {
          opacity: 0,
          y: -30,
          duration: 8,
        },
        85
      );

      // [84 -> 94] BG TRANSITION: Cockpit (bg2) -> Executive Seating / Materials (bg3)
      masterTl.to(
        bg2Ref.current,
        {
          opacity: 0,
          scale: 1.02,
          duration: 10,
        },
        84
      );

      masterTl.to(
        bg3Ref.current,
        {
          opacity: 1,
          scale: 1.02,
          duration: 10,
        },
        84
      );

      // [88 -> 100] SCENE 06: MATERIAL & TECHNOLOGY DETAILS
      masterTl.to(
        bg3Ref.current,
        {
          scale: 1.0,
          duration: 12,
        },
        88
      );

      masterTl.to(
        overlayRef.current,
        {
          opacity: 0.5,
          duration: 12,
        },
        88
      );

      masterTl.to(
        scene6Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 10,
        },
        88
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="interior"
      className="relative w-full min-h-screen bg-[#070707] text-white overflow-hidden select-none"
    >
      {/* Pinned Cinematic Stage */}
      <div ref={stageRef} className="relative w-full h-full overflow-hidden flex items-center justify-center">      

        {/* BACKGROUND IMAGE LAYERS (Scroll-Driven Crossfades) */}

        {/* Layer 1: Wide Cabin Overview (Scene 1 & 2 & 3) */}
        <div ref={bg1Ref} className="absolute inset-0 w-full h-full will-change-transform pointer-events-none">
          <Image
            src="/images/carinterior.jpg"
            alt="AURA Cabin Architecture"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Layer 2: Driver Cockpit & Tech Focus (Scene 4 & 5) */}
        <div ref={bg2Ref} className="absolute inset-0 w-full h-full will-change-transform pointer-events-none">
          <Image
            src="/images/carinside.avif"
            alt="AURA Cockpit and Driver Console"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Layer 3: Executive Seating & Craftsmanship (Scene 6) */}
        <div ref={bg3Ref} className="absolute inset-0 w-full h-full will-change-transform pointer-events-none">
          <Image
            src="/images/carseat.avif"
            alt="AURA Executive Seating Craftsmanship"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Cinematic Vignette / Overlay Layer for Contrast & Depth */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80 pointer-events-none transition-opacity duration-300"
        />

        {/* Subtle Edge Ambient Radial Shading */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />

        {/* SCENE 01: STEP INSIDE */}
        <div
          ref={scene1Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none will-change-transform"
        >
          <span className="font-heading text-xs sm:text-sm font-semibold tracking-[0.35em] text-white/60 uppercase mb-4">
            Interior Architecture
          </span>
          <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white leading-none">
            STEP INSIDE
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-white/75 mt-6 max-w-lg font-light tracking-wide">
            Designed around the way you move.
          </p>
        </div>
        {/* SCENE 03: FULL CABIN STATEMENT */}  
        <div
          ref={scene3Ref}
          className="absolute top-12 md:top-20 left-6 sm:left-12 lg:left-20 z-20 pointer-events-none max-w-md will-change-transform"
        >
          <span className="font-heading text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-white/50 uppercase block mb-2">
            The Living Space
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight uppercase leading-snug">
            EVERYTHING,
            <br />
            WITHIN REACH.
          </h3>
          <p className="font-body text-xs sm:text-sm text-white/70 mt-3 leading-relaxed font-light">
            An interior shaped around comfort, clarity and control.
          </p>
        </div>

        {/* SCENE 04: INTERIOR HOTSPOTS */}
        {/* HOTSPOT 01: Driver Connected (Cockpit / Digital Cluster) */}
        <div
          ref={hotspot1Ref}
          className="absolute top-[28%] sm:top-[34%] left-[8%] sm:left-[16%] lg:left-[22%] z-20 pointer-events-none max-w-[240px] sm:max-w-[280px] will-change-transform"
        >
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/20 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <div className="w-10 h-[1px] bg-gradient-to-r from-white/80 to-transparent" />
            </div>
            <div className="pl-1">
              <h4 className="font-heading text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                DRIVER, CONNECTED
              </h4>
              <p className="font-body text-[11px] sm:text-xs text-white/70 mt-1 leading-relaxed font-light">
                Everything you need, exactly where you need it.
              </p>
            </div>
          </div>
        </div>

        {/* HOTSPOT 02: Comfort Redefined (Seating & Ergonomics) */}
        <div
          ref={hotspot2Ref}
          className="absolute bottom-[24%] sm:bottom-[28%] left-[10%] sm:left-[44%] lg:left-[48%] z-20 pointer-events-none max-w-[240px] sm:max-w-[280px] will-change-transform"
        >
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/20 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <div className="w-10 h-[1px] bg-gradient-to-r from-white/80 to-transparent" />
            </div>
            <div className="pl-1">
              <h4 className="font-heading text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                COMFORT, REDEFINED
              </h4>
              <p className="font-body text-[11px] sm:text-xs text-white/70 mt-1 leading-relaxed font-light">
                Every surface designed around the people inside.
              </p>
            </div>
          </div>
        </div>

        {/* HOTSPOT 03: Quiet By Design (Acoustics & Ambient Architecture) */}
        <div
          ref={hotspot3Ref}
          className="absolute top-[26%] sm:top-[30%] right-[8%] sm:right-[14%] lg:right-[18%] z-20 pointer-events-none max-w-[240px] sm:max-w-[280px] will-change-transform"
        >
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <div className="flex items-center gap-2 mb-2 flex-row lg:flex-row-reverse">
              <span className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/20 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <div className="w-10 h-[1px] bg-gradient-to-r lg:bg-gradient-to-l from-white/80 to-transparent" />
            </div>
            <div className="pr-1 lg:pl-0">
              <h4 className="font-heading text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                QUIET BY DESIGN
              </h4>
              <p className="font-body text-[11px] sm:text-xs text-white/70 mt-1 leading-relaxed font-light">
                A calmer space for every journey.
              </p>
            </div>
          </div>
        </div>

        {/* SCENE 05: DRIVER'S PERSPECTIVE STATEMENT */}

        <div
          ref={scene5Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none will-change-transform"
        >
          <span className="font-heading text-xs sm:text-sm font-medium tracking-[0.3em] text-white/50 uppercase mb-3">
            Pure Immersion
          </span>
          <h3 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-white leading-none">
            THIS IS YOUR SPACE.
          </h3>
          <p className="font-body text-sm sm:text-base md:text-lg text-white/80 mt-5 max-w-md font-light tracking-wide">
            Technology disappears into the experience.
          </p>
        </div>

       
        {/* SCENE 06: MATERIAL & TECHNOLOGY DETAILS */}
  
        <div
          ref={scene6Ref}
          className="absolute bottom-10 sm:bottom-14 left-0 right-0 z-20 px-6 sm:px-12 lg:px-20 pointer-events-none will-change-transform"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/15 pt-6 sm:pt-8 backdrop-blur-sm bg-black/20 sm:bg-transparent rounded-2xl sm:rounded-none p-4 sm:p-0">
            {/* Label 01 */}
            <div className="flex flex-col">
              <span className="font-heading text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
                PREMIUM MATERIALS
              </span>
              <p className="font-body text-xs sm:text-sm text-white/65 mt-1.5 font-light leading-relaxed">
                Every surface considered.
              </p>
            </div>

            {/* Label 02 */}
            <div className="flex flex-col">
              <span className="font-heading text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
                INTUITIVE CONTROL
              </span>
              <p className="font-body text-xs sm:text-sm text-white/65 mt-1.5 font-light leading-relaxed">
                Technology that stays out of the way.
              </p>
            </div>

            {/* Label 03 */}
            <div className="flex flex-col">
              <span className="font-heading text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
                AMBIENT COMFORT
              </span>
              <p className="font-body text-xs sm:text-sm text-white/65 mt-1.5 font-light leading-relaxed">
                A cabin designed to feel effortless.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
