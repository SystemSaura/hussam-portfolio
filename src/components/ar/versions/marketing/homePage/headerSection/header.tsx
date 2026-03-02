"use client";

import Link from "next/link";
import LanguageToggle from "@/components/shared/languageToggle";
import styles from "./header.module.css";

interface HeaderProps {
  onNavigate: {
    about: () => void;
    portfolio: () => void;
    services: () => void;
    caseStudy: () => void;
  };
  variant?: "default" | "white";
}

export default function Header({ onNavigate, variant = "default" }: HeaderProps) {
  const headerClass = variant === "white" ? styles.navComponentWhite : styles.navComponent;

  return (
    <header className={headerClass}>
      {/* Desktop Layout */}
      <div className="hidden md:flex" style={{ margin: '0 85.7266px 0 85.7188px', height: '50.65px', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-lg font-light font-[var(--font-ibm-plex-arabic)] no-underline">
            حسام بعكة <span className={styles.cursorBlink}>|</span>
          </Link>
        </div>

        {/* Navigation - Right to left order for Arabic */}
        <nav className="flex items-center space-x-0 space-x-reverse gap-4">
          <button onClick={onNavigate.portfolio} className="text-gray-300 font-[var(--font-ibm-plex-arabic)] text-sm font-normal py-1 px-2 hover:text-white transition-colors">أعمالي</button>
          <button onClick={onNavigate.services} className="text-gray-300 font-[var(--font-ibm-plex-arabic)] text-sm font-normal py-1 px-2 hover:text-white transition-colors">خدماتي</button>
          <button onClick={onNavigate.caseStudy} className="text-gray-300 font-[var(--font-ibm-plex-arabic)] text-sm font-normal py-1 px-2 hover:text-white transition-colors">دراسة حالة</button>
        </nav>

        {/* Right side */}
        <div className="flex items-center">
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile Layout RTL: Consultation Button - Language Toggle - Logo */}
      <div className="flex md:hidden mx-4 h-[50.65px] items-center justify-between" dir="rtl">
        {/* Logo (Right in RTL) */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-lg font-light font-[var(--font-ibm-plex-arabic)] no-underline">
            حسام بعكة <span className={styles.cursorBlink}>|</span>
          </Link>
        </div>

        {/* Language Toggle */}
        <LanguageToggle />
      </div>
    </header>
  );
}