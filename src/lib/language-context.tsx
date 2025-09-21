"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Always default to English first, then check localStorage
    let savedLanguage: Language = 'en';
    
    try {
      const stored = localStorage.getItem('language') as Language;
      if (stored === 'ar' || stored === 'en') {
        savedLanguage = stored;
      }
    } catch (error) {
      // If localStorage is not available, stick with default 'en'
      console.log('localStorage not available, using default language');
    }
    
    setLanguageState(savedLanguage);
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.log('Could not save language preference');
    }
    
    // Update document direction and lang attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (mounted) {
      // Set initial direction and lang
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  // Provide context even before mounting to avoid hydration issues
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="antialiased" style={{ opacity: mounted ? 1 : 0 }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}