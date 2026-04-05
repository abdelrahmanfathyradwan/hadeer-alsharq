export type Locale = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl" as const,
    lang: "ar",
    meta: {
      title: "شركة أسفلت في جدة | مقاول سفلتة طرق معتمد - هدير الشرق",
      description:
        "هل تبحث عن أفضل مقاول أسفلت في جدة؟ شركة هدير الشرق متخصصة في سفلتة الطرق، البنية التحتية، وتخطيط المواقف بأحدث المعدات. خبرة 15 عاماً في مشاريع الطرق بجدة وكافة أنحاء المملكة. اتصل بنا للحصول على عرض سعر الآن!",
      keywords:
        "شركة أسفلت في جدة, مقاول أسفلت جدة, سفلتة طرق جدة, مقاولات عامة جدة, بنية تحتية جدة, تخطيط طرق, علامات طرق, شركة سفلتة بجدة",
    },
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      projects: "مشاريعنا",
      about: "من نحن",
      contact: "تواصل معنا",
      switchLang: "English",
    },
    hero: {
      badge: "مقاول أسفلت معتمد في جدة والمملكة",
      title: "أفضل شركة",
      titleHighlight: "أسفلت في جدة",
      titleEnd: "لبناء طرق مستدامة",
      subtitle:
        "نحن مقاول أسفلت رائد في جدة متخصصون في سفلتة الطرق، أعمال البنية التحتية الشاملة، وتخطيط الطرق بمواصفات عالمية وخبرة تتجاوز 15 عاماً.",
      cta_call: "اتصل بمقاول أسفلت الآن",
      cta_whatsapp: "اطلب عرض سعر سفلتة",
      stats: [
        { value: "+200", label: "مشروع منجز بجدة" },
        { value: "+15", label: "سنة خبرة" },
        { value: "+50", label: "شريك نجاح" },
        { value: "24/7", label: "استشارات مجانية" },
      ],
    },
    services: {
      badge: "خدماتنا المتخصصة في جدة",
      title: "حلول متكاملة لخدمات",
      titleHighlight: "السفلتة والبنية التحتية",
      subtitle:
        "نقدم مجموعة شاملة من خدمات المقاولات العامة وسفلتة الطرق بجدة بأعلى معايير الجودة والسلامة لضمان استدامة مشاريعكم.",
      items: [
        {
          title: "سفلتة الطرق بجدة",
          description:
            "تنفيذ أعمال السفلتة للمخططات، الطرق الرئيسية، والمواقف بأحدث المعدات لضمان جودة عالية وعمر افتراضي طويل للطرق في جدة.",
          icon: "road",
        },
        {
          title: "أعمال البنية التحتية",
          description:
            "تنفيذ مشاريع البنية التحتية الشاملة من شبكات المياه والصرف إلى أعمال الحفر والردم بمعايير فنية دقيقة.",
          icon: "infrastructure",
        },
        {
          title: "تخطيط الطرق والمواقف",
          description:
            "خدمات تخطيط وتصميم الطرق وفق أعلى المعايير الهندسية، بما في ذلك الدراسات المرورية وتطوير المساحات.",
          icon: "planning",
        },
        {
          title: "علامات الطرق والدهانات",
          description:
            "تنفيذ علامات الطرق والخطوط الأرضية بمواد عاكسة عالية الجودة تتوافق مع مواصفات وزارة النقل وأمانة جدة.",
          icon: "markings",
        },
      ],
    },
    projects: {
      badge: "سابقة أعمالنا في جدة",
      title: "مشاريع سفلتة",
      titleHighlight: "نفخر بتنفيذها",
      subtitle:
        "سجل حافل من مشاريع الطرق والبنية التحتية الناجحة في جدة ومختلف مدن المملكة العربية السعودية.",
      items: [
        {
          title: "تخطيط طرق - جدة التاريخية",
          description: "تنفيذ أعمال تخطيط الطرق في منطقة جدة التاريخية بالتعاون مع أمانة جدة.",
          partner: "بالتعاون مع أمانة جدة",
          images: [1, 2, 3],
        },
        {
          title: "سفلتة وحفريات - المنطقة الغربية",
          description: "تنفيذ أعمال السفلتة والحفريات الكبرى في المنطقة الغربية.",
          partner: "مشاريع حكومية وخاصة",
          images: [4, 5, 6],
        },
        {
          title: "أعمال طرق - حائل",
          description: "تطوير وسفلتة شبكات الطرق في منطقة حائل لخدمة السكان.",
          partner: "تطوير البنية التحتية",
          images: [7, 8, 9],
        },
        {
          title: "سفلتة - الطائف",
          description: "مشروع سفلتة متكامل في مدينة الطائف مع ضمان الجودة.",
          partner: "تطوير حضري",
          images: [10, 11, 12],
        },
        {
          title: "بنية تحتية - جدة (سحاري)",
          description: "تنفيذ أعمال البنية التحتية المتكاملة لمشروع سحاري السكني بجدة.",
          partner: "مشروع سحاري",
          images: [13, 14, 15],
        },
        {
          title: "مشاريع متنوعة بجدة",
          description: "تنفيذ مشاريع سفلتة متنوعة للمواقف والمصانع والمنازل في جدة.",
          partner: "مشاريع متنوعة",
          images: [16, 17, 18],
        },
      ],
      viewAll: "عرض معرض المشاريع كاملاً",
      ongoing: "قيد التنفيذ",
    },
    gallery: {
      badge: "معرض الأعمال",
      title: "توثيق عمليات",
      titleHighlight: "السفلتة بجدة",
      subtitle: "صور واقعية من مواقع العمل تظهر دقة التنفيذ واحترافية مقاولينا.",
    },
    about: {
      badge: "عن شركة هدير الشرق",
      title: "خبرة في مجال",
      titleHighlight: "سفلتة الطرق بجدة",
      paragraphs: [
        "شركة هدير الشرق للمقاولات العامة هي الاسم الأول عندما تبحث عن مقاول أسفلت في جدة. نحن متخصصون في تقديم حلول مبتكرة لسفلتة الطرق والبنية التحتية.",
        "نفتخر بفريقنا الهندسي المتخصص وخبرتنا التي تتجاوز 15 عاماً في تنفيذ مشاريع عملاقة بجدة، مما يجعلنا الخيار الأمثل للمشاريع الحكومية والخاصة على حد سواء.",
        "نلتزم بمواصفات 'أمانة جدة' و'وزارة النقل' في كافة أعمالنا، مع التركيز على استخدام أفضل أنواع الأسفلت والمواد لضمان أطول عمر افتراضي للطريق.",
      ],
      values: [
        { title: "جودة الأسفلت", description: "استخدام أفضل الخلطات الأسفلتية المعتمدة" },
        { title: "سرعة التنفيذ", description: "الالتزام التام بالجداول الزمنية للمشاريع" },
        { title: "خبرة محلية", description: "فريق متمرس بطبيعة مشاريع الطرق في جدة" },
        { title: "أسعار تنافسية", description: "أفضل عروض الأسعار لسفلتة المخططات والمواقف" },
      ],
    },
    contact: {
      badge: "تواصل مع مقاول أسفلت بجدة",
      title: "نحن هنا",
      titleHighlight: "لخدمتكم دائماً",
      subtitle: "تواصل معنا الآن للحصول على استشارة فنية مجانية أو طلب معاينة لموقعك بجدة.",
      form: {
        name: "الاسم بالكامل",
        namePlaceholder: "أدخل اسمك هنا",
        phone: "رقم الجوال",
        phonePlaceholder: "05XXXXXXXX",
        message: "تفاصيل المشروع (اختياري)",
        messagePlaceholder: "اكتب وصفاً مختصراً لمشروعك...",
        submit: "اطلب عرض سعر سفلتة",
        sending: "جارٍ الإرسال...",
        success: "تم استلام طلبك بنجاح! سيتصل بك مقاول الأسفلت قريباً.",
      },
      info: {
        phone1Label: "رقم التواصل الرئيسي",
        phone2Label: "رقم الطوارئ/المشاريع",
        whatsappLabel: "واتساب مباشر",
        locationLabel: "المكتب الرئيسي",
        locationValue: "جدة، المملكة العربية السعودية",
      },
    },
    footer: {
      description:
        "هدير الشرق للمقاولات العامة - أفضل شركة أسفلت في جدة والمملكة. متخصصون في سفلتة الطرق، البنية التحتية، وتخطيط المواقف بأحدث المعدات.",
      quickLinks: "روابط هامة",
      ourServices: "خدمات السفلتة",
      contactUs: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
      companyName: "شركة هدير الشرق للمقاولات العامة",
    },
    cta: {
      callNow: "تواصل مع مقاول أسفلت الآن",
      whatsapp: "واتساب",
      getQuote: "اطلب عرض سعر سفلتة في جدة",
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "إجابات حول",
      titleHighlight: "خدمات السفلتة",
      subtitle: "جمعنا لكم أكثر الأسئلة شيوعاً حول مقاولات الأسفلت والطرق في جدة.",
      items: [
        {
          question: "كم سعر متر الأسفلت في جدة؟",
          answer: "يختلف السعر بناءً على مساحة المشروع ونوع الطبقة المطلوبة (5سم أو 7سم). نحن نقدم أفضل الأسعار التنافسية في جدة مع ضمان الجودة. تواصل معنا لمعاينة الموقع وتحديد السعر النهائي.",
        },
        {
          question: "هل تقومون بسفلتة مواقف السيارات الصغيرة؟",
          answer: "نعم، نحن متخصصون في سفلتة كافة المساحات بدءاً من مواقف القصور والمنازل والمصانع إلى المخططات السكنية الكبرى والطرق الرئيسية.",
        },
        {
          question: "ما هي مدة تنفيذ مشاريع السفلتة؟",
          answer: "تعتمد المدة على حجم المشروع، ولكننا نتميز بسرعة التنفيذ مع الالتزام التام بالمواصفات الفنية. المشاريع الصغيرة قد تستغرق يوماً واحداً فقط.",
        },
        {
          question: "هل أعمالكم معتمدة من أمانة جدة؟",
          answer: "نعم، كافة أعمالنا تنفذ وفق اشتراطات وكود أمانة جدة ووزارة النقل، ونستخدم مواد ومختبرات معتمدة لضمان الجودة.",
        },
      ],
    },
  },
  en: {
    dir: "ltr" as const,
    lang: "en",
    meta: {
      title: "Asphalt Contractor Jeddah | Road Construction Company - Hadeer Al Sharq",
      description:
        "Looking for a reliable asphalt contractor in Jeddah? Hadeer Al Sharq specializes in road construction, infrastructure works, and asphalt paving with 15+ years of experience. Contact us for a quote in Jeddah today!",
      keywords:
        "asphalt contractor Jeddah, road construction Jeddah, asphalt company Jeddah, infrastructure works Saudi Arabia, road marking Jeddah, paving contractor Jeddah",
    },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      switchLang: "العربية",
    },
    hero: {
      badge: "Certified Asphalt Contractor in Jeddah & Saudi Arabia",
      title: "Premier",
      titleHighlight: "Asphalt Company",
      titleEnd: "in Jeddah for Quality Roads",
      subtitle:
        "Hadeer Al Sharq is a leading asphalt contractor in Jeddah, specializing in professional road paving, massive infrastructure projects, and road planning with over 15 years of excellence.",
      cta_call: "Call Asphalt Contractor Now",
      cta_whatsapp: "Request Asphalt Quote",
      stats: [
        { value: "+200", label: "Completed Projects in Jeddah" },
        { value: "+15", label: "Years Experience" },
        { value: "+50", label: "Trusted Partners" },
        { value: "24/7", label: "Free Consultations" },
      ],
    },
    services: {
      badge: "Our Specialist Services in Jeddah",
      title: "Comprehensive Solutions for",
      titleHighlight: "Asphalt & Infrastructure",
      subtitle:
        "We offer a full range of general contracting and asphalt paving services in Jeddah, adhering to the highest quality and safety standards for sustainable infrastructure.",
      items: [
        {
          title: "Road Asphalt Paving Jeddah",
          description:
            "Expert asphalt paving for neighborhoods, main roads, and parking lots using advanced machinery to ensure durability and high performance in Jeddah.",
          icon: "road",
        },
        {
          title: "Infrastructure Works",
          description:
            "Executing complex infrastructure projects including water, sewage systems, excavation, and backfilling with technical precision.",
          icon: "infrastructure",
        },
        {
          title: "Road & Parking Planning",
          description:
            "Professional engineering design and planning for roads and parking areas, including traffic flow studies and space optimization.",
          icon: "planning",
        },
        {
          title: "Road Markings & Painting",
          description:
            "High-quality reflective road markings and signage complying with MOT and Jeddah Municipality (Amanah) specifications.",
          icon: "markings",
        },
      ],
    },
    projects: {
      badge: "Our Track Record in Jeddah",
      title: "Asphalt Projects",
      titleHighlight: "Executed by Us",
      subtitle:
        "Distinguished history of successful road and infrastructure projects in Jeddah and across Saudi Arabia.",
      items: [
        {
          title: "Road Planning – Historic Jeddah",
          description: "Road planning and marking in the Historic Jeddah area in collaboration with Jeddah Municipality.",
          partner: "With Jeddah Municipality (Amanah)",
          images: [1, 2, 3],
        },
        {
          title: "Asphalt & Excavation – Western Region",
          description: "Large-scale asphalt paving and excavation projects across the Western Province.",
          partner: "Government & Private Projects",
          images: [4, 5, 6],
        },
        {
          title: "Road Works – Hail",
          description: "Developing and paving road networks in the Hail region to enhance connectivity.",
          partner: "Infrastructure Development",
          images: [7, 8, 9],
        },
        {
          title: "Asphalt – Taif",
          description: "Comprehensive asphalt paving project in Taif city with quality assurance.",
          partner: "Urban Development",
          images: [10, 11, 12],
        },
        {
          title: "Infrastructure – Jeddah (Sahari)",
          description: "Integrated infrastructure work for the Sahari residential project in Jeddah.",
          partner: "Sahari Project",
          images: [13, 14, 15],
        },
        {
          title: "Various Projects in Jeddah",
          description: "Diverse asphalt projects for parking lots, factories, and residential areas in Jeddah.",
          partner: "Multi-sector Projects",
          images: [16, 17, 18],
        },
      ],
      viewAll: "View Full Project Gallery",
      ongoing: "In Progress",
    },
    gallery: {
      badge: "In the Field",
      title: "Visualizing",
      titleHighlight: "Asphalt Work in Jeddah",
      subtitle: "On-site photos showcasing our precision and professional asphalt equipment.",
    },
    about: {
      badge: "About Hadeer Al Sharq",
      title: "Leading Expert in",
      titleHighlight: "Jeddah Road Construction",
      paragraphs: [
        "Hadeer Al Sharq General Contracting is the premier choice when searching for an asphalt contractor in Jeddah. We specialize in providing innovative road paving and infrastructure solutions.",
        "We pride ourselves on our expert engineering team and over 15 years of experience in executing mega-projects in Jeddah, making us the preferred choice for both government and private sectors.",
        "We strictly adhere to Jeddah Municipality and Ministry of Transport specifications, focusing on using premium asphalt materials for maximum road lifespan.",
      ],
      values: [
        { title: "Premium Asphalt", description: "Using only certified high-grade asphalt mixes" },
        { title: "Timely Delivery", description: "Strict adherence to project timelines and schedules" },
        { title: "Local Expertise", description: "Deep understanding of Jeddah's road project requirements" },
        { title: "Competitive Pricing", description: "Best rates for asphalt paving and parking lot works" },
      ],
    },
    contact: {
      badge: "Contact Asphalt Contractor in Jeddah",
      title: "Ready to",
      titleHighlight: "Build Your Project",
      subtitle: "Contact us now for a free technical consultation or a site inspection in Jeddah.",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your name",
        phone: "Phone Number",
        phonePlaceholder: "05XXXXXXXX",
        message: "Project Details (optional)",
        messagePlaceholder: "Briefly describe your project requirements...",
        submit: "Request Asphalt Quote",
        sending: "Sending...",
        success: "Success! An asphalt expert will contact you shortly.",
      },
      info: {
        phone1Label: "Primary Contact",
        phone2Label: "Project/Emergency line",
        whatsappLabel: "Direct WhatsApp",
        locationLabel: "Main Office",
        locationValue: "Jeddah, Saudi Arabia",
      },
    },
    footer: {
      description:
        "Hadeer Al Sharq General Contracting - Best asphalt company in Jeddah & KSA. Specialized in road construction, infrastructure, and parking lots.",
      quickLinks: "Quick Links",
      ourServices: "Asphalt Services",
      contactUs: "Contact Us",
      rights: "All Rights Reserved",
      companyName: "Hadeer Al Sharq General Contracting",
    },
    cta: {
      callNow: "Call Asphalt Contractor Now",
      whatsapp: "WhatsApp",
      getQuote: "Request Asphalt Quote in Jeddah",
    },
    faq: {
      badge: "FAQ",
      title: "Answers About",
      titleHighlight: "Asphalt Services",
      subtitle: "Common questions regarding asphalt contracting and road works in Jeddah.",
      items: [
        {
          question: "What is the asphalt price per meter in Jeddah?",
          answer: "Prices vary based on project area and thickness (e.g., 5cm or 7cm). We offer the most competitive rates in Jeddah. Contact us for a site visit and accurate quote.",
        },
        {
          question: "Do you pave small private parking lots?",
          answer: "Yes, we handle projects of all sizes, from private home parking and factory yards to major residential developments and main highways.",
        },
        {
          question: "How long does an asphalt project take?",
          answer: "Timeline depends on project scale. We are known for rapid execution and technical precision; small projects can often be completed in a single day.",
        },
        {
          question: "Are your works approved by Jeddah Municipality?",
          answer: "Absolutely. All our works comply with Jeddah Municipality (Amanah) and MOT standards, using certified materials and laboratory testing.",
        },
      ],
    },
  },
};

export type Translation = typeof translations.ar | typeof translations.en;
