import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "هدير الشرق للمقاولات العامة | سفلتة طرق وبنية تحتية في جدة",
  description:
    "هدير الشرق للمقاولات العامة - شركة سفلتة طرق وبنية تحتية رائدة في جدة والمملكة العربية السعودية. متخصصون في سفلتة الطرق، أعمال البنية التحتية، تخطيط الطرق، وعلامات الطرق. اتصل بنا الآن.",
  keywords:
    "سفلتة طرق جدة, بنية تحتية جدة, مقاولات عامة السعودية, road construction Jeddah, asphalt paving Jeddah, infrastructure company Saudi Arabia, تخطيط طرق, علامات طرق, شركة مقاولات جدة",
  authors: [{ name: "Hadeer Al Sharq General Contracting" }],
  creator: "Hadeer Al Sharq",
  openGraph: {
    title: "هدير الشرق للمقاولات العامة | Hadeer Al Sharq General Contracting",
    description:
      "شركة رائدة في سفلتة الطرق والبنية التحتية في جدة والمملكة العربية السعودية. Leading road construction and infrastructure company in Jeddah, Saudi Arabia.",
    locale: "ar_SA",
    alternateLocale: "en_US",
    type: "website",
    siteName: "Hadeer Al Sharq General Contracting",
  },
  twitter: {
    card: "summary_large_image",
    title: "هدير الشرق للمقاولات العامة",
    description:
      "شركة سفلتة طرق وبنية تحتية رائدة في جدة. Road construction & infrastructure in Jeddah.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "ar-SA": "/",
      "en-US": "/?lang=en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
