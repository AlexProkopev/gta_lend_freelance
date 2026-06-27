"use client";
import { useState, useEffect } from "react";
import { getSettings } from "@/lib/settings";
import { useLanguage } from "@/lib/LanguageContext";
import { usePiter } from "@/lib/PiterContext";

const GALLERY_IMGS = [
  { src:"https://i.postimg.cc/QtHh01Ks/gta6.jpg",  fallback:"", objPos:"center 15%",   labelKey:"gallery1", gradient:"linear-gradient(135deg,#FF2D78,#9945FF)" },
  { src:"https://i.postimg.cc/nVXhkbqQ/Cal-Hampton-03-0-q68-pt1to9z.avif", objPos:"center center", labelKey:"gallery2", gradient:"linear-gradient(135deg,#FFD700,#FF2D78)" },
  { src:"https://i.postimg.cc/Bv339R85/Vice-City-01-135x56yoeu-6t.avif",  fallback:"", objPos:"40% 40%",       labelKey:"gallery3", gradient:"linear-gradient(135deg,#9945FF,#14F195)" },
  { src:"https://i.postimg.cc/xdnwFH7b/Lucia-Caminos-06-0fxbjfk0jakb3.avif",  fallback:"", objPos:"60% 70%",       labelKey:"gallery4", gradient:"linear-gradient(135deg,#00D4FF,#9945FF)" },
];

export default function PreOrderSection() {
  const { connected, openModal } = usePiter();
  const { t } = useLanguage();
  const [selected, setSelected] = useState("premium");
  const [discount] = useState(() => getSettings().discountPercent);
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  const EDITIONS = [
    { id:"standard", nameKey:"ed_standard", subKey:"ed_standard_sub", price:69.99, badgeKey:null, color:"#9945FF", features:["ed_feat_base","ed_feat_early","ed_feat_starter"] },
    { id:"premium",  nameKey:"ed_premium",  subKey:"ed_premium_sub",  price:99.99, badgeKey:"ed_badge_popular", color:"#FF2D78", features:["ed_feat_base","ed_feat_early","ed_feat_starter","ed_feat_vintage","ed_feat_car","ed_feat_money1"] },
    { id:"ultimate", nameKey:"ed_ultimate", subKey:"ed_ultimate_sub", price:149.99, badgeKey:"ed_badge_vip", color:"#FFD700", features:["ed_feat_base","ed_feat_early","ed_feat_vintage","ed_feat_cars5","ed_feat_money5","ed_feat_dlc","ed_feat_nft","ed_feat_artbook"] },
  ];

  const sel = EDITIONS.find((e) => e.id === selected) ?? EDITIONS[0];
  const discountedPrice = (sel.price * (1 - discount / 100)).toFixed(2);
  const basePrice = sel.price.toFixed(2);
  const finalPrice = discountedPrice;

  return (
    <section id="preorder" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,#050510,#070715)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,#14F19566,transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#14F195] font-semibold mb-3">{t("po_label")}</p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl"><span className="gradient-text-mixed">{t("po_h")}</span></h2>
          {connected && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-[#14F19544] bg-[#14F19511]">
              <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
              <span className="text-sm font-bold text-[#14F195]">{t("po_sol_applied",{d:discount})}</span>
            </div>
          )}
        </div>

        <div id="editions" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {EDITIONS.map((ed) => {
            const dp = (ed.price*(1-discount/100)).toFixed(2);
            const isSel = selected===ed.id;
            return (
              <div key={ed.id}
                role="button"
                tabIndex={0}
                className={`edition-card relative rounded-2xl p-6 flex flex-col ${isSel?"selected":""} cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14F195]`}
                style={{ background:isSel?`linear-gradient(135deg,${ed.color}18,rgba(255,255,255,0.03))`:"rgba(255,255,255,0.03)", border:`1px solid ${isSel?ed.color+"66":ed.color+"22"}`, boxShadow:isSel?`0 0 40px ${ed.color}22`:"none" }}
                onClick={() => setSelected(ed.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(ed.id); } }}>
                {ed.badgeKey && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider" style={{ background:`linear-gradient(135deg,${ed.color},${ed.color}aa)`, color:"#000", boxShadow:`0 0 20px ${ed.color}66` }}>★ {t(ed.badgeKey)}</div>}
                {isSel && <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center" style={{ background:"linear-gradient(135deg,#9945FF,#14F195)" }}><svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>}
                <h3 className="font-orbitron font-bold text-lg mb-1" style={{ color:ed.color }}>{t(ed.nameKey)}</h3>
                <p className="text-gray-500 text-xs mb-4">{t(ed.subKey)}</p>
                <div className="mb-6">
                  <div>
                    <span className="text-gray-500 line-through text-lg">${ed.price}</span>
                    <div className="text-3xl font-black font-orbitron" style={{ color:ed.color,textShadow:`0 0 15px ${ed.color}88` }}>${dp}</div>
                    <span className="text-xs text-[#14F195] font-semibold">{t("ed_sol_discount",{d:discount})}</span>
                  </div>
                </div>
                <ul className="flex-1 space-y-2 mb-6">{ed.features.map((fk,i)=>(<li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span style={{color:ed.color}} className="mt-0.5 text-xs">✓</span>{t(fk)}</li>))}</ul>
                <button className={`w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${isSel?"opacity-100":"opacity-60 hover:opacity-80"}`}
                  style={{ background:isSel?`linear-gradient(135deg,${ed.color},${ed.color}aa)`:`${ed.color}22`, color:isSel?"#000":ed.color, border:`1px solid ${ed.color}44` }}
                  onClick={()=>setSelected(ed.id)}>{isSel?t("ed_selected_btn"):t("ed_select_btn")}</button>
              </div>
            );
          })}
        </div>

        <div key={`preorder-summary-${selected}-${connected}`} className="max-w-2xl mx-auto rounded-3xl p-8 text-center" style={{ background:"linear-gradient(135deg,rgba(153,69,255,0.12),rgba(20,241,149,0.08))", border:"1px solid rgba(153,69,255,0.3)", boxShadow:"0 0 60px rgba(153,69,255,0.15)" }}>
          {ordered ? (
            <div>
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-orbitron font-bold text-2xl text-[#14F195] mb-2">{t("success_title")}</h3>
              <p className="text-gray-300 mb-4">{t("success_desc")}</p>
              <div className="glass-card rounded-xl p-4"><p className="text-sm text-gray-400">{t("success_ordered")}</p><p className="font-bold text-white">{t(sel.nameKey)}</p><p className="text-[#14F195] font-bold font-orbitron">${finalPrice}</p></div>
            </div>
          ) : (
            <>
              <h3 className="font-orbitron font-bold text-xl text-white mb-2">{t(sel.nameKey)}</h3>
              <div className="flex flex-col items-center justify-center gap-2 mb-6">
                <span className="text-gray-500 line-through text-xl">${basePrice}</span>
                <span className="text-5xl font-black font-orbitron" style={{ background:"linear-gradient(135deg,#9945FF,#14F195)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>${discountedPrice}</span>
                <span className="text-[#14F195] text-sm font-bold">{t("ed_save",{s:(sel.price-parseFloat(discountedPrice)).toFixed(2)})}</span>
              </div>
              {connected ? (
                <button onClick={()=>{setLoading(true);setTimeout(()=>{setLoading(false);setOrdered(true)},2000)}} disabled={loading} className="btn-gta w-full py-4 text-lg rounded-xl disabled:opacity-50">
                  {loading?t("ed_confirming"):t("ed_order_btn")}
                </button>
              ) : (
                <div><p className="text-gray-400 mb-4 text-sm">{t("ed_connect_desc",{d:discount})}</p><button onClick={openModal} className="btn-sol w-full py-4 text-base rounded-xl font-bold tracking-wider">{t("nav_connect_wallet")}</button></div>
              )}
              <p className="text-xs text-gray-500 mt-4">{t("ed_terms")}</p>
            </>
          )}
        </div>

        {/* Gallery — YouTube CDN thumbnails with gradient fallback */}
        <div className="mt-20">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">{t("gallery_label")}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMGS.map((img,i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden group" style={{ border:"1px solid rgba(153,69,255,0.2)" }}>
                <div className="absolute inset-0" style={{ background:img.gradient }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={t(img.labelKey)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: img.objPos }}
                  onError={(e) => { const el=e.target as HTMLImageElement; if(img.fallback && el.src!==img.fallback){el.src=img.fallback;}else{el.style.display="none";} }} />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(5,5,16,0.85) 0%,transparent 60%)" }} />
                <p className="absolute bottom-3 left-3 text-xs font-semibold text-white tracking-wider drop-shadow">{t(img.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
