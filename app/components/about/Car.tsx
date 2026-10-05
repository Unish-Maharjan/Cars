import React from "react";
import Image from "next/image";

export default function Car() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-white py-10 border-b border-black/10">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-8">
        <div>
          <h2 className="font-heading text-5xl font-bold uppercase tracking-tight leading-[0.95] text-black max-w-3xl">
            ONE CAR.
            <br />
            ONE CLEAR IDEA.
          </h2>

          <p className="font-body mt-3 max-w-2xl text-xs leading-relaxed text-black/70">
            This vehicle is the beginning of our journey. It brings together our approach to design,
            engineering, technology, and electric mobility in one focused product.
          </p>
        </div>

        <div className="relative my-4 flex-1 min-h-[280px] w-full flex items-center justify-center border border-black/10 bg-[#FAFAFA] p-6">
          <div className="relative h-full w-full max-w-[1000px]">
            <Image
              src="/images/car.png"
              alt="AURA Electric Single-Model Vehicle"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-black/10 pt-4 text-left">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-black">
            DESIGNED WITH PURPOSE
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-black border-l border-black/10 pl-8">
            ENGINEERED FOR EVERYDAY LIFE
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-black border-l border-black/10 pl-8">
            BUILT FOR WHAT&apos;S NEXT
          </span>
        </div>
      </div>
    </section>
  );
}