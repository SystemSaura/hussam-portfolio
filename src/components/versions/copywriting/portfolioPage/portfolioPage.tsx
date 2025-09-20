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

  // Copywriting-focused portfolio data
  const portfolioData = {
    "Website Copy": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "Homepage Copy That Converts",
        description: "Transformed confusing tech jargon into clear, compelling website copy that immediately communicates value. Visitors instantly understand what Shiftat does and why they need it.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Government Research",
        logo: "/logos/kapsarc.webp",
        logoText: "KAPSARC",
        title: "Research Portal Copy Strategy",
        description: "Transformed complex energy research into accessible, actionable website copy for policy makers. Clear communication that turns technical concepts into compelling insights.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      },
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Luxury Property Sales Copy",
        description: "High-converting sales copy that positions luxury properties as exclusive investments. Copy that appeals to Qatar's premium market with compelling value propositions.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "B2B Website Messaging",
        description: "Compelling brand messaging that differentiates SAEQ in competitive logistics market. Website copy that creates clear market positioning for GCC expansion.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      }
    ],
    "Email Copy": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "Email Sequences That Convert",
        description: "High-performing email campaigns with 60%+ open rates. Nurture sequences that guide prospects from curiosity to becoming paying customers.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Healthcare",
        logo: "/logos/alnahdi.webp",
        logoText: "AL NAHDI",
        title: "Newsletter Copy That Engages",
        description: "Email campaigns that turn health tips into customer engagement, driving store visits and product sales. Copy that builds trust and drives action.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/bonyan.webp",
        logoText: "BONYAN",
        title: "Educational Email Sequences",
        description: "Email copy that transforms learning methodologies into engaging campaigns. Messages that resonate with educators and drive enrollment.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      }
    ],
    "Sales Copy": [
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Property Sales Pages",
        description: "Sales copy that positions luxury properties as must-have investments. Copy that addresses every objection and builds desire for premium Qatar real estate.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "Healthcare",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health Service Copy",
        description: "Sensitive, compelling sales copy for mental health services. Copy that builds trust and makes seeking help feel safe and necessary.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/hayatmohamadia.webp",
        logoText: "HAYAT MOHAMADIA",
        title: "Educational Program Sales Copy",
        description: "Sales copy that makes educational programs irresistible. Copy that transforms features into benefits parents and students can't ignore.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1KLbVMaX4Z0jQ1KiDcaKEaszyTjZRHFcu?usp=sharing"
      }
    ],
    "Brand Messaging": [
      {
        category: "Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "Brand Positioning Copy",
        description: "Messaging that establishes SAEQ as the obvious choice for GCC logistics. Copy that differentiates and creates market leadership positioning.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "Arts",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "ALHANOUF ALHAMDAN",
        title: "Personal Brand Copy",
        description: "Personal brand messaging that positions arts professional as industry leader. Copy that builds authority and attracts premium opportunities.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      },
      {
        category: "Consultancy",
        logo: "",
        logoText: "AL MOTAFARAD",
        title: "Consultancy Brand Voice",
        description: "Professional brand messaging for management consultancy. Copy that builds credibility and positions expertise in both Arabic and English markets.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing"
      }
    ],
    "Content Copy": [
      {
        category: "Cultural",
        logo: "",
        logoText: "CULTURAL INSIGHTS",
        title: "70 Analytical Cultural Articles",
        description: "Compelling content copy covering cultural topics. Writing that engages diverse audiences and builds thought leadership through storytelling.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link"
      },
      {
        category: "Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health Content Copy",
        description: "Sensitive, engaging content copy for mental health awareness. Writing that educates, builds trust, and encourages action in both Arabic and English.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Various Industries",
        logo: "",
        logoText: "MULTI-INDUSTRY",
        title: "Specialized Industry Copy",
        description: "Targeted content copy across multiple industries. Each piece tailored to specific audience pain points and market requirements.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link"
      },
      {
        category: "Health",
        logo: "",
        logoText: "REHABS CLUB",
        title: "Healthcare Content Strategy",
        description: "Educational content copy for rehabilitation services. Writing that positions expertise and builds trust with patients seeking treatment.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1F4WrSTr40mf6PTW1_xCyAvRMY6Kx04-D?usp=sharing"
      }
    ]
  };

  const serviceTypes = ["ALL", "Website Copy", "Email Copy", "Sales Copy", "Brand Messaging", "Content Copy"];

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
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-4">
              <span className={styles.flechaRatingText}>Copy Portfolio</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText}>{getTotalProjectCount()}+ Copy Projects</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6"}>
              {activeTab === "ALL" ? "Copy That Converts Portfolio" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12"}>
              {activeTab === "ALL" 
                ? "Complete collection of copywriting projects that turn confused visitors into committed customers. Each piece represents strategic thinking that makes the right buyer say 'This is exactly what I need.'"
                : `Explore ${activeTab.toLowerCase()} projects that transformed messaging from confusing to crystal clear, driving measurable conversions for GCC companies.`
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
                        <h4 className={styles.portfolioServiceType}>{categoryName}</h4>
                        <p className={styles.portfolioServiceDetail}>{project.category} Project</p>
                      </div>
                    </div>
                    
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle}>
                        {project.title}
                        <Image
                          src="https://ext.same-assets.com/3287453319/2624132661.svg"
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
                        {project.link !== "#" ? "View Copy Samples" : "Coming Soon"}
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
              <span className={styles.flechaVerificationText + " mr-3"}>All copy samples verified and results-driven</span>
              <Link href="/v/copywriting/homepage" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>
                Back to Copywriting Home →
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