import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./ui/fonts";
import LayoutHeader from "./components/layout-header";

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
    <html lang="en">
      <body className={dmSans.className}>
        <LayoutHeader/>
        {children}
        </body>
    </html>
  );
}
