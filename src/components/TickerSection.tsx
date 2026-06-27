"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function TickerSection() {
  const { t } = useLanguage();
  const items = [t("tick1"), t("tick2"), t("tick3"), t("tick4"), t("tick5"), t("tick6"), t("tick7"), t("tick8")];
  const doubled = [...items, ...items];

  const slowItems = [
    "PRE-ORDER #48526 CONFIRMED · BLOCK 291,802,426",
    "PRE-ORDER #42029 CONFIRMED · BLOCK 291,802,431",
    "PRE-ORDER #43751 CONFIRMED · BLOCK 291,802,438",
    "PRE-ORDER #49988 CONFIRMED · BLOCK 291,802,444",
    "PRE-ORDER #46812 CONFIRMED · BLOCK 291,802,451",
  ];
  const slowDoubled = [...slowItems, ...slowItems];

  return (
    <div className="py-3 relative overflow-hidden" style={{ background: "linear-gradient(90deg,#9945FF,#14F195,#FF2D78,#9945FF)", backgroundSize: "300% 100%", animation: "shimmer 6s linear infinite" }}>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 text-black font-bold text-sm tracking-wider uppercase whitespace-nowrap">
              {item}
              <span className="text-black opacity-40">◆</span>
            </span>
          ))}
        </div>
      </div>
      <div className="ticker-wrap mt-2 opacity-90 border-t border-black/10 pt-2">
        <div className="ticker-inner-slow">
          {slowDoubled.map((item, i) => (
            <span key={`slow-${i}`} className="inline-flex items-center gap-4 px-8 text-white text-xs tracking-wider uppercase whitespace-nowrap">
              {item}
              <span className="text-white/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
