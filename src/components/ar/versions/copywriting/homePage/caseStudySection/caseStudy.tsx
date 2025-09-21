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
            How strategic copywriting made Shiftat<br />
            <span className={styles.highlightText}>Saudi Arabia's go-to AI recruitment platform.</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Converting website copy and email campaigns that turned browsers into buyers.
          </p>
        </div>

        {/* Main Case Study Content */}
        <Link href="/v/copywriting/shiftat" className={styles.caseStudyLink}>
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
                  <p className={styles.companyDescription}>AI-Powered Recruitment Platform</p>
                  <div className={styles.locationBadge}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.readMoreContainer}>
                <span className={styles.readMoreText}>See Copy Results</span>
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className={styles.readMoreArrow}
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>60%+</div>
                <div className={styles.resultLabel}>Email Open Rate</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>5,000+</div>
                <div className={styles.resultLabel}>Email Subscribers</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>100+</div>
                <div className={styles.resultLabel}>Quality Leads</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>4,000+</div>
                <div className={styles.resultLabel}>LinkedIn Followers</div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText}>
                Through strategic website copywriting, high-converting email sequences, and compelling social media copy, 
                we transformed Shiftat's messaging from confusing to crystal clear. The result? Prospects immediately 
                understood the value, signed up for emails, and became paying customers who couldn't imagine recruiting 
                any other way.
              </p>
            </div>

            {/* Simplified Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel}>Copy Performance</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>Email Copy</span>
                    <span className={styles.platformMetric}>60%+ Open Rates</span>
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
                    <span className={styles.platformName}>Website Copy</span>
                    <span className={styles.platformMetric}>100+ Quality Leads</span>
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