"use client";

import { useLanguage } from '@/lib/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'text-[#2762F8] font-semibold'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-400 mx-1">|</span>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === 'ar'
            ? 'text-[#2762F8] font-semibold'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="Switch to Arabic"
      >
        ع
      </button>
    </div>
  );
}