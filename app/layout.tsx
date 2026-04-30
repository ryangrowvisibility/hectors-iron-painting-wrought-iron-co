import type { Metadata } from "next";
import { Bodoni_Moda, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hector's Iron Painting & Wrought Iron Co — Bakersfield, CA",
  description:
    "On-site electrostatic painting for wrought iron gates, fences, and ornamental metals. Twenty years in Bakersfield. CSLB Lic. #1009092.",
  openGraph: {
    title: "Hector's Iron Painting — Bakersfield",
    description:
      "Painted on the iron, on your property. Twenty years. 4.8 across 37 reviews.",
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
      <body className="min-h-[100dvh] flex flex-col bg-paper text-espresso relative">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
