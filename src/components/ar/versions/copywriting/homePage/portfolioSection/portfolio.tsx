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
            Copy That Converts
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"}>
            Real copywriting projects that turned confused visitors into committed customers for GCC businesses.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Website Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>HR Technology</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="Shiftat" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Website Copywriting</h4>
                <p className={styles.portfolioServiceDetail}>Homepage + Landing Pages</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                AI Recruitment Platform Copy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Transformed confusing tech jargon into clear, compelling copy that immediately communicates value. Result: 100+ quality leads and 60%+ email conversion rates.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                View Copy Samples
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - Al Nahdi Email Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Healthcare</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/alnahdi.webp" alt="Al Nahdi" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Email Copywriting</h4>
                <p className={styles.portfolioServiceDetail}>Newsletter Campaigns</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Healthcare Email Sequences
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created engaging newsletter campaigns that turned health tips into customer engagement, driving store visits and product sales for Saudi's leading pharmacy.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                View Email Copy
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Empire Real Estate Sales Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Real Estate</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/empirerealestate.webp" alt="Empire Real Estate" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoEmpire}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Sales Copy</h4>
                <p className={styles.portfolioServiceDetail}>Brand Positioning</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Luxury Property Sales Copy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed high-end sales copy that positioned luxury properties as exclusive investments, appealing to Qatar's premium market with compelling value propositions.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                View Sales Copy
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - KAPSARC Technical Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Government Research</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="KAPSARC" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Technical Writing</h4>
                <p className={styles.portfolioServiceDetail}>Research Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Research Portal Content
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Transformed complex energy research into accessible, actionable insights for policy makers and industry leaders. Clear communication of technical concepts.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                View Technical Copy
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Abudawood B2B Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Logistics</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="Abudawood" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>B2B Copy</h4>
                <p className={styles.portfolioServiceDetail}>Social + Web Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Logistics B2B Messaging
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created authoritative B2B copy that established industry thought leadership for one of the GCC's largest logistics providers, driving enterprise leads.
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                View B2B Copy
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - SAEQ Brand Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Logistics</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/saeq.webp" alt="SAEQ" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Brand Copy</h4>
                <p className={styles.portfolioServiceDetail}>Positioning Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Brand Positioning Copy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed compelling brand messaging that differentiated SAEQ in the competitive logistics market, creating clear market positioning for GCC expansion.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                View Brand Copy
              </button>
            </div>
          </div>
        </div>

        {/* View Complete Portfolio Button */}
        <div className="text-center mt-16">
         <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " mr-3"}>More copywriting samples available</span>
            <button 
              onClick={() => window.location.href = '/v/copywriting/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              View All Copy →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;