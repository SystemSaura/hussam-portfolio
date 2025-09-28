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

  // SEO-focused portfolio data in Arabic
  const portfolioData = {
    "استراتيجية المحتوى المحسّن": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "مركز محتوى التوظيف الذكي",
        description: "طورنا استراتيجية محتوى شاملة لمحركات البحث تستهدف كلمات صناعة التوظيف المفتاحية، مما أدى إلى ١٥+ ترتيب في الصفحة الأولى ونمو ٢٠٠٪ في الزيارات العضوية من خلال البحث الاستراتيجي للكلمات وتحسين المحتوى.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "البحوث الحكومية",
        logo: "/logos/kapsarc.webp",
        logoText: "كابسارك",
        title: "مركز محتوى سياسات الطاقة المحسّن",
        description: "حسّنا محتوى بوابة الأبحاث لكلمات سياسات الطاقة المفتاحية، مما حسّن الظهور في البحث وإمكانية الوصول للرؤى لأصحاب المصلحة في السياسات من خلال إنشاء محتوى استراتيجي محسّن.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      },
      {
        category: "المحتوى الثقافي",
        logo: "",
        logoText: "المحتوى الثقافي المحسّن",
        title: "٧٠ مقال ثقافي محسّن لمحركات البحث",
        description: "طورنا محتوى شامل لمحركات البحث يغطي المواضيع الثقافية مع بحث مستهدف للكلمات المفتاحية وهيكلة محسّنة وتنسيق ملائم للبحث لتحقيق أقصى ظهور ووصول عضوي.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link"
      },
      {
        category: "التعليم",
        logo: "/logos/bonyan.webp",
        logoText: "بنيان",
        title: "استراتيجية مدونة تعليمية محسّنة",
        description: "أنشأنا محتوى تعليمي محسّن لمحركات البحث يستهدف كلمات منهجيات التعلم المفتاحية، مما حسّن الظهور في البحث للموارد التعليمية ومحتوى تطوير الطلاب.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      },
      {
        category: "الصحة النفسية",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "مركز محتوى الصحة النفسية المحسّن",
        description: "طورنا استراتيجية محتوى ثنائية اللغة لمحركات البحث لمواضيع الصحة النفسية، تستهدف كلمات العافية والصحة النفسية المفتاحية بالعربية والإنجليزية لتحقيق أقصى وصول بحثي.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "صناعات متنوعة",
        logo: "",
        logoText: "متعدد الصناعات",
        title: "محتوى محسّن متخصص بالصناعة",
        description: "أنشأنا مقالات مستهدفة لمحركات البحث عبر صناعات متعددة، كل منها محسّن لكلمات مفتاحية متخصصة وسلوكيات بحث فريدة لقطاعات سوقية مختلفة.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link"
      }
    ],
    "تحسين المواقع ومحتواها": [
      {
        category: "البحوث الحكومية",
        logo: "/logos/kapsarc.webp",
        logoText: "كابسارك",
        title: "تحسين بوابة الأبحاث لمحركات البحث",
        description: "استراتيجية محتوى موقع شاملة مع تحسين لمحركات البحث لمنصة الأبحاث، تحسن ظهور محرك البحث وإمكانية وصول المستخدم لرؤى سياسات الطاقة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/alnahdi.webp",
        logoText: "النهدي",
        title: "تحسين محتوى الرعاية الصحية",
        description: "حسّنا النشرة ومحتوى الموقع لكلمات الرعاية الصحية المفتاحية، مما حسّن ظهور البحث لخدمات الصيدلية واستعلامات البحث المتعلقة بالصحة.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "التعليم",
        logo: "/logos/maarif.webp",
        logoText: "مدارس معارف",
        title: "محتوى موقع تعليمي محسّن",
        description: "حسّنا محتوى الموقع التعليمي بالإنجليزية والعربية لتحسين محركات البحث للمدارس الدولية، يستهدف استعلامات بحث الآباء والطلاب.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing"
      }
    ],
    "بحث الكلمات المفتاحية والتخطيط": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "استراتيجية كلمات صناعة التوظيف",
        description: "بحث شامل للكلمات المفتاحية وتخطيط المحتوى لمنصة التوظيف الذكي، تحدد مصطلحات البحث عالية القيمة وفرص المحتوى للنمو العضوي.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "اللوجستيات",
        logo: "/logos/abudawood.webp",
        logoText: "أبوداود",
        title: "استراتيجية محركات البحث للشركات",
        description: "طورنا بحث الكلمات المفتاحية واستراتيجية محتوى محركات البحث لصناعة اللوجستيات، تستهدف مصطلحات البحث بين الشركات وكلمات سلسلة التوريد المفتاحية لتحسين الظهور.",
        buttonColor: "Orange",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true"
      },
      {
        category: "العقارات",
        logo: "/logos/empirerealestate.webp",
        logoText: "امباير العقارية",
        title: "محتوى العقارات الفاخرة المحسّن",
        description: "محتوى علامة محسّن لمحركات البحث واستراتيجية كلمات مفتاحية لسوق العقارات الفاخرة في قطر، تستهدف مصطلحات البحث للعقارات عالية القيمة.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      }
    ],
    "كتابة وتحسين محتوى محركات البحث": [
      {
        category: "الأمن",
        logo: "",
        logoText: "فيلد بايو",
        title: "دراسة حالة حلول الأمان المحسّنة",
        description: "محتوى دراسة حالة محسّن لمحركات البحث يستهدف كلمات أمان المؤسسات المفتاحية ويعرض الحلول لتحسين ظهور البحث في سوق الأمان بين الشركات.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1aAw4aTUWEWpWn7HMs2ryEXenQ5uISfw4?usp=sharing"
      },
      {
        category: "الحكومة",
        logo: "/logos/rcmc.webp",
        logoText: "مجمع الملك عبدالله الطبي",
        title: "تحسين المحتوى الحكومي لمحركات البحث",
        description: "حسّنا محتوى التواصل الحكومي لمحركات البحث، مما حسّن إمكانية الوصول العام وظهور البحث للمعلومات المهمة.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1EJ0ia1IIRMizi8ls4NyobYyZGLD_pPwf?usp=sharing"
      },
      {
        category: "الإعلام والترفيه",
        logo: "/logos/rotana.webp",
        logoText: "روتانا",
        title: "تحسين محتوى الترفيه لمحركات البحث",
        description: "محتوى تسويقي محسّن لمحركات البحث لشركة الإعلام الرائدة، يركز على كلمات صناعة الترفيه المفتاحية وتحسين ظهور العلامة التجارية.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1gVWbXCdlC8H8CeUlRTN56hnWzX4Tb-v-?usp=drive_link"
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/ncmh.webp",
        logoText: "المركز الوطني للصحة النفسية",
        title: "تحسين محتوى الرعاية الصحية",
        description: "تحسين متخصص لمحركات البحث لتواصل الرعاية الصحية، يستهدف مصطلحات البحث الطبية والمركزة على المرضى لتحسين الظهور الإلكتروني.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1emjBrN00Ai-a_E1cOwgE8KA72kYptv0t?usp=sharing"
      }
    ],
    "تحسين البحث المحلي والمحتوى الإقليمي": [
      {
        category: "اللوجستيات",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "استراتيجية محركات البحث لأسواق الخليج",
        description: "استراتيجية محتوى شاملة لمحركات البحث للتوسع عبر أسواق دول مجلس التعاون الخليجي، تستهدف كلمات اللوجستيات الإقليمية المفتاحية وتحسين البحث المحلي.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "النقل",
        logo: "/logos/makkahbus.webp",
        logoText: "باص مكة",
        title: "حملة محركات البحث للنقل المحلي",
        description: "استراتيجية محتوى محلية لمحركات البحث لنقل مكة العام، محسّنة لاستعلامات البحث المحلية والكلمات المفتاحية المركزة على المجتمع.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link"
      },
      {
        category: "السياحة",
        logo: "/logos/syahya.webp",
        logoText: "سياحية",
        title: "محتوى وجهات السياحة المحسّن",
        description: "محتوى سفر وسياحة محسّن لمحركات البحث يستهدف كلمات مفتاحية خاصة بالوجهات وسلوكيات بحث السفر لتحسين الظهور.",
        buttonColor: "Teal",
        link: "#"
      }
    ],
    "تحسين محركات البحث متعدد اللغات": [
      {
        category: "الصحة",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "محركات البحث ثنائية اللغة للصحة النفسية",
        description: "طورنا استراتيجية ثنائية اللغة لمحركات البحث لمحتوى الصحة النفسية، محسّنة لمصطلحات البحث العربية والإنجليزية لتحقيق أقصى وصول إقليمي.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "التعليم",
        logo: "/logos/maarif.webp",
        logoText: "مدارس معارف",
        title: "محركات البحث التعليمية متعددة اللغات",
        description: "تحسين محتوى ثنائي اللغة لمحركات البحث للمدرسة الدولية يستهدف مصطلحات البحث التعليمية واستعلامات الآباء بالعربية والإنجليزية.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing"
      },
      {
        category: "الاستشارات",
        logo: "",
        logoText: "المتفرد",
        title: "محتوى الأعمال ثنائي اللغة المحسّن",
        description: "محتوى علامة محسّن لمحركات البحث بالعربية والإنجليزية للاستشارات الإدارية، يستهدف مصطلحات البحث التجارية ثنائية اللغة.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing"
      }
    ]
  };

  // Updated service types for SEO focus in Arabic
  const serviceTypes = ["الكل", "استراتيجية المحتوى المحسّن", "تحسين المواقع ومحتواها", "بحث الكلمات المفتاحية والتخطيط", "كتابة وتحسين محتوى محركات البحث", "تحسين البحث المحلي والمحتوى الإقليمي", "تحسين محركات البحث متعدد اللغات"];

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
              <span className={styles.flechaRatingText + " arabic-body"}>ملف أعمال محركات البحث الكامل</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText + " arabic-body"}>{getTotalProjectCount()}+ مشروع محسّن</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
              {activeTab === "الكل" ? "عرض ملف أعمال محركات البحث الكامل" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12 arabic-body"}>
              {activeTab === "الكل" 
                ? "مجموعة شاملة من مشاريع تحسين محركات البحث التي حققت ظهوراً في البحث ونمواً في الزيارات العضوية لشركات خليجية. كل مشروع يمثل بحثاً استراتيجياً للكلمات المفتاحية وتحسين المحتوى ونتائج بحث قابلة للقياس."
                : `استكشف مشاريع ${activeTab.toLowerCase()} التي حققت نتائج قابلة للقياس في محركات البحث لشركات خليجية عبر صناعات مختلفة.`
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
                        <p className={styles.portfolioServiceDetail + " arabic-body"}>مشروع {project.category} محسّن</p>
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
                <span className={styles.flechaVerificationText + " arabic-body"}>جميع مشاريع محركات البحث موثقة ومُتحقق منها</span>
              </div>
              
              {/* Back Link */}
              <div>
                <Link href="/v/seo/homepage" className={styles.flechaViewAllText + " inline-flex items-center hover:text-blue-800 transition-colors arabic-body text-blue-600"}>
                  العودة لصفحة تحسين محركات البحث
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