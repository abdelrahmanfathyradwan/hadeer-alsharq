"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

function PageContent() {
  const { dir, locale, t } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    document.title = t.meta.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.meta.description);
    }
  }, [dir, locale, t]);

  return (
    <div dir={dir} className="min-h-screen bg-asphalt-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
