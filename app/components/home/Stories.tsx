import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Stories() {
  const stories = [
    {
      category: "INNOVATION",
      date: "OCT 2026",
      title: "NEW ERA OF ELECTRIC PERFORMANCE",
      desc: "Introducing our next-generation dual-motor powertrain engineered for hyper-efficiency, instant torque vectoring.",
      image: "/images/car.png",
      imageContain: true,
    },
    {
      category: "BATTERY TECH",
      date: "SEP 2026",
      title: "NEXT GENENATION ARCHITECTURE",
      desc: "Exploring solid-state battery chemistry and our sustainable closed-loop recyclable cathode production lifecycle.",
      image: "/images/behind.avif",
      imageContain: false,
    },
    {
      category: "SUSTAINABILITY",
      date: "AUG 2026",
      title: "THE FUTURE OF URBAN MOBILITY",
      desc: "How carbon-neutral manufacturing facilities and bio-flax composite materials are redefining modern automotive luxury.",
      image: "/images/carseat.avif",
      imageContain: false,
    },
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading mt-4 text-5xl font-bold uppercase tracking-tight text-black">
              LATEST FROM AURA
            </h2>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.title}
              className="flex flex-col justify-between border border-black/10 bg-[#FAFAFA] p-8"
            >
              <div>
                {/* Image */}
                <div className="relative h-[220px] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className={story.imageContain ? "object-contain p-4" : "object-cover"}
                  />
                </div>

                {/* Metadata */}
                <div className="mt-6 flex items-center justify-between text-[10px] font-semibold tracking-[0.2em] text-black/50 uppercase">
                  <span>{story.category}</span>
                  <span className="font-numbers">{story.date}</span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-heading mt-4 text-xl font-bold uppercase w-[110%] tracking-tight text-black leading-snug">
                  {story.title}
                </h3>

                <p className="font-body mt-3 text-xs leading-relaxed text-black/60">
                  {story.desc}
                </p>
              </div>

              {/* Static Circular Arrow Button */}
              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                <Link href="/" className="text-[10px] font-semibold tracking-[0.2em] text-white bg-black p-2 uppercase">
                  READ STORY
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
