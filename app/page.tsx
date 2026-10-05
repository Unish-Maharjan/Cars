import React from "react";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import MeetAura from "./components/home/MeetAura";
import Interior from "./components/home/Interior";
import Technology from "./components/home/Technology";
import Performance from "./components/home/Performance";
import ChargingSequence from "./components/home/ChargingSequence";
import Charging from "./components/home/Charging";
import Configure from "./components/home/Configure";
import Ownership from "./components/home/Ownership";
import Footer from "./components/Footer";
import CTA from "./components/home/CTA"


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <MeetAura />
      {/* <Exterior /> */}
      <Interior />
      {/* <Technology /> */}
      <Performance />
      <ChargingSequence />
      <Charging />
      {/* <Safety /> */}
      {/* <Configure /> */}
      <Ownership />
      <CTA />
      <Footer />
    </main>
  );
}
