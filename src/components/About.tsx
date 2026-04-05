"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";

function ValueIcon({ index }: { index: number }) {
  const icons = [
    // Quality shield
    <svg key="q" className="w-6 h-6 text-road-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    // Experience clock
    <svg key="e" className="w-6 h-6 text-road-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Reliability handshake
    <svg key="r" className="w-6 h-6 text-road-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>,
    // Innovation lightbulb
    <svg key="i" className="w-6 h-6 text-road-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>,
  ];
  return icons[index] || null;
}

export default function About() {
  const { t, dir } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      dir={dir}
      className="relative py-20 md:py-28 bg-asphalt-900"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            badge={t.about.badge}
            title={t.about.title}
            titleHighlight={t.about.titleHighlight}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-asphalt-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {t.about.values.map((val, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-4 md:p-5 hover:border-road-500/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-road-500/10 flex items-center justify-center mb-3 group-hover:bg-road-500/20 transition-colors">
                    <ValueIcon index={i} />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs md:text-sm text-asphalt-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Collage */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/1.jpeg"
                    alt="Road construction team working in Jeddah - Hadeer Al Sharq"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/7.jpeg"
                    alt="Infrastructure development project by Hadeer Al Sharq"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/2.jpeg"
                    alt="Asphalt paving equipment used in Jeddah road construction"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/4.jpeg"
                    alt="Completed road project in Saudi Arabia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
