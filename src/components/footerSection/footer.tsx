"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

interface FooterProps {
  variant?: 'default' | 'gradient' | 'white' | 'transparent';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return styles.bgGradientBlue;
      case 'white':
        return 'bg-white';
      case 'transparent':
        return 'bg-transparent';
      default:
        return styles.bgGray900;
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'white':
        return styles.footerWhite;
      case 'gradient':
        return styles.footerGradient;
      case 'transparent':
        return styles.footerTransparent;
      default:
        return styles.footerDefault;
    }
  };

  return (
    <footer className={`${getBackgroundClass()} ${getVariantClass()}`}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerRow}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.footerLogo}>
                Hussam Baaka
              </Link>
            </div>

            <div className={styles.footerLinks}>
              <span className={styles.footerCopyright}>© 2025 Saura Agency LLC</span>
              <Link href="/company/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="/company/terms" className={styles.footerLink}>
                Terms
              </Link>
            </div>

            <div className={styles.footerSocials}>
              <a 
                href="https://twitter.com/hussambaaka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Follow on Twitter"
              >
                <Image
                  src="https://ext.same-assets.com/3287453319/1536601012.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={variant === 'white' ? '' : 'filter invert'}
                />
              </a>
              <a 
                href="https://linkedin.com/in/hussambaaka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Connect on LinkedIn"
              >
                <Image
                  src="https://ext.same-assets.com/3287453319/51193599.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={variant === 'white' ? '' : 'filter invert'}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}