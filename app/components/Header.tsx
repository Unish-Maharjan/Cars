"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header background styling threshold
      setIsScrolled(currentScrollY > 20);

      // Always visible at the very top of the page
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else {
        const delta = currentScrollY - lastScrollY.current;
        // Scrolling down -> hide header
        if (delta > 6) {
          setIsVisible(false);
        }
        // Scrolling up -> show header
        else if (delta < -6) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/10 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8 relative">
        {/* Brand Name / Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-[0.25em] text-black uppercase leading-none flex items-center z-10"
        >
          AURA
        </Link>

        {/* Navigation bar: Frames the car at the beginning, smoothly reverts to normal compact spacing when scrolled */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center leading-none transition-all duration-500 ease-in-out">
          {/* Left Nav Group */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="text-[11px] font-medium tracking-[0.18em] text-black/70 uppercase transition-colors hover:text-black leading-none py-1 whitespace-nowrap"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-[11px] font-medium tracking-[0.18em] text-black/70 uppercase transition-colors hover:text-black leading-none py-1 whitespace-nowrap"
            >
              ABOUT US
            </Link>
          </div>

          {/* Dynamic Car Gap: wide at top/beginning to fit vehicle, collapses to normal spacing once scrolled */}
          <div
            className={`shrink-0 pointer-events-none transition-all duration-500 ease-in-out ${
              isScrolled
                ? "w-6 lg:w-8"
                : "w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] xl:w-[520px]"
            }`}
          />

          {/* Right Nav Group */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link
              href="/models"
              className="text-[11px] font-medium tracking-[0.18em] text-black/70 uppercase transition-colors hover:text-black leading-none py-1 whitespace-nowrap"
            >
              MODELS
            </Link>
            <Link
              href="/contact"
              className="text-[11px] font-medium tracking-[0.18em] text-black/70 uppercase transition-colors hover:text-black leading-none py-1 whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/#configure"
            className="border border-black bg-black px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-black/80 leading-none flex items-center"
          >
            CONFIGURE
          </Link>
        </div>
      </div>
    </header>
  );
}