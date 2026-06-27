"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();
  const navLinks = [["#preorder","po_h"],["#why","nav_why"],["#solana","nav_solana"],["#editions","nav_editions"]];
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,#050510,#030308)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,#9945FF55,#14F19555,transparent)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/icons.jpg" alt="GTA VI × SOLANA" className="w-10 h-10 rounded-xl object-cover" />
              <div>
                <div className="font-orbitron font-black text-white">GTA VI</div>
                <div className="text-xs text-[#14F195] tracking-widest">× SOLANA</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{t("ft_desc")}</p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: '𝕏', label: 'X / Twitter', href: 'https://x.com/RockstarGames' },
                { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/rockstargames/' },
                { icon: '📺', label: 'YouTube', href: 'https://www.youtube.com/RockstarGames' },
                { icon: '💬', label: 'Discord', href: 'https://discord.com/invite/rockstar' },
              ].map((item) => (
                <a key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110"
                  style={{ background:"rgba(153,69,255,0.1)", border:"1px solid rgba(153,69,255,0.25)" }}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-sm tracking-wider uppercase">{t("ft_nav")}</h4>
            <ul className="space-y-2">
              {navLinks.map(([href,tk]) => (
                <li key={href}><a href={href} className="text-gray-500 hover:text-[#9945FF] transition-colors text-sm">{t(tk)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-sm tracking-wider uppercase">{t("ft_tokens")}</h4>
            <div className="flex flex-wrap gap-2">
              {["SOL","USDC","USDT","BONK","WIF","JTO"].map((token) => (
                <span key={token} className="px-3 py-1 rounded-md text-xs font-bold" style={{ background:"rgba(153,69,255,0.1)", border:"1px solid rgba(153,69,255,0.2)", color:"#9945FF" }}>{token}</span>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed">{t("ft_token_desc")}</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600" style={{ borderTop:"1px solid rgba(153,69,255,0.12)" }}>
          <p>{t("ft_copy")}</p>
          <p className="text-center">{t("ft_trademark")} <span className="text-gray-500">Rockstar Games, Inc.</span></p>
          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-pulse" /><span>{t("ft_network")}</span></div>
        </div>
      </div>
    </footer>
  );
}
