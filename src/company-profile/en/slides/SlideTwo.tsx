import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideTwo = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideAbout}`}>
      <div className={styles.slideContent}>
        <div className={styles.aboutHeader}>
          <span className={styles.sectionLabel}>Who We Are</span>
          <h2 className={styles.aboutTitle}>
            Guiding GCC Brands Through Digital Excellence
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>✦</div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              Like travelers guided by stars, we navigate the digital landscape to bring your brand to new horizons with deep GCC cultural intelligence, and data-driven strategies.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>◈</div>
            <h3 className={styles.cardTitle}>Our Approach</h3>
            <p className={styles.cardText}>
              We combine strategic thinking with flawless execution. We build marketing systems grounded in market research and tailored to GCC buyer behavior. 
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>✧</div>
            <h3 className={styles.cardTitle}>Our Promise</h3>
            <p className={styles.cardText}>
              When morning comes, you'll see the results of our journey together: measurable results that justify your investment with clear ROI tracking on every campaign
            </p>
          </div>
        </div>

        <div className={styles.aboutStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Brands Guided</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
});

SlideTwo.displayName = "SlideTwo";

export default SlideTwo;