"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { getSettings } from "@/lib/settings";
import { usePiter } from "@/lib/PiterContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { connected, openModal } = usePiter();
  const { lang, setLang, t, LANGS, LANG_LABELS } = useLanguage();
  const [discount, setDiscount] = useState(25);

  useEffect(() => { setDiscount(getSettings().discountPercent); }, []);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    ["#preorder", t("nav_preorder")],
    ["#why",      t("nav_why")],
    ["#solana",   t("nav_solana")],
    ["#editions", t("nav_editions")],
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#05051080] backdrop-blur-xl border-b border-[#9945FF22]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-black font-black font-orbitron text-sm" style={{ background: "linear-gradient(135deg, #9945FF, #14F195)" }}>VI</div>
          <span className="font-orbitron font-bold text-base sm:text-lg tracking-widest gradient-text-sol">GTA VI</span>
          <span className="hidden sm:inline text-[#9945FF44] font-light ml-1">×</span>
          <span className="hidden sm:inline text-xs font-semibold text-[#14F195] tracking-widest">SOLANA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="text-gray-400 hover:text-white transition-colors relative group">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {connected && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#14F195] border border-[#14F19544]">
              <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
              {t("nav_discount_active", { d: discount })}
            </div>
          )}
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1 bg-[#9945FF11] border border-[#9945FF33] rounded-lg p-1">
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className="px-2.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase transition-all"
                style={{ background: lang === l ? "linear-gradient(135deg,#9945FF,#14F195)" : "transparent", color: lang === l ? "#000" : "#9945FF" }}>
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <button onClick={openModal} className="btn-sol px-4 py-2 rounded-xl text-sm font-bold tracking-wider">
            {connected ? t("nav_connected") : t("nav_connect_wallet")}
          </button>
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#9945FF22] bg-[#050510ee] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white font-semibold uppercase tracking-wider text-sm">{label}</a>
          ))}
          <div className="flex items-center gap-1 pt-2 border-t border-[#9945FF22]">
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all"
                style={{ background: lang === l ? "linear-gradient(135deg,#9945FF,#14F195)" : "rgba(153,69,255,0.1)", color: lang === l ? "#000" : "#9945FF", border: "1px solid rgba(153,69,255,0.3)" }}>
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
