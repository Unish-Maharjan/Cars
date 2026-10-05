"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "MODELS", href: "/models" },
    { label: "TECHNOLOGY", href: "/#technology" },
    { label: "PERFORMANCE", href: "/#performance" },
    { label: "CONTACT US", href: "/contact" },
  ];

  useGSAP(
    () => {
      if (!footerRef.current || !videoWrapperRef.current) return;

      // Drop-down animation from top when scrolling into the footer
      gsap.fromTo(
        videoWrapperRef.current,
        {
          yPercent: -100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full h-screen min-h-screen max-h-screen bg-white text-black border-t border-black/10 overflow-hidden flex flex-col justify-between py-6 sm:py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8 h-full flex flex-col justify-between">
        
        {/* Top Row: Editorial Headline on Left + Video on Top Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-2 flex-1 min-h-0">
          
          {/* LEFT: Brand Copy & Headlines */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div>
              <span className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.35em] text-black/40 uppercase block mb-3">
                Next Generation Electric Mobility
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-[0.94]">
                DRIVE INTO
                <br />
                THE FUTURE.
              </h2>
              <p className="font-body mt-4 max-w-lg text-xs sm:text-sm leading-relaxed text-black/60 font-normal">
                Redefining electric performance through uncompromising engineering,
                intelligent autonomy, and pure sustainable architecture.
              </p>
            </div>
          </div>

          {/* RIGHT: Top-Right Video Container (Full Height at Right Position with Edge Blending) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full self-stretch relative min-h-0">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-neutral-200/40 rounded-3xl blur-2xl -z-10 transform scale-95" />

            <div
              ref={videoWrapperRef}
              className="relative w-full max-w-[540px] h-full min-h-[220px] sm:min-h-[260px] 
            lg:min-h-[300px] rounded-3xl overflow-hidden 
            [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] 
            [-webkit-mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] -mt-12 will-change-transform"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="w-[80%] h-full object-cover object-center"
              >
                <source src="/media/footer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

        {/* Middle: Horizontal Navigation Bar */}
        <div className="pt-6 pb-6 border-t border-black/10 mt-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-black/40 uppercase">
              EXPLORE
            </span>
            <nav className="flex flex-wrap gap-6 sm:gap-10">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold tracking-[0.2em] text-black/75 uppercase transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Row: Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-black/10 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] text-black/50 uppercase gap-3">
          <span className="font-numbers">
            © {new Date().getFullYear()} AURA AUTOMOTIVE. ALL RIGHTS RESERVED.
          </span>
          <Link href="https://webxnepal.com" className="flex items-center gap-1.5 transition-opacity hover:opacity-100">
            Designed & Developed by
            <Image
              src="/logo/webx-logo.svg"
              alt="Creativeweb"
              width={120}
              height={30}
              className="h-4 w-auto inline-block filter invert opacity-70"
            />
          </Link>
        </div>

      </div>
    </footer>
  );
}