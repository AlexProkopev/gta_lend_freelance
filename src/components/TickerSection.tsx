"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function TickerSection() {
  const { t } = useLanguage();
  const items = [t("tick1"),t("tick2"),t("tick3"),t("tick4"),t("tick5"),t("tick6"),t("tick7"),t("tick8")];
  const doubled = [...items, ...items];
  return (
    <div className="py-3 relative overflow-hidden" style={{ background:"linear-gradient(90deg,#9945FF,#14F195,#FF2D78,#9945FF)", backgroundSize:"300% 100%", animation:"shimmer 6s linear infinite" }}>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 text-black font-bold text-sm tracking-wider uppercase whitespace-nowrap">
              {item}<span className="text-black opacity-40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
