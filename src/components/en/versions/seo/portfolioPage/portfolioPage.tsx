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
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Government Research",
        logo: "/logos/kapsarc.webp",
        logoText: "KAPSARC",
        title: "Energy Policy SEO Content Hub",
        description: "Optimized research portal content for energy policy keywords, improving search visibility and accessibility of insights for policy stakeholders through strategic SEO content creation.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      },
      {
        category: "Cultural Content",
        logo: "",
        logoText: "CULTURAL SEO",
        title: "70 SEO-Optimized Cultural Articles",
        description: "Developed extensive SEO content covering cultural topics with targeted keyword research, optimized structure, and search-friendly formatting for maximum visibility and organic reach.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link"
      },
      {
        category: "Education",
        logo: "/logos/bonyan.webp",
        logoText: "BONYAN",
        title: "Educational SEO Blog Strategy",
        description: "Created SEO-optimized educational content targeting learning methodology keywords, improving search visibility for educational resources and student development content.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      },
      {
        category: "Mental Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health SEO Content Hub",
        description: "Developed bilingual SEO content strategy for mental health topics, targeting wellness and mental health keywords in both Arabic and English for maximum search reach.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Various Industries",
        logo: "",
        logoText: "MULTI-INDUSTRY",
        title: "Industry-Specific SEO Content",
        description: "Created targeted SEO articles across multiple industries, each optimized for specific niche keywords and search behaviors unique to different market segments.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link"
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
        link: "https://drive.google.com/drive/folders/1b-WsZu7mEAP1TC9BjoZoLEfnwjGCh4bF?usp=drive_link"
      },
      {
        category: "Healthcare",
        logo: "/logos/alnahdi.webp",
        logoText: "AL NAHDI",
        title: "Healthcare SEO Content Optimization",
        description: "Optimized newsletter and website content for healthcare keywords, improving search visibility for pharmacy services and health-related search queries.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/maarif.webp",
        logoText: "MAARIF SCHOOLS",
        title: "Educational Website SEO Content",
        description: "Optimized educational website content in both English and Arabic for international school SEO, targeting parent and student search queries.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing"
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
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Logistics",
        logo: "/logos/abudawood.webp",
        logoText: "ABUDAWOOD",
        title: "B2B Logistics SEO Strategy",
        description: "Developed keyword research and SEO content strategy for logistics industry, targeting B2B search terms and supply chain keywords for improved visibility.",
        buttonColor: "Orange",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true"
      },
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Luxury Property SEO Content",
        description: "SEO-optimized brand content and keyword strategy for luxury real estate market in Qatar, targeting high-value property search terms.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
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
        link: "https://drive.google.com/drive/folders/1aAw4aTUWEWpWn7HMs2ryEXenQ5uISfw4?usp=sharing"
      },
      {
        category: "Government",
        logo: "/logos/rcmc.webp",
        logoText: "RCMC",
        title: "Government SEO Content Optimization",
        description: "Optimized government communications content for search engines, improving public accessibility and search visibility of important information.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1EJ0ia1IIRMizi8ls4NyobYyZGLD_pPwf?usp=sharing"
      },
      {
        category: "Media & Entertainment",
        logo: "/logos/rotana.webp",
        logoText: "ROTANA",
        title: "Entertainment Content SEO Optimization",
        description: "SEO-optimized marketing content for leading media company, focusing on entertainment industry keywords and brand visibility improvement.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1gVWbXCdlC8H8CeUlRTN56hnWzX4Tb-v-?usp=drive_link"
      },
      {
        category: "Healthcare",
        logo: "/logos/ncmh.webp",
        logoText: "NCMH",
        title: "Healthcare SEO Content Optimization",
        description: "Specialized SEO optimization for healthcare communications, targeting medical and patient-focused search terms for improved online visibility.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1emjBrN00Ai-a_E1cOwgE8KA72kYptv0t?usp=sharing"
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
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "Transport",
        logo: "/logos/makkahbus.webp",
        logoText: "MAKKAH BUS",
        title: "Local Transport SEO Campaign",
        description: "Local SEO content strategy for Makkah's public transportation, optimizing for local search queries and community-focused keywords.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link"
      },
    {
        category: "Tourism",
        logo: "/logos/syahya.webp",
        logoText: "SYAHYA",
        title: "Tourism Destination SEO Content",
        description: "SEO-optimized travel and tourism content targeting destination-specific keywords and travel search behaviors for improved visibility.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1mBYjvvYbpQGyt6JXmnYf2oPArzQmA7tR?usp=sharing"
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
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/maarif.webp",
        logoText: "MAARIF SCHOOLS",
        title: "Multilingual Education SEO",
        description: "Bilingual SEO content optimization for international school targeting both Arabic and English educational search terms and parent queries.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing"
      },
      {
        category: "Consultancy",
        logo: "",
        logoText: "AL MOTAFARAD",
        title: "Bilingual Business SEO Content",
        description: "SEO-optimized brand content in both Arabic and English for management consultancy, targeting bilingual business search terms.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing"
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
                      <button 
                        onClick={() => project.link !== "#" ? window.open(project.link, '_blank') : null}
                        className={`${styles.portfolioButton} ${getButtonColorClass(project.buttonColor)} ${project.link === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={project.link === "#"}
                      >
                        {project.link !== "#" ? "View SEO Work" : "Coming Soon"}
                      </button>
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