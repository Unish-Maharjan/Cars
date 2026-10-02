import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "ABOUT", href: "#about" },
    { label: "MODELS", href: "#models" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "CAREERS", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  const legalLinks = [
    { label: "PRIVACY POLICY", href: "#" },
    { label: "TERMS OF SERVICE", href: "#" },
    { label: "COOKIE SETTINGS", href: "#" },
    { label: "LEGAL COMPLIANCE", href: "#" },
  ];

  return (
    <footer className="w-full min-h-screen bg-black text-white pt-24 pb-8 border-t
     border-white/10 overflow-hidden flex flex-col justify-between">
      {/* Bottom Oversized Subtle Static Typography */}
        <div className="pt-6 pb-3 text-center select-none pointer-events-none">
          <span className="font-heading block text-[12vw] font-black uppercase leading-[0.8] tracking-[-0.04em]
           text-white/20">
            MOVE FORWARD.
          </span>
        </div>

      <div className="mx-auto w-full max-w-[1440px] px-8 flex-1 flex flex-col justify-between">
        {/* Top Row: Brand & Navigation */}
        <div className="flex items-start justify-between border-b border-white/10 pb-16">
          <div>
            <span className="font-heading text-3xl font-bold tracking-[0.25em] text-white uppercase">
              AURA
            </span>
            <p className="font-body mt-6 max-w-sm text-xs leading-relaxed text-white/50">
              Shaping the future of luxury transportation through uncompromising engineering,
              sustainable design, and intelligent autonomy.
            </p>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-white/40 uppercase">
                NAVIGATION
              </span>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Row: Legal & Copyright */}
        <div className="flex items-center justify-between py-3 border-b border-white/10 text-[10px] 
        font-medium tracking-[0.2em] text-white/40 uppercase">
          <span className="font-numbers">
            © {new Date().getFullYear()} AURA AUTOMOTIVE AG. ALL RIGHTS RESERVED.
          </span>
          <Link href="https://webxnepal.com" className="flex justify-center items-center gap-1">
            Designed & Developed by 
            <Image src="/logo/webx-logo.svg" alt="Creativeweb" width={200} height={200} className="w-12 h-12 -mt-1" />
          </Link>
        </div>

        
      </div>
    </footer>
  );
}