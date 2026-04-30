import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hector's Iron Painting & Wrought Iron Co — Bakersfield, CA",
  description:
    "Twenty years of on-site electrostatic painting for wrought iron gates, fences, and ornamental metals across Bakersfield. CSLB Lic. #1009092 · 4.8★ across 37 reviews.",
  openGraph: {
    title: "Hector's Iron Painting — Bakersfield Wrought Iron Specialists",
    description:
      "On-site electrostatic painting since 2006. The gate stays on its hinges.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-paper text-charcoal">
        {children}
      </body>
    </html>
  );
}
