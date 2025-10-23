import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideThree = forwardRef<HTMLElement>((props, ref) => {
  const services = [
    {
      number: "01",
      icon: "◆",
      name: "Marketing Strategy & System Audits",
      description:
        "Deep-dive analysis of your marketing stack, messaging, and conversion paths. We identify revenue leaks and build comprehensive roadmaps that align channels, metrics, and messaging toward predictable growth.",
    },
    {
      number: "02",
      icon: "◈",
      name: "Social Media Management",
      description:
        "Strategic content and community building across LinkedIn, Twitter/X, and Instagram. Culturally-relevant campaigns that drive real engagement with GCC audiences.",
    },
    {
      number: "03",
      icon: "◉",
      name: "SEO & Content Strategy",
      description:
        "Technical and organic SEO optimization for Arabic and English audiences. We elevate brand visibility in local search and capture high-intent opportunities across GCC markets.",
    },
    {
      number: "04",
      icon: "◊",
      name: "Content & Copywriting",
      description:
        "Compelling narratives that communicate your value proposition with cultural precision. From website content to thought leadership—in perfect Arabic or English.",
    },
    {
      number: "05",
      icon: "✦",
      name: "Email Marketing Campaigns",
      description:
        "High-converting email strategies that nurture prospects and retain customers with culturally-relevant messaging and proven conversion frameworks.",
    },
    {
      number: "06",
      icon: "▲",
      name: "Integrated Campaign Management",
      description:
        "End-to-end execution from strategy through optimization. We combine Google Ads, content marketing, and social media into cohesive systems that deliver measurable results every time.",
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideServices}`}>
      <div className={styles.slideContent}>
        <div className={styles.servicesHeader}>
          <span className={styles.sectionLabel}>What We Deliver</span>
          <h2 className={styles.servicesTitle}>
            Digital Solutions That Drive Revenue
          </h2>
          <p className={styles.servicesDescription}>
            End-to-end B2B marketing services delivered in perfect Arabic and English, with deep understanding of GCC regulations, culture, and buyer behavior.
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