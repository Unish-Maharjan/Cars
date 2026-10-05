import React from "react";
import Image from "next/image";

export default function Technology() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white py-10 border-b border-white/10">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-5xl font-bold uppercase tracking-tight leading-[0.95] text-white">
            TECHNOLOGY
            <br />
            SHOULD DISAPPEAR.
          </h2>

          <p className="font-body mt-3 text-xs leading-relaxed text-white/70">
            The best technology does not demand attention. It quietly makes every journey more
            intuitive, connected, and effortless.
          </p>
        </div>

        <div className="relative my-4 flex-1 min-h-[280px] w-full overflow-hidden bg-[#141414] border border-white/10">
          <Image
            src="/images/carinside.avif"
            alt="AURA Minimalist Digital Cockpit"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-3 border-t border-white/10 pt-4 text-left">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-white">
            CONNECTED
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-white border-l border-white/10 pl-8">
            INTELLIGENT
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-white border-l border-white/10 pl-8">
            INTUITIVE
          </span>
        </div>
      </div>
    </section>
  );
}