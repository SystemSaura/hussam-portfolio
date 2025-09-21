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
            Featured Social Media Work
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"}>
            Real social media campaigns that delivered measurable growth for GCC companies across LinkedIn, X, and Instagram.
          </p>
        </div>

        {/* Portfolio Grid - Social Media Focused */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Social Media Growth */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>HR Technology</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="Shiftat" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Social Media Growth</h4>
                <p className={styles.portfolioServiceDetail}>LinkedIn + X Strategy</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                12,000+ Followers in 8 Months
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Built Shiftat's social presence from zero to industry leadership with strategic content, engagement tactics, and thought leadership positioning.
              </p>
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/shiftat-sa/', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                View Social Media Growth
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - Abudawood B2B LinkedIn Strategy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Logistics</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="Abudawood" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>LinkedIn Strategy</h4>
                <p className={styles.portfolioServiceDetail}>B2B Thought Leadership</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                B2B LinkedIn Authority Building
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed comprehensive LinkedIn content strategy for GCC's leading logistics provider, establishing industry thought leadership and generating qualified B2B leads.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1OW44Melyr3JIr4rYvE8SQFT-hx_QzI48?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                View LinkedIn Content
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Downe House Educational Institution */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Education</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/downehouse.webp" alt="Downe House" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Instagram & Facebook</h4>
                <p className={styles.portfolioServiceDetail}>Educational Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Educational Social Media Campaign
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created engaging social media content for prestigious educational institution, focusing on student life, academic excellence, and parent engagement.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                View Campaign
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - JAX District Arts & Culture */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Arts & Culture</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/jaxdistrict.webp" alt="JAX District" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Creative Social Content</h4>
                <p className={styles.portfolioServiceDetail}>Instagram + Facebook</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Arts Community Social Growth
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed creative social media campaigns showcasing artistic talent and cultural events, building engaged community around local arts scene.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                View Creative Work
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - REVIVA Sustainability Campaign */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Sustainability</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/reviva.webp" alt="REVIVA" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Environmental Campaign</h4>
                <p className={styles.portfolioServiceDetail}>Multi-Platform Content</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Sustainability Social Movement
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Created impactful social media content promoting environmental awareness and sustainable practices, driving community engagement and behavior change.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                View Campaign Impact
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - Makkah Bus Public Transport */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>Public Transport</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/makkahbus.webp" alt="Makkah Bus" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>Community Engagement</h4>
                <p className={styles.portfolioServiceDetail}>Local Social Strategy</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                Public Service Social Strategy
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                Developed comprehensive social media strategy for Makkah's public transportation system, focusing on community engagement and service awareness.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                View Social Strategy
              </button>
            </div>
          </div>
        </div>

        {/* View Complete Portfolio Button - Updated for social media focus */}
        <div className="text-center mt-16">
         <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " mr-3"}>Complete social media portfolio available</span>
            <button 
              onClick={() => window.location.href = '/v/social-media/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              View All Social Media Work →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;