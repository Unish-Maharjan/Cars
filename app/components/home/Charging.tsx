import React from "react";
import Image from "next/image";

export default function Charging() {
  const leftSteps = [
    {
      num: "01",
      title: "Locate & Navigate:",
      desc: "Use the AURA mobile app or in-car navigation to find the nearest high-speed charging station on our network with real-time stall availability.",
    },
    {
      num: "03",
      title: "Initiate Session:",
      desc: "Tap your payment card, phone, or simply plug in with automated Plug & Charge protocol on the station to begin the session.",
    },
    {
      num: "05",
      title: "Monitor Status:",
      desc: "The station's display and the vehicle app will show real-time charging progress, the current battery percentage, and the estimated time remaining.",
    },
  ];

  const rightSteps = [
    {
      num: "02",
      title: "Arrive & Park:",
      desc: "Drive up to the station and park your vehicle near the charging pedestal, ensuring the charging port is easily accessible.",
    },
    {
      num: "04",
      title: "Connect Your EV:",
      desc: "Open your vehicle's charge port carefully, retrieve the connector from the station, and firmly plug the charging port into your car.",
    },
    {
      num: "06",
      title: "Unplug & Go:",
      desc: "Once your session is complete, safely unplug the connector, and you are ready to drive. The payment receipt will be sent directly to your app or email.",
    },
  ];

  return (
    <section id="charging" className="w-full bg-[#FAFAFA] py-20 border-t border-black/10">
      <div className="mx-auto max-w-[1360px] px-8">
        {/* Centered Top Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] text-black uppercase">
            How to Use:
          </span>
          <h2 className="font-heading mt-2 text-4xl md:text-5xl font-bold tracking-tight text-black">
            Simple 6 Steps to Power
          </h2>
        </div>

        {/* 3-Column Diagram Layout */}
        <div className="mt-25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Steps 01, 03, 05) - Aligned to Right */}
          <div className="lg:col-span-4 flex flex-col space-y-10 text-left lg:text-right">
            {leftSteps.map((step, index) => (
              <div
                key={step.num}
                className={`flex flex-col ${
                  index !== leftSteps.length - 1 ? "border-b border-black/10 pb-10" : ""
                }`}
              >
                <span className="font-numbers text-3xl md:text-4xl font-bold text-black tracking-tight">
                  {step.num}
                </span>
                <h3 className="font-heading mt-1 text-base font-bold text-black tracking-tight">
                  {step.title}
                </h3>
                <p className="font-body mt-2 text-xs leading-relaxed text-black/60 max-w-sm lg:ml-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column: Large Dominant Charging Pedestal Image */}
          <div className="lg:col-span-4 relative h-[560px] w-[460px] flex items-center justify-center">
            <Image
              src="/images/charger.png"
              alt="AURA Ultra-Fast EV Charging Pedestal"
              fill
              className="object-fill scale-130"
              priority
            />
          </div>

          {/* Right Column (Steps 02, 04, 06) - Aligned to Left */}
          <div className="lg:col-span-4 flex flex-col space-y-10 text-left">
            {rightSteps.map((step, index) => (
              <div
                key={step.num}
                className={`flex flex-col ${
                  index !== rightSteps.length - 1 ? "border-b border-black/10 pb-10" : ""
                }`}
              >
                <span className="font-numbers text-3xl md:text-4xl font-bold text-black tracking-tight">
                  {step.num}
                </span>
                <h3 className="font-heading mt-1 text-base font-bold text-black tracking-tight">
                  {step.title}
                </h3>
                <p className="font-body mt-2 text-xs leading-relaxed text-black/60 max-w-sm mr-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
