import type { Metadata } from "next";
import { Geist, Geist_Mono, MonteCarlo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import MonteCarlo font for headings
const monteCarlo = MonteCarlo({
  variable: "--font-montecarlo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Crib & Space Cleaning - Professional Cleaning Services Liverpool, Manchester, Wirral, Chester, St. Helens",
  description: "Professional cleaning services across Liverpool, Manchester, Wirral, Chester, and St. Helens. Residential and commercial cleaning with attention to detail. Book your cleaning service today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monteCarlo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
