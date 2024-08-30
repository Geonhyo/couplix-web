import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://couplix.com",
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
    url: "https://couplix.com",
    images: [
      {
        url: "https://couplix.com/og-image.jpg",
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
        url: "https://couplix.com/og-image.jpg",
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
        <link rel="canonical" href="https://couplix.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Couplix",
              url: "https://couplix.com",
              openGraph: {
                title: "Couplix | 우리가 더 가까워지는 공간",
                description:
                  "함께한 순간들은 차곡차곡 기록하고, 서로의 순간들은 주고받아보세요",
                type: "website",
                url: "https://couplix.com",
                images: [
                  {
                    url: "https://couplix.com/og-image.jpg",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
