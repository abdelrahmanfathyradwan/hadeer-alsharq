import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سفلتة طرق بجدة | مقاول أسفلت معتمد ومحترف - هدير الشرق",
  description:
    "أفضل شركة سفلتة طرق بجدة ومكة والطائف بمواصفات أمانة جدة ووزارة النقل. مقاول أسفلت معتمد لتمهيد ورصف الطرق والمخططات السكنية والمواقف بأحدث المعدات وأفضل الأسعار.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/services/asphalt-paving",
  },
};

export default function AsphaltPavingPage() {
  const faqList = [
    {
      q: "ما هو سعر متر الأسفلت في جدة؟",
      a: "يتراوح سعر متر الأسفلت في جدة بناءً على مساحة الموقع المطلوبة، ونوع الخلطة الأسفلتية المستخدمة وسماكة الطبقة (عادة بين 5 سم إلى 7 سم). نقدم أسعاراً تنافسية تبدأ من فحص الموقع مجاناً وتقديم المقايسة المعتمدة للعميل.",
    },
    {
      q: "كم من الوقت يستغرق رصف مواقف السيارات أو المخططات السكنية؟",
      a: "المشاريع الصغيرة مثل مواقف السيارات والمداخل المنزلية غالباً ما تستغرق يوماً واحداً للتسوية والرصف. بينما المخططات السكنية الكبيرة والطرق الممتدة يتم جدولتها على مراحل لضمان الدمك والاختبار المعملي لكل طبقة وفق المعايير الهندسية.",
    },
    {
      q: "هل خلطات الأسفلت المستخدمة معتمدة من أمانة جدة؟",
      a: "نعم، كافة المواد والخلطات الأسفلتية الحارة والباردة (MC1 & RC2) التي نستخدمها في مشاريعنا يتم توريدها من مصانع معتمدة وتخضع لاختبارات الجودة وضمان الدمك من المختبرات المرخصة من أمانة جدة ووزارة النقل.",
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
              سفلتة طرق بجدة
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            سفلتة طرق بجدة | مقاول أسفلت معتمد ومحترف
          </h1>

          <div className="glass-card p-6 rounded-2xl mb-8 border border-white/5 bg-white/[0.02]">
            <p className="text-lg text-asphalt-200 leading-relaxed">
              تعتبر شركة <strong>هدير الشرق للمقاولات العامة</strong> الخيار الأول والرائد في تقديم أعمال 
              <strong> سفلتة الطرق بجدة</strong>. نمتلك خبرة تمتد لأكثر من 15 عاماً في قطاع تمهيد ورصف الطرق، 
              وتجهيز البنية التحتية، ورصف المخططات السكنية الكبرى، والمناطق الصناعية، ومواقف السيارات العامة والخاصة. 
              نحرص على تطبيق أعلى المعايير الهندسية والمواصفات الفنية المعتمدة من قبل أمانة جدة ووزارة النقل والخدمات اللوجستية بالمملكة.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            لماذا تعد خدمات رصف الأسفلت ضرورية للبنية التحتية في جدة؟
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-6">
            إن مدينة جدة، بوصفها البوابة الرئيسية للحرمين الشريفين وواحدة من أكبر المدن الاقتصادية، تشهد نمواً عمرانياً متسارعاً 
            وحركة مرورية كثيفة على مدار الساعة. هذا التوسع يتطلب تأسيس شبكة طرق متينة وممهدة باحترافية لتتحمل الأوزان الثقيلة 
            والظروف المناخية المختلفة مثل درجات الحرارة المرتفعة ومواسم الأمطار. رصف الأسفلت عالي الجودة يضمن سلامة القيادة، 
            ويقلل من استهلاك المركبات، ويساهم في رفع تصنيف جودة الحياة بالمنطقة.
          </p>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            خطوات عمل مقاول الأسفلت بجدة: الدقة والاحترافية في التنفيذ
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            لضمان الحصول على طريق أسفلتي مستدام وخالٍ من العيوب والهبوط الأرضي مستقبلاً، نتبع منهجية عمل دقيقة تتلخص في المراحل التالية:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li>
              <strong>أولاً: الرفع المساحي والدراسة الجيوتقنية:</strong> نقوم بإرسال مهندسي المساحة لرفع إحداثيات الموقع وفحص التربة 
              لتحديد منسوب الطريق وضمان تصريف المياه بشكل طبيعي وتفادي تجمعها.
            </li>
            <li>
              <strong>ثانياً: أعمال الحفر والردم والتسوية (Subgrade Preparation):</strong> يتم إزالة الطبقات التالفة وحفر الموقع 
              بالعمق المطلوب، ثم ردمه بطبقة من البيسكورس (Sub-base) ودكها بواسطة مداحل ثقيلة للوصول إلى نسبة دمك تفوق 95%.
            </li>
            <li>
              <strong>ثالثاً: رش المادة اللاصقة (Prime Coat - MC1):</strong> نقوم برش مادة البوتامين السائل الساخن MC1 لتهيئة 
              الطبقة الترابية وضمان تماسك خلطة الأسفلت بالطبقات التحتية بشكل كامل.
            </li>
            <li>
              <strong>رابعاً: فرش خلطة الأسفلت الساخنة ودكها:</strong> توريد الأسفلت من مصانع معتمدة في جدة وفرشه باستخدام 
              الفراشات الآلية الحديثة بالسمك المطلوب (5 سم للمخططات والمواقف، و7 سم أو أكثر للطرق الرئيسية)، تليها عملية الدمك 
              باستخدام الهراسات الحديدية والمطاطية لضمان نعومة وصلابة السطح.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            المواد المستخدمة في أعمال سفلتة الطرق بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            نحن في هدير الشرق لا نساوم على الجودة. نعتمد على المواد والخلطات الأسفلتية المطابقة للـ SASO والمواصفات الفنية الأمريكية (AASHTO):
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li><strong>البيتومين (Bitumen):</strong> المادة اللاصقة المستخلصة من تكرير النفط والتي تمنح الأسفلت مرونته وقدرته على تحمل الضغط.</li>
            <li><strong>الركام المتدرج (Aggregates):</strong> بحص بمقاسات مدروسة وخالٍ من المواد العضوية والأتربة لضمان القوة الميكانيكية للخلطة.</li>
            <li><strong>المستحلبات البوتيمينية السائلة (MC1 & RC2):</strong> لرش طبقات التأسيس والربط لضمان التماسك ومقاومة تسرب المياه للأسفل.</li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            ميزات اختيار شركة هدير الشرق لأعمال السفلتة بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-6">
            عند اختيارك لـ <strong>هدير الشرق</strong> كشريك لمشروعك، فإنك تحصل على ضمانات شاملة تشمل الجودة العالية، 
            والالتزام الصارم بالجدول الزمني المحدد، وفريق فني متكامل يشرف على أدق تفاصيل العمل. نستخدم أحدث الآلات والمعدات 
            من بلدوزرات، مداحل، وفراشات لضمان جودة السطح النهائي ومقاومته للتشققات والتآكل.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="mt-16 border-t border-white/5 pt-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
            الأسئلة الشائعة حول سفلتة الطرق بجدة
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
              href="/services/road-maintenance"
              className="px-5 py-3 rounded-xl bg-asphalt-900 border border-white/5 hover:border-road-500/30 text-asphalt-200 hover:text-road-400 text-sm font-semibold transition-all"
            >
              صيانة وإصلاح الطرق
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
