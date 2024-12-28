import type { Metadata } from "next";
import { Inria_Serif, Inter } from "next/font/google";
import { cn } from "@/shared/helpers/cn";
import "./globals.css";
import { HeaderModule } from "@/modules/header";
import { Footer } from "@/components/footer";
// import { Suspense } from "react";
// import Script from "next/script";
import { Toaster } from 'react-hot-toast';
import { Sale } from "@/components/sale";
import { CrmChat } from "@/shared/api/crmChat";
import { Suspense } from "react";
import Script from "next/script";


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
    <head>
     
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    
        <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `

          <!-- Google tag (gtag.js) -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV8977PZ');
  `,
        }}
      />
      <Script
        id="window-size"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {

    // Store the window width
    var windowWidth = window.innerWidth

    // Resize Event
    window.addEventListener("resize", function() {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if (window.innerWidth != windowWidth) {

            // Update the window width for next time
            windowWidth = window.innerWidth

            // Do stuff here

        }

        // Otherwise do nothing
    })

})`
        }}
      />
      </head>
    
      <body className={cn(inter.className, 'bg-[#fff] text-[#000] overflow-x-hidden p-0 m-0')}>
        <Suspense>
          <CrmChat/>
        </Suspense>
        
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
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-4XLP0P9SL3" /> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WV8977PZ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
 
     
    </>
    </Suspense>

    {/* <Script
        id="ringostat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          <script type="text/javascript">
              (function (d,s,u,e,p) {
                p=d.getElementsByTagName(s)[0],e=d.createElement(s),e.async=1,e.src=u,p.parentNode.insertBefore(e, p);
              })(document, 'script', 'https://script.ringostat.com/v4/42/42502cb7d42f08b91fcd3c22e97f79ec210f0644.js');
              var pw = function() {if (typeof(ringostatAnalytics) === "undefined") {setTimeout(pw,100);} else {ringostatAnalytics.sendHit('pageview');}};
              pw();
          </script>
          `,
        }}
      /> */}

      </body>
    </html>
  );
}
