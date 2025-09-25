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
          <Link href="/" className={styles.logoName}>
            حسام بعكة <span className={styles.cursorBlink}>|</span>
          </Link>
        </div>

        {/* Navigation - Right to left order for Arabic */}
        <nav className="flex items-center space-x-0 space-x-reverse gap-4">
          <button onClick={onNavigate.about} className={styles.navLink}>نبذة عني</button>
          <button onClick={onNavigate.portfolio} className={styles.navLink}>أعمالي</button>
          <button onClick={onNavigate.services} className={styles.navLink}>خدماتي</button>
          <button onClick={onNavigate.caseStudy} className={styles.navLink}>دراسة حالة</button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4 space-x-reverse gap-3">
          <LanguageToggle />
          <button 
            onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
            className={styles.navButtonStrategy}
          >
            احجز استشارة
          </button>
        </div>
      </div>

      {/* Mobile Layout RTL: Consultation Button - Language Toggle - Logo */}
      <div className="flex md:hidden mx-4 h-[50.65px] items-center justify-between" dir="rtl">
        {/* Logo (Right in RTL) */}
        <div className="flex-shrink-0">
          <Link href="/" className={styles.logoName}>
            حسام بعكة <span className={styles.cursorBlink}>|</span>
          </Link>
        </div>

      {/* Language Toggle (Center) */}
      <div className="absolute left-1/2" style={{ transform: 'translateX(-50%)' }}>
        <LanguageToggle />
      </div>

        {/* Consultation Button (Left in RTL) */}
        <button 
          onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
          className="bg-[#001C46] text-white font-['Work_Sans'] text-xs font-light px-3 border-none rounded-full cursor-pointer inline-flex items-center justify-center h-8 transition-all duration-200 hover:bg-[#2762F8] whitespace-nowrap"
        >
           احجز استشارة
        </button>
      </div>
    </header>
  );
}