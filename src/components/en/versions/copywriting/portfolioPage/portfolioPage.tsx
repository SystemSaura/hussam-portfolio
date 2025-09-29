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

  // Copywriting-focused portfolio data with better conversion messaging
  const portfolioData = {
    "Homepage Copy": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "Homepage That Stops Bounces Dead",
        description: "Transformed confusing AI jargon into headlines that make HR managers think 'Finally, someone who gets my hiring nightmare.' Result: 60%+ email conversion from visitors who actually understand the value.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Government Research",
        logo: "/logos/kapsarc.webp",
        logoText: "KAPSARC",
        title: "Research Portal That Actually Makes Sense",
        description: "Turned dense energy policy research into clear, actionable insights. Copy that transforms technical complexity into compelling value for decision-makers who need answers, not academic papers.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      },
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Luxury Property Copy That Sells Dreams",
        description: "Sales copy that positions luxury properties as exclusive lifestyle upgrades, not just real estate. Copy that makes Qatar's premium buyers feel like they're missing out if they don't act now.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "B2B Copy That Cuts Through The Noise",
        description: "Messaging that makes SAEQ the obvious choice for GCC logistics. Copy that differentiates in a commodity market by focusing on what keeps supply chain managers awake at night.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      }
    ],
    "Email Copy That Converts": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "Email Sequences That Actually Get Read",
        description: "Subject lines that survive the inbox massacre and email copy that builds relationships instead of triggering unsubscribes. Sequences that guide prospects from curious to convinced.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Healthcare",
        logo: "/logos/alnahdi.webp",
        logoText: "AL NAHDI",
        title: "Newsletter Copy That Drives Store Visits",
        description: "Email campaigns that turn health tips into customer action. Copy that builds trust while subtly driving store visits and product sales for Saudi's leading pharmacy chain.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/bonyan.webp",
        logoText: "BONYAN",
        title: "Educational Emails That Enroll Students",
        description: "Email sequences that transform learning methodologies into must-have educational experiences. Copy that makes parents feel like they're failing their kids if they don't enroll.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      }
    ],
    "Sales Copy That Closes": [
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Property Sales Pages That Create FOMO",
        description: "Sales copy that positions luxury properties as once-in-a-lifetime investments. Copy that addresses every objection and makes Qatar's premium buyers feel urgency without desperation.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "Healthcare",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health Copy That Builds Trust",
        description: "Sensitive sales copy that makes seeking mental health help feel safe and necessary. Copy that handles the stigma while creating urgency around getting help before things get worse.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/hayatmohamadia.webp",
        logoText: "HAYAT MOHAMADIA",
        title: "Educational Program Copy That Enrolls",
        description: "Sales copy that transforms educational features into must-have advantages for students' futures. Copy that makes parents feel like competitive disadvantage is the cost of not enrolling.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1KLbVMaX4Z0jQ1KiDcaKEaszyTjZRHFcu?usp=sharing"
      }
    ],
    "Brand Messaging": [
      {
        category: "Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "Positioning Copy That Dominates Markets",
        description: "Brand messaging that establishes SAEQ as the only logical choice for GCC logistics. Copy that creates market leadership positioning by owning the category conversation.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "Arts",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "ALHANOUF ALHAMDAN",
        title: "Personal Brand Copy That Attracts Opportunities",
        description: "Personal brand messaging that positions arts professional as the go-to expert. Copy that builds authority and attracts premium opportunities by owning a specific niche.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      },
      {
        category: "Consultancy",
        logo: "",
        logoText: "AL MOTAFARAD",
        title: "Consultancy Brand Voice That Builds Credibility",
        description: "Professional brand messaging that establishes unquestionable expertise. Copy that builds credibility and positions authority in both Arabic and English markets.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing"
      }
    ],
    "Content That Converts": [
      {
        category: "Cultural",
        logo: "",
        logoText: "CULTURAL INSIGHTS",
        title: "70 Articles That Build Thought Leadership",
        description: "Content copy that positions expertise while engaging diverse audiences. Writing that builds authority through storytelling and keeps readers coming back for more insights.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link"
      },
      {
        category: "Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health Content That Destigmatizes",
        description: "Educational content that builds trust while encouraging action. Writing that makes mental health conversations feel normal and seeking help feel necessary, not shameful.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Various Industries",
        logo: "",
        logoText: "MULTI-INDUSTRY",
        title: "Industry-Specific Copy That Resonates",
        description: "Targeted content copy tailored to specific audience pain points. Each piece crafted to make the target buyer think 'This person really understands my industry.'",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link"
      },
      {
        category: "Health",
        logo: "",
        logoText: "REHABS CLUB",
        title: "Healthcare Content That Builds Authority",
        description: "Educational content that positions rehabilitation expertise while building trust. Writing that makes patients feel confident in choosing the right treatment path.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1F4WrSTr40mf6PTW1_xCyAvRMY6Kx04-D?usp=sharing"
      }
    ]
  };

  const serviceTypes = ["ALL", "Homepage Copy", "Email Copy That Converts", "Sales Copy That Closes", "Brand Messaging", "Content That Converts"];

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
              <span className={styles.flechaRatingText}>Copy That Converts</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText}>{getTotalProjectCount()}+ Conversion Projects</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6"}>
              {activeTab === "ALL" ? "Copy That Stops Bounces & Drives Conversions" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12"}>
              {activeTab === "ALL" 
                ? "Complete collection of copywriting that transforms confused visitors into committed customers. Each piece makes the right buyer think 'Finally, someone who gets my problem' and converts immediately."
                : `${activeTab} projects that transformed messaging from confusing to crystal clear, making prospects eager to convert instead of quick to bounce.`
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
                        {project.link !== "#" ? "View Full Work" : "Coming Soon"}
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
              <span className={styles.flechaVerificationText + " mr-3"}>All copy proven to convert confused visitors into committed customers</span>
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