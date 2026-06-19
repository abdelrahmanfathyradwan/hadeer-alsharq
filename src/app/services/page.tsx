import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import type { Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "خدمات سفلتة الطرق في جدة | مقاول أسفلت معتمد - هدير الشرق",
  description:
    "نقدم خدمات سفلتة الطرق، البنية التحتية، تخطيط المواقف، وعلامات الطرق الإرشادية بأعلى معايير الجودة في جدة ومكة والطائف. اتصل بنا الآن لمعاينة مجانية.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/services",
  },
};

export default async function ServicesPage({
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
        <Services locale={locale} as="h1" />
      </main>
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </div>
  );
}

