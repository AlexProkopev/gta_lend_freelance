"use client";
import { useEffect, useState } from "react";
import { getSettings } from "@/lib/settings";
import { useLanguage } from "@/lib/LanguageContext";
import { usePiter } from "@/lib/PiterContext";
import CountdownTimer from "./CountdownTimer";

const PRICE_USD = 69.99;

export default function HeroSection() {
  const { connected, openModal } = usePiter();
  const { t } = useLanguage();
  const [discount, setDiscount] = useState(25);
  useEffect(() => { setDiscount(getSettings().discountPercent); }, []);
  const discountedPrice = (PRICE_USD * (1 - discount / 100)).toFixed(2);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      <div className="absolute inset-0 hero-grid opacity-70" />
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,5,16,0.2) 0%, rgba(5,5,16,0.5) 50%, rgba(5,5,16,1) 100%), linear-gradient(to right, rgba(5,5,16,0.6) 0%, transparent 40%, transparent 60%, rgba(5,5,16,0.6) 100%), url('https://www.rockstargames.com/VI/img/home/bg-key-art.jpg')`, backgroundSize: "cover", backgroundPosition: "center 20%", backgroundRepeat: "no-repeat" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #9945FF, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #FF2D78, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #14F195, transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#9945FF44] bg-[#9945FF11]" style={{ animation: "fadeInUp 0.5s ease forwards" }}>
          <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#14F195]">{t("hero_badge")}</span>
        </div>

        <div style={{ animation: "fadeInUp 0.6s 0.1s ease both" }}>
          <h1 className="font-orbitron font-black leading-none mb-4">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl" style={{ background: "linear-gradient(135deg, #FF2D78, #FFD700, #FF2D78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(255,45,120,0.5))" }}>GRAND THEFT</span>
            <span className="block text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none" style={{ background: "linear-gradient(135deg, #FFD700, #FF2D78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 40px rgba(255,215,0,0.4))" }}>AUTO VI</span>
          </h1>
        </div>

        <p className="text-base sm:text-xl text-gray-300 mb-2 font-light tracking-wide" style={{ animation: "fadeInUp 0.6s 0.2s ease both" }}>{t("hero_release")}</p>
        <p className="text-sm sm:text-base text-[#14F195] font-semibold tracking-widest uppercase mb-10" style={{ animation: "fadeInUp 0.6s 0.25s ease both" }}>{t("hero_tagline", { d: discount })}</p>

        <div style={{ animation: "fadeInUp 0.6s 0.3s ease both" }} className="mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10" style={{ animation: "fadeInUp 0.6s 0.4s ease both" }}>
          <div className="glass-card-purple rounded-2xl px-8 py-6 text-center min-w-[200px]">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">{t("hero_regular")}</p>
            <p className="text-4xl font-bold text-white line-through opacity-50 font-orbitron">${PRICE_USD}</p>
          </div>
          <div className="text-4xl text-[#9945FF] font-black">→</div>
          <div className="rounded-2xl px-8 py-6 text-center min-w-[200px] relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(153,69,255,0.2), rgba(20,241,149,0.15))", border: "1px solid rgba(20,241,149,0.4)", boxShadow: "0 0 40px rgba(20,241,149,0.2)" }}>
            <p className="text-xs uppercase tracking-[0.2em] text-[#14F195] mb-1">{t("hero_sol_price", { d: discount })}</p>
            <p className="text-4xl font-black text-[#14F195] font-orbitron" style={{ textShadow: "0 0 20px #14F195" }}>${discountedPrice}</p>
            {!connected && <p className="text-xs text-gray-400 mt-1">{t("hero_connect")}</p>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeInUp 0.6s 0.5s ease both" }}>
          <a href="#preorder" className="btn-gta px-10 py-4 text-lg rounded-xl inline-block" style={{ minWidth: 220 }}>{t("hero_cta")}</a>
          {!connected && (
            <div className="flex flex-col items-center gap-1">
              <button onClick={openModal} className="btn-sol px-8 py-4 text-base rounded-xl font-bold tracking-wider">
                {t("hero_connect")}
              </button>
              <span className="text-xs text-[#14F195] tracking-wider">{t("hero_connect_cta", { d: discount })}</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400">{t("hero_scroll")}</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#9945FF]" style={{ animation: "float 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
