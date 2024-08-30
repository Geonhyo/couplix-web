import type { Metadata } from "next";
import "@/app/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.couplix.com",
  },
  title: "Couplix | 우리가 더 가까워지는 공간",
  description:
    "함께한 순간들은 차곡차곡 기록하고, 서로의 순간들은 주고받아보세요",
  keywords:
    "Couplix, 커플, 커플앱, 썸, 남자친구, 여자친구, 연락, 데이트, 일기, 기록",
  openGraph: {
    title: "Couplix | 우리가 더 가까워지는 공간",
    description:
      "함께한 순간들은 차곡차곡 기록하고, 서로의 순간들은 주고받아보세요",
    type: "website",
    url: "https://www.couplix.com",
    images: [
      {
        url: "https://www.couplix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Couplix Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couplix | 우리가 더 가까워지는 공간",
    description:
      "함께한 순간들은 차곡차곡 기록하고, 서로의 순간들은 주고받아보세요",
    images: [
      {
        url: "https://www.couplix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Couplix Open Graph Image",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://www.couplix.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Couplix",
              url: "https://www.couplix.com",
              openGraph: {
                title: "Couplix | 우리가 더 가까워지는 공간",
                description:
                  "함께한 순간들은 차곡차곡 기록하고, 서로의 순간들은 주고받아보세요",
                type: "website",
                url: "https://www.couplix.com",
                images: [
                  {
                    url: "https://www.couplix.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Couplix Open Graph Image",
                  },
                ],
              },
              description:
                "함께한 순간들은 차곡차곡 기록하고, 서로의 순간들은 주고받아보세요",
            }),
          }}
        />
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1241248260227195'); // Replace with your Meta Pixel ID
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="fb-pixel-noscript" strategy="lazyOnload">
          {`
            <noscript>
              <img height="1" width="1" style={{ display: 'none' }}
                   src="https://www.facebook.com/tr?id=1241248260227195&ev=PageView&noscript=1" />
            </noscript>
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
