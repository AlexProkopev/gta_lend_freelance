"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhySection() {
  const { t } = useLanguage();
  const reasons = [
    { icon:"⚡", tk:"why_r1", color:"#14F195" },
    { icon:"🔒", tk:"why_r2", color:"#9945FF" },
    { icon:"⚙️", tk:"why_r3", color:"#00D4FF" },
    { icon:"🎁", tk:"why_r4", color:"#FFD700" },
    { icon:"🌐", tk:"why_r5", color:"#FF2D78" },
    { icon:"🏆", tk:"why_r6", color:"#14F195" },
  ];
  const stats = [
    { val:"25%",   lk:"stat1_label", color:"#14F195" },
    { val: t("stat2_val"), lk:"stat2_label", color:"#9945FF" },
    { val: t("stat3_val"), lk:"stat3_label", color:"#00D4FF" },
    { val:"10K+",  lk:"stat4_label", color:"#FFD700" },
  ];

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #050510, #0a0a1a 50%, #050510)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #9945FF66, transparent)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#9945FF] font-semibold mb-3">{t("why_label")}</p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl">
            <span className="gradient-text-gta">{t("why_h1")}</span><br />
            <span className="gradient-text-sol">{t("why_h2")}</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">{t("why_desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="relative p-6 rounded-2xl group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${r.color}22`, boxShadow:`0 0 30px ${r.color}11` }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background:`radial-gradient(circle at 50% 0%, ${r.color}15, transparent 70%)` }} />
              <div className="relative z-10">
                <div className="text-4xl mb-4 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background:`${r.color}15`, border:`1px solid ${r.color}33`, boxShadow:`0 0 20px ${r.color}22` }}>{r.icon}</div>
                <h3 className="font-bold text-lg mb-2 font-orbitron" style={{ color:r.color, textShadow:`0 0 10px ${r.color}55` }}>
                  {t(`${r.tk}_title`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`${r.tk}_desc`)}</p>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20" style={{ background:`linear-gradient(225deg, ${r.color}, transparent)`, borderTopRightRadius:"1rem" }} />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6 rounded-2xl glass-card">
              <p className="font-orbitron font-black text-3xl sm:text-4xl mb-1" style={{ color:s.color }}>{s.val}</p>
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{t(s.lk)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
