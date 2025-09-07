"use client";

import Link from "next/link";
import styles from "./Header.module.css";

interface HeaderProps {
  onNavigate: {
    about: () => void;
    portfolio: () => void;
    services: () => void;
  };
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className={styles.navComponent}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={styles.logoName}>
            Hussam Baaka <span className={styles.cursorBlink}>|</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-0">
          <button onClick={onNavigate.about} className={styles.navLink}>About</button>
          <button onClick={onNavigate.portfolio} className={styles.navLink}>Portfolio</button>
          <button onClick={onNavigate.services} className={styles.navLink}>Services</button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button className={styles.navButtonStrategy}>
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
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