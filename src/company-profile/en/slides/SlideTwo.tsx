import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideTwo = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideAbout}`}>
      <div className={styles.slideContent}>
        <div className={styles.aboutHeader}>
          <span className={styles.sectionLabel}>Who We Are</span>
          <h2 className={styles.aboutTitle}>
            Guiding Brands Through Digital Excellence
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>✦</div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              Like the night travelers of old who journeyed through darkness
              guided by stars, we navigate the digital landscape to bring your
              brand to new horizons.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>◈</div>
            <h3 className={styles.cardTitle}>Our Approach</h3>
            <p className={styles.cardText}>
              We blend strategic thinking with creative execution, ensuring
              every campaign tells a compelling story that resonates with your
              audience.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>✧</div>
            <h3 className={styles.cardTitle}>Our Promise</h3>
            <p className={styles.cardText}>
              When morning comes, you'll see the results of our journey
              together—measurable growth, lasting impact, and brand excellence.
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