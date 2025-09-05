import type { Metadata } from "next";
import { Geist, Geist_Mono, Truculenta } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const truculenta = Truculenta({
  variable: "--font-truculenta-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaos.ai",
  description:
    "Kaos.ai is your smart AI chat assistant for quick answers, creative ideas, and friendly conversations. Start chatting instantly and make everyday tasks easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${truculenta.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
