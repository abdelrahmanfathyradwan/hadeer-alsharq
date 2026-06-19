import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import type { Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "مشاريعنا في سفلتة الطرق والمقاولات بجدة - هدير الشرق",
  description:
    "شاهد معرض مشاريع سفلتة الطرق، البنية التحتية، والمواقف التي نفذتها شركة هدير الشرق للمقاولات العامة في جدة ومختلف مناطق المملكة. صور حية وتفاصيل مشاريعنا.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/projects",
  },
};

export default async function ProjectsPage({
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
        <Projects locale={locale} as="h1" />
        <Gallery locale={locale} />
      </main>
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </div>
  );
}

