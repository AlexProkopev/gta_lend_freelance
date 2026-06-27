"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import TickerSection from "@/components/TickerSection";
import CookieBanner from "@/components/CookieBanner";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const WhySection = dynamic(() => import("@/components/WhySection"), { ssr: false });
const SolanaSection = dynamic(() => import("@/components/SolanaSection"), { ssr: false });
const PreOrderSection = dynamic(() => import("@/components/PreOrderSection"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <WhySection />
      <SolanaSection />
      <PreOrderSection />
      <Footer />
      <CookieBanner />
    </main>
  );
}
