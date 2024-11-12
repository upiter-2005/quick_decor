import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/shared/helpers/cn";
import "./globals.css";
import { HeaderModule } from "@/modules/header";

const inter = Inter({ subsets: ["cyrillic"], weight: ['300','400','500','600','700','800'] });

export const metadata: Metadata = {
  title: "Quick Decor",
  description: "Quick Decor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={cn(inter.className, 'bg-[#fff] text-[#000] overflow-x-hidden p-0 m-0')}>
        <HeaderModule />
        <main className={cn('')}>{children}</main>
      </body>
    </html>
  );
}
