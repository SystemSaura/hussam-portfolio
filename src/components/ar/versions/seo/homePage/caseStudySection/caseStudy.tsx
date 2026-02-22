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
            كيف ساعدت شفتات في تحقيق الظهور في محركات البحث والنمو العضوي<br />
            <span className={styles.highlightText}>من خلال محتوى SEO</span>
          </h2>
          <p className={styles.sectionSubtext + " arabic-body"}>
            إنشاء وتحسين محتوى SEO استراتيجي حقق نتائج بحث قابلة للقياس.
          </p>
        </div>

        {/* Main Case Study Content */}
        <Link href="/v/seo/shiftat" className={styles.caseStudyLink}>
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
                  <p className={styles.companyDescription + " arabic-body"}>منصة التوظيف المدعومة بالذكاء الاصطناعي</p>
                  <div className={styles.locationBadge + " arabic-body"}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.readMoreContainer}>
                <span className={styles.readMoreText}>اقرأ الدراسة الكاملة</span>
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={24}
                  height={24}
                  className={styles.readMoreArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>

            {/* Results Grid - SEO focused */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٢٠٠٪</div>
                <div className={styles.resultLabel + " arabic-body"}>نمو في الزيارات العضوية</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>١٥+</div>
                <div className={styles.resultLabel + " arabic-body"}>ترتيب في الصفحة الأولى</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٥٠+</div>
                <div className={styles.resultLabel + " arabic-body"}>مقال SEO</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٨٥٪</div>
                <div className={styles.resultLabel + " arabic-body"}>تغطية الكلمات المفتاحية</div>
              </div>
            </div>

            {/* Description - SEO focused */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText + " arabic-body"}>
                من خلال بحث استراتيجي للكلمات المفتاحية، وإنشاء محتوى محسن لمحركات البحث، والتحسين التقني، وضعنا شفتات كمرجع في بحث التوظيف بالذكاء الاصطناعي عبر دول الخليج. الاستراتيجية الشاملة لتحسين محركات البحث غطت كلمات مفتاحية لصناعة التوظيف، وبنت سلطة موضوعية، وأنشأت محتوى صديق لمحركات البحث يحتل مراتب عالية ويحول المهتمين إلى عملاء مؤهلين.
              </p>
            </div>

            {/* Simplified Search Results Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel + " arabic-body"}>أداء البحث</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName + " arabic-body"}>ترتيبات جوجل</span>
                    <span className={styles.platformMetric}>١٥+ كلمة مفتاحية في الصفحة الأولى</span>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName + " arabic-body"}>جودة المحتوى</span>
                    <span className={styles.platformMetric}>٥٠+ مقال SEO</span>
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