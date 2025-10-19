import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideFour = forwardRef<HTMLElement>((props, ref) => {
  const steps = [
    {
      number: "1",
      title: "We Plan",
      description:
        "Strategic planning grounded in deep market research and your unique business objectives.",
      values: ["Analysis", "Strategy", "Insight"],
    },
    {
      number: "2",
      title: "We Perfect",
      description:
        "Meticulous execution with attention to every detail, ensuring excellence in every deliverable.",
      values: ["Excellence", "Precision", "Quality"],
    },
    {
      number: "3",
      title: "We Push Forward",
      description:
        "Continuous optimization and growth mindset, driving measurable impact and sustained success.",
      values: ["Performance", "Impact", "Growth"],
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideApproach}`}>
      <div className={styles.slideContent}>
        <div className={styles.approachHeader}>
          <span className={styles.sectionLabel}>Our Methodology</span>
          <h2 className={styles.approachTitle}>
            How We Work
          </h2>
          <p className={styles.approachSubtitle}>
            Truthful. Serious. Powerful. We bring authenticity and excellence to every project.
          </p>
        </div>

        <div className={styles.approachTimeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineStep}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <div className={styles.stepValues}>
                {step.values.map((value, idx) => (
                  <span key={idx} className={styles.valueBadge}>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SlideFour.displayName = "SlideFour";

export default SlideFour;