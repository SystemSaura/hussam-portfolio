"use client";

import { useLanguage } from '@/lib/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  if (language === 'ar') {
    return (
      <button
        onClick={() => setLanguage('en')}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
        aria-label="Switch to English"
      >
        <span className="text-xl leading-none">&#x1F1EC;&#x1F1E7;</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setLanguage('ar')}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
      aria-label="Switch to Arabic"
    >
      <span className="text-xl leading-none">&#x1F1F8;&#x1F1E6;</span>
    </button>
  );
}