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
  const [activeTab, setActiveTab] = useState("الكل");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // Arabic portfolio data
  const portfolioData = {
    "التسويق الرقمي": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "منصة التوظيف الذكية",
        description: "استراتيجية تسويق رقمي متكاملة حولت شفتات إلى الخيار الأول للتوظيف بالذكاء الاصطناعي في السعودية. النتيجة: زيادة ٤٠٠٪ في الزيارات وتحسن ٨٥٪ في معدلات التحويل.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "العقارات الفاخرة",
        logo: "/logos/empirerealestate.webp",
        logoText: "امباير ريل استيت",
        title: "تسويق العقارات الراقية",
        description: "حملات تسويقية راقية تناسب العقارات الفاخرة، مع استهداف دقيق للمستثمرين في السوق القطري وتركيز على القيمة الاستثمارية طويلة المدى.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "النقل الذكي",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "منصة النقل المتطورة",
        description: "تطوير هوية رقمية تركز على الأمان والموثوقية لمنصة النقل، مع حملات توعوية تبني الثقة بين المستخدمين والسائقين.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      }
    ],
    "تحسين محركات البحث": [
      {
        category: "الصحة والأدوية",
        logo: "/logos/alnahdi.webp",
        logoText: "النهدي",
        title: "صيدليات النهدي الرقمية",
        description: "استراتيجية SEO شاملة للمحتوى الطبي الموثوق، مع تحسين تقني يضمن ظهور المعلومات الصحية الدقيقة في نتائج البحث الأولى.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "البحوث الحكومية",
        logo: "/logos/kapsarc.webp",
        logoText: "كابسارك",
        title: "بحوث الطاقة والاستدامة",
        description: "تحسين محركات البحث للمحتوى العلمي والتعليمي، مع التركيز على جعل البحوث المعقدة قابلة للوصول والفهم للجمهور المهتم.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      },
      {
        category: "التعليم والتدريب",
        logo: "/logos/bonyan.webp",
        logoText: "بنيان",
        title: "منصة التعليم التفاعلي",
        description: "استراتيجية محتوى تعليمي محسن لمحركات البحث، يستهدف الطلاب وأولياء الأمور الباحثين عن برامج تعليمية متميزة.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      }
    ],
    "وسائل التواصل الاجتماعي": [
      {
        category: "اللوجستيات والنقل",
        logo: "/logos/abudawood.webp",
        logoText: "أبوداود",
        title: "عملاق اللوجستيات الخليجي",
        description: "استراتيجية محتوى B2B تبني السلطة والخبرة في قطاع اللوجستيات، مع التركيز على القيادة الفكرية والشراكات الاستراتيجية.",
        buttonColor: "Teal",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true"
      },
      {
        category: "الفنون والثقافة",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "الهنوف الحمدان",
        title: "الفنانة والمبدعة السعودية",
        description: "بناء حضور رقمي قوي للفنانة، مع محتوى يبرز الإبداع والثقافة السعودية ويجذب محبي الفن والجماهير المهتمة.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      },
      {
        category: "الصحة النفسية",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "منصة الصحة النفسية",
        description: "محتوى حساس ومدروس يكسر حاجز الخوف من العلاج النفسي، مع التركيز على التوعية وإزالة الوصمة المجتمعية.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      }
    ]
  };

  const serviceTypes = ["الكل", "التسويق الرقمي", "تحسين محركات البحث", "وسائل التواصل الاجتماعي"];

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
    if (activeTab === "الكل") {
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
              <span className={styles.flechaRatingText + " arabic-body"}>نتائج قابلة للقياس</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText + " arabic-body"}>{getTotalProjectCount()}+ مشروع ناجح</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
              {activeTab === "الكل" ? "تسويق رقمي يوقف التخمين ويحقق النمو" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12 arabic-body"}>
              {activeTab === "الكل" 
                ? "مجموعة شاملة من مشاريع التسويق الرقمي التي حولت الشركات من حالة التخمين إلى نمو قابل للقياس. كل مشروع يجعل العميل المناسب يقول 'أخيراً وجدت من يفهم مشكلتي' ويتحول فوراً."
                : `مشاريع ${activeTab} التي حولت الرسائل المشتتة إلى استراتيجيات واضحة، مما جعل العملاء المحتملين متحمسين للتحويل بدلاً من التردد.`
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
                      aria-label="مرر التبويبات لليسار"
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
                        } arabic-body`}
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
                      aria-label="مرر التبويبات لليمين"
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
              {activeTab === "الكل" && (
                <div className="mt-16 mb-16">
                  <h2 className={styles.categoryHeading + " arabic-heading"}>{categoryName}</h2>
                  <div className={styles.categoryDivider}></div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {projects.map((project, index) => (
                  <div key={`${categoryName}-${index}`} className={`${styles.portfolioCard} group`}>
                    <div className={`${styles.portfolioHeader} bg-gradient-to-br ${getHeaderColorClass(project.buttonColor)}`}>
                      <div className={styles.portfolioHeaderContent}>
                        <div className={styles.portfolioCategory + " arabic-body"}>{project.category}</div>
                        <div className={styles.portfolioCompanyLogo}>
                          {project.logo ? (
                            <img src={project.logo} alt={project.logoText} className={styles.portfolioLogoImg} />
                          ) : (
                            <div className={styles.portfolioLogoText + " arabic-body"}>{project.logoText}</div>
                          )}
                        </div>
                      </div>
                      <div className={styles.portfolioHeaderMain}>
                        <h4 className={styles.portfolioServiceType + " arabic-heading"}>{categoryName}</h4>
                        <p className={styles.portfolioServiceDetail + " arabic-body"}>مشروع {project.category}</p>
                      </div>
                    </div>
                    
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle + " arabic-heading"}>
                        {project.title}
                        <Image
                          src="https://ext.same-assets.com/3287453319/2624132661.svg"
                          alt="سهم"
                          width={18}
                          height={18}
                          className={styles.portfolioArrow}
                          style={{ transform: 'scaleX(-1)' }}
                        />
                      </h3>
                      <p className={styles.portfolioDescription + " arabic-body"}>
                        {project.description}
                      </p>
                      <button 
                        onClick={() => project.link !== "#" ? window.open(project.link, '_blank') : null}
                        className={`${styles.portfolioButton} ${getButtonColorClass(project.buttonColor)} ${project.link === "#" ? "opacity-50 cursor-not-allowed" : ""} arabic-body`}
                        disabled={project.link === "#"}
                      >
                        {project.link !== "#" ? "شاهد العمل كاملاً" : "قريباً"}
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
              <span className={styles.flechaVerificationText + " mr-3 arabic-body"}>جميع المشاريع مثبتة بنتائج قابلة للقياس حولت الزوار المشتتين إلى عملاء ملتزمين</span>
              <Link href="/v/marketing/homepage" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>
                العودة للصفحة الرئيسية ←
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