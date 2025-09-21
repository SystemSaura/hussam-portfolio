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
            How I helped Shiftat achieve<br />
            <span className={styles.highlightText}>search visibility and organic growth through SEO content.</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Strategic SEO content creation and optimization that drove measurable search results.
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
                    alt="Shiftat"
                    width={120}
                    height={60}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.companyDetails}>
                  <h3 className={styles.companyName}>Shiftat</h3>
                  <p className={styles.companyDescription}>HR AI-Powered Recruitment Platform</p>
                  <div className={styles.locationBadge}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.readMoreContainer}>
                <span className={styles.readMoreText}>Read Full Study</span>
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className={styles.readMoreArrow}
                />
              </div>
            </div>

            {/* Results Grid - SEO focused */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>200%</div>
                <div className={styles.resultLabel}>Organic Traffic Growth</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>15+</div>
                <div className={styles.resultLabel}>Page 1 Rankings</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>50+</div>
                <div className={styles.resultLabel}>SEO Articles</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>85%</div>
                <div className={styles.resultLabel}>Keyword Coverage</div>
              </div>
            </div>

            {/* Description - SEO focused */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText}>
                Through strategic keyword research, SEO-optimized content creation, and technical optimization, 
                we positioned Shiftat as the authority in AI recruitment searches across the GCC. The comprehensive 
                SEO strategy covered recruitment industry keywords, built topical authority, and created 
                search-friendly content that ranks and converts prospects into qualified leads.
              </p>
            </div>

            {/* Simplified Search Results Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel}>Search Performance</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>Google Rankings</span>
                    <span className={styles.platformMetric}>15+ Page 1 Keywords</span>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>Content Quality</span>
                    <span className={styles.platformMetric}>50+ SEO Articles</span>
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