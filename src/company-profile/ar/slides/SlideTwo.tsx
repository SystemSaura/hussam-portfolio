import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideTwo = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideAbout}`}>
      <div className={styles.slideContent}>
        <div className={styles.aboutHeader}>
          <span className={styles.sectionLabel}>من نحن</span>
          <h2 className={styles.aboutTitle}>
            نقود العلامات التجارية في دول الخليج نحو التميز الرقمي
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>✦</div>
            <h3 className={styles.cardTitle}>رسالتنا</h3>
            <p className={styles.cardText}>
              مثل المسافرين الذين يهتدون بالنجوم، نبحر في المشهد الرقمي لنقل علامتك التجارية إلى آفاق جديدة بفهم عميق لثقافة دول الخليج واستراتيجيات قائمة على البيانات.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>◈</div>
            <h3 className={styles.cardTitle}>نهجنا</h3>
            <p className={styles.cardText}>
              نجمع بين التفكير الاستراتيجي والتنفيذ المتقن. نبني أنظمة تسويقية مبنية على أبحاث السوق ومصممة خصيصاً لسلوك المشترين في دول الخليج.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.cardIcon}>✧</div>
            <h3 className={styles.cardTitle}>وعدنا</h3>
            <p className={styles.cardText}>
              عندما يأتي الصباح، سترى نتائج رحلتنا معاً: نتائج قابلة للقياس تبرر استثمارك مع تتبع واضح لعائد الاستثمار في كل حملة.
            </p>
          </div>
        </div>

        <div className={styles.aboutStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>+50</span>
            <span className={styles.statLabel}>علامة تجارية أرشدناها</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>+100</span>
            <span className={styles.statLabel}>مشروع منجز</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>+5</span>
            <span className={styles.statLabel}>سنوات من التميز</span>
          </div>
        </div>
      </div>
    </section>
  );
});

SlideTwo.displayName = "SlideTwo";

export default SlideTwo;