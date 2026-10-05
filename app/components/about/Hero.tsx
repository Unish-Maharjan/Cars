import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-black text-white pb-20">
      {/* Background Vehicle Image */}
      <Image
        src="/images/carfar.jpg"
        alt="AURA Flagship Electric Vehicle"
        fill
        className="object-cover opacity-80"
        priority
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8">
        <h1 className="font-heading text-7xl font-bold uppercase tracking-tight leading-[0.92] text-white max-w-4xl">
          WE ARE BUILDING
          <br />
          WHAT COMES NEXT.
        </h1>
        <p className="font-body mt-6 max-w-xl text-sm leading-relaxed text-white/80">
          We believe electric mobility should feel effortless, intelligent, and beautifully designed.
        </p>
      </div>
    </section>
  );
}