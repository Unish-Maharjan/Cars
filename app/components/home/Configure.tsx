"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Configure() {
  const [selectedColor, setSelectedColor] = useState("OBSIDIAN");
  const [selectedInterior, setSelectedInterior] = useState("BLACK");
  const [selectedWheels, setSelectedWheels] = useState("21\"");

  const colors = [
    { name: "OBSIDIAN", hex: "#171717" },
    { name: "PEARL", hex: "#EAEAEA" },
    { name: "GRAPHITE", hex: "#4A4A4A" },
    { name: "SILVER", hex: "#9E9E9E" },
  ];

  const interiors = [
    { name: "BLACK", color: "#1E1E1E" },
    { name: "IVORY", color: "#F0EFEA" },
    { name: "TAN", color: "#8C6D52" },
  ];

  const wheels = [
    { name: "19\"", desc: "Aero Performance" },
    { name: "21\"", desc: "Sport Turbine" },
  ];

  return (
    <section id="configure" className="w-full bg-[#FAFAFA] py-10 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-heading mt-3 text-5xl font-bold uppercase tracking-tight text-black">
            CONFIGURE
            <br />
            YOUR AURA.
          </h2>
          <p className="font-body mt-3 text-sm leading-relaxed text-black/70">
            Personalize your flagship electric vehicle. Select your exterior finish, cabin ambiance,
            and wheel package.
          </p>
        </div>

        {/* Configuration Studio Grid */}
        <div className="mt-8 grid grid-cols-12 gap-8 items-start">
          {/* Visual Showcase */}
          <div className="col-span-7 flex flex-col items-center justify-center border
           border-black/10 bg-white p-8">
            <div className="relative my-8 h-[428px] w-full">
              <Image
                src="/images/car.png"
                alt="Configured AURA Electric Vehicle"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Configuration Controls */}
          <div className="col-span-5 flex flex-col justify-between border border-black/10 bg-white p-8">
            <div className="space-y-6">
              {/* 1. Exterior Color */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-black uppercase">
                    EXTERIOR
                  </span>
                  <span className="font-heading text-xs font-bold text-black uppercase">
                    {selectedColor}
                  </span>
                </div>
                <div className="mt-3 flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                        selectedColor === color.name
                          ? "border-black scale-110 shadow-sm"
                          : "border-black/20 hover:border-black/60"
                      }`}
                      title={color.name}
                    >
                      <span
                        className="h-6 w-6 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Interior Color */}
              <div className="border-t border-black/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-black uppercase">
                    INTERIOR
                  </span>
                  <span className="font-heading text-xs font-bold text-black uppercase">
                    {selectedInterior}
                  </span>
                </div>
                <div className="mt-3 flex gap-3">
                  {interiors.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedInterior(item.name)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                        selectedInterior === item.name
                          ? "border-black scale-110 shadow-sm"
                          : "border-black/20 hover:border-black/60"
                      }`}
                      title={item.name}
                    >
                      <span
                        className="h-6 w-6 rounded-full border border-black/10"
                        style={{ backgroundColor: item.color }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Wheels */}
              <div className="border-t border-black/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-black uppercase">
                    WHEELS
                  </span>
                  <span className="font-heading text-xs font-bold text-black uppercase">
                    {selectedWheels}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {wheels.map((wheel) => (
                    <button
                      key={wheel.name}
                      type="button"
                      onClick={() => setSelectedWheels(wheel.name)}
                      className={`flex flex-col items-start border p-3 text-left transition-all ${
                        selectedWheels === wheel.name
                          ? "border-black bg-black text-white"
                          : "border-black/15 bg-white text-black hover:border-black/40"
                      }`}
                    >
                      <span className="font-numbers text-sm font-bold">{wheel.name}</span>
                      <span
                        className={`text-[10px] uppercase tracking-wider ${
                          selectedWheels === wheel.name ? "text-white/70" : "text-black/50"
                        }`}
                      >
                        {wheel.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Summary & CTA */}
            <div className="mt-8 border-t border-black/10 pt-5">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-black/50 uppercase">
                    AURA BASE SPEC
                  </span>
                  <div className="font-numbers mt-1 text-3xl font-bold text-black">
                    $89,500
                  </div>
                </div>
                <span className="text-[10px] text-black/50 uppercase tracking-wider">
                  STARTING MSRP
                </span>
              </div>

              <Link
                href="#final-cta"
                className="mt-5 flex w-full items-center justify-center border border-black bg-black py-3.5 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-black/85"
              >
                CONFIGURE YOURS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
