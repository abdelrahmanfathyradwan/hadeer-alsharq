"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, dir, locale } = useLanguage();

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const serviceLinks = t.services.items.map((s) => ({
    label: s.title,
    href: "#services",
  }));

  return (
    <footer dir={dir} className="relative bg-asphalt-950 border-t border-white/5">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="relative glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 bg-gradient-to-br from-road-500/5 via-transparent to-road-600/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-road-500/50 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">
                {locale === "ar"
                  ? "هل لديك مشروع؟ تواصل معنا الآن"
                  : "Have a project? Contact us now"}
              </h3>
              <p className="text-asphalt-400 text-sm md:text-base max-w-xl mx-auto mb-8">
                {locale === "ar"
                  ? "احصل على استشارة مجانية وعرض سعر لمشروعك. فريقنا جاهز لخدمتك على مدار الساعة"
                  : "Get a free consultation and quote for your project. Our team is ready to serve you 24/7"}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <a
                  href="tel:0565633240"
                  className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-road-500 to-road-600 text-asphalt-950 font-bold text-sm md:text-base rounded-xl hover:from-road-400 hover:to-road-500 transition-all shadow-lg shadow-road-500/20"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {t.cta.callNow}
                </a>
                <a
                  href="https://wa.me/966565633240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm md:text-base rounded-xl transition-all shadow-lg shadow-green-600/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.cta.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-road-400 to-road-600 flex items-center justify-center font-extrabold text-asphalt-950 text-sm">
                هـ
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">
                  {locale === "ar" ? "هدير الشرق" : "Hadeer Al Sharq"}
                </div>
                <div className="text-[10px] text-asphalt-500">
                  {locale === "ar" ? "للمقاولات العامة" : "General Contracting"}
                </div>
              </div>
            </div>
            <p className="text-sm text-asphalt-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-asphalt-400 hover:text-road-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-asphalt-400 hover:text-road-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">{t.footer.contactUs}</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:0565633240" className="text-sm text-asphalt-400 hover:text-road-400 transition-colors" dir="ltr">
                  📞 0565633240
                </a>
              </li>
              <li>
                <a href="tel:0568515785" className="text-sm text-asphalt-400 hover:text-road-400 transition-colors" dir="ltr">
                  📞 0568515785
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966565633240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-asphalt-400 hover:text-road-400 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li className="text-sm text-asphalt-400">
                📍 {t.contact.info.locationValue}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-asphalt-500 text-center md:text-start">
            © {currentYear} {t.footer.companyName}. {t.footer.rights}.
          </p>
          <div className="flex items-center gap-1 text-xs text-asphalt-600">
            <span>Built with</span>
            <span className="text-road-500">♥</span>
            <span>in Jeddah</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
