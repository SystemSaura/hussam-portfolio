"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Header from "../components/headerSection/header";
import Footer from "../components/footerSection/footer";
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

  // Organized portfolio data with Rehab Club moved to end
  const portfolioData = {
    "Content Marketing": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "Professional Blog Content",
        description: "Created engaging blog content strategy for Shiftat's AI recruitment platform, focusing on industry insights and thought leadership.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Cultural",
        logo: "",
        logoText: "CULTURAL ARTICLES",
        title: "70 Analytical Cultural Articles",
        description: "Developed extensive analytical content covering cultural topics, trends, and insights for diverse audiences.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link"
      },
      {
        category: "Various",
        logo: "",
        logoText: "MULTI-INDUSTRY",
        title: "7 Specialized Articles",
        description: "Created targeted articles across multiple industries, each tailored to specific audience needs and market requirements.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link"
      },
      {
        category: "Education",
        logo: "/logos/bonyan.webp",
        logoText: "BONYAN",
        title: "Educational Blog Content",
        description: "Developed engaging educational blog posts focusing on learning methodologies and student development strategies.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      },
      {
        category: "Health",
        logo: "/logos/mindtales.webp",
        logoText: "MINDTALES",
        title: "Mental Health Content",
        description: "Created comprehensive mental health blog content in both Arabic and English, focusing on awareness and wellness.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "Healthcare",
        logo: "/logos/alnahdi.webp",
        logoText: "AL NAHDI",
        title: "Healthcare Newsletter Strategy",
        description: "Designed and wrote engaging newsletter campaigns focusing on health tips and product promotions for leading pharmacy chain.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "Health",
        logo: "",
        logoText: "REHABS CLUB",
        title: "Healthcare Blog Content",
        description: "Created comprehensive blog content strategy for rehabilitation services, focusing on patient education and treatment insights.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1F4WrSTr40mf6PTW1_xCyAvRMY6Kx04-D?usp=sharing"
      }
    ],
    "Social Media Marketing": [
      {
        category: "HR Technology",
        logo: "/logos/shiftat.webp",
        logoText: "SHIFTAT",
        title: "AI Recruitment Platform",
        description: "Managed comprehensive social media strategy across LinkedIn and X platforms, building thought leadership in AI recruitment.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "Logistics",
        logo: "/logos/abudawood.webp",
        logoText: "ABUDAWOOD",
        title: "Logistics Social Strategy",
        description: "Developed professional LinkedIn and industry content strategy for GCC's leading logistics provider.",
        buttonColor: "Orange",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true"
      },
      {
        category: "Education",
        logo: "/logos/downehouse.webp",
        logoText: "DOWNE HOUSE",
        title: "Educational Institution",
        description: "Created engaging social media content for prestigious educational institution, focusing on academic excellence and student life.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing"
      },
      {
        category: "Arts",
        logo: "/logos/jaxdistrict.webp",
        logoText: "JAX DISTRICT",
        title: "Arts & Culture Platform",
        description: "Developed creative social media campaigns showcasing artistic talent and cultural events in the local community.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing"
      },
      {
        category: "Recycling",
        logo: "/logos/reviva.webp",
        logoText: "REVIVA",
        title: "Sustainability Campaign",
        description: "Created impactful social media content promoting environmental awareness and sustainable recycling practices.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link"
      },
      {
        category: "Tourism",
        logo: "/logos/syahya.webp",
        logoText: "SYAHYA",
        title: "Tourism Promotion",
        description: "Developed engaging travel and tourism content highlighting destinations and cultural experiences.",
        buttonColor: "Teal",
        link: "#"
      },
      {
        category: "Transport",
        logo: "/logos/makkahbus.webp",
        logoText: "MAKKAH BUS",
        title: "Public Transportation Campaign",
        description: "Created comprehensive social media strategy for Makkah's public transportation system, focusing on community engagement and service awareness.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link"
      }
    ],
    "Brand Strategy": [
      {
        category: "Real Estate",
        logo: "/logos/empirerealestate.webp",
        logoText: "EMPIRE REAL ESTATE",
        title: "Luxury Property Brand",
        description: "Developed comprehensive brand profile and positioning strategy for luxury property portfolio in Qatar.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "Logistics",
        logo: "/logos/saeq.webp",
        logoText: "SAEQ",
        title: "Logistics Brand Positioning",
        description: "Crafted comprehensive brand profile and market positioning strategy for expansion across GCC markets.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "Consultancy",
        logo: "",
        logoText: "AL MOTAFARAD",
        title: "Consultancy Brand Profile",
        description: "Created professional brand identity and positioning for management consultancy services in both Arabic and English.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing"
      },
      {
        category: "Arts",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "ALHANOUF ALHAMDAN",
        title: "Personal Brand Development",
        description: "Developed comprehensive personal brand strategy for arts professional, including portfolio and market positioning.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      },
      {
        category: "Real Estate",
        logo: "",
        logoText: "GOODWILL",
        title: "Real Estate Brand Identity",
        description: "Created brand profile and market positioning for real estate services in both Arabic and English markets.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1ymhNGtgbzt8yK5iu0Rpq2BnAJMYkbmJ-?usp=drive_link"
      }
    ],
    "Technical Writing": [
      {
        category: "Security",
        logo: "",
        logoText: "FIELDBIO",
        title: "Security Case Study",
        description: "Developed comprehensive case study showcasing security solutions and implementation strategies for enterprise clients.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1aAw4aTUWEWpWn7HMs2ryEXenQ5uISfw4?usp=sharing"
      },
      {
        category: "Award",
        logo: "/logos/investmed.webp",
        logoText: "RECOGNITION",
        title: "Industry Recognition Report",
        description: "Created detailed report documenting industry achievements and recognition for professional portfolio development.",
        buttonColor: "Orange",
        link: "#"
      },
      {
        category: "Government Research",
        logo: "/logos/kapsarc.webp",
        logoText: "KAPSARC",
        title: "Research Portal Content",
        description: "Created comprehensive website content strategy for research platform, improving accessibility of energy policy insights.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      }
    ],
    "Design & Creative": [
      {
        category: "Education",
        logo: "/logos/hayatmohamadia.webp",
        logoText: "HAYAT MOHAMADIA",
        title: "Educational Design Projects",
        description: "Created comprehensive design solutions including competition presentations and visual content for educational initiatives.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/1KLbVMaX4Z0jQ1KiDcaKEaszyTjZRHFcu?usp=sharing"
      },
      {
        category: "Esthetics",
        logo: "",
        logoText: "MIST",
        title: "Product Description Design",
        description: "Developed compelling product descriptions and creative content for esthetics and beauty products in English and Arabic.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/12APGejnG0859hhYAujfV5T8aKB0jPKUw?usp=drive_link"
      },
      {
        category: "Recycling",
        logo: "/logos/reviva.webp",
        logoText: "REVIVA",
        title: "Video Script Creation",
        description: "Created engaging video scripts for environmental and recycling awareness campaigns, focusing on sustainability messaging.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link"
      }
    ],
    "Translation & Editing": [
      {
        category: "Government",
        logo: "/logos/rcmc.webp",
        logoText: "RCMC",
        title: "Government Content Editing",
        description: "Provided professional editing services for government communications and public sector content development.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1EJ0ia1IIRMizi8ls4NyobYyZGLD_pPwf?usp=sharing"
      },
      {
        category: "Marketing",
        logo: "/logos/rotana.webp",
        logoText: "ROTANA",
        title: "Marketing Content Editing",
        description: "Edited and refined marketing content for leading media and entertainment company, ensuring brand consistency.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1gVWbXCdlC8H8CeUlRTN56hnWzX4Tb-v-?usp=drive_link"
      },
      {
        category: "Healthcare",
        logo: "/logos/ncmh.webp",
        logoText: "NCMH",
        title: "Healthcare Content Editing",
        description: "Provided specialized editing for healthcare communications and medical content development projects.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1emjBrN00Ai-a_E1cOwgE8KA72kYptv0t?usp=sharing"
      },
      {
        category: "Education",
        logo: "/logos/maarif.webp",
        logoText: "MAARIF SCHOOLS",
        title: "Educational Content",
        description: "Edited comprehensive educational content in both English and Arabic for international school curriculum development.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing"
      }
    ]
  };

  // Updated service types without Email Marketing
  const serviceTypes = ["ALL", "Content Marketing", "Social Media Marketing", "Brand Strategy", "Technical Writing", "Design & Creative", "Translation & Editing"];

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
              <span className={styles.flechaRatingText}>Complete Portfolio</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText}>{getTotalProjectCount()}+ Projects Delivered</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6"}>
              {activeTab === "ALL" ? "Complete Portfolio Showcase" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12"}>
              {activeTab === "ALL" 
                ? "Comprehensive collection of marketing projects delivered across diverse industries in the GCC region. Each project represents strategic thinking, creative execution, and measurable results."
                : `Explore my ${activeTab.toLowerCase()} projects that delivered measurable results for GCC companies across different industries.`
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
                        {project.link !== "#" ? "View Work" : "Coming Soon"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Portfolio Summary */}
          <div className="text-center mt-20 pt-16 border-t border-gray-200">
            <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={styles.flechaVerificationText + " mr-3"}>All projects verified and documented</span>
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