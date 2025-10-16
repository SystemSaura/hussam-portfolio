import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideSix = forwardRef<HTMLElement>((props, ref) => {
  const handleContactClick = () => {
    // You can replace this with your actual contact form or email
    window.location.href = "mailto:hello@saurahq.com";
  };

  const handlePortfolioClick = () => {
    // Navigate to portfolio or schedule demo
    window.location.href = "/portfolio-thumbnails";
  };

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideCTA}`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to Transform Your <br />
          <span className={styles.ctaTitleAccent}>Digital Presence?</span>
        </h2>

        <p className={styles.ctaDescription}>
          Let's embark on a journey together. Like travelers guided by the stars,
          we'll navigate your brand to new heights of digital excellence and measurable growth.
        </p>

        <div className={styles.ctaButtonGroup}>
          <button className={styles.ctaButton + " " + styles.ctaPrimary} onClick={handleContactClick}>
            Start Your Journey
          </button>
          <button
            className={styles.ctaButton + " " + styles.ctaSecondary}
            onClick={handlePortfolioClick}
          >
            View Our Work
          </button>
        </div>

        <div className={styles.ctaFooter}>
          <p className={styles.ctaFooterText}>
            Let's craft something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
});

SlideSix.displayName = "SlideSix";

export default SlideSix;