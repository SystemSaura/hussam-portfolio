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

  // Focused portfolio data for social media clients
  const portfolioData = {
    "Content Marketing": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "LinkedIn Authority Content",
        description: "Built thought leadership content that positioned Shiftat as Saudi Arabia's go-to AI recruitment expert. Daily insights that HR directors actually shared.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Healthcare",
        logo: "/logos/alnahdi.webp",
        logoText: "AL NAHDI",
        title: "Newsletter That Converts",
        description: "Transformed boring health tips into engaging newsletter content. 65% open rates because it solved real problems instead of pushing products.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/bonyan.webp",
        logoText: "BONYAN",
        title: "Educational Content That Sticks",
        description: "Created blog content parents actually wanted to read. Focused on student development challenges, not school marketing.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      },
      {
        category: "Mental Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Wellness Content That Matters",
        description: "Mental health content in Arabic and English that actually helps people instead of just promoting services. Real stories, real solutions.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      }
    ],
    "Social Media Marketing": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "B2B Social That Actually Works",
        description: "Grew from 0 to 12K followers who care about AI recruitment. Built authority on LinkedIn and X with content HR leaders share, not ignore.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Logistics",
        logo: "/logos/abudawood.webp",
        logoText: "ABUDAWOOD",
        title: "Industry Authority Positioning",
        description: "Positioned GCC's logistics leader as the voice of supply chain innovation. LinkedIn strategy that builds trust before selling.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1OW44Melyr3JIr4rYvE8SQFT-hx_QzI48?usp=drive_link"
      },
      {
        category: "Education",
        logo: "/logos/downehouse.webp",
        logoText: "DOWNE HOUSE",
        title: "Enrollment-Driven Social Strategy",
        description: "Social content that shows school excellence without bragging. Parents share it because it solves their education concerns.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing"
      },
      {
        category: "Arts & Culture",
        logo: "/logos/jaxdistrict.webp",
        logoText: "JAX DISTRICT",
        title: "Community-Building Content",
        description: "Built engaged arts community through social media. Content that celebrates local talent and drives event attendance.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing"
      },
      {
        category: "Sustainability",
        logo: "/logos/reviva.webp",
        logoText: "REVIVA",
        title: "Cause-Driven Engagement",
        description: "Environmental content that motivates action, not just awareness. Social strategy that turns followers into recycling advocates.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link"
      },
      {
        category: "Public Transport",
        logo: "/logos/makkahbus.webp",
        logoText: "MAKKAH BUS",
        title: "Public Service Communication",
        description: "Made public transportation social media actually useful. Service updates and community engagement that serves residents.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link"
      }
    ],
    "Brand Strategy": [
      {
        category: "Luxury Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Premium Brand Positioning",
        description: "Positioned Qatar luxury properties for high-net-worth buyers. Brand strategy that attracts serious investors, not browsers.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "GCC Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "Regional Expansion Strategy",
        description: "Brand positioning for GCC logistics expansion. Strategy that builds trust across markets before pitching services.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "Personal Brand",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "ALHANOUF ALHAMDAN",
        title: "Artist Brand Development",
        description: "Personal brand strategy for arts professional. Portfolio positioning that attracts serious collectors and opportunities.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      }
    ]
  };

  // Social media focused service types
  const serviceTypes = ["ALL", "Social Media Marketing", "Content Marketing", "Brand Strategy"];

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

      {/* Main Portfolio Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header - Social Media Focused */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-4">
              <span className={styles.flechaRatingText}>Social Media Specialist</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText}>{getTotalProjectCount()} High-Impact Campaigns</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6"}>
              {activeTab === "ALL" ? "Social Media That Drives Business" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12"}>
              {activeTab === "ALL" 
                ? "Stop posting into the void. These campaigns generated real followers, real engagement, and real leads for GCC businesses. No vanity metrics—just results that matter to your bottom line."
                : `${activeTab} campaigns that turned social media from cost center into revenue driver.`
              }
            </p>

            {/* Enhanced Tab Bar */}
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
                        {project.link !== "#" ? "See Results" : "Coming Soon"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Portfolio Summary */}
          <div className={`text-center border-t border-gray-200 ${styles.portfolioSummary}`}>
            <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={styles.flechaVerificationText + " mr-3"}>All campaigns verified and documented</span>
              <Link href="/v/social-media/h" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="white" />
    </div>
  );
}