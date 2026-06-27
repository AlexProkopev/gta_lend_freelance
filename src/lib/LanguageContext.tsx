"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, translate, LANGS, LANG_LABELS } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  LANGS: typeof LANGS;
  LANG_LABELS: typeof LANG_LABELS;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  LANGS,
  LANG_LABELS,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(lang, key, vars);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, LANGS, LANG_LABELS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
