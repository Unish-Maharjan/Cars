import React from "react";

export default function Brand() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center bg-white border-b border-black/10">
      <div className="mx-auto max-w-[1440px] px-8 flex flex-col items-end text-right w-full">
        <h2 className="font-heading text-6xl font-bold uppercase tracking-tight leading-[0.95] text-black max-w-4xl">
          THE FUTURE OF MOBILITY
          <br />
          SHOULD FEEL HUMAN.
        </h2>
        <p className="font-body mt-8 max-w-2xl text-base leading-relaxed text-black/70">
          We are creating electric vehicles around the way people actually move, live, and experience
          the world. Every decision begins with a simple question: how can technology make the journey
          better?
        </p>
      </div>
    </section>
  );
}