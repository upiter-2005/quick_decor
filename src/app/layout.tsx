import type { Metadata } from "next";
import { Inria_Serif, Inter } from "next/font/google";
import { cn } from "@/shared/helpers/cn";
import "./globals.css";
import { HeaderModule } from "@/modules/header";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import Script from "next/script";
import { Toaster } from 'react-hot-toast';
import { Sale } from "@/components/sale";

const inter = Inter({ subsets: ["cyrillic"], weight: ['300','400','500','600','700','800'] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inria = Inria_Serif({subsets: ["latin"], weight: ['300', '400', '700']});

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
    <html lang="uk" className="scroll-smooth">
      <body className={cn(inter.className, 'bg-[#fff] text-[#000] overflow-x-hidden p-0 m-0')}>
        <HeaderModule />
        <main className={cn('')}>{children}</main>
        <Toaster 
          containerStyle={{
            top: 70,
          }}
          toastOptions={{
            success: {
              style: {
                background: '#1c293f',
                color: '#fff',
                fontWeight: 'semibold'
              },
            },
            error: {
              style: {
                background: 'red',
              },
            },
          }}
        />
        <Sale />
        <Footer />
        
        <Suspense>
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z96KMJBKD0" />
        
            <Script
              id="gtm-script"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `

                <!-- Google tag (gtag.js) -->
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Z96KMJBKD0');



        `,
              }}
            />
          </>
        </Suspense>
        
      </body>
    </html>
  );
}
