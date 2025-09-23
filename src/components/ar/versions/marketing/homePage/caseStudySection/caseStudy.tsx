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
            كيف حولنا شفتات من منصة ناشئة إلى<br />
            <span className={styles.highlightText}>المنصة الرائدة للتوظيف الذكي في السعودية</span>
          </h2>
          <p className={styles.sectionSubtext + " arabic-body"}>
            استراتيجية تسويق رقمي متكاملة حققت نمواً استثنائياً وقابلاً للقياس
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
                <span className={styles.readMoreText}>اقرأ دراسة الحالة</span>
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
                <div className={styles.resultNumber}>١٠٠+</div>
                <div className={styles.resultLabel + " arabic-body"}>عميل محتمل عالي الجودة</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٦٠٪+</div>
                <div className={styles.resultLabel + " arabic-body"}>معدل فتح الرسائل</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٥,٠٠٠+</div>
                <div className={styles.resultLabel + " arabic-body"}>مشترك جديد</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>٤,٠٠٠+</div>
                <div className={styles.resultLabel + " arabic-body"}>متابع على لينكد إن</div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText + " arabic-body"}>
                من خلال استراتيجية تسويق رقمي متكاملة تجمع بين تسويق المحتوى المستهدف، حملات إعلانات جوجل المحسنة، والتسويق عبر البريد الإلكتروني عالي الأداء، 
                نجحنا في ترسيخ مكانة شفتات كالحل الأمثل للتوظيف بالذكاء الاصطناعي في المملكة. النظام التسويقي الشامل 
                وجّه العملاء المحتملين عبر كل مرحلة من رحلة الشراء، محققاً نمواً قابلاً للتنبؤ وقيادة في السوق.
              </p>
            </div>

            {/* Simplified Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel + " arabic-body"}>نمو الحضور الرقمي</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.366C3.274 4.224 4.194 3.299 5.337 3.299C6.477 3.299 7.401 4.224 7.401 5.366C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName + " arabic-body"}>لينكد إن</span>
                    <span className={styles.platformMetric}>٤,٠٠٠+ محترف</span>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName + " arabic-body"}>منصة X</span>
                    <span className={styles.platformMetric}>٨,٠٠٠+ متابع</span>
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