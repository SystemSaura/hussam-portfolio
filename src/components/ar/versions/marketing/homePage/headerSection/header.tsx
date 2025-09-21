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
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={styles.logoName}>
            حسام بعكة <span className={styles.cursorBlink}>|</span>
          </Link>
        </div>

        {/* Navigation - Right to left order for Arabic */}
        <nav className="hidden md:flex items-center space-x-0 space-x-reverse">
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

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button className={`${styles.navLink} p-2`}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}