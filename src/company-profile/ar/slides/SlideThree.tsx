import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

const SlideThree = forwardRef<HTMLElement>((props, ref) => {
  const services = [
    {
      number: "01",
      icon: "◆",
      name: "استراتيجية التسويق وتدقيق الأنظمة",
      description:
        "تحليل معمق لمنصة التسويق والرسائل ومسارات التحويل. نحدد ثغرات الإيرادات ونبني خرائط طريق شاملة تربط القنوات والمقاييس والرسائل نحو نمو يمكن التنبؤ به.",
    },
    {
      number: "02",
      icon: "◈",
      name: "إدارة وسائل التواصل الاجتماعي",
      description:
        "محتوى استراتيجي وبناء مجتمع عبر لينكد إن وتويتر/إكس وإنستغرام. حملات ذات صلة ثقافية تحقق تفاعلًا حقيقيًا مع جمهور دول الخليج.",
    },
    {
      number: "03",
      icon: "◉",
      name: "تحسين محركات البحث واستراتيجية المحتوى",
      description:
        "تحسين تقني وعضوي لمحركات البحث للجمهور العربي والإنجليزي. نرفع مستوى ظهور العلامة التجارية في البحث المحلي ونلتقط الفرص ذات النية العالية في أسواق دول الخليج.",
    },
    {
      number: "04",
      icon: "◊",
      name: "المحتوى والكتابة الإبداعية",
      description:
        "سرديات مقنعة تنقل عرض القيمة الخاص بك بدقة ثقافية. من محتوى المواقع إلى القيادة الفكرية - باللغة العربية أو الإنجليزية الدقيقة.",
    },
    {
      number: "05",
      icon: "✦",
      name: "حملات التسويق عبر البريد الإلكتروني",
      description:
        "استراتيجيات بريد إلكتروني عالية التحويل ترعى العملاء المحتملين وتحتفظ بالعملاء برسائل ذات صلة ثقافية وأطر تحويل مثبتة.",
    },
    {
      number: "06",
      icon: "▲",
      name: "إدارة الحملات المتكاملة",
      description:
        "تنفيذ شامل من الاستراتيجية إلى التحسين. نجمع بين إعلانات جوجل وتسويق المحتوى ووسائل التواصل الاجتماعي في أنظمة متماسكة تقدم نتائج قابلة للقياس في كل مرة.",
    },
  ];

  return (
    <section ref={ref} className={`${styles.slide} ${styles.slideServices}`}>
      <div className={styles.slideContent}>
        <div className={styles.servicesHeader}>
          <span className={styles.sectionLabel}>ما نقدمه</span>
          <h2 className={styles.servicesTitle}>
            حلول رقمية تدفع الإيرادات
          </h2>
          <p className={styles.servicesDescription}>
            خدمات تسويق B2B شاملة تُقدم باللغتين العربية والإنجليزية، مع فهم عميق للوائح دول الخليج والثقافة وسلوك المشترين.
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