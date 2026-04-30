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
    "Electrostatic painting for wrought iron, fences, and ornamental metals — on your property. Twenty years in Bakersfield. CSLB Lic. #1009092.",
  openGraph: {
    title: "Hector's Iron Painting — Bakersfield",
    description:
      "Specialty painter. Iron, fences, gates. Painted on-site since 2006.",
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
