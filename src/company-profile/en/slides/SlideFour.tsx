import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideFour = forwardRef<HTMLElement>((props, ref) => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "Marketing audit & competitor analysis. Goal alignment & metrics definition. We map your current position and define clear success criteria.",
      values: ["Analysis", "Research", "Strategy"],
    },
    {
      number: "2",
      title: "Strategy",
      description:
        "Messaging architecture development. Channel strategy & budget allocation. We build your 90-day execution plan grounded in data.",
      values: ["Planning", "Architecture", "Roadmap"],
    },
    {
      number: "3",
      title: "Execution",
      description:
        "Content creation in Arabic & English. Campaign launch & management. Active campaigns with continuous monitoring and reporting.",
      values: ["Content", "Launch", "Management"],
    },
    {
      number: "4",
      title: "Optimization",
      description:
        "A/B testing & conversion optimization. Budget reallocation & scaling. Predictable, scalable growth through continuous improvement.",
      values: ["Testing", "Scaling", "Growth"],
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideApproach}`}>
      <div className={styles.slideContent}>
        <div className={styles.approachHeader}>
          <span className={styles.sectionLabel}>Our Process</span>
          <h2 className={styles.approachTitle}>
            How We Guide Your Journey to Growth
          </h2>
          <p className={styles.approachSubtitle}>
            Like travelers who planned their route by the stars, we follow a proven framework to ensure your marketing delivers results.
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