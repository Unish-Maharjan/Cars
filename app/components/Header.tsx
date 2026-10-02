"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 60) {
        // Scrolling down -> hide header
        setIsVisible(false);
      } else {
        // Scrolling up or near top -> show header
        setIsVisible(true);
      }
      lastY = currentY > 0 ? currentY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "MODELS", href: "#models" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold tracking-[0.25em] text-black uppercase">
            AURA
          </span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-black/40 uppercase">
            EV
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className="flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.2em] text-black/70 uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Utility Links */}
        <div className="flex items-center gap-6">
          <Link
            href="#models"
            className="text-[11px] font-medium tracking-[0.2em] text-black/70 uppercase"
          >
            CONFIGURE
          </Link>
          <Link
            href="#contact"
            className="border border-black px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-black uppercase"
          >
            TEST DRIVE
          </Link>
        </div>
      </div>
    </header>
  );
}