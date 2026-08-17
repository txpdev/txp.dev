import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://txp.dev"),
  title: "TXP.DEV — Tibo X Perol",
  description:
    "Tibo X Perol is an engineer building software for health, infrastructure, enterprise work, and science.",
  openGraph: {
    title: "TXP.DEV — Tibo X Perol",
    description:
      "Software by Tibo X Perol, across health, infrastructure, enterprise work, and science.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
