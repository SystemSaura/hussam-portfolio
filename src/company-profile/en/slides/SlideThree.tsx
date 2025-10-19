import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideThree = forwardRef<HTMLElement>((props, ref) => {
  const services = [
    {
      number: "01",
      icon: "◆",
      name: "Marketing Strategy",
      description:
        "We craft comprehensive digital strategies tailored to your B2B goals, blending market research with actionable execution plans.",
    },
    {
      number: "02",
      icon: "◈",
      name: "Social Media Management",
      description:
        "Strategic content creation and community building across platforms that resonate with your target audience and drive engagement.",
    },
    {
      number: "03",
      icon: "◉",
      name: "SEO & Search Excellence",
      description:
        "Technical and organic SEO optimization to elevate your brand visibility and capture high-intent business opportunities.",
    },
    {
      number: "04",
      icon: "◊",
      name: "Content & Copywriting",
      description:
        "Compelling narratives and persuasive copy that communicate your value proposition with precision and impact.",
    },
    {
      number: "05",
      icon: "✦",
      name: "Campaign Execution",
      description:
        "End-to-end campaign management from strategy through optimization, delivering measurable results every time.",
    },
    {
      number: "06",
      icon: "▲",
      name: "Paid Advertising",
      description:
        "Data-driven ad campaigns across platforms, maximizing ROI and ensuring every budget dollar works harder.",
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideServices}`}>
      <div className={styles.slideContent}>
        <div className={styles.servicesHeader}>
          <span className={styles.sectionLabel}>What We Deliver</span>
          <h2 className={styles.servicesTitle}>
            Comprehensive Digital Solutions
          </h2>
          <p className={styles.servicesDescription}>
            From strategy to execution, we provide end-to-end digital marketing services designed to accelerate your B2B growth.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceName}>{service.name}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SlideThree.displayName = "SlideThree";

export default SlideThree;