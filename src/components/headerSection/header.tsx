"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerClass = variant === "white" ? styles.navComponentWhite : styles.navComponent;

  // Close mobile menu when clicking outside or on navigation items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (navFunction: () => void) => {
    navFunction();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={headerClass}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={styles.logoName}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hussam Baaka <span className={styles.cursorBlink}>|</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            <button onClick={onNavigate.about} className={styles.navLink}>About</button>
            <button onClick={onNavigate.portfolio} className={styles.navLink}>Portfolio</button>
            <button onClick={onNavigate.services} className={styles.navLink}>Services</button>
            <button onClick={onNavigate.caseStudy} className={styles.navLink}>Case Study</button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
              className={styles.navButtonStrategy}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={styles.mobileMenuButton}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setIsMobileMenuOpen(false)}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileMenuHeader}>
              <Link 
                href="/" 
                className={styles.mobileMenuLogo}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hussam Baaka <span className={styles.cursorBlink}>|</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className={styles.mobileMenuClose}
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>
            <nav className={styles.mobileMenuNav}>
              <button onClick={() => handleNavClick(onNavigate.about)} className={styles.mobileNavLink}>
                About
              </button>
              <button onClick={() => handleNavClick(onNavigate.portfolio)} className={styles.mobileNavLink}>
                Portfolio
              </button>
              <button onClick={() => handleNavClick(onNavigate.services)} className={styles.mobileNavLink}>
                Services
              </button>
              <button onClick={() => handleNavClick(onNavigate.caseStudy)} className={styles.mobileNavLink}>
                Case Study
              </button>
            </nav>
            <div className={styles.mobileMenuCTA}>
              <button 
                onClick={() => {
                  window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className={styles.mobileNavButtonStrategy}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}