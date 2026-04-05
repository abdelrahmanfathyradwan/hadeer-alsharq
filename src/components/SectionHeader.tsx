"use client";

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${
          light
            ? "bg-road-500/10 text-road-500 border border-road-500/20"
            : "bg-road-500/10 text-road-400 border border-road-500/20"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 ${
          light ? "text-asphalt-900" : "text-white"
        }`}
      >
        {title}{" "}
        <span className="gradient-text">{titleHighlight}</span>
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl mx-auto ${
            light ? "text-asphalt-500" : "text-asphalt-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
