import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModelsShowcase from "../components/models/ModelsShowcase";
import ModelsLineup from "../components/models/ModelsLineup";
import CTA from "../components/home/CTA";

export const metadata = {
  title: "Models — AURA EV",
  description:
    "Explore the AURA electric vehicle lineup. Four distinct models built for different ways of moving.",
};

export default function ModelsPage() {
  return (
    <main className="bg-[#0A0A0A] text-white selection:bg-white selection:text-black">
      <Header/>
      <ModelsShowcase />
      <CTA/>
      <Footer />
    </main>
  );
}
