import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع البنية التحتية لمخطط سحاري بجدة | سابقة أعمال هدير الشرق",
  description:
    "تفاصيل مشروع حفر وتمديد شبكات الصرف الصحي والمياه والاتصالات لمشروع مخطط سحاري السكني في جدة. ميزات التنفيذ والدك وتأهيل الموقع.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/projects/sahari-infrastructure",
  },
};

export default function SahariInfrastructureProject() {
  const projectDetails = {
    title: "بنية تحتية - جدة (سحاري)",
    location: "مخطط سحاري السكني، جدة، المملكة العربية السعودية",
    serviceType: "أعمال البنية التحتية وتأسيس شبكات الصرف والمياه وتمهيد الطرق الداخلية للمخطط",
    materials: "مواسير مياه وصرف من مادة الـ HDPE مقاومة للضغوط والحرارة، خرسانة مقاومة للأملاح والكبريتات للمناهل، مواد ردم ترابية مختبرة معملياً.",
    results: "إتمام تأسيس شبكات المرافق بالكامل بنسبة 100%، وتجاوز كافة اختبارات ضغط الأنابيب والدمك المعملي لطبقات الطرق الفرعية للمخطط.",
    images: [13, 14, 15],
    description: "تضمن مشروع تطوير مخطط سحاري السكني بجدة إعداد وتأهيل كامل مساحة المخطط لصالح المطورين. شمل العمل حفر وتمديد شبكات المياه الصالحة للشرب بطول 5 كم، وشبكات الصرف الصحي والسيول بطول 4.5 كم، مع تركيب كافة المناهل الخرسانية وتوصيلها بالشوارع الرئيسية بجدة. تم تنفيذ أعمال الردم للمسارات الخدمية ودكها على طبقات متعددة للوصول لدرجة صلابة كافية لتأسيس طبقة الأسفلت النهائية وتلافي أي تشققات أو هبوط أرضي ناتج عن تحرك التربة التحتية.",
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
              مخطط سحاري
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
              <h3 className="text-lg font-bold text-road-400 mb-2">هل تبحث عن خدمات بنية تحتية وتمديد شبكات؟</h3>
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
