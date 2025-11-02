import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideFive = forwardRef<HTMLElement>((props, ref) => {
  const metrics = [
    {
      metric: "50+",
      label: "Brands Guided",
      description: "Across diverse industries and markets",
    },
    {
      metric: "500+",
      label: "Campaigns Executed",
      description: "With consistent, measurable outcomes",
    },
    {
      metric: "200%",
      label: "Average ROI",
      description: "On digital marketing investments",
    },
    {
      metric: "98%",
      label: "Client Retention",
      description: "Built on trust and proven results",
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideImpact}`}>
      <div className={styles.slideContent}>
        <div className={styles.impactHeader}>
          <span className={styles.sectionLabel}>Our Track Record</span>
          <h2 className={styles.impactTitle}>
            Proven Impact & Results
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
            "At Saura, we don't just promise results—we deliver them. Our clients see measurable growth, 
            lasting partnerships, and the transformation of their digital presence into a <span className={styles.highlightAccent}>competitive advantage</span>.
          </p>
        </div>
      </div>
    </section>
  );
});

SlideFive.displayName = "SlideFive";

export default SlideFive;