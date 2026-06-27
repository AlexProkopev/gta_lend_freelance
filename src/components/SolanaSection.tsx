"use client";
import { useEffect, useState } from "react";
import { getSettings } from "@/lib/settings";
import { useLanguage } from "@/lib/LanguageContext";
import { usePiter } from "@/lib/PiterContext";

export default function SolanaSection() {
  const { connected, address, openModal } = usePiter();
  const { t } = useLanguage();
  const [discount, setDiscount] = useState(25);
  useEffect(() => { setDiscount(getSettings().discountPercent); }, []);

  const steps = ["step1","step2","step3","step4"];

  return (
    <section id="solana" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,#050510 0%,#0d0520 50%,#050510 100%)" }} />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage:"linear-gradient(rgba(153,69,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(153,69,255,0.1) 1px,transparent 1px)", backgroundSize:"80px 80px" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,#FF2D7866,transparent)" }} />
      <div className="absolute -left-40 top-1/2 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background:"radial-gradient(circle,#9945FF,transparent)" }} />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background:"radial-gradient(circle,#14F195,transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#FF2D78] font-semibold mb-3">{t("sol_label")}</p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="gradient-text-sol">{t("sol_h1", { d: discount })}</span><br />
            <span className="text-white">{t("sol_h2")} </span>
            <span className="gradient-text-gta">{t("sol_h3")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">{t("sol_desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-px z-0" style={{ background:"linear-gradient(90deg,#9945FF66,transparent)" }} />}
              <div className="relative z-10 p-6 rounded-2xl h-full" style={{ background:"rgba(153,69,255,0.06)", border:"1px solid rgba(153,69,255,0.2)", boxShadow:"0 0 30px rgba(153,69,255,0.08)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-orbitron font-black text-3xl" style={{ background:"linear-gradient(135deg,#9945FF,#14F195)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>0{i+1}</span>
                  <span className="text-2xl">{t(`${s}_icon`)}</span>
                </div>
                <h3 className="font-bold text-white mb-2 text-base">{t(`${s}_title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`${s}_desc`, { d: discount })}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
          style={{ background:"linear-gradient(135deg,rgba(153,69,255,0.15),rgba(20,241,149,0.1))", border:"1px solid rgba(153,69,255,0.3)", boxShadow:"0 0 60px rgba(153,69,255,0.2),0 0 120px rgba(20,241,149,0.1)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 20% 50%,#9945FF,transparent 50%),radial-gradient(circle at 80% 50%,#14F195,transparent 50%)" }} />
          <div className="relative z-10">
            {connected ? (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border border-[#14F19544] bg-[#14F19511]">
                  <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
                  <span className="text-sm font-bold text-[#14F195] tracking-wider">{t("promo_connected_badge")}</span>
                </div>
                <h3 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-2">{t("promo_connected_h", { d: discount })}</h3>
                <p className="text-gray-300 mb-2">{t("promo_connected_addr")} <span className="font-mono text-[#9945FF] text-sm">{address.slice(0,8)}...{address.slice(-6)}</span></p>
                <p className="text-[#14F195] font-semibold mb-6">{t("promo_connected_sub")}</p>
                <a href="#preorder" className="btn-gta px-10 py-4 text-lg rounded-xl inline-block">{t("promo_cta")}</a>
              </>
            ) : (
              <>
                <p className="text-6xl sm:text-8xl font-black font-orbitron mb-4"
                  style={{ background:"linear-gradient(135deg,#9945FF,#14F195)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  −{discount}%
                </p>
                <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mb-4">{t("promo_main_h")}</h3>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">{t("promo_main_desc", { d: discount })}</p>
                <button onClick={openModal} className="btn-sol px-10 py-4 text-lg rounded-xl font-bold tracking-wider">
                  {t("nav_connect_wallet")}
                </button>
                <p className="text-xs text-gray-500 mt-4">{t("promo_supported")}</p>
              </>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">{t("tokens_label")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["SOL","USDC","USDT","BONK","WIF","JTO","PYTH","ORCA","RAY","MNGO"].map((token) => (
              <div key={token} className="px-4 py-2 rounded-lg text-sm font-bold tracking-wider" style={{ background:"rgba(153,69,255,0.1)", border:"1px solid rgba(153,69,255,0.25)", color:"#9945FF" }}>{token}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
