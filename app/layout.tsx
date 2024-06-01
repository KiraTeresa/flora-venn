import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "FloraVenn",
  description: "Keep your plants healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
