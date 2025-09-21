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
            Featured SEO Portfolio Work
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"}>
            Real SEO projects that delivered search visibility and organic traffic growth for GCC companies across different industries.
          </p>
        </div>

        {/* Portfolio Grid - SEO Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat SEO Content */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>HR Technology</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="Shiftat" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>SEO Content Strategy</h4>
                <p className={styles.portfolioServiceDetail}>Keyword Research + Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                AI Recruitment SEO Content Hub
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created comprehensive SEO content strategy targeting recruitment industry keywords, resulting in 15+ page 1 rankings and 200% organic traffic growth.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - KAPSARC SEO Content */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Government Research</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="KAPSARC" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>SEO Website Content</h4>
                <p className={styles.portfolioServiceDetail}>Search-Optimized Research Portal</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Energy Policy SEO Content Hub
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Optimized research portal content for energy policy keywords, improving search visibility and accessibility of insights for policy stakeholders.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Cultural Articles SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Cultural Content</div>
                <div className={styles.portfolioCompanyLogo}>
                  <div className={styles.portfolioLogoText}>CULTURAL SEO</div>
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>SEO Blog Articles</h4>
                <p className={styles.portfolioServiceDetail}>Keyword-Optimized Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                70 SEO-Optimized Cultural Articles
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed extensive SEO content covering cultural topics with targeted keyword research, optimized structure, and search-friendly formatting for maximum visibility.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - Bonyan Educational SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Education</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/bonyan.webp" alt="Bonyan" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Educational SEO Content</h4>
                <p className={styles.portfolioServiceDetail}>Learning-Focused Keywords</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Educational SEO Blog Strategy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created SEO-optimized educational content targeting learning methodology keywords, improving search visibility for educational resources and student development content.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Mindtales Mental Health SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Mental Health</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/mindtales.webp" alt="Mindtales" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Health SEO Content</h4>
                <p className={styles.portfolioServiceDetail}>Wellness Keywords (AR/EN)</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Mental Health SEO Content Hub
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed bilingual SEO content strategy for mental health topics, targeting wellness and mental health keywords in both Arabic and English for maximum reach.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                View Full Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - Multi-Industry SEO Articles */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Various Industries</div>
                <div className={styles.portfolioCompanyLogo}>
                  <div className={styles.portfolioLogoText}>MULTI-INDUSTRY</div>
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Niche SEO Articles</h4>
                <p className={styles.portfolioServiceDetail}>Industry-Specific Keywords</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Industry-Specific SEO Content
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created targeted SEO articles across multiple industries, each optimized for specific niche keywords and search behaviors unique to different market segments.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                View Full Work
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
            <span className={styles.flechaVerificationText + " mr-3"}>Complete SEO portfolio available</span>
            <button 
              onClick={() => window.location.href = '/v/seo/portfolio'}
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