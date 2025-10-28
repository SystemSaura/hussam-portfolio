import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

interface SlideOneProps {
  onNext: () => void;
}

const SlideOne = forwardRef<HTMLElement, SlideOneProps>(({ onNext }, ref) => {
  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideHero}`}>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logoArabic}>سُرى</h1>
          <div className={styles.logoLine}></div>
          <h2 className={styles.logoEnglish}>SAURA</h2>
        </div>
        <p className={styles.tagline}>وكالة التسويق الرقمي</p>
        <div className={styles.heroSubtext}>
          <p className={styles.arabicProverb}>
            "عند الصباح يحمد القوم السُرَى"
          </p>
          <p className={styles.proverbTranslation}>
            In the morning, people praise the night journey
          </p>
        </div>
      </div>
      <button
        onClick={onNext}
        className={styles.nextSlideBtn}
        aria-label="الشريحة التالية"
      >
        ←
      </button>
    </section>
  );
});

SlideOne.displayName = "SlideOne";

export default SlideOne;