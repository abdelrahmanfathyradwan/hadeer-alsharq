import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hadeer-alsharq.com"),
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
    url: "https://www.hadeer-alsharq.com",
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
    canonical: "https://www.hadeer-alsharq.com",
    languages: {
      "ar-SA": "https://www.hadeer-alsharq.com",
      "en-US": "https://www.hadeer-alsharq.com/?lang=en",
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
        "image": "https://www.hadeer-alsharq.com/5.jpeg",
        "@id": "https://www.hadeer-alsharq.com",
        "url": "https://www.hadeer-alsharq.com",
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
        "areaServed": [
          {
            "@type": "City",
            "name": "Jeddah"
          },
          {
            "@type": "City",
            "name": "Makkah"
          },
          {
            "@type": "City",
            "name": "Taif"
          }
        ],
        "description": "أفضل مقاول أسفلت في جدة. متخصصون في سفلتة الطرق، البنية التحتية، وتخطيط المواقف بأحدث المعدات وخبرة تتجاوز 15 عاماً.",
        "priceRange": "$$",
        "sameAs": [
          "https://wa.me/966565633240"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hadeer-alsharq.com/#website",
        "url": "https://www.hadeer-alsharq.com",
        "name": "هدير الشرق للمقاولات العامة",
        "publisher": {
          "@id": "https://www.hadeer-alsharq.com"
        },
        "inLanguage": ["ar-SA", "en-US"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://www.hadeer-alsharq.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "خدماتنا",
            "item": "https://www.hadeer-alsharq.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "مشاريعنا",
            "item": "https://www.hadeer-alsharq.com/projects"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "من نحن",
            "item": "https://www.hadeer-alsharq.com/about"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "تواصل معنا",
            "item": "https://www.hadeer-alsharq.com/contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم سعر متر الأسفلت في جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يختلف السعر بناءً على مساحة المشروع ونوع الطبقة المطلوبة (5سم أو 7سم). نحن نقدم أفضل الأسعار التنافسية في جدة مع ضمان الجودة. تواصل معنا لمعاينة الموقع وتحديد السعر النهائي."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقومون بسفلتة مواقف السيارات الصغيرة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نحن متخصصون في سفلتة كافة المساحات بدءاً من مواقف القصور والمنازل والمصانع إلى المخططات السكنية الكبرى والطرق الرئيسية."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي مدة تنفيذ مشاريع السفلتة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعتمد المدة على حجم المشروع، ولكننا نتميز بسرعة التنفيذ مع الالتزام التام بالمواصفات الفنية. المشاريع الصغيرة قد تستغرق يوماً واحداً فقط."
            }
          },
          {
            "@type": "Question",
            "name": "هل أعمالكم معتمدة من أمانة جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، كافة أعمالنا تنفذ وفق اشتراطات وكود أمانة جدة ووزارة النقل، ونستخدم مواد ومختبرات معتمدة لضمان الجودة."
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
