import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import type { Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "تواصل معنا | رقم مقاول أسفلت في جدة - هدير الشرق",
  description:
    "اتصل بنا الآن للحصول على عرض سعر مجاني لمشروعك. نغطي جدة، مكة، والطائف على مدار الساعة. هاتف: 0565633240 أو عبر واتساب مباشرة.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/contact",
  },
};

export default async function ContactPage({
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
        <Contact locale={locale} as="h1" />
      </main>
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </div>
  );
}

