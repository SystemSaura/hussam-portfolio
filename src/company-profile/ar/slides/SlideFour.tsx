import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideFour = forwardRef<HTMLElement>((props, ref) => {
  const steps = [
    {
      number: "1",
      title: "الاكتشاف",
      description:
        "تدقيق تسويقي وتحليل المنافسين. مواءمة الأهداف وتحديد المقاييس. نرسم وضعك الحالي ونحدد معايير واضحة للنجاح.",
      values: ["التحليل", "البحث", "الاستراتيجية"],
    },
    {
      number: "2",
      title: "الاستراتيجية",
      description:
        "تطوير بنية الرسائل. استراتيجية القنوات وتخصيص الميزانية. نبني خطة التنفيذ لـ 90 يومًا المبنية على البيانات.",
      values: ["التخطيط", "البنية", "خارطة الطريق"],
    },
    {
      number: "3",
      title: "التنفيذ",
      description:
        "إنشاء المحتوى باللغتين العربية والإنجليزية. إطلاق الحملات وإدارتها. حملات نشطة مع مراقبة وتقارير مستمرة.",
      values: ["المحتوى", "الإطلاق", "الإدارة"],
    },
    {
      number: "4",
      title: "التحسين",
      description:
        "اختبار A/B وتحسين التحويل. إعادة تخصيص الميزانية والتوسع. نمو يمكن التنبؤ به وقابل للتوسع من خلال التحسين المستمر.",
      values: ["الاختبار", "التوسع", "النمو"],
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideApproach}`}>
      <div className={styles.slideContent}>
        <div className={styles.approachHeader}>
          <span className={styles.sectionLabel}>عمليتنا</span>
          <h2 className={styles.approachTitle}>
            كيف نرشد رحلتك نحو النمو
          </h2>
          <p className={styles.approachSubtitle}>
            مثل المسافرين الذين خططوا لمسارهم بالنجوم، نتبع إطارًا مثبتًا لضمان تقديم تسويقك للنتائج.
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