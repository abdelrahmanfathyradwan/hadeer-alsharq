"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";

export default function FAQ() {
  const { t, dir } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      dir={dir}
      className="relative py-20 md:py-28 bg-asphalt-950"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            badge={t.faq.badge}
            title={t.faq.title}
            titleHighlight={t.faq.titleHighlight}
            subtitle={t.faq.subtitle}
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-start gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="text-base md:text-lg font-bold text-white group-hover:text-road-400">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-road-500/10 flex items-center justify-center text-road-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 md:p-6 pt-0 text-asphalt-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Schema for SEO (local to component for easier management) */}
        {isVisible && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": t.faq.items.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              })
            }}
          />
        )}
      </div>
    </section>
  );
}
