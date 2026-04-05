"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Hero() {
  const { t, dir } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      dir={dir}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/5.jpeg"
          alt="Road construction and asphalt paving in Jeddah by Hadeer Al Sharq"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt-950/80 via-asphalt-950/60 to-asphalt-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt-950/50 via-transparent to-asphalt-950/50" />
        {/* Decorative road line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-road-500 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-road-500/10 border border-road-500/20 text-road-400 text-xs md:text-sm font-semibold backdrop-blur-sm mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-road-500 animate-pulse-glow" />
              {t.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-road-400 text-2xl md:text-3xl font-bold mb-3 md:mb-5">
              {t.footer.companyName}
            </h2>
          </div>

          <h1
            className={`text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-black leading-[1.6] mb-6 md:mb-8 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-white">{t.hero.title} </span>
            <span className="gradient-text">{t.hero.titleHighlight} </span>
            <br className="hidden md:block"/>
            <span className="text-white">{t.hero.titleEnd}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg md:text-xl text-asphalt-200 leading-relaxed max-w-2xl mb-8 md:mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-3 md:gap-4 mb-16 md:mb-20 transition-all duration-700 delay-[450ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="tel:0565633240"
              className="group flex items-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-road-500 to-road-600 text-asphalt-950 font-bold text-sm md:text-base rounded-xl hover:from-road-400 hover:to-road-500 transition-all duration-300 shadow-xl shadow-road-500/25 hover:shadow-road-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {t.hero.cta_call}
            </a>
            <a
              href="https://wa.me/966565633240"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-sm md:text-base rounded-xl transition-all duration-300 shadow-xl shadow-green-600/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.hero.cta_whatsapp}
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 md:p-5 text-center hover:border-road-500/20 transition-all duration-300 group"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-asphalt-400 font-medium group-hover:text-asphalt-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-asphalt-400/40 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-road-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
