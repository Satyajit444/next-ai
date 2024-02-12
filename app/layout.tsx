import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAKA UI",
  description: "AI Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <CrispProvider />
      <body className={font.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
