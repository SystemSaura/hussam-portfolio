"use client";

import Link from "next/link";
import styles from "./shiftatHeader.module.css";

interface shiftatHeaderProps {
  onNavigate: {
    about: () => void;
    portfolio: () => void;
    services: () => void;
  };
}

export default function shiftatHeader({ onNavigate }: shiftatHeaderProps) {
  return (
    <header className={styles.shiftatNavComponent}>
      <div className={styles.shiftatNavContainer}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={styles.shiftatLogoName}>
            Hussam Baaka <span className={styles.shiftatCursorBlink}>|</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-0">
          <button onClick={onNavigate.about} className={styles.shiftatNavLink}>About</button>
          <button onClick={onNavigate.portfolio} className={styles.shiftatNavLink}>Portfolio</button>
          <button onClick={onNavigate.services} className={styles.shiftatNavLink}>Services</button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button className={styles.shiftatNavButtonStrategy}>
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className={`${styles.shiftatNavLink} p-2`}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}