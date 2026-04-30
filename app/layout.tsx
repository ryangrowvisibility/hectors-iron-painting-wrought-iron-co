import type { Metadata } from "next";
import { Libre_Caslon_Text, Italianno, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Libre_Caslon_Text({
  variable: "--font-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const script = Italianno({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hector's Iron Painting & Wrought Iron Co — Bakersfield Specialty Painter",
  description:
    "Twenty years of on-site electrostatic painting for wrought iron gates, fences, and ornamental metals across Bakersfield. CSLB Lic. #1009092.",
  openGraph: {
    title: "Hector's Iron Painting — Bakersfield Wrought Iron Specialists",
    description:
      "On-site electrostatic painting since 2006. 4.8 stars across 37 reviews. Bakersfield, CA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${script.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
