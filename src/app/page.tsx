import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import type { Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "شركة أسفلت في جدة | مقاول سفلتة طرق معتمد - هدير الشرق",
  description:
    "أفضل مقاول أسفلت في جدة. متخصصون في سفلتة الطرق، البنية التحتية، وتخطيط المواقف بأحدث المعدات. خبرة 15 عاماً في مشاريع الطرق بجدة. اطلب عرض سعر الآن!",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com",
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale: Locale = lang === "en" ? "en" : "ar";

  return (
    <div className="min-h-screen bg-asphalt-950 overflow-x-hidden relative">
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Projects locale={locale} />
        <Gallery locale={locale} />
        <About locale={locale} />
        <FAQ locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </div>
  );
}

