"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ChargingSequence() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !videoRef.current) return;

      const video = videoRef.current;
      let targetTime = 0;
      let animationFrameId: number;
      let isSeeking = false;

      // Ensure video is paused so native playback doesn't fight scrubbing
      video.pause();

      // Smooth interpolation loop (60fps/120fps lerp)
      const render = () => {
        if (video && video.duration && !isNaN(video.duration)) {
          const currentTime = video.currentTime;
          const delta = targetTime - currentTime;

          if (Math.abs(delta) > 0.003 && !isSeeking) {
            isSeeking = true;
            // Smooth exponential smoothing factor
            video.currentTime = currentTime + delta * 0.16;
            isSeeking = false;
          }
        }
        animationFrameId = requestAnimationFrame(render);
      };

      const initScrollScrub = () => {
        const duration = video.duration || 1;

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (video && !isNaN(video.duration) && video.duration > 0) {
              targetTime = self.progress * video.duration;
            }
          },
        });

        // Start render loop
        render();
      };

      if (video.readyState >= 1) {
        initScrollScrub();
      } else {
        video.addEventListener("loadedmetadata", initScrollScrub, { once: true });
      }

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="charging-sequence"
      className="relative w-full h-screen bg-black overflow-hidden select-none"
    >
      <video
        ref={videoRef}
        src="/media/charging.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="w-full h-full object-cover object-center pointer-events-none"
      />
    </section>
  );
}