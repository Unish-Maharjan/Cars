import React from "react";
import Image from "next/image";

export default function Vision() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-white py-10 border-b border-black/10">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-8">
        <div>
          <h2 className="font-heading text-5xl font-bold uppercase tracking-tight leading-[0.95] text-black max-w-3xl">
            A BETTER WAY
            <br />
            TO MOVE.
          </h2>

          <p className="font-body mt-3 max-w-2xl text-xs leading-relaxed text-black/70">
            We are working toward a future where electric mobility is not a compromise, but the natural
            choice — designed around people, built with intention, and created to last.
          </p>
        </div>

        <div className="relative my-4 flex-1 min-h-[280px] w-full overflow-hidden bg-neutral-200">
          <Image
            src="/images/behind.avif"
            alt="AURA The Journey Starts Here"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-between text-[10px] font-medium tracking-[0.2em] text-black/40 uppercase">
          <span>AURA BRAND</span>
          <span>THE JOURNEY STARTS HERE.</span>
        </div>
      </div>
    </section>
  );
}