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
          هل أنت مستعد لتحويل <br />
          <span className={styles.ctaTitleAccent}>وجودك الرقمي؟</span>
        </h2>

        <p className={styles.ctaDescription}>
          توقف عن التخمين. ابدأ بالنمو المتوقع. مثل المسافرين المهتدين بالنجوم، سنوجه علامتك التجارية نحو نمو قابل للقياس والتميز الرقمي في أسواق دول الخليج.
        </p>

        <div className={styles.ctaButtonGroup}>
          <button className={styles.ctaButton + " " + styles.ctaPrimary} onClick={handleContactClick}>
            احجز استشارة مجانية لمدة 30 دقيقة
          </button>
          <button
            className={styles.ctaButton + " " + styles.ctaSecondary}
            onClick={handlePortfolioClick}
          >
            شاهد محفظة الأعمال الكاملة
          </button>
        </div>

        
        <div className={styles.ctaFooter}>
          <p className={styles.ctaFooterText}>
            لنصنع شيئًا استثنائيًا معًا. عند الفجر، ستشكرنا على الرحلة.
          </p>
        </div>
      </div>
    </section>
  );
});

SlideSix.displayName = "SlideSix";

export default SlideSix;