import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "شركة أسفلت في جدة | مقاول سفلتة طرق معتمد - هدير الشرق",
  description:
    "أفضل مقاول أسفلت في جدة. متخصصون في سفلتة الطرق، البنية التحتية، وتخطيط المواقف بأحدث المعدات. خبرة 15 عاماً في مشاريع الطرق بجدة. اطلب عرض سعر الآن!",
  keywords:
    "شركة أسفلت في جدة, مقاول أسفلت جدة, سفلتة طرق جدة, road construction Jeddah, asphalt contractor Jeddah, infrastructure company Saudi Arabia, تخطيط طرق, علامات طرق, شركة سفلتة بجدة",
  authors: [{ name: "هدير الشرق للمقاولات العامة" }],
  creator: "هدير الشرق",
  openGraph: {
    title: "شركة أسفلت في جدة | مقاول سفلتة طرق معتمد - هدير الشرق",
    description:
      "شركة رائدة في سفلتة الطرق والبنية التحتية في جدة والمملكة العربية السعودية. Leading asphalt contractor & road construction in Jeddah.",
    locale: "ar_SA",
    alternateLocale: "en_US",
    type: "website",
    siteName: "هدير الشرق للمقاولات العامة",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة أسفلت في جدة - هدير الشرق",
    description:
      "مقاول أسفلت معتمد في جدة. Road construction & asphalt paving in Jeddah.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ConstructionBusiness",
        "name": "Hadeer Al Sharq General Contracting | هدير الشرق للمقاولات العامة",
        "image": "https://asphalt-jeddah.com/og-image.jpg",
        "@id": "https://asphalt-jeddah.com",
        "url": "https://asphalt-jeddah.com",
        "telephone": "+966565633240",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "حي المروة",
          "addressLocality": "جدة",
          "addressRegion": "منطقة مكة المكرمة",
          "postalCode": "23541",
          "addressCountry": "SA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.6167,
          "longitude": 39.1667
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": {
          "@type": "City",
          "name": "Jeddah"
        },
        "description": "Best asphalt contractor in Jeddah specializing in road construction, infrastructure works, and paving."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم سعر متر الأسفلت في جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يختلف السعر بناءً على مساحة المشروع ونوع الطبقة المطلوبة. نحن نقدم أفضل الأسعار التنافسية في جدة مع ضمان الجودة."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقومون بسفلتة مواقف السيارات الصغيرة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نحن متخصصون في سفلتة كافة المساحات بدءاً من مواقف القصور والمنازل إلى المخططات والمصانع."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
