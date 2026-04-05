"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";

function ServiceIcon({ type }: { type: string }) {
  const iconClass = "w-8 h-8 md:w-10 md:h-10 text-road-500";
  switch (type) {
    case "road":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
        </svg>
      );
    case "planning":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      );
    case "markings":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  const { t, dir } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      dir={dir}
      className="relative py-20 md:py-28 bg-asphalt-950"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            badge={t.services.badge}
            title={t.services.title}
            titleHighlight={t.services.titleHighlight}
            subtitle={t.services.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className={`group glass-card rounded-2xl p-6 md:p-8 hover:border-road-500/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-road-500/10 flex items-center justify-center mb-5 group-hover:bg-road-500/20 group-hover:scale-105 transition-all duration-300">
                <ServiceIcon type={service.icon} />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-road-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-asphalt-400 leading-relaxed group-hover:text-asphalt-300 transition-colors">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-road-500 to-transparent rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
