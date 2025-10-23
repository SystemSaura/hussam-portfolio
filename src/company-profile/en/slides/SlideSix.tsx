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