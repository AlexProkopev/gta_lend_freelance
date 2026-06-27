"use client";
import { useState, useEffect } from "react";
import { getSettings } from "@/lib/settings";
import { useLanguage } from "@/lib/LanguageContext";

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

function calcTime(endDate: string): TimeLeft {
  const diff = new Date(endDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Pad({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl"
        style={{ background:"linear-gradient(135deg,rgba(153,69,255,0.12),rgba(20,241,149,0.06))", border:"1px solid rgba(153,69,255,0.27)", boxShadow:"0 0 25px rgba(153,69,255,0.25)" }}>
        <span className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white"
          style={{ textShadow:"0 0 20px #9945FF, 0 0 40px #9945FF66" }}>
          {String(n).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#9945FF]">{label}</span>
    </div>
  );
}

export default function CountdownTimer() {
  const { t } = useLanguage();
  const [endDate, setEndDate] = useState("2026-11-19T00:00:00");
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const s = getSettings();
    setEndDate(s.timerEndDate);
    setTime(calcTime(s.timerEndDate));
  }, []);

  useEffect(() => {
    const i = setInterval(() => setTime(calcTime(endDate)), 1000);
    return () => clearInterval(i);
  }, [endDate]);

  const expired = !time.days && !time.hours && !time.minutes && !time.seconds;
  if (expired) return (
    <div className="text-center py-6">
      <p className="font-orbitron text-2xl gradient-text-gta">{t("cnt_released")}</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-orbitron text-sm tracking-[0.3em] text-[#14F195] uppercase">{t("hero_countdown")}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
        <Pad n={time.days} label={t("cnt_days")} />
        <Pad n={time.hours} label={t("cnt_hours")} />
        <Pad n={time.minutes} label={t("cnt_minutes")} />
        <Pad n={time.seconds} label={t("cnt_seconds")} />
      </div>
    </div>
  );
}