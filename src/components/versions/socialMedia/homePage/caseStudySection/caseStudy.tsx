"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "./caseStudy.module.css";

const CaseStudy = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.caseStudySection}>
      <div className={styles.container}>
        {/* Section Header - Social Media Focused */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainHeading}>
            How I grew Shiftat from 0 to<br />
            <span className={styles.highlightText}>12,000+ engaged social media followers.</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Strategic social media transformation across LinkedIn and X platforms.
          </p>
        </div>

        {/* Main Case Study Content */}
        <Link href="/v/social-media/shiftat" className={styles.caseStudyLink}>
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
                <span className={styles.readMoreText}>View Social Growth</span>
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className={styles.readMoreArrow}
                />
              </div>
            </div>

            {/* Results Grid - Social Media Focused */}
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>8,000+</div>
                <div className={styles.resultLabel}>X Followers</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>4,000+</div>
                <div className={styles.resultLabel}>LinkedIn Followers</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>150%+</div>
                <div className={styles.resultLabel}>Engagement Rate</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultNumber}>100+</div>
                <div className={styles.resultLabel}>Quality Leads</div>
              </div>
            </div>

            {/* Description - Social Media Focused */}
            <div className={styles.caseDescription}>
              <p className={styles.descriptionText}>
                Through strategic social media content, community building, and platform-specific engagement tactics, 
                we built Shiftat's social presence from zero to industry leadership. The comprehensive social strategy 
                created authentic connections with HR professionals, driving both brand awareness and qualified lead generation 
                across LinkedIn and X platforms.
              </p>
            </div>

            {/* Simplified Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.socialContent}>
                <div className={styles.socialHeader}>
                  <span className={styles.socialLabel}>Platform Growth Results</span>
                </div>
                <div className={styles.socialShowcase}>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.366C3.274 4.224 4.194 3.299 5.337 3.299C6.477 3.299 7.401 4.224 7.401 5.366C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>LinkedIn</span>
                    <span className={styles.platformMetric}>4,000+ B2B Connections</span>
                  </div>
                  <div className={styles.platformDisplay}>
                    <div className={styles.platformIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" fill="white"/>
                      </svg>
                    </div>
                    <span className={styles.platformName}>X Platform</span>
                    <span className={styles.platformMetric}>8,000+ Industry Followers</span>
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