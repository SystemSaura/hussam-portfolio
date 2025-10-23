import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideSix = forwardRef<HTMLElement>((props, ref) => {
  const handleContactClick = () => {
    window.location.href = "mailto:contact@sauragency.com";
  };

  const handlePortfolioClick = () => {
    window.open("https://www.sauragency.site", "_blank");
  };

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideCTA}`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to Transform Your <br />
          <span className={styles.ctaTitleAccent}>Digital Presence?</span>
        </h2>

        <p className={styles.ctaDescription}>
          Stop guessing. Start growing predictably. Like travelers guided by stars, 
          we'll navigate your brand to measurable growth and digital excellence in GCC markets.
        </p>

        <div className={styles.ctaButtonGroup}>
          <button className={styles.ctaButton + " " + styles.ctaPrimary} onClick={handleContactClick}>
            Book Free 30-Min Consultation
          </button>
          <button
            className={styles.ctaButton + " " + styles.ctaSecondary}
            onClick={handlePortfolioClick}
          >
            View Complete Portfolio
          </button>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: 'rgba(0, 229, 255, 0.05)',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          borderRadius: '8px',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '500', color: 'var(--saura-white)' }}>
            Contact Information
          </p>
          <p style={{ margin: '0 0 8px 0' }}>
            📧 <a href="mailto:contact@sauragency.com" style={{ color: 'var(--saura-cyan)', textDecoration: 'none' }}>contact@sauragency.com</a>
          </p>
          <p style={{ margin: '0 0 8px 0' }}>
            🌐 <a href="https://www.sauragency.site" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--saura-cyan)', textDecoration: 'none' }}>www.sauragency.site</a>
          </p>
          <p style={{ margin: '0 0 16px 0' }}>
            📍 Based in Sharjah, UAE • Serving GCC Markets
          </p>
          <p style={{ margin: '0', fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
            🇦🇪 UAE • 🇸🇦 Saudi Arabia • 🇰🇼 Kuwait • 🇴🇲 Oman • 🇶🇦 Qatar
          </p>
        </div>

        <div className={styles.ctaFooter}>
          <p className={styles.ctaFooterText}>
            Let's craft something extraordinary together. At dawn, you'll thank us for the journey.
          </p>
        </div>
      </div>
    </section>
  );
});

SlideSix.displayName = "SlideSix";

export default SlideSix;