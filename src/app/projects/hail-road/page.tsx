import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع سفلتة وتطوير الطرق بمنطقة حائل | سابقة أعمال هدير الشرق",
  description:
    "تفاصيل مشروع تمهيد وسفلتة الطرق الفرعية والرئيسية في منطقة حائل. شاهد المواد والخطوات الفنية المتبعة لضمان تماسك الأسفلت ومقاومته للحرارة.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/projects/hail-road",
  },
};

export default function HailRoadProject() {
  const projectDetails = {
    title: "أعمال طرق - حائل",
    location: "منطقة حائل، المملكة العربية السعودية",
    serviceType: "رصف شوارع المخططات السكنية وصيانة طبقات الطرق التالفة",
    materials: "حصى بازلتي أسود متدرج، بيتومين نقي 60/70، دهانات ليلية عاكسة، طبقات أساس حجرية (Base course).",
    results: "رصف شبكة شوارع فرعية تخدم أكثر من 1500 وحدة سكنية بنجاح 100% وبجودة تماسك ممتازة تقاوم التآكل والظروف المناخية في حائل.",
    images: [7, 8, 9],
    description: "شمل هذا المشروع تطوير وسفلتة شبكة الطرق في أحد المخططات السكنية الجديدة بمنطقة حائل. تطلّب العمل تعاملاً هندسياً خاصاً مع طبيعة التربة الرملية والصخرية بالمنطقة، حيث تم رش التربة بالماء ودكها بشكل مكثف على عدة مراحل باستخدام المداحل الهيدروليكية الثقيلة للحد من احتمالات حدوث أي هبوط أرضي لاحق. تلا ذلك رصف الأسفلت الساخن بسماكة 5 سم بإنهاء مستوٍ ومثالي نال ثقة الجهات الفنية المشرفة على المشروع.",
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
              طرق حائل
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
              <h3 className="text-lg font-bold text-road-400 mb-2">هل تبحث عن خدمات تمهيد ورصف مماثلة؟</h3>
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
