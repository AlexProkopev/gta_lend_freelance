"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" ? window.localStorage.getItem("gta6_cookie_consent") : null;
    setIsVisible(consent !== "accepted");
  }, []);

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("gta6_cookie_consent", "accepted");
    }
    setIsVisible(false);
  };

  const rejectCookies = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("gta6_cookie_consent", "rejected");
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-3xl border border-white/10 bg-[#070713]/95 p-5 shadow-2xl shadow-[#050510]/80 backdrop-blur-xl text-sm text-white sm:left-8 sm:right-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-white">{t("cookie_title")}</p>
          <p className="text-gray-300">{t("cookie_text")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 justify-end">
          <button
            type="button"
            onClick={rejectCookies}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-200 transition hover:bg-white/10"
          >
            {t("cookie_reject")}
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-2xl bg-linear-to-r from-[#9945FF] to-[#14F195] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:opacity-90"
          >
            {t("cookie_accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
