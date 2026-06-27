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
      <div className="absolute inset-0 overflow-hidden">
        <picture className="absolute inset-0 h-full w-full block">
          <source media="(min-width: 640px)" srcSet="https://i.postimg.cc/7LrKBkCx/ULTIMATE-EDITION-02-0q-6-nrtf-jj0.jpg" />
          <img
            src="https://i.postimg.cc/Cxh2YYh7/hero.png"
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </picture>
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,5,16,0.2) 0%, rgba(5,5,16,0.5) 50%, rgba(5,5,16,1) 100%), linear-gradient(to right, rgba(5,5,16,0.6) 0%, transparent 40%, transparent 60%, rgba(5,5,16,0.6) 100%)` }} />
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #9945FF, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #FF2D78, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #14F195, transparent)" }} />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#9945FF44] bg-[#9945FF11]" style={{ animation: "fadeInUp 0.5s ease forwards" }}>
          <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#14F195]">{t("hero_badge")}</span>
        </div>

        <div style={{ animation: "fadeInUp 0.6s 0.1s ease both" }} className="mx-auto max-w-3xl">
          <h1 className="font-orbitron font-black leading-none mb-4">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ background: "linear-gradient(135deg, #FF2D78, #FFD700, #FF2D78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(255,45,120,0.5))" }}>GRAND THEFT</span>
            <span className="block text-5xl sm:text-7xl md:text-[9rem] lg:text-[10rem] leading-none" style={{ background: "linear-gradient(135deg, #FFD700, #FF2D78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 40px rgba(255,215,0,0.4))" }}>AUTO VI</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-gray-300 mb-2 font-light tracking-wide" style={{ animation: "fadeInUp 0.6s 0.2s ease both" }}>{t("hero_release")}</p>
        <p className="text-xs sm:text-sm text-[#14F195] font-semibold tracking-[0.3em] uppercase mb-10" style={{ animation: "fadeInUp 0.6s 0.25s ease both" }}>{t("hero_tagline", { d: discount })}</p>

        <div style={{ animation: "fadeInUp 0.6s 0.3s ease both" }} className="mb-12 w-full max-w-xl mx-auto">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full max-w-3xl mx-auto" style={{ animation: "fadeInUp 0.6s 0.4s ease both" }}>
          <div className="glass-card-purple rounded-2xl px-6 py-5 sm:px-8 sm:py-6 text-center w-full sm:w-auto">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-400 mb-1">{t("hero_regular")}</p>
            <p className="text-3xl sm:text-4xl font-bold text-white line-through opacity-50 font-orbitron">${PRICE_USD}</p>
          </div>
          <div className="text-3xl sm:text-4xl text-[#9945FF] font-black">→</div>
          <div className="rounded-2xl px-6 py-5 sm:px-8 sm:py-6 text-center w-full sm:w-auto relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(153,69,255,0.2), rgba(20,241,149,0.15))", border: "1px solid rgba(20,241,149,0.4)", boxShadow: "0 0 40px rgba(20,241,149,0.2)" }}>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[#14F195] mb-1">{t("hero_sol_price", { d: discount })}</p>
            <p className="text-3xl sm:text-4xl font-black text-[#14F195] font-orbitron" style={{ textShadow: "0 0 20px #14F195" }}>${discountedPrice}</p>
            {!connected && <p className="text-xs text-gray-400 mt-1">{t("hero_connect")}</p>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 w-full max-w-3xl mx-auto" style={{ animation: "fadeInUp 0.6s 0.5s ease both" }}>
          <a href="#preorder" className="btn-gta px-8 py-4 text-lg rounded-xl inline-block w-full sm:w-auto text-center">{t("hero_cta")}</a>
          {!connected && (
            <div className="flex flex-col items-center sm:items-start gap-1 w-full sm:w-auto">
              <button onClick={openModal} className="btn-sol px-8 py-4 text-base rounded-xl font-bold tracking-wider w-full sm:w-auto">
                {t("hero_connect")}
              </button>
              <span className="text-xs text-[#14F195] tracking-wider">{t("hero_connect_cta", { d: discount })}</span>
            </div>
          )}
        </div>

        <div className="hidden lg:flex flex-col items-center gap-2 mt-8 opacity-50">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400">{t("hero_scroll")}</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#9945FF]" style={{ animation: "float 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
