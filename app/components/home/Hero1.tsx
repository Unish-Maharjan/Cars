import React from "react";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle Overlay for Readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <span className="font-numbers text-xs uppercase tracking-[0.3em] text-white/80">
          Pure Electric Performance
        </span>

        <h1 className="font-heading mt-4 text-5xl font-bold uppercase tracking-tight
         text-white">
          The New Standard
        </h1>

        <p className="font-body mt-4 max-w-xl text-base font-normal text-white/90">
          Engineered for unparalleled precision, zero emissions, and uncompromising luxury.
        </p>

        <button
          type="button"
          className="mt-8 rounded-full bg-white px-8 py-3.5 text-xs font-semibold 
          uppercase tracking-widest text-black"
        >
          Explore Models
        </button>
      </div>
    </section>
  );
}