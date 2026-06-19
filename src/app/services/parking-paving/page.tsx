import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سفلتة مواقف السيارات بجدة | مقاول مواقف معتمد - هدير الشرق",
  description:
    "مقاول سفلتة وتخطيط مواقف سيارات بجدة. خدمات رصف مواقف المجمعات التجارية، القصور، الفلل، المصانع، والمستشفيات بأحدث المعدات والدهانات الحرارية المعتمدة.",
  alternates: {
    canonical: "https://www.hadeer-alsharq.com/services/parking-paving",
  },
};

export default function ParkingPavingPage() {
  const faqList = [
    {
      q: "ما هي السماكة المناسبة لطبقة الأسفلت في مواقف السيارات؟",
      a: "تعتمد السماكة على نوع السيارات المستخدمة للمواقف؛ للمواقف السكنية الخاصة ومواقف السيارات الصغيرة تكفي سماكة 5 سم بعد الدمك التام. أما بالنسبة لمواقف الشاحنات الكبيرة والمصانع والمستودعات فيفضل رصف طبقتين بسماكة إجمالية تتراوح بين 8 سم إلى 10 سم لضمان عدم حدوث تشققات.",
    },
    {
      q: "هل تقومون بتخطيط ورسم مسارات المواقف واللوحات الإرشادية؟",
      a: "نعم، نحن نقدم حلاً متكاملاً يبدأ من أعمال الحفر والردم والتمهيد والرصف، وينتهي بأعمال الدهانات الحرارية المرورية (Thermoplastic Road Marking)، ورسم مسارات السيارات، وتخصيص مواقف ذوي الاحتياجات الخاصة، وتركيب مصدات السيارات الخرسانية والمطاطية.",
    },
    {
      q: "كيف تضمنون عدم تجمع مياه الأمطار في المواقف المسفلتة؟",
      a: "نقوم بدراسة مساحية دقيقة لضبط الميول واتجاهات الصرف نحو قنوات التصريف الرئيسية أو المناهل. يتم فحص انسيابية المياه بدقة بعد عملية الرصف والدمك للتأكد من عدم وجود أي جيوب لتجمع المياه داخل الموقف.",
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
              سفلتة مواقف السيارات
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            سفلتة مواقف السيارات بجدة | مقاول مواقف معتمد
          </h1>

          <div className="glass-card p-6 rounded-2xl mb-8 border border-white/5 bg-white/[0.02]">
            <p className="text-lg text-asphalt-200 leading-relaxed">
              تقدم شركة <strong>هدير الشرق للمقاولات العامة</strong> خدمات احترافية ومتطورة في 
              <strong> سفلتة مواقف السيارات بجدة</strong>. إن رصف وتخطيط مواقف السيارات للمشاريع التجارية 
              والسكنية والصناعية يتطلب تخطيطاً هندسياً دقيقاً لضمان الانسيابية المرورية، والاستغلال الأمثل للمساحات، 
              وتوفير أقصى درجات الأمان للمشاة والمركبات على حد سواء. نلتزم باستخدام أفضل خلطات الأسفلت والمواد 
              العازلة والدهانات المعتمدة لتوفير مواقف تدوم طويلاً.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            لماذا يجب التخطيط الجيد قبل رصف وتعبيد مواقف السيارات؟
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            تعتبر مواقف السيارات الانطباع الأول لزوار أي منشأة، سواء كانت مجمعاً تجارياً، فندقاً، مستشفى، أو حتى قصراً خاصاً. 
            التخطيط الهندسي السليم يساعد في تجنب عدة مشاكل شائعة:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li><strong>تنظيم حركة الدخول والخروج:</strong> لتفادي التكدس المروري عند البوابات وتوفير مسارات حركة واضحة للمركبات.</li>
            <li><strong>تحديد الميول وتصريف السيول:</strong> لمنع ركود مياه الأمطار الذي يؤدي لتلف وتفكك الأسفلت على المدى الطويل.</li>
            <li><strong>الاستغلال الأقصى للمساحة:</strong> زيادة الطاقة الاستيعابية لعدد السيارات في الموقف دون التأثير على راحة القائدين أثناء الركن.</li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            خطوات تنفيذ أعمال سفلتة مواقف السيارات بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-4">
            نحن نتبع خطوات فنية دقيقة ومنظمة لضمان تسليم مشروعك بأعلى جودة ممكنة:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-asphalt-300 mb-8">
            <li>
              <strong>1. تسوية وتجهيز التربة الأساسية (Grading):</strong> كشط التربة القديمة وإزالتها وتعديل المناسيب لضمان اتجاهات الميول الصحيحة نحو مصارف الأمطار.
            </li>
            <li>
              <strong>2. وضع وطحن طبقة البيسكورس (Sub-base Layer):</strong> فرش طبقة من الحصى المتدرج بسماكة مناسبة، ورشها بالماء ودكها بالمداحل حتى تصبح شديدة الصلابة ومقاومة للهبوط.
            </li>
            <li>
              <strong>3. رش الطبقة اللاصقة:</strong> تطبيق البوتامين السائل الساخن الذي يعمل كعازل للرطوبة ومادة تماسك قوية جداً مع الطبقة التالية.
            </li>
            <li>
              <strong>4. رصف الأسفلت الساخن:</strong> فرش الخلطة الأسفلتية الحارة ودمكها جيداً باستخدام هراسات الأسفلت الآلية للوصول لسطح متماسك ومستوٍ تماماً.
            </li>
            <li>
              <strong>5. التخطيط وتركيب الملحقات:</strong> رسم مسارات المواقف والخطوط الإرشادية باستخدام الدهانات الحرارية العاكسة، وتثبيت مصدات خرسانية لحماية الجدران والممرات.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-road-400 mt-10 mb-4">
            تخطيط المواقف والدهانات المرورية الحديثة بجدة
          </h2>
          <p className="text-asphalt-300 leading-relaxed mb-6">
            لا تكتمل سفلتة الموقف دون تخطيط مروري احترافي. نحن نستخدم دهانات الثرموبلاستيك (Thermoplastic Painting) التي تتميز 
            بمقاومتها العالية للاحتكاك ودرجات الحرارة العالية وسرعة جفافها. نضمن وضوح خطوط الفصل، وأسهم توجيه الحركة، 
            وعلامات مواقف ذوي الاحتياجات الخاصة، وممرات المشاة، مما يضفي مظهراً جمالياً وحضارياً للموقع.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="mt-16 border-t border-white/5 pt-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
            الأسئلة الشائعة حول سفلتة مواقف السيارات بجدة
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
