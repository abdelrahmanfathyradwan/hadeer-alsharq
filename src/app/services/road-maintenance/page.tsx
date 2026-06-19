import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "صيانة وإصلاح الطرق بجدة | معالجة وتجديد الأسفلت - هدير الشرق",
  description:
    "أفضل مقاول صيانة وإصلاح طرق بجدة والمملكة. خدمات معالجة تشققات الأسفلت، معالجة هبوط الشوارع، كشط الأسفلت التالف وإعادة الرصف، وصيانة البنية التحتية.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/services/road-maintenance",
  },
};

export default function RoadMaintenancePage() {
  const faqList = [
    {
      q: "ما هي الأسباب الرئيسية لتشقق وهبوط الأسفلت في شوارع جدة؟",
      a: "تنتج التشققات والحفر نتيجة الحمولات الزائدة للمركبات الثقيلة، وتسرب المياه السطحية أو مياه الأمطار والصرف إلى طبقات التأسيس دون تصريف جيد، إضافة إلى درجات الحرارة العالية التي تؤدي إلى تمدد وانكماش الأسفلت.",
    },
    {
      q: "كيف تتم معالجة التشققات الأسفلتية الطولية والعرضية؟",
      a: "نقوم بتنظيف التشققات تماماً من الأتربة باستخدام قواذف الهواء المضغوط، ثم ملئها بالمواد الرابطة المطاطية الساخنة (Bituminous Sealants) التي تمنع تسرب المياه مجدداً وتمنح الطريق مرونة ومقاومة للضغوط المستمرة.",
    },
    {
      q: "متى يفضل كشط الأسفلت بدلاً من رصف طبقة جديدة فوقه؟",
      a: "يفضل الكشط (Asphalt Milling) عندما تتراكم طبقات الرصف السابقة وتؤدي لارتفاع منسوب الطريق عن الأرصفة ومداخل المنازل، أو عندما تعاني الطبقة السطحية من تهالك شديد وتفكك كامل. كشط الطبقة القديمة يمنح أساساً مستوياً ومتماسكاً للطبقة الجديدة.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-asphalt-950 overflow-x-hidden relative text-white">
      <Navbar />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              <Link href="/services" className="hover:text-road-400 transition-colors">
                خدماتنا
              </Link>
            </li>
            <li>/</li>
            <li className="text-road-400" aria-current="page">
              صيانة وإصلاح الطرق
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            صيانة وإصلاح الطرق بجدة | معالجة وتجديد الأسفلت
          </h1>

          <div className="glass-card p-6 rounded-2xl mb-8 border border-white/5 bg-white/[0.02]">
            <p className="text-lg text-asphalt-200 leading-relaxed">
              تُعد شركة <strong>هدير الشرق للمقاولات العامة</strong> من الشركات المتخصصة والرائدة في تقديم حلول 
              <strong> صيانة وإصلاح الطرق بجدة</strong>. إن المحافظة على سلامة شبكات الطرق وتجديد الأسفلت القديم 
              يساهم بشكل مباشر في توفير بيئة قيادة آمنة والحد من الحوادث وتجنب تلف المركبات. نقدم خدمات متكاملة لمعالجة 
              التشققات، والحفر، وهبوط الطرق، وإعادة تأهيل الطبقات الأسفلتية التالفة بالاعتماد على أفضل الكوادر الهندسية 
              والمعدات الثقيلة.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            أهمية الصيانة الدورية وشرح أنواع صيانة الطرق بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            تنقسم صيانة الطرق التي نقوم بتنفيذها إلى ثلاثة أنواع رئيسية وفقاً لحالة الشارع وتوقيت المعالجة:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li>
              <strong>1. الصيانة الوقائية (Preventative Maintenance):</strong> تتم هذه الصيانة لحماية الطرق الصالحة قبل تدهورها. 
              تشمل سد التشققات الصغيرة لمنع تسرب المياه، وتطبيق دهانات الحماية السطحية، للتأكد من بقاء الطريق آمناً وعازلاً لأطول فترة ممكنة.
            </li>
            <li>
              <strong>2. الصيانة التصحيحية (Corrective Maintenance):</strong> تركز على إصلاح التلفيات الحالية والمباشرة مثل سد الحفر 
              (Pothole Patching) ومعالجة الهبوط الأرضي الموضعي لمنع انتشار التدهور لباقي أجزاء الطريق.
            </li>
            <li>
              <strong>3. إعادة التأهيل الشامل (Rehabilitation):</strong> عند تهالك الطريق بالكامل، نقوم بكشط الطبقة الأسفلتية السطحية 
              وإعادة رصف طبقة إسفلتية جديدة ساخنة ومطابقة لمواصفات وزارة النقل.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            أبرز المشاكل التي نقوم بمعالجتها في طرق وشوارع جدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            تواجه الطرق الأسفلتية تحديات مستمرة نتيجة العوامل البيئية والاستخدام اليومي، ونحن في هدير الشرق نمتلك الحلول التقنية الفعالة لها:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li>
              <strong>الحفر والتموجات (Potholes & Corrugation):</strong> نقوم بحفر المنطقة المحيطة بالحفرة بشكل مستطيل منتظم، 
              وتنظيفها، ثم رشها بمستحلب الإسفلت اللاصق، وملئها بخلطة الأسفلت الساخنة ودكها بالمراص الآلية لضمان تساويها مع السطح المحيط.
            </li>
            <li>
              <strong>التشققات التمساحية (Alligator Cracking):</strong> تشير هذه التشققات إلى ضعف في طبقة الأساس تحت الأسفلت. 
              نقوم بإزالة كامل الطبقة الأسفلتية وإصلاح طبقة الأساس وإعادة ردمها ودمكها، ثم وضع الأسفلت الجديد لضمان عدم عودة المشكلة.
            </li>
            <li>
              <strong>هبوط حول المناهل وغرف التفتيش:</strong> مشكلة شائعة ناتجة عن ضعف الدمك حول غرف التفتيش. نقوم بقص الأسفلت 
              حوله، وإعادة دمك المواد الحصوية، وصب خرسانة مدعمة ثم الرصف النهائي لضمان تطابق المنسوب بشكل مثالي.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            المعدات المتطورة والأساليب الحديثة في صيانة الطرق بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-6">
            نعتمد في مشاريع صيانة الطرق بجدة على ترسانة من المعدات الحديثة التي تضمن السرعة والدقة. تشمل هذه المعدات ماكينات كشط الأسفلت 
            (Cold Planers) التي تقص الطبقة السطحية بدقة ملليمترية، وموزعات البوتامين السائل، وضواغط الأسفلت المزودة بمستشعرات 
            ذكية لقياس نسبة الدمك والكثافة. نلتزم بكافة معايير السلامة المهنية ووضع الحواجز واللوحات التحذيرية لضمان سلامة مستخدمي الطريق أثناء العمل.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="mt-16 border-t border-white/5 pt-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
            الأسئلة الشائعة حول صيانة وإصلاح الطرق بجدة
          </h2>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
              >
                <h3 className="text-lg font-bold text-road-400 mb-2">
                  {faq.q}
                </h3>
                <p className="text-asphalt-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Links to Other Services */}
        <section className="mt-16 border-t border-white/5 pt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">خدمات أخرى قد تهمك:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/asphalt-paving"
              className="px-5 py-3 rounded-xl bg-asphalt-900 border border-white/5 hover:border-road-500/30 text-asphalt-200 hover:text-road-400 text-sm font-semibold transition-all"
            >
              سفلتة طرق بجدة
            </Link>
            <Link
              href="/services/parking-paving"
              className="px-5 py-3 rounded-xl bg-asphalt-900 border border-white/5 hover:border-road-500/30 text-asphalt-200 hover:text-road-400 text-sm font-semibold transition-all"
            >
              سفلتة مواقف السيارات
            </Link>
            <Link
              href="/services/infrastructure-works"
              className="px-5 py-3 rounded-xl bg-asphalt-900 border border-white/5 hover:border-road-500/30 text-asphalt-200 hover:text-road-400 text-sm font-semibold transition-all"
            >
              مشاريع البنية التحتية
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
