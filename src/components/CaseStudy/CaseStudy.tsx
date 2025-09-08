"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <section className={styles.caseStudySection}>
      <div className={styles.container}>
        {/* Section Header - Matches Hero typography */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Success Story</div>
          <h2 className={styles.mainHeading}>
            How I helped Shiftat become<br />
            <span className={styles.highlightText}>Saudi Arabia's leading AI recruitment platform.</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Strategic digital marketing transformation that generated measurable results.
          </p>
        </div>

        {/* Main Case Study Content */}
        <Link href="/shiftat" className={styles.caseStudyLink}>
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

            {/* Results Grid */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>100+</div>
                <div className={styles.resultLabel}>Quality Leads</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>60%+</div>
                <div className={styles.resultLabel}>Email Open Rate</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>5,000+</div>
                <div className={styles.resultLabel}>Subscribers</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>4,000+</div>
                <div className={styles.resultLabel}>LinkedIn Followers</div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText}>
                Through strategic content marketing, targeted Google Ads campaigns, and high-performing email marketing, 
                we established Shiftat as the definitive AI recruitment solution in Saudi Arabia. The comprehensive 
                digital marketing ecosystem guided prospects through every stage of the buyer's journey, creating 
                predictable pipeline growth and market leadership.
              </p>
            </div>

            {/* Enhanced Social Proof with Creative Photo Display */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel}>Social Media Growth</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformImage}>
                      <Image
                        src="/backgrounds/Linkedin.webp"
                        alt="LinkedIn Growth"
                        width={120}
                        height={90}
                        className={styles.socialImage}
                      />
                      <div className={styles.platformOverlay}>
                        <span className={styles.platformName}>LinkedIn</span>
                        <span className={styles.platformMetric}>4,000+ Professionals</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformImage}>
                      <Image
                        src="/backgrounds/X.webp"
                        alt="X Platform Growth"
                        width={120}
                        height={90}
                        className={styles.socialImage}
                      />
                      <div className={styles.platformOverlay}>
                        <span className={styles.platformName}>X Platform</span>
                        <span className={styles.platformMetric}>8,000+ Followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}