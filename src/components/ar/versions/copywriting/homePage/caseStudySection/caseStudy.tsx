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
          <h2 className={styles.mainHeading}>
            كيف حولت الكتابة الاستراتيجية شفتات إلى<br />
            <span className={styles.highlightText}>منصة التوظيف الذكي الرائدة في السعودية</span>
          </h2>
          <p className={styles.sectionSubtext}>
            كتابة مواقع وحملات إيميل حولت المتصفحين إلى عملاء.
          </p>
        </div>

        {/* Main Case Study Content */}
        <Link href="/copywriting-shiftat" className={styles.caseStudyLink}>
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
                  <h3 className={styles.companyName}>شفتات</h3>
                  <p className={styles.companyDescription}>منصة التوظيف بالذكاء الاصطناعي</p>
                  <div className={styles.locationBadge}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.readMoreContainer}>
                <span className={styles.readMoreText}> اقرأ دراسة الحالة </span>
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

            {/* Results Grid */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٦٠٪+</div>
                <div className={styles.resultLabel}>معدل فتح الرسائل</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٥٠٠٠+</div>
                <div className={styles.resultLabel}>مشترك جديد</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>١٠٠+</div>
                <div className={styles.resultLabel}>عميل جديد في شهرين</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٤٠٠٠+</div>
                <div className={styles.resultLabel}>متابع على وسائل التواصل</div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText}>
                <strong>الموقف:</strong> شِفتات لديها منصة توظيف متطورة بالذكاء الاصطناعي، لكن عملاءها المحتملين لا يفهمون كيف ستحل مشاكلهم.
              </p>
              <p className={styles.descriptionText}>
                <strong>ماذا فعلت؟</strong> أعدت كتابة موقعهم ليتكلم بلغة عملائهم، صممت حملات بريد إلكتروني تشرح الفائدة ببساطة، وكتبت محتوى يثبت أنهم الأفضل في السوق.
              </p>
              <p className={styles.descriptionText}>
                <strong>النتيجة؟</strong> العملاء أصبحوا يأتون إليهم، بدلاً من البحث عنهم.
              </p>
            </div>

            {/* Simplified Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel}>أداء النصوص</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>نصوص الإيميل</span>
                    <span className={styles.platformMetric}>٦٠٪+ معدل فتح</span>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>نصوص الموقع</span>
                    <span className={styles.platformMetric}>١٠٠+ عميل عالي الجودة</span>
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