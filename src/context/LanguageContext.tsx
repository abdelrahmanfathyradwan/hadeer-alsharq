"use client";

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Locale, type Translation } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  t: Translation;
  toggleLocale: () => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const t = translations[locale];
  const dir = t.dir;

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
