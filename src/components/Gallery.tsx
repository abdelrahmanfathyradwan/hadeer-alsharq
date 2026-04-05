"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";

const allImages = Array.from({ length: 29 }, (_, i) => i + 1);

const imageAlts = [
  "Asphalt paving crew working on road in Jeddah",
  "Road roller compacting asphalt surface in Jeddah",
  "Road construction equipment at work site, Jeddah",
  "Asphalt laying machine on main road",
  "Freshly paved asphalt road in residential area, Jeddah",
  "Heavy machinery for road construction operations",
  "Road infrastructure development project, Western Region",
  "Asphalt paving equipment for highway construction",
  "Road grading and leveling operations",
  "Asphalt distribution truck on construction site",
  "Road repair and maintenance works in Jeddah",
  "Excavation works for infrastructure project",
  "Road planning and marking operations",
  "Construction workers on asphalt paving project",
  "Bitumen sprayer for road construction",
  "Road construction site with safety barriers",
  "Compacting equipment for road surface finishing",
  "Infrastructure development in Saudi Arabia",
  "Road widening project in progress",
  "Heavy roller on freshly paved road surface",
  "Asphalt finisher machine at construction site",
  "Road base preparation for new road",
  "Safety signage at road construction zone",
  "Night road paving operations in Jeddah",
  "Road marking and line painting works",
  "Infrastructure and drainage works",
  "Multiple construction vehicles at work site",
  "Road surface testing and quality control",
  "Completed road construction project in Saudi Arabia",
];

export default function Gallery() {
  const { t, dir } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visibleImages = showAll ? allImages : allImages.slice(0, 12);

  return (
    <section
      id="gallery"
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
            badge={t.gallery.badge}
            title={t.gallery.title}
            titleHighlight={t.gallery.titleHighlight}
            subtitle={t.gallery.subtitle}
          />
        </div>

        {/* Featured Row - 3 large images */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[6, 3, 15].map((imgNum, i) => (
            <div
              key={imgNum}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(imgNum)}
            >
              <Image
                src={`/${imgNum}.jpeg`}
                alt={imageAlts[imgNum - 1]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-asphalt-950/20 group-hover:bg-asphalt-950/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-road-500/80 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-asphalt-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
              {i === 0 && (
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-road-500/90 text-asphalt-950 text-xs font-bold rounded-full">
                  ⭐ Featured
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {visibleImages
            .filter((n) => ![6, 3, 15].includes(n))
            .map((imgNum, i) => (
              <div
                key={imgNum}
                className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + i * 40}ms` : "0ms" }}
                onClick={() => setLightbox(imgNum)}
              >
                <Image
                  src={`/${imgNum}.jpeg`}
                  alt={imageAlts[imgNum - 1]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-asphalt-950/10 group-hover:bg-asphalt-950/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Show all button */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-road-500/30 text-road-400 font-semibold text-sm rounded-xl hover:bg-road-500/10 hover:border-road-500/50 transition-all duration-300"
            >
              {t.projects.viewAll}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-asphalt-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/${lightbox}.jpeg`}
              alt={imageAlts[lightbox - 1]}
              fill
              className="object-contain"
              sizes="90vw"
              quality={90}
            />
          </div>
          {/* Nav buttons */}
          <button
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev && prev > 1 ? prev - 1 : 29));
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev && prev < 29 ? prev + 1 : 1));
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-asphalt-950/70 backdrop-blur-sm rounded-full text-sm text-white/70">
            {lightbox} / 29
          </div>
        </div>
      )}
    </section>
  );
}
