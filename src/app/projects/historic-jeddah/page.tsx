import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع تخطيط طرق جدة التاريخية | سابقة أعمال هدير الشرق",
  description:
    "تفاصيل مشروع تخطيط وتلوين الطرق والممرات الأثرية في منطقة جدة التاريخية (البلد) بالتعاون مع أمانة جدة. تعرف على المواد المستخدمة والنتائج المميزة للمشروع.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/projects/historic-jeddah",
  },
};

export default function HistoricJeddahProject() {
  const projectDetails = {
    title: "تخطيط طرق - جدة التاريخية",
    location: "جدة التاريخية (منطقة البلد)، جدة، المملكة العربية السعودية",
    serviceType: "تخطيط الطرق، الدهانات الأرضية، وتأهيل الممرات السياحية والأثرية",
    materials: "دهانات حرارية ثرموبلاستيك عاكسة، حبيبات زجاجية عاكسة (Glass Beads) مطابقة لمواصفات وزارة النقل وأمانة جدة، دهانات إيبوكسي ملونة للممرات المشاة الأثرية.",
    results: "تم إنجاز المشروع بالكامل بنسبة 100% وفي غضون الجدول الزمني المحدد (25 يوماً). تم تحسين الانسيابية المرورية وحركة المشاة السياحية في المنطقة التاريخية بجدة مع الحفاظ التام على الطابع التراثي المعماري للمنطقة.",
    images: [1, 2, 3],
    description: "بالتعاون المباشر مع أمانة جدة والجهات المشرفة على مشروع تطوير جدة التاريخية، قامت شركة هدير الشرق للمقاولات العامة بتخطيط ورسم الخطوط الأرضية والدهانات الإرشادية لشبكة الطرق والممرات التي تربط المعالم الأثرية ببعضها. تمثّل التحدي الرئيسي في هذا المشروع في ضرورة تنفيذ الأعمال بأقل إزعاج ممكن للسكان والزوار وبدقة هندسية عالية تراعي ضيق الممرات القديمة والزوايا الضيقة للمباني التراثية. تم استخدام دهانات حرارية متطورة تقاوم درجات الحرارة المرتفعة والركض المتكرر للمشاة، وتضمن الرؤية الليلية الواضحة للسائقين عبر دمج حبيبات زجاجية عاكسة للضوء.",
  };

  return (
    <div className="min-h-screen bg-asphalt-950 text-white overflow-x-hidden relative">
      <Navbar />

      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-asphalt-400 mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex gap-2">
            <li>
              <Link href="/" className="hover:text-road-400 transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/projects" className="hover:text-road-400 transition-colors">
                مشاريعنا
              </Link>
            </li>
            <li>/</li>
            <li className="text-road-400" aria-current="page">
              جدة التاريخية
            </li>
          </ol>
        </nav>

        {/* Project Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          {projectDetails.title}
        </h1>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {projectDetails.images.map((imgNum) => (
            <div key={imgNum} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-lg">
              <Image
                src={`/${imgNum}.jpeg`}
                alt={`${projectDetails.title} - صورة ${imgNum}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          ))}
        </div>

        {/* Project Info Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Metadata Card */}
          <div className="md:col-span-1 glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.02] h-fit">
            <h2 className="text-xl font-bold text-road-400 mb-6 pb-2 border-b border-white/5">تفاصيل المشروع</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-asphalt-400 font-semibold mb-1">الموقع:</span>
                <span className="text-asphalt-200">{projectDetails.location}</span>
              </div>
              <div>
                <span className="block text-asphalt-400 font-semibold mb-1">نوع الخدمة:</span>
                <span className="text-asphalt-200">{projectDetails.serviceType}</span>
              </div>
              <div>
                <span className="block text-asphalt-400 font-semibold mb-1">المواد المستخدمة:</span>
                <span className="text-asphalt-200">{projectDetails.materials}</span>
              </div>
              <div>
                <span className="block text-asphalt-400 font-semibold mb-1">النتائج المحققة:</span>
                <span className="text-road-400 font-medium">{projectDetails.results}</span>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">وصف حالة الدراسة والعمل المنجز</h2>
            <p className="text-asphalt-300 leading-relaxed text-lg">
              {projectDetails.description}
            </p>
            
            <div className="glass-card p-6 rounded-2xl border border-white/5 bg-road-500/5 mt-8">
              <h3 className="text-lg font-bold text-road-400 mb-2">هل تبحث عن خدمات تخطيط ورصف مماثلة؟</h3>
              <p className="text-sm text-asphalt-300 mb-4">
                فريق هدير الشرق جاهز لمعاينة موقعك وتقديم عرض سعر مجاني متكامل لرصف وتخطيط الطرق والمواقف بأعلى كفاءة.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-road-500 to-road-600 text-asphalt-950 font-bold rounded-xl hover:from-road-400 hover:to-road-500 transition-colors shadow-lg"
              >
                تواصل معنا الآن
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
