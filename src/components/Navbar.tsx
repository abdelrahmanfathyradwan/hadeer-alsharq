"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, toggleLocale, locale, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-asphalt-950/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, "#home")}>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-road-400 to-road-600 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-road-500/25">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-asphalt-950" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Crane arm */}
              <path d="M6 2L6 4L18 4L18 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4L12 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              {/* Crane cable */}
              <path d="M18 4L18 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1"/>
              {/* Main building left */}
              <rect x="3" y="9" width="7" height="13" rx="0.5" fill="currentColor" opacity="0.9"/>
              {/* Building windows left */}
              <rect x="4.5" y="10.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.5"/>
              <rect x="7" y="10.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.5"/>
              <rect x="4.5" y="13.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.5"/>
              <rect x="7" y="13.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.5"/>
              <rect x="4.5" y="16.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.5"/>
              <rect x="7" y="16.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.5"/>
              {/* Door left */}
              <rect x="5.5" y="19.5" width="2" height="2.5" rx="0.3" fill="white" opacity="0.35"/>
              {/* Main building right (taller) */}
              <rect x="12" y="6" width="8" height="16" rx="0.5" fill="currentColor" opacity="1"/>
              {/* Building windows right */}
              <rect x="13.5" y="7.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="17" y="7.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="13.5" y="10.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="17" y="10.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="13.5" y="13.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="17" y="13.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="13.5" y="16.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              <rect x="17" y="16.5" width="1.5" height="1.5" rx="0.3" fill="white" opacity="0.45"/>
              {/* Door right */}
              <rect x="15" y="19" width="2" height="3" rx="0.3" fill="white" opacity="0.3"/>
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm md:text-base font-bold text-white leading-tight">
              {locale === "ar" ? "هدير الشرق" : "Hadeer Al Sharq"}
            </div>
            <div className="text-[10px] md:text-xs text-asphalt-400 leading-tight">
              {locale === "ar" ? "للمقاولات العامة" : "General Contracting"}
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-asphalt-300 hover:text-road-400 transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 text-asphalt-300 hover:text-road-400 hover:border-road-500/30 transition-all"
            aria-label="Switch language"
          >
            {t.nav.switchLang}
          </button>

          {/* CTA - desktop */}
          <a
            href="tel:0565633240"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-road-500 to-road-600 text-asphalt-950 text-sm font-bold rounded-lg hover:from-road-400 hover:to-road-500 transition-all shadow-lg shadow-road-500/20"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {t.cta.callNow}
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-asphalt-950/98 backdrop-blur-2xl transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-2 p-8 pt-12">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-semibold text-asphalt-200 hover:text-road-400 transition-colors py-3"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-8">
            <a
              href="tel:0565633240"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-road-500 to-road-600 text-asphalt-950 font-bold rounded-xl"
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
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.cta.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
