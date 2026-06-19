import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import type { Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "من نحن | شركة هدير الشرق للمقاولات العامة بجدة",
  description:
    "تعرف على شركة هدير الشرق للمقاولات العامة، رؤيتنا، قيمنا، وخبرتنا الطويلة الممتدة لأكثر من 15 عاماً في قطاع سفلتة الطرق والمقاولات في المملكة العربية السعودية.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/about",
  },
};

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale: Locale = lang === "en" ? "en" : "ar";

  return (
    <div className="min-h-screen bg-asphalt-950 overflow-x-hidden relative">
      <Navbar locale={locale} />
      <main className="pt-20">
        <About locale={locale} as="h1" />
      </main>
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </div>
  );
}

