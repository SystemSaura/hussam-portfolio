"use client";

import Image from "next/image";
import { forwardRef } from "react";
import styles from "./portfolio.module.css";

const Portfolio = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={styles.flechaSectionHeading + " mb-6"}>
            Featured Portfolio Work
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"}>
            Real marketing projects that delivered measurable results for GCC companies across different industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Social Media - KEEP ORIGINAL LINK */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>HR Technology</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="Shiftat" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Social Media Strategy</h4>
                <p className={styles.portfolioServiceDetail}>LinkedIn + Twitter Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Professional Recruitment Content
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created engaging social media content strategy for Shiftat's recruitment platform, focusing on thought leadership and talent acquisition trends.
              </p>
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/shiftat-sa/', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - KAPSARC Government Content - UPDATED LINK */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Government Research</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="KAPSARC" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Website Content Strategy</h4>
                <p className={styles.portfolioServiceDetail}>Research Portal + Policy Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Government Research Portal Content
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created comprehensive website content strategy for KAPSARC's research platform, improving accessibility of energy policy insights for stakeholders.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Abudawood Logistics - KEEPING CURRENT LINK (not in provided list) */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Logistics & Supply Chain</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="Abudawood" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Social Media Marketing</h4>
                <p className={styles.portfolioServiceDetail}>B2B LinkedIn + Industry Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                B2B Logistics Social Strategy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed professional LinkedIn and industry content strategy for one of the GCC's leading logistics providers, establishing thought leadership.
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - Al Nahdi Newsletter - UPDATED LINK */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Healthcare</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/alnahdi.webp" alt="Al Nahdi" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Email Marketing</h4>
                <p className={styles.portfolioServiceDetail}>Newsletter Campaign</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Healthcare Newsletter Strategy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Designed and wrote engaging newsletter campaigns for Al Nahdi Pharmacy, focusing on health tips and product promotions.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Empire Real Estate - VERIFIED CORRECT LINK */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Real Estate</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/empirerealestate.webp" alt="Empire Real Estate" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoEmpire}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Brand Profile</h4>
                <p className={styles.portfolioServiceDetail}>Company Positioning</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Luxury Property Brand Story
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed comprehensive brand profile and positioning strategy for Empire Real Estate's luxury property portfolio in Qatar.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - SAEQ Logistics - VERIFIED CORRECT LINK */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Logistics</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/saeq.webp" alt="SAEQ" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Company Profile</h4>
                <p className={styles.portfolioServiceDetail}>Brand Positioning</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Logistics Brand Positioning
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Crafted comprehensive brand profile and market positioning strategy for SAEQ's expansion across GCC markets.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                View Full Work
              </button>
            </div>
          </div>
        </div>

        {/* View Complete Portfolio Button - Updated to navigate to portfolio page */}
        <div className="text-center mt-16">
         <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " mr-3"}>Complete portfolio available</span>
            <button 
              onClick={() => window.location.href = '/v/marketing/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              View All →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;