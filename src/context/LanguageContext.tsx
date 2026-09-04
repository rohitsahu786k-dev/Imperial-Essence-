"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "ar";

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  name: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "ar", label: "AR", flag: "🇦🇪", name: "العربية" },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (enText: string, esText?: string, arText?: string, frText?: string, deText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (enText: string, esText?: string, arText?: string, frText?: string, deText?: string) => {
    if (language === "ar") return arText || enText;
    return enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
