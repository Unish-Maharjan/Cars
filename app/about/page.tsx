import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import Brand from "../components/about/Brand";
import Approach from "../components/about/Approach";
import Car from "../components/about/Car";
import Technology from "../components/about/Technology";
import Vision from "../components/about/Vision";
import CTA from "../components/home/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Brand />
      <Approach />
      <Car />
      <Technology />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
