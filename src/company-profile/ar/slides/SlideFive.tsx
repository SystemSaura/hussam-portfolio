import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideFive = forwardRef<HTMLElement>((props, ref) => {
  const metrics = [
    {
      metric: "+50",
      label: "علامة تجارية أرشدناها",
      description: "عبر صناعات وأسواق متنوعة",
    },
    {
      metric: "+500",
      label: "حملة منفّذة",
      description: "بنتائج متسقة وقابلة للقياس",
    },
    {
      metric: "200%",
      label: "متوسط عائد الاستثمار",
      description: "على استثمارات التسويق الرقمي",
    },
    {
      metric: "98%",
      label: "الاحتفاظ بالعملاء",
      description: "مبني على الثقة والنتائج المُثبتة",
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideImpact}`}>
      <div className={styles.slideContent}>
        <div className={styles.impactHeader}>
          <span className={styles.sectionLabel}>سجلنا الحافل</span>
          <h2 className={styles.impactTitle}>
            تأثير ونتائج مُثبتة
          </h2>
        </div>

        <div className={styles.impactGrid}>
          {metrics.map((item, index) => (
            <div key={index} className={styles.impactCard}>
              <div className={styles.impactMetric}>{item.metric}</div>
              <p className={styles.impactLabel}>{item.label}</p>
              <p className={styles.impactDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.impactHighlight}>
          <p className={styles.highlightText}>
            "في سُرى، لا نَعِد بالنتائج فحسب - بل نُحققها. عملاؤنا يشهدون نمواً قابلاً للقياس، وشراكات دائمة، وتحول حضورهم الرقمي إلى <span className={styles.highlightAccent}>ميزة تنافسية</span>."
          </p>
        </div>
      </div>
    </section>
  );
});

SlideFive.displayName = "SlideFive";

export default SlideFive;