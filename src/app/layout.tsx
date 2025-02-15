import "@/styles/globals.css";

import { Press_Start_2P } from "next/font/google";
import { type Metadata } from "next";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "My Memorize Game in Next.js version",
  description: "Fun game to memorize emojis",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pressStart2P.className}`}>
      <body>{children}</body>
    </html>
  );
}
