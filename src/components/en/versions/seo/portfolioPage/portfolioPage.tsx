"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Header from "../homePage/headerSection/header";
import Footer from "../homePage/footerSection/footer";
import styles from "./portfolioPage.module.css";

interface NavigationHandlers {
  about: () => void;
  portfolio: () => void;
  services: () => void;
  caseStudy: () => void;
}

interface PortfolioPageProps {
  onNavigate: NavigationHandlers;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // SEO-focused portfolio data
  const portfolioData = {
    "SEO Content Strategy": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "AI Recruitment SEO Content Hub",
        description: "Developed comprehensive SEO content strategy targeting recruitment industry keywords, resulting in 15+ page 1 rankings and 200% organic traffic growth through strategic keyword research and content optimization.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link",
        externalLinks: [{ label: "Website", url: "https://shiftat.sa" }]
      },
      {
        category: "Government Research",
        logo: "/logos/kapsarc.webp",
        logoText: "KAPSARC",
        title: "Energy Policy SEO Content Hub",
        description: "Optimized research portal content for energy policy keywords, improving search visibility and accessibility of insights for policy stakeholders through strategic SEO content creation.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing",
        externalLinks: [{ label: "Website", url: "https://www.kapsarc.org/" }]
      },
      {
        category: "Cultural Content",
        logo: "",
        logoText: "CULTURAL SEO",
        title: "70 SEO-Optimized Cultural Articles",
        description: "Developed extensive SEO content covering cultural topics with targeted keyword research, optimized structure, and search-friendly formatting for maximum visibility and organic reach.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link",
        externalLinks: []
      },
      {
        category: "Education",
        logo: "/logos/bonyan.webp",
        logoText: "BONYAN",
        title: "Educational SEO Blog Strategy",
        description: "Created SEO-optimized educational content targeting learning methodology keywords, improving search visibility for educational resources and student development content.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing",
        externalLinks: []
      },
      {
        category: "Mental Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health SEO Content Hub",
        description: "Developed bilingual SEO content strategy for mental health topics, targeting wellness and mental health keywords in both Arabic and English for maximum search reach.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing",
        externalLinks: [{ label: "Website", url: "https://www.mindtales.me/" }]
      },
      {
        category: "Various Industries",
        logo: "",
        logoText: "MULTI-INDUSTRY",
        title: "Industry-Specific SEO Content",
        description: "Created targeted SEO articles across multiple industries, each optimized for specific niche keywords and search behaviors unique to different market segments.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link",
        externalLinks: []
      }
    ],
    "Technical SEO & Website Content": [
      {
        category: "Government Research",
        logo: "/logos/kapsarc.webp",
        logoText: "KAPSARC",
        title: "Research Portal SEO Optimization",
        description: "Comprehensive website content strategy with SEO optimization for research platform, improving search engine visibility and user accessibility of energy policy insights.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1b-WsZu7mEAP1TC9BjoZoLEfnwjGCh4bF?usp=drive_link",
        externalLinks: [{ label: "Website", url: "https://www.kapsarc.org/" }]
      },
      {
        category: "Healthcare",
        logo: "/logos/alnahdi.webp",
        logoText: "AL NAHDI",
        title: "Healthcare SEO Content Optimization",
        description: "Optimized newsletter and website content for healthcare keywords, improving search visibility for pharmacy services and health-related search queries.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing",
        externalLinks: [{ label: "Website", url: "https://nahdi.sa/" }]
      },
      {
        category: "Education",
        logo: "/logos/maarif.webp",
        logoText: "MAARIF SCHOOLS",
        title: "Educational Website SEO Content",
        description: "Optimized educational website content in both English and Arabic for international school SEO, targeting parent and student search queries.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing",
        externalLinks: []
      }
    ],
    "Keyword Research & Content Planning": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "Recruitment Industry Keyword Strategy",
        description: "Comprehensive keyword research and content planning for AI recruitment platform, identifying high-value search terms and content opportunities for organic growth.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link",
        externalLinks: [{ label: "Website", url: "https://shiftat.sa" }]
      },
      {
        category: "Logistics",
        logo: "/logos/abudawood.webp",
        logoText: "ABUDAWOOD",
        title: "B2B Logistics SEO Strategy",
        description: "Developed keyword research and SEO content strategy for logistics industry, targeting B2B search terms and supply chain keywords for improved visibility.",
        buttonColor: "Orange",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true",
        externalLinks: [{ label: "Website", url: "https://www.abudawood.com/" }]
      },
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Luxury Property SEO Content",
        description: "SEO-optimized brand content and keyword strategy for luxury real estate market in Qatar, targeting high-value property search terms.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing",
        externalLinks: [{ label: "Website", url: "https://www.empirerealestate.qa/" }]
      }
    ],
    "SEO Copywriting & Content Optimization": [
      {
        category: "Security",
        logo: "",
        logoText: "FIELDBIO",
        title: "Security Solutions SEO Case Study",
        description: "SEO-optimized case study content targeting enterprise security keywords and showcasing solutions for improved search visibility in B2B security market.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1aAw4aTUWEWpWn7HMs2ryEXenQ5uISfw4?usp=sharing",
        externalLinks: []
      },
      {
        category: "Government",
        logo: "/logos/rcmc.webp",
        logoText: "RCMC",
        title: "Government SEO Content Optimization",
        description: "Optimized government communications content for search engines, improving public accessibility and search visibility of important information.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1EJ0ia1IIRMizi8ls4NyobYyZGLD_pPwf?usp=sharing",
        externalLinks: []
      },
      {
        category: "Media & Entertainment",
        logo: "/logos/rotana.webp",
        logoText: "ROTANA",
        title: "Entertainment Content SEO Optimization",
        description: "SEO-optimized marketing content for leading media company, focusing on entertainment industry keywords and brand visibility improvement.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1gVWbXCdlC8H8CeUlRTN56hnWzX4Tb-v-?usp=drive_link",
        externalLinks: []
      },
      {
        category: "Healthcare",
        logo: "/logos/ncmh.webp",
        logoText: "NCMH",
        title: "Healthcare SEO Content Optimization",
        description: "Specialized SEO optimization for healthcare communications, targeting medical and patient-focused search terms for improved online visibility.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1emjBrN00Ai-a_E1cOwgE8KA72kYptv0t?usp=sharing",
        externalLinks: []
      }
    ],
    "Local SEO & Regional Content": [
      {
        category: "Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "GCC Market SEO Strategy",
        description: "Comprehensive SEO content strategy for expansion across GCC markets, targeting regional logistics keywords and local search optimization.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link",
        externalLinks: [{ label: "Website", url: "https://saeq.com/" }]
      },
      {
        category: "Transport",
        logo: "/logos/makkahbus.webp",
        logoText: "MAKKAH BUS",
        title: "Local Transport SEO Campaign",
        description: "Local SEO content strategy for Makkah's public transportation, optimizing for local search queries and community-focused keywords.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link",
        externalLinks: [{ label: "Website", url: "https://www.mbco.sa/" }]
      },
    {
        category: "Tourism",
        logo: "/logos/syahya.webp",
        logoText: "SYAHYA",
        title: "Tourism Destination SEO Content",
        description: "SEO-optimized travel and tourism content targeting destination-specific keywords and travel search behaviors for improved visibility.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1mBYjvvYbpQGyt6JXmnYf2oPArzQmA7tR?usp=sharing",
        externalLinks: []
      }
    ],
    "Multilingual SEO": [
      {
        category: "Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Bilingual Mental Health SEO",
        description: "Developed bilingual SEO strategy for mental health content, optimizing for both Arabic and English search terms to maximize regional reach.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing",
        externalLinks: [{ label: "Website", url: "https://www.mindtales.me/" }]
      },
      {
        category: "Education",
        logo: "/logos/maarif.webp",
        logoText: "MAARIF SCHOOLS",
        title: "Multilingual Education SEO",
        description: "Bilingual SEO content optimization for international school targeting both Arabic and English educational search terms and parent queries.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing",
        externalLinks: []
      },
      {
        category: "Consultancy",
        logo: "",
        logoText: "AL MOTAFARAD",
        title: "Bilingual Business SEO Content",
        description: "SEO-optimized brand content in both Arabic and English for management consultancy, targeting bilingual business search terms.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing",
        externalLinks: []
      }
    ]
  };

  // Updated service types for SEO focus
  const serviceTypes = ["ALL", "SEO Content Strategy", "Technical SEO & Website Content", "Keyword Research & Content Planning", "SEO Copywriting & Content Optimization", "Local SEO & Regional Content", "Multilingual SEO"];

  // Check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    if (tabContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (tabContainerRef.current) {
      tabContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (tabContainerRef.current) {
      tabContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Check scroll position on mount and resize
  useEffect(() => {
    checkScrollPosition();
    
    const handleResize = () => {
      checkScrollPosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFilteredData = () => {
    if (activeTab === "ALL") {
      return portfolioData;
    }
    return { [activeTab]: portfolioData[activeTab as keyof typeof portfolioData] };
  };

  const getExternalLinkIcon = (label: string) => {
    switch (label) {
      case "LinkedIn":
      case "لينكد إن":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        );
      case "Instagram":
      case "انستقرام":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        );
      default: // Website / الموقع
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        );
    }
  };

  const getButtonColorClass = (color: string) => {
    switch (color) {
      case "Blue": return styles.portfolioButtonBlue;
      case "Green": return styles.portfolioButtonGreen;
      case "Purple": return styles.portfolioButtonPurple;
      case "Orange": return styles.portfolioButtonOrange;
      case "Teal": return styles.portfolioButtonTeal;
      case "Pink": return styles.portfolioButtonPink;
      default: return styles.portfolioButtonBlue;
    }
  };

  const getHeaderColorClass = (color: string) => {
    switch (color) {
      case "Blue": return "from-blue-500 to-blue-600";
      case "Green": return "from-green-500 to-green-600";
      case "Purple": return "from-purple-500 to-purple-600";
      case "Orange": return "from-orange-500 to-orange-600";
      case "Teal": return "from-teal-500 to-teal-600";
      case "Pink": return "from-pink-500 to-pink-600";
      default: return "from-blue-500 to-blue-600";
    }
  };

  const getTotalProjectCount = () => {
    return Object.values(portfolioData).reduce((total, projects) => total + projects.length, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with white background */}
      <div className="bg-white">
        <Header onNavigate={onNavigate} variant="white" />
      </div>

      {/* Main Portfolio Content - Moderate top padding */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-4">
              <span className={styles.flechaRatingText}>Complete SEO Portfolio</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText}>{getTotalProjectCount()}+ SEO Projects Delivered</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6"}>
              {activeTab === "ALL" ? "Complete SEO Portfolio Showcase" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12"}>
              {activeTab === "ALL" 
                ? "Comprehensive collection of SEO projects that delivered search visibility and organic traffic growth for GCC companies. Each project represents strategic keyword research, content optimization, and measurable search results."
                : `Explore my ${activeTab.toLowerCase()} projects that delivered measurable SEO results for GCC companies across different industries.`
              }
            </p>

            {/* Enhanced Tab Bar with scroll indicators */}
            <div className={styles.tabBarSection}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={styles.tabContainerWrapper}>
                  {/* Left Arrow */}
                  {showLeftArrow && (
                    <button 
                      onClick={scrollLeft}
                      className={styles.scrollArrow + " " + styles.scrollArrowLeft}
                      aria-label="Scroll tabs left"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                  
                  {/* Tab Container */}
                  <div 
                    ref={tabContainerRef}
                    className={styles.tabContainer}
                    onScroll={checkScrollPosition}
                  >
                    {serviceTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveTab(type)}
                        className={`${styles.tabButton} ${
                          activeTab === type ? styles.tabButtonActive : styles.tabButtonInactive
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {/* Right Arrow */}
                  {showRightArrow && (
                    <button 
                      onClick={scrollRight}
                      className={styles.scrollArrow + " " + styles.scrollArrowRight}
                      aria-label="Scroll tabs right"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Categories */}
          {Object.entries(getFilteredData()).map(([categoryName, projects], categoryIndex) => (
            <div key={categoryName} className="mb-32">
              {activeTab === "ALL" && (
                <div className="mt-16 mb-16">
                  <h2 className={styles.categoryHeading}>{categoryName}</h2>
                  <div className={styles.categoryDivider}></div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {projects.map((project, index) => (
                  <div key={`${categoryName}-${index}`} className={`${styles.portfolioCard} group`}>
                    <div className={`${styles.portfolioHeader} bg-gradient-to-br ${getHeaderColorClass(project.buttonColor)}`}>
                      <div className={styles.portfolioHeaderContent}>
                        <div className={styles.portfolioCategory}>{project.category}</div>
                        <div className={styles.portfolioCompanyLogo}>
                          {project.logo ? (
                            <img src={project.logo} alt={project.logoText} className={styles.portfolioLogoImg} />
                          ) : (
                            <div className={styles.portfolioLogoText}>{project.logoText}</div>
                          )}
                        </div>
                      </div>
                      <div className={styles.portfolioHeaderMain}>
                        <h4 className={styles.portfolioServiceType}>{project.category}</h4>
                        <p className={styles.portfolioServiceDetail}>{categoryName}</p>
                      </div>
                    </div>
                    
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle}>
                        {project.title}
                        <Image
                          src="/arrow-right.svg"
                          alt="Arrow"
                          width={18}
                          height={18}
                          className={styles.portfolioArrow}
                        />
                      </h3>
                      <p className={styles.portfolioDescription}>
                        {project.description}
                      </p>
                      <div className={styles.portfolioButtons}>
                        <button
                          onClick={() => project.link !== "#" ? window.open(project.link, '_blank') : null}
                          className={`${styles.portfolioButton} ${styles.portfolioButtonOutline} ${project.link === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                          disabled={project.link === "#"}
                        >
                          {project.link !== "#" ? "Samples (Internal)" : "Coming Soon"}
                        </button>
                        {project.externalLinks.map((extLink, i) => (
                          <button
                            key={i}
                            onClick={() => window.open(extLink.url, '_blank')}
                            className={`${styles.portfolioButton} ${styles.portfolioIconBtn} ${getButtonColorClass(project.buttonColor)}`}
                          >
                            {getExternalLinkIcon(extLink.label)}
                            {extLink.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Portfolio Summary with Enhanced Spacing */}
          <div className={`text-center border-t border-gray-200 ${styles.portfolioSummary}`}>
            <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={styles.flechaVerificationText + " mr-3"}>All SEO projects verified and documented</span>
              <Link href="/" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with white background to match header */}
      <Footer variant="white" />
    </div>
  );
}