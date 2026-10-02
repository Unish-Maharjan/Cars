import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A] text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-[1440px] flex-col justify-between px-8 py-16">
        {/* Main Content */}
        <div className="relative flex flex-col items-center text-center">
          <h2 className="font-heading text-7xl font-bold uppercase leading-[0.82] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">
            OWN
            <br />
            <span className="text-white/30">THE ROAD.</span>
          </h2>

          {/* Vehicle */}
          <div className="relative mt-[-20px] h-[300px] w-full max-w-[1000px] md:h-[360px]">
            <Image
              src="/images/car.png"
              alt="Electric vehicle"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* CTA */}
          <Link
            href="#models"
            className="mt-[-10px] inline-flex items-center gap-8 border border-white/30 px-8 py-4 transition-colors duration-300"
          >
            <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase">
              Explore the range
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}