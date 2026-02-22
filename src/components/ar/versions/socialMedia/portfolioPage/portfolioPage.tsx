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

  // Social Media portfolio data in Arabic
  const portfolioData = {
    "تسويق المحتوى": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "محتوى سلطة لينكد إن",
        description: "بنينا محتوى قيادة فكرية وضع شفتات كخبير التوظيف الذكي الأول في السعودية. رؤى يومية يشاركها مديرو الموارد البشرية فعلاً.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/alnahdi.webp",
        logoText: "النهدي",
        title: "نشرة تحقق نتائج",
        description: "حولنا نصائح صحية مملة إلى محتوى نشرة جذاب. معدل فتح ٦٥٪ لأنها تحل مشاكل حقيقية بدلاً من الترويج للمنتجات.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "التعليم",
        logo: "/logos/bonyan.webp",
        logoText: "بنيان",
        title: "محتوى تعليمي يبقى عالقاً",
        description: "أنشأنا محتوى مدونة يريد الأهالي قراءته فعلاً. ركزنا على تحديات تطوير الطلاب وليس تسويق المدرسة.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      },
      {
        category: "الصحة النفسية",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "محتوى صحة نفسية يحدث فرقاً",
        description: "محتوى صحة نفسية بالعربية والإنجليزية يساعد الناس فعلاً بدلاً من الترويج للخدمات. قصص حقيقية، حلول حقيقية.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      }
    ],
    "تسويق وسائل التواصل الاجتماعي": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "تواصل اجتماعي للشركات يحقق النتائج",
        description: "نمونا من ٠ إلى ١٢ ألف متابع يهتمون بالتوظيف الذكي. بنينا سلطة على لينكد إن وإكس بمحتوى يشاركه قادة الموارد البشرية وليس يتجاهلونه.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "اللوجستيات",
        logo: "/logos/abudawood.webp",
        logoText: "أبوداود",
        title: "تموضع سلطة الصناعة",
        description: "وضعنا رائد الخدمات اللوجستية في الخليج كصوت الابتكار في سلسلة التوريد. استراتيجية لينكد إن تبني الثقة قبل البيع.",
        buttonColor: "Orange",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true"
      },
      {
        category: "التعليم",
        logo: "/logos/downehouse.webp",
        logoText: "داون هاوس",
        title: "استراتيجية اجتماعية للقبولات",
        description: "محتوى اجتماعي يُظهر تميز المدرسة دون مفاخرة. الأهالي يشاركونه لأنه يحل مخاوفهم التعليمية.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing"
      },
      {
        category: "الفنون",
        logo: "/logos/jaxdistrict.webp",
        logoText: "جاكس ديستريكت",
        title: "محتوى يجمع المجتمع الفني",
        description: "بنينا مجتمع فنون متفاعل من خلال وسائل التواصل. محتوى يحتفي بالمواهب المحلية ويقود حضور الفعاليات.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing"
      },
      {
        category: "البيئة",
        logo: "/logos/reviva.webp",
        logoText: "ريفيفا",
        title: "تفاعل موجه بالقضايا",
        description: "محتوى بيئي يحفز على العمل وليس الوعي فقط. استراتيجية اجتماعية تحول المتابعين إلى دعاة إعادة تدوير.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link"
      },
      {
        category: "النقل",
        logo: "/logos/makkahbus.webp",
        logoText: "باص مكة",
        title: "تواصل الخدمة العامة",
        description: "جعلنا وسائل التواصل للنقل العام مفيدة فعلاً. تحديثات خدمة وتفاعل مجتمعي يخدم السكان.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link"
      }
    ],
    "استراتيجية العلامة التجارية": [
      {
        category: "العقارات",
        logo: "/logos/empirerealestate.webp",
        logoText: "امباير العقارية",
        title: "تموضع العلامة المتميزة",
        description: "وضعنا عقارات قطر الفاخرة لمشترين أثرياء. استراتيجية علامة تجذب مستثمرين جديين وليس متصفحين.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "اللوجستيات",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "استراتيجية التوسع الإقليمي",
        description: "تموضع علامة تجارية للتوسع اللوجستي في الخليج. استراتيجية تبني الثقة عبر الأسواق قبل عرض الخدمات.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "الفنون",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "الهنوف الحمدان",
        title: "تطوير العلامة الشخصية",
        description: "استراتيجية علامة شخصية لمحترفة فنون. تموضع محفظة أعمال يجذب هواة جمع جديين وفرصاً.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      }
    ]
  };

  const serviceTypes = ["الكل", "تسويق وسائل التواصل الاجتماعي", "تسويق المحتوى", "استراتيجية العلامة التجارية"];

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
    <div className="min-h-screen bg-white" dir="rtl">
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
              <span className={styles.flechaRatingText + " arabic-body"}>متخصص وسائل التواصل الاجتماعي</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText + " arabic-body"}>{getTotalProjectCount()} حملة عالية التأثير</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
              {activeTab === "الكل" ? "وسائل تواصل اجتماعي تحرك الأعمال" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12 arabic-body"}>
              {activeTab === "الكل" 
                ? "توقف عن النشر في الفراغ. هذه الحملات حققت متابعين حقيقيين، تفاعلاً حقيقياً، وعملاء حقيقيين لشركات خليجية. بلا مقاييس وهمية—فقط نتائج مهمة لأرباحك."
                : `استكشف مشاريع ${activeTab} التي حولت وسائل التواصل من ضوضاء إلى قناة توليد عملاء فعالة.`
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
                        <h4 className={styles.portfolioServiceType + " arabic-heading"}>مشروع {project.category}</h4>
                        <p className={styles.portfolioServiceDetail + " arabic-body"}>{categoryName}</p>
                      </div>
                    </div>
                    
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle + " arabic-heading"}>
                        {project.title}
                        <Image
                          src="/arrow-right.svg"
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
                        {project.link !== "#" ? "شاهد العمل" : "قريباً"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Portfolio Summary */}
          <div className={`text-center border-t border-gray-200 ${styles.portfolioSummary}`}>
            <div className="space-y-4">
              {/* Verification Badge */}
              <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 border border-green-200">
                <svg className="w-5 h-5 text-green-500 ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={styles.flechaVerificationText + " arabic-body"}>جميع الحملات موثقة ومُتحقق منها</span>
              </div>
              
              {/* Back Link */}
              <div>
                <Link href="/v/social-media/homepage" className={styles.flechaViewAllText + " inline-flex items-center hover:text-blue-800 transition-colors arabic-body text-blue-600"}>
                  العودة إلى الرئيسية
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="white" />
    </div>
  );
}