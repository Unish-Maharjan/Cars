import Header from "./components/Header";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Experience from "./components/home/Experience";
import Interior from "./components/home/Interior";
import Technology from "./components/home/Technology";
import Performance from "./components/home/Performance";
import Charging from "./components/home/Charging";
import Stories from "./components/home/Stories";
import Footer from "./components/Footer";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Interior />
      <Technology />
      <Performance />
      <Charging />
      <Stories />
      <CTA/>
      <Footer />
    </main>
  );
}
