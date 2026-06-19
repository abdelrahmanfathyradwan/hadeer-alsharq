import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع سفلتة وحفريات المنطقة الغربية | سابقة أعمال هدير الشرق",
  description:
    "تفاصيل مشروع أعمال السفلتة والحفريات الكبرى في المنطقة الغربية بجدة ومكة. شاهد المواد المستخدمة والنتائج والحلول الهندسية التي قدمناها.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/projects/western-province",
  },
};

export default function WesternProvinceProject() {
  const projectDetails = {
    title: "سفلتة وحفريات - المنطقة الغربية",
    location: "جدة ومكة المكرمة، المنطقة الغربية، المملكة العربية السعودية",
    serviceType: "أعمال حفر، تسوية تربة، ورصف إسفلت ساخن للطرق الرئيسية والمخططات",
    materials: "بيسكورس معتمد قريد A، خلطات إسفلتية حارة بسمك 7 سم مضغوطة بالكامل، مستحلب الأسفلت البارد MC1 كطبقة تشريب عازلة للرطوبة.",
    results: "إنجاز أعمال تسوية ورصف طرق ممتدة بطول إجمالي يبلغ 12 كم، بنسبة نجاح 100% مطابقة لمعايير الكثافة والدمك الفنية من المختبرات المرخصة بجدة ومكة.",
    images: [4, 5, 6],
    description: "يمثّل مشروع سفلتة وحفريات المنطقة الغربية أحد أضخم المشاريع الإنشائية لشركتنا، حيث اشتمل العمل على إعداد مسارات الطرق لربط المجمعات اللوجستية الجديدة بالشبكة الرئيسية. تضمّن العمل حفر ورفع أتربة وصخور بكميات ضخمة، وإعادة ردم المواقع على طبقات متعددة لضمان استقرار الأساس الترابي وعدم حدوث هبوطات مستقبلاً. تلا ذلك رش المواد اللاصقة ورصف الإسفلت الساخن باستخدام الفراشات الإلكترونية لضمان انسيابية السطح ومقاومته للأحمال المحورية الثقيلة للشاحنات.",
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
              المنطقة الغربية
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
              <h3 className="text-lg font-bold text-road-400 mb-2">هل تبحث عن خدمات حفر ورصف مماثلة؟</h3>
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
