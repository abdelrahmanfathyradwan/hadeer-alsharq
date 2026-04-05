"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  const { t, dir } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
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
            badge={t.projects.badge}
            title={t.projects.title}
            titleHighlight={t.projects.titleHighlight}
            subtitle={t.projects.subtitle}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              className={`group glass-card rounded-2xl overflow-hidden hover:border-road-500/30 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              {/* Image Grid */}
              <div className="relative aspect-[16/10] overflow-hidden cursor-pointer" onClick={() => setActiveProject(activeProject === i ? null : i)}>
                <Image
                  src={`/${project.images[0]}.jpeg`}
                  alt={`${project.title} - Road construction project in Saudi Arabia`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950/90 via-asphalt-950/20 to-transparent" />

                {/* Badge */}
                {i === 2 && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-road-500/90 text-asphalt-950 text-xs font-bold rounded-full">
                    {t.projects.ongoing}
                  </span>
                )}

                {/* Image count indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-asphalt-950/60 backdrop-blur-sm rounded-full text-xs text-white/80">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  {project.images.length}
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-road-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-road-400/80 font-medium">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    {project.partner}
                  </span>
                </div>
              </div>

              {/* Expandable images */}
              {activeProject === i && (
                <div className="p-3 md:p-4 grid grid-cols-3 gap-2 animate-fade-in">
                  {project.images.map((imgNum, j) => (
                    <div key={j} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={`/${imgNum}.jpeg`}
                        alt={`${project.title} - Image ${j + 1} - Road infrastructure project`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 30vw, 15vw"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="p-4 md:p-5 pt-2 md:pt-3">
                <p className="text-sm text-asphalt-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
