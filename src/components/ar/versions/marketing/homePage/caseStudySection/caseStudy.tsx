"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "./caseStudy.module.css";

const CaseStudy = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.caseStudySection}>
      <div className={styles.container}>
        {/* Section Header - Matches Hero typography */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainHeading + " arabic-heading"}>
            كيف حققت استراتيجية التسويق الرقمي<br />
            <span className={styles.highlightText}>نجاح شفتات كمنصة التوظيف الرائدة في السعودية</span>
          </h2>
          <p className={styles.sectionSubtext + " arabic-body"}>
            استراتيجية تسويق متكاملة حولت الزوار إلى عملاء وحققت نمواً استثنائياً للمنصة
          </p>
        </div>

        {/* Main Case Study Content */}
        <Link href="/v/marketing/shiftat" className={styles.caseStudyLink}>
          <div className={styles.caseStudyContent}>
            {/* Company Info Row */}
            <div className={styles.companyRow}>
              <div className={styles.companyInfo}>
                <div className={styles.companyLogo}>
                  <Image
                    src="/logos/shiftat.webp"
                    alt="شفتات"
                    width={120}
                    height={60}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.companyDetails}>
                  <h3 className={styles.companyName + " arabic-heading"}>شفتات</h3>
                  <p className={styles.companyDescription + " arabic-body"}>منصة التوظيف بالذكاء الاصطناعي</p>
                  <div className={styles.locationBadge + " arabic-body"}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.readMoreContainer}>
                <span className={styles.readMoreText}>شاهد النتائج</span>
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={24}
                  height={24}
                  className={styles.readMoreArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٤٠٠٪</div>
                <div className={styles.resultLabel + " arabic-body"}>زيادة الزيارات</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٥,٠٠٠+</div>
                <div className={styles.resultLabel + " arabic-body"}>مشترك في القائمة البريدية</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٢٥٠+</div>
                <div className={styles.resultLabel + " arabic-body"}>عميل جديد</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٨٥٪</div>
                <div className={styles.resultLabel + " arabic-body"}>تحسن معدل التحويل</div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText + " arabic-body"}>
                من خلال استراتيجية تسويق رقمي متكاملة تشمل تحسين محركات البحث، حملات إعلانية مستهدفة، ومحتوى مخصص 
                للسوق السعودي، نجحنا في تحويل شفتات من منصة ناشئة إلى الخيار الأول للتوظيف بالذكاء الاصطناعي في المملكة.
              </p>
            </div>

            {/* Simplified Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel + " arabic-body"}>أداء الحملات</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </div>
                    <span className={styles.platformName + " arabic-body"}>لينكد إن</span>
                    <span className={styles.platformMetric}>٤,٠٠٠+ متابع</span>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2 8.4c.6-.1 1.1-.6 1.1-1.2V5c0-.7-.6-1.3-1.3-1.3H3c-.7 0-1.3.6-1.3 1.3v2.2c0 .6.5 1.1 1.1 1.2L12 12l9.2-3.6z"/>
                        <path d="M1.7 9.2v8.1c0 .7.6 1.3 1.3 1.3h18c.7 0 1.3-.6 1.3-1.3V9.2L12 12.8 1.7 9.2z"/>
                      </svg>
                    </div>
                    <span className={styles.platformName + " arabic-body"}>البريد الإلكتروني</span>
                    <span className={styles.platformMetric}>٦٠٪+ معدل فتح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
});

CaseStudy.displayName = "CaseStudy";

export default CaseStudy;