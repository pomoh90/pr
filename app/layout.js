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

export const metadata = {
  title: "STARZDUST | SMM and Creative Marketing",
  description: "STARZDUST — Shaping the future of PR, marketing, and creative solutions for stellar brands.",
  viewport: "width=device-width, initial-scale=1",
  // Open Graph для SMM
  openGraph: {
    title: "STARZDUST | Elevate Your SMM and Marketing",
    description: "Crafting stellar content and boosting your brand on social media with creative solutions.",
    url: "https://starzdustagency.com/",
    type: "website",
    image: "https://starzdustagency.com/images/logo.png",
  },
  // Twitter Cards для SMM
  twitter: {
    card: "summary_large_image",
    title: "STARZDUST | SMM for Stellar Brands",
    description: "Unique SMM strategies and creative marketing to skyrocket your social media success.",
    image: "https://starzdustagency.com/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}