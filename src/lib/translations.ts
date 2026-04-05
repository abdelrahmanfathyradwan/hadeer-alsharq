export type Locale = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl" as const,
    lang: "ar",
    meta: {
      title: "هدير الشرق للمقاولات العامة | سفلتة طرق وبنية تحتية في جدة",
      description:
        "هدير الشرق للمقاولات العامة - شركة سفلتة طرق وبنية تحتية رائدة في جدة والمملكة العربية السعودية. متخصصون في سفلتة الطرق، أعمال البنية التحتية، تخطيط الطرق، وعلامات الطرق. اتصل بنا الآن.",
      keywords:
        "سفلتة طرق جدة, بنية تحتية جدة, مقاولات عامة السعودية, تخطيط طرق, علامات طرق, شركة مقاولات جدة",
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
      badge: "شركة مقاولات رائدة في المملكة العربية السعودية",
      title: "نبني طرق",
      titleHighlight: "جدة",
      titleEnd: "بأعلى المعايير",
      subtitle:
        "متخصصون في سفلتة الطرق، أعمال البنية التحتية، تخطيط الطرق، وخدمات علامات الطرق على مستوى المملكة",
      cta_call: "اتصل الآن",
      cta_whatsapp: "واتساب",
      stats: [
        { value: "+200", label: "مشروع منجز" },
        { value: "+15", label: "سنة خبرة" },
        { value: "+50", label: "عميل راضٍ" },
        { value: "24/7", label: "دعم متواصل" },
      ],
    },
    services: {
      badge: "خدماتنا المتخصصة",
      title: "حلول متكاملة لبناء",
      titleHighlight: "الطرق والبنية التحتية",
      subtitle:
        "نقدم مجموعة شاملة من خدمات المقاولات العامة بأعلى معايير الجودة والسلامة",
      items: [
        {
          title: "سفلتة الطرق",
          description:
            "تنفيذ أعمال السفلتة بأحدث المعدات والتقنيات لضمان جودة عالية وعمر افتراضي طويل للطرق في جدة والمنطقة الغربية",
          icon: "road",
        },
        {
          title: "أعمال البنية التحتية",
          description:
            "تنفيذ مشاريع البنية التحتية الشاملة من شبكات المياه والصرف إلى أعمال الحفر والردم بمعايير سعودية عالمية",
          icon: "infrastructure",
        },
        {
          title: "تخطيط الطرق",
          description:
            "خدمات تخطيط وتصميم الطرق وفق أعلى المعايير الهندسية، بما في ذلك الدراسات المرورية وتصميم التقاطعات",
          icon: "planning",
        },
        {
          title: "علامات الطرق",
          description:
            "تنفيذ علامات الطرق والخطوط الأرضية بمواد عاكسة عالية الجودة تتوافق مع المواصفات السعودية والدولية",
          icon: "markings",
        },
      ],
    },
    projects: {
      badge: "سابقة أعمالنا",
      title: "مشاريع نفخر",
      titleHighlight: "بتنفيذها",
      subtitle:
        "سجل حافل من المشاريع المنفذة بالتعاون مع كبرى الشركات والجهات الحكومية",
      items: [
        {
          title: "تخطيط طرق - جدة التاريخية",
          description: "تنفيذ أعمال تخطيط الطرق في منطقة جدة التاريخية بالتعاون مع أمانة جدة",
          partner: "بالتعاون مع أمانة جدة",
          images: [1, 2, 3],
        },
        {
          title: "سفلتة وحفريات - المنطقة الغربية",
          description: "تنفيذ أعمال السفلتة والحفريات في المنطقة الغربية بالتعاون مع شركة الكربت",
          partner: "بالتعاون مع الكربت",
          images: [4, 5, 6],
        },
        {
          title: "أعمال طرق - حائل",
          description: "مشروع قائم لتنفيذ أعمال الطرق والسفلتة في منطقة حائل",
          partner: "مشروع قائم",
          images: [7, 8, 9],
        },
        {
          title: "سفلتة - الطائف",
          description: "تنفيذ أعمال السفلتة في مدينة الطائف بالتعاون مع شركة الرافعة",
          partner: "بالتعاون مع الرافعة",
          images: [10, 11, 12],
        },
        {
          title: "بنية تحتية - جدة (سحاري)",
          description: "تنفيذ أعمال البنية التحتية في مشروع سحاري بجدة",
          partner: "مشروع سحاري",
          images: [13, 14, 15],
        },
        {
          title: "مشاريع متعددة عبر المدن",
          description: "تنفيذ مشاريع سفلتة وبنية تحتية متنوعة في عدة مدن سعودية",
          partner: "مشاريع متنوعة",
          images: [16, 17, 18],
        },
      ],
      viewAll: "عرض جميع الصور",
      ongoing: "قيد التنفيذ",
    },
    gallery: {
      badge: "معرض الصور",
      title: "صور من",
      titleHighlight: "مواقع العمل",
      subtitle: "لقطات حقيقية من مشاريعنا المنفذة على أرض الواقع",
    },
    about: {
      badge: "من نحن",
      title: "هدير الشرق",
      titleHighlight: "للمقاولات العامة",
      paragraphs: [
        "شركة هدير الشرق للمقاولات العامة هي إحدى الشركات الرائدة في مجال المقاولات في المملكة العربية السعودية، متخصصة في أعمال سفلتة الطرق والبنية التحتية.",
        "نتميز بفريق عمل محترف وخبرة تمتد لأكثر من 15 عاماً في تنفيذ المشاريع الكبرى بالتعاون مع الجهات الحكومية والشركات الخاصة.",
        "نلتزم بأعلى معايير الجودة والسلامة في جميع مشاريعنا، ونستخدم أحدث المعدات والتقنيات لضمان تقديم نتائج تفوق التوقعات.",
      ],
      values: [
        { title: "الجودة", description: "التزام تام بأعلى معايير الجودة العالمية" },
        { title: "الخبرة", description: "فريق متمرس بخبرة تتجاوز 15 عاماً" },
        { title: "الموثوقية", description: "سمعة طيبة وثقة من عملائنا وشركائنا" },
        { title: "الابتكار", description: "استخدام أحدث التقنيات والمعدات" },
      ],
    },
    contact: {
      badge: "تواصل معنا",
      title: "جاهزون",
      titleHighlight: "لخدمتك",
      subtitle: "تواصل معنا الآن للحصول على استشارة مجانية أو طلب عرض سعر",
      form: {
        name: "الاسم الكامل",
        namePlaceholder: "أدخل اسمك",
        phone: "رقم الجوال",
        phonePlaceholder: "05XXXXXXXX",
        message: "رسالتك (اختياري)",
        messagePlaceholder: "اكتب رسالتك هنا...",
        submit: "إرسال الطلب",
        sending: "جارٍ الإرسال...",
        success: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً.",
      },
      info: {
        phone1Label: "الرقم الرئيسي",
        phone2Label: "الرقم الثانوي",
        whatsappLabel: "واتساب",
        locationLabel: "الموقع",
        locationValue: "جدة، المملكة العربية السعودية",
      },
    },
    footer: {
      description:
        "شركة هدير الشرق للمقاولات العامة - رائدة في مجال سفلتة الطرق والبنية التحتية في جدة والمملكة العربية السعودية",
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      contactUs: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
      companyName: "هدير الشرق للمقاولات العامة",
    },
    cta: {
      callNow: "اتصل الآن",
      whatsapp: "واتساب",
      getQuote: "طلب عرض سعر",
    },
  },
  en: {
    dir: "ltr" as const,
    lang: "en",
    meta: {
      title: "Hadeer Al Sharq General Contracting | Road Construction & Infrastructure in Jeddah",
      description:
        "Hadeer Al Sharq General Contracting - Leading road construction and infrastructure company in Jeddah, Saudi Arabia. Specialized in asphalt paving, infrastructure works, road planning, and road markings. Contact us now.",
      keywords:
        "road construction Jeddah, asphalt paving Jeddah, infrastructure company Saudi Arabia, road planning, road markings, contracting company Jeddah",
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
      badge: "Leading Contracting Company in Saudi Arabia",
      title: "Building",
      titleHighlight: "Jeddah's",
      titleEnd: "Roads to the Highest Standards",
      subtitle:
        "Specialized in road asphalt paving, infrastructure works, road planning, and road marking services across the Kingdom",
      cta_call: "Call Now",
      cta_whatsapp: "WhatsApp",
      stats: [
        { value: "+200", label: "Projects Completed" },
        { value: "+15", label: "Years of Experience" },
        { value: "+50", label: "Satisfied Clients" },
        { value: "24/7", label: "Continuous Support" },
      ],
    },
    services: {
      badge: "Our Specialized Services",
      title: "Complete Solutions for",
      titleHighlight: "Roads & Infrastructure",
      subtitle:
        "We provide a comprehensive range of general contracting services with the highest quality and safety standards",
      items: [
        {
          title: "Road Asphalt Paving",
          description:
            "Executing asphalt works with the latest equipment and techniques to ensure high quality and long lifespan for roads in Jeddah and the Western Region",
          icon: "road",
        },
        {
          title: "Infrastructure Works",
          description:
            "Implementing comprehensive infrastructure projects from water and sewage networks to excavation and backfill works with world-class Saudi standards",
          icon: "infrastructure",
        },
        {
          title: "Road Planning",
          description:
            "Road planning and design services according to the highest engineering standards, including traffic studies and intersection design",
          icon: "planning",
        },
        {
          title: "Road Markings",
          description:
            "Implementing road markings and ground lines with high-quality reflective materials that comply with Saudi and international specifications",
          icon: "markings",
        },
      ],
    },
    projects: {
      badge: "Our Track Record",
      title: "Projects We're",
      titleHighlight: "Proud Of",
      subtitle:
        "An impressive track record of projects executed in collaboration with major companies and government entities",
      items: [
        {
          title: "Road Planning – Historic Jeddah",
          description: "Road planning works in Historic Jeddah area in collaboration with Jeddah Municipality",
          partner: "With Jeddah Municipality (Amanah)",
          images: [1, 2, 3],
        },
        {
          title: "Asphalt & Excavation – Western Region",
          description: "Asphalt and excavation works in the Western Region in collaboration with Al-Karbit",
          partner: "With Al-Karbit Company",
          images: [4, 5, 6],
        },
        {
          title: "Road Works – Hail",
          description: "Ongoing road and asphalt works project in Hail region",
          partner: "Ongoing Project",
          images: [7, 8, 9],
        },
        {
          title: "Asphalt – Taif",
          description: "Asphalt works in Taif city in collaboration with Al-Rafiah Company",
          partner: "With Al-Rafiah Company",
          images: [10, 11, 12],
        },
        {
          title: "Infrastructure – Jeddah (Sahari)",
          description: "Infrastructure works for the Sahari project in Jeddah",
          partner: "Sahari Project",
          images: [13, 14, 15],
        },
        {
          title: "Multiple Projects Across Cities",
          description: "Various asphalt and infrastructure projects executed across multiple Saudi cities",
          partner: "Various Projects",
          images: [16, 17, 18],
        },
      ],
      viewAll: "View All Photos",
      ongoing: "Ongoing",
    },
    gallery: {
      badge: "Photo Gallery",
      title: "Photos from",
      titleHighlight: "Our Work Sites",
      subtitle: "Real shots from our projects executed on the ground",
    },
    about: {
      badge: "About Us",
      title: "Hadeer Al Sharq",
      titleHighlight: "General Contracting",
      paragraphs: [
        "Hadeer Al Sharq General Contracting is one of the leading contracting companies in Saudi Arabia, specializing in road asphalt paving and infrastructure works.",
        "We are distinguished by a professional team with over 15 years of experience executing major projects in collaboration with government entities and private companies.",
        "We are committed to the highest quality and safety standards in all our projects, using the latest equipment and technologies to ensure results that exceed expectations.",
      ],
      values: [
        { title: "Quality", description: "Full commitment to the highest global quality standards" },
        { title: "Experience", description: "Experienced team with over 15 years of expertise" },
        { title: "Reliability", description: "Strong reputation and trust from our clients and partners" },
        { title: "Innovation", description: "Using the latest technologies and equipment" },
      ],
    },
    contact: {
      badge: "Contact Us",
      title: "Ready to",
      titleHighlight: "Serve You",
      subtitle: "Contact us now for a free consultation or to request a quote",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your name",
        phone: "Phone Number",
        phonePlaceholder: "05XXXXXXXX",
        message: "Your Message (optional)",
        messagePlaceholder: "Write your message here...",
        submit: "Send Request",
        sending: "Sending...",
        success: "Your request has been sent successfully! We'll contact you soon.",
      },
      info: {
        phone1Label: "Primary Phone",
        phone2Label: "Secondary Phone",
        whatsappLabel: "WhatsApp",
        locationLabel: "Location",
        locationValue: "Jeddah, Saudi Arabia",
      },
    },
    footer: {
      description:
        "Hadeer Al Sharq General Contracting - Leading in road asphalt paving and infrastructure in Jeddah and Saudi Arabia",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactUs: "Contact Us",
      rights: "All Rights Reserved",
      companyName: "Hadeer Al Sharq General Contracting",
    },
    cta: {
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      getQuote: "Get a Quote",
    },
  },
};

export type Translation = typeof translations.ar;
