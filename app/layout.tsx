import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./ui/fonts";
import LayoutHeader from "./components/layout-header";
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Matthieu",
  description: "My Portolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.className} bg-white dark:bg-maastricht`}>
        <LayoutHeader/>
        {children}
        </body>
    </html>
  );
}
