"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import { PiterProvider } from "@/lib/PiterContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PiterProvider>{children}</PiterProvider>
    </LanguageProvider>
  );
}
