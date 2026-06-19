import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشاريع البنية التحتية بجدة | مقاول حفر وتأسيس شبكات - هدير الشرق",
  description:
    "أفضل مقاول بنية تحتية بجدة والمملكة. متخصصون في أعمال الحفر والردم والتمهيد، تمديد شبكات المياه، الصرف الصحي، الكهرباء وتصريف السيول للبلديات والمخططات.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/services/infrastructure-works",
  },
};

export default function InfrastructureWorksPage() {
  const faqList = [
    {
      q: "ما هي الخدمات الأساسية المندرجة تحت أعمال البنية التحتية؟",
      a: "تشتمل على أعمال الحفر والردم والتسوية التمهيدية للتربة، تأسيس وتمديد خطوط وشبكات الصرف الصحي، وشبكات المياه الصالحة للشرب، وتمديد كابلات الكهرباء والاتصالات الأرضية، بالإضافة لتأسيس قنوات تصريف السيول ومياه الأمطار قبل البدء في الرصف النهائي.",
    },
    {
      q: "كيف تضمنون جودة تمديد الشبكات تحت الطرق الأسفلتية؟",
      a: "نتبع اشتراطات فنية صارمة تشمل اختبار ضغط الأنابيب والتوصيلات قبل الردم، استخدام مواد ردم مطابقة للمواصفات (مثل رمل نظيف وبحوص متدرجة)، ودك التربة حول الأنابيب على طبقات لا تتعدى 30 سم باستخدام ضواغط يدوية وآلية مع إجراء اختبارات الكثافة والدمك المعملية.",
    },
    {
      q: "هل تقومون بتنفيذ مشاريع البنية التحتية للمخططات السكنية الكبيرة والخاصة؟",
      a: "نعم، نقوم بتنفيذ البنية التحتية المتكاملة وتجهيز الأراضي للمخططات السكنية للمطورين العقاريين، المجمعات الصناعية، والمشاريع الحكومية، وفق تصاميم هندسية معتمدة واشتراطات أمانة جدة والجهات الخدمية ذات العلاقة.",
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
              أعمال البنية التحتية
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            مشاريع البنية التحتية بجدة | مقاول حفر وتأسيس شبكات
          </h1>

          <div className="glass-card p-6 rounded-2xl mb-8 border border-white/5 bg-white/[0.02]">
            <p className="text-lg text-asphalt-200 leading-relaxed">
              تقدم شركة <strong>هدير الشرق للمقاولات العامة</strong> خدمات متكاملة واحترافية في تنفيذ 
              <strong> مشاريع البنية التحتية بجدة</strong> ومختلف مناطق الغربية. إن تأسيس بنية تحتية صلبة 
              هو العمود الفقري لأي مشروع إنشائي ناجح ومستدام، سواء كان مخططاً سكنياً حديثاً، مجمعاً صناعياً، 
              أو طرقاً رئيسية. بفضل أسطولنا الضخم من المعدات الثقيلة وفريقنا الهندسي المتمرس، نضمن تخطيط وتأسيس 
              شبكات الصرف الصحي، المياه، الكهرباء، والسيول بأعلى مستويات الجودة الفنية والمطابقة للكود السعودي.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            أهمية التأسيس السليم لأعمال البنية التحتية قبل رصف الطرق بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-6">
            يعتبر التسرع في رصف الطرق دون إتمام أعمال البنية التحتية واختبار تماسك التربة والشبكات الأرضية خطأ هندسياً فادحاً. 
            تراخي طبقات التربة أو حدوث تسريبات في الأنابيب الأرضية يؤدي مباشرة لهبوط الأسفلت وتشكل الحفر الخطيرة وتصدع الشوارع. 
            لذلك، نحرص في هدير الشرق على تنفيذ أعمال حفر وتثبيت خطوط المرافق على أعماق مدروسة، واستخدام حشوات ردم خاصة وتأكيد 
            دمكها مخبرياً للوصول للصلابة المطلوبة لضمان عمر مديد للشارع.
          </p>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            الخدمات التفصيلية التي نقدمها في مشاريع البنية التحتية بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            نحن نغطي كافة احتياجات المخططات والمواقع من أعمال التأسيس والمقاولات العامة الأرضية:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li>
              <strong>أعمال القطع والردم والتسوية (Earthworks):</strong> تسوية الأراضي الوعرة والجبلية وحفر المواقع ورفع المخلفات، 
              وتوريد مواد الردم المعتمدة (مثل صب جريد A وB) وفرشها على طبقات منتظمة للحصول على منسوب متساوٍ ومثالي.
            </li>
            <li>
              <strong>تأسيس شبكات الصرف الصحي والمياه:</strong> تمديد أنابيب الـ PVC والـ HDPE عالية الكثافة والمقاومة للمواد الكيميائية 
              وضغوط التربة، وتشييد غرف التفتيش (المناهل) الخرسانية المعزولة بالكامل ضد تسربات المياه.
            </li>
            <li>
              <strong>قنوات تصريف مياه الأمطار والسيول:</strong> إنشاء شبكات تصريف المياه والعبّارات الخرسانية الجاهزة والمصبوبة في الموقع 
              لتصريف المياه بسرعة أثناء مواسم الأمطار ومنع حدوث فيضانات داخل الأحياء السكنية أو الطرق الرئيسية بجدة.
            </li>
            <li>
              <strong>تمديد البنية التحتية الجافة (كهرباء واتصالات):</strong> إنشاء مسارات كابلات الكهرباء ذات الجهد العالي والمنخفض، 
              وخطوط الاتصالات والألياف الضوئية، وحمايتها بصبات خرسانية إرشادية لحمايتها من الحفريات المستقبلية.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            فريق العمل الهندسي ومختبرات مراقبة الجودة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-6">
            تشمل خدماتنا الإشراف الهندسي المباشر وإرسال عينات التربة والمواد المردومة لمختبرات فحص مستقلة ومعتمدة في جدة. 
            يتم فحص الرطوبة ومعدل الكثافة الجافة الكلية (Proctor Test) لكل طبقة ردم للتأكد من وصولها للدمك التام 100% 
            قبل الانتقال للمرحلة التالية. هذا الانضباط في تطبيق معايير الجودة هو ما يبني ثقة شركائنا في المشاريع الحكومية والخاصة.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="mt-16 border-t border-white/5 pt-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
            الأسئلة الشائعة حول مشاريع البنية التحتية بجدة
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
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
