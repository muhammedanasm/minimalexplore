import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainWrapper from "@/components/layout/MainWrapper";

// Clash Grotesk Variable Font Setup
const clashGrotesk = localFont({
  src: "../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "100 900",
});

// Satoshi Variable Font Setup
const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MinimalExplore — Premium Manali Tours",
  description:
    "Experience Manali like never before with our curated premium tours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashGrotesk.variable} ${satoshi.variable}`}>
      <body className="antialiased font-satoshi">
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
