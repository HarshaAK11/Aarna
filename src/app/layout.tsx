import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarna — Where Every Petal Has Purpose",
  description:
    "Aarna brings curated temple flowers and sacred essentials to your door — every morning, every day. Fresh flowers, daily ritual, delivered.",
  keywords: [
    "Aarna",
    "fresh flowers",
    "temple flowers",
    "daily ritual",
    "flower subscription",
    "sacred living",
    "Mangalore",
  ],
  openGraph: {
    title: "Aarna — Where Every Petal Has Purpose",
    description:
      "Fresh flowers. Daily ritual. Delivered. Aarna brings curated temple flowers and sacred essentials to your door.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
