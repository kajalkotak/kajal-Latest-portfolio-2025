import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kajal Kotak | Frontend Developer | React & Next.js",
  description:
    "Kajal Kotak is a Frontend Developer specializing in React, Next.js, and modern web applications.",
  keywords: [
    "Kajal Kotak",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Kajal Kotak" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Kajal Kotak | Frontend Developer",
    description:
      "Professional portfolio showcasing React & Next.js projects, skills, and contact details.",
    url: "https://YOUR-VERCEL-LINK.vercel.app",
    siteName: "Kajal Kotak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kajal Kotak Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kajal Kotak | Frontend Developer",
    description: "Frontend Developer portfolio built with React and Next.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
