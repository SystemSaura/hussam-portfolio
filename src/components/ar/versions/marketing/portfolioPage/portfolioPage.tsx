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
  const [activeTab, setActiveTab] = useState(" كل الأعمال ");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // Arabic portfolio data
  const portfolioData = {
    "تسويق المحتوى": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "محتوى المدونة المهنية",
        description: "إنشاء استراتيجية محتوى مدونة جذابة لمنصة شفتات للتوظيف بالذكاء الاصطناعي، مع التركيز على رؤى الصناعة والقيادة الفكرية.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "ثقافي",
        logo: "",
        logoText: "مقالات ثقافية",
        title: "70 مقالة ثقافية تحليلية",
        description: "تطوير محتوى تحليلي واسع يغطي المواضيع الثقافية والاتجاهات والرؤى لجماهير متنوعة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link"
      },
      {
        category: "متنوع",
        logo: "",
        logoText: "متعدد الصناعات",
        title: "7 مقالات متخصصة",
        description: "إنشاء مقالات مستهدفة عبر صناعات متعددة، كل منها مصممة خصيصاً لاحتياجات الجمهور ومتطلبات السوق.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link"
      },
      {
        category: "التعليم",
        logo: "/logos/bonyan.webp",
        logoText: "بنيان",
        title: "محتوى المدونة التعليمية",
        description: "تطوير منشورات مدونة تعليمية جذابة تركز على منهجيات التعلم واستراتيجيات تطوير الطلاب.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing"
      },
      {
        category: "الصحة",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "محتوى الصحة النفسية",
        description: "إنشاء محتوى مدونة شامل للصحة النفسية بالعربية والإنجليزية، مع التركيز على التوعية والعافية.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing"
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/alnahdi.webp",
        logoText: "النهدي",
        title: "استراتيجية النشرة الإخبارية الصحية",
        description: "تصميم وكتابة حملات نشرة إخبارية جذابة تركز على النصائح الصحية وترويج المنتجات لسلسلة الصيدليات الرائدة.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing"
      },
      {
        category: "الصحة",
        logo: "",
        logoText: "نادي الإعادة التأهيل",
        title: "محتوى مدونة الرعاية الصحية",
        description: "إنشاء استراتيجية محتوى مدونة شاملة لخدمات إعادة التأهيل، مع التركيز على تعليم المرضى ورؤى العلاج.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1F4WrSTr40mf6PTW1_xCyAvRMY6Kx04-D?usp=sharing"
      }
    ],
    "التسويق عبر وسائل التواصل الاجتماعي": [
      {
        category: "تقنية الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "منصة التوظيف بالذكاء الاصطناعي",
        description: "إدارة استراتيجية شاملة لوسائل التواصل الاجتماعي عبر منصات لينكد إن وإكس، وبناء القيادة الفكرية في التوظيف بالذكاء الاصطناعي.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link"
      },
      {
        category: "اللوجستيات",
        logo: "/logos/abudawood.webp",
        logoText: "أبوداود",
        title: "استراتيجية اللوجستيات الاجتماعية",
        description: "تطوير استراتيجية محتوى احترافية للينكد إن والصناعة لمقدم الخدمات اللوجستية الرائد في دول الخليج.",
        buttonColor: "Orange",
        link: "https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true"
      },
      {
        category: "التعليم",
        logo: "/logos/downehouse.webp",
        logoText: "داون هاوس",
        title: "مؤسسة تعليمية",
        description: "إنشاء محتوى جذاب لوسائل التواصل الاجتماعي لمؤسسة تعليمية مرموقة، مع التركيز على التميز الأكاديمي وحياة الطلاب.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing"
      },
      {
        category: "الفنون",
        logo: "/logos/jaxdistrict.webp",
        logoText: "جاكس ديسترك",
        title: "منصة الفنون والثقافة",
        description: "تطوير حملات إبداعية لوسائل التواصل الاجتماعي تعرض المواهب الفنية والفعاليات الثقافية في المجتمع المحلي.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing"
      },
      {
        category: "إعادة التدوير",
        logo: "/logos/reviva.webp",
        logoText: "ريفيفا",
        title: "حملة الاستدامة",
        description: "إنشاء محتوى مؤثر لوسائل التواصل الاجتماعي يروج للوعي البيئي وممارسات إعادة التدوير المستدامة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link"
      },
      {
        category: "السياحة",
        logo: "/logos/syahya.webp",
        logoText: "سياحية",
        title: "ترويج السياحة",
        description: "تطوير محتوى جذاب للسفر والسياحة يبرز الوجهات والتجارب الثقافية.",
        buttonColor: "Teal",
        link: "#"
      },
      {
        category: "النقل",
        logo: "/logos/makkahbus.webp",
        logoText: "حافلات مكة",
        title: "حملة النقل العام",
        description: "إنشاء استراتيجية شاملة لوسائل التواصل الاجتماعي لنظام النقل العام في مكة، مع التركيز على إشراك المجتمع والتوعية بالخدمات.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link"
      }
    ],
    "استراتيجية العلامة التجارية": [
      {
        category: "العقارات",
        logo: "/logos/empirerealestate.webp",
        logoText: "امباير ريل استيت",
        title: "علامة العقارات الفاخرة",
        description: "تطوير ملف أعمال تجاري شامل واستراتيجية تموضع لملف أعمال العقارات الفاخرة في قطر.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing"
      },
      {
        category: "اللوجستيات",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "تموضع علامة اللوجستيات",
        description: "إعداد ملف أعمال تجاري شامل واستراتيجية تموضع سوقي للتوسع عبر أسواق دول مجلس التعاون الخليجي.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link"
      },
      {
        category: "الاستشارات",
        logo: "",
        logoText: "المتفرد",
        title: "ملف أعمال العلامة الاستشارية",
        description: "إنشاء هوية علامة تجارية احترافية وتموضع لخدمات الاستشارات الإدارية بالعربية والإنجليزية.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing"
      },
      {
        category: "الفنون",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "الهنوف الحمدان",
        title: "تطوير العلامة الشخصية",
        description: "تطوير استراتيجية علامة تجارية شخصية شاملة لمحترف الفنون، بما في ذلك ملف الأعمال وتموضع السوق.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing"
      },
      {
        category: "العقارات",
        logo: "",
        logoText: "جود ويل",
        title: "هوية العلامة العقارية",
        description: "إنشاء ملف أعمال تجاري وتموضع سوقي لخدمات العقارات في الأسواق العربية والإنجليزية.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1ymhNGtgbzt8yK5iu0Rpq2BnAJMYkbmJ-?usp=drive_link"
      }
    ],
    "الكتابة التقنية": [
      {
        category: "الأمن",
        logo: "",
        logoText: "فيلد بايو",
        title: "دراسة حالة الأمان",
        description: "تطوير دراسة حالة شاملة تعرض حلول الأمان واستراتيجيات التنفيذ لعملاء المؤسسات.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1aAw4aTUWEWpWn7HMs2ryEXenQ5uISfw4?usp=sharing"
      },
      {
        category: "الجوائز",
        logo: "/logos/investmed.webp",
        logoText: "التقدير",
        title: "تقرير خطة التطوير المدني",
        description: "إنشاء تقرير مفصل يؤسس لخطة لتطوير مدينة من العالم النامي.",
        buttonColor: "Orange",
        link: "#"
      },
      {
        category: "البحوث الحكومية",
        logo: "/logos/kapsarc.webp",
        logoText: "كابسارك",
        title: "محتوى بوابة الأبحاث",
        description: "إنشاء استراتيجية محتوى شاملة لمنصة الأبحاث، تحسين إمكانية الوصول لرؤى سياسات الطاقة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing"
      }
    ],
    "التصميم والإبداع": [
      {
        category: "التعليم",
        logo: "/logos/hayatmohamadia.webp",
        logoText: "حياة محمدية",
        title: "مشاريع التصميم التعليمية",
        description: "إنشاء حلول تصميم شاملة تشمل عروض المسابقات والمحتوى المرئي للمبادرات التعليمية.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/1KLbVMaX4Z0jQ1KiDcaKEaszyTjZRHFcu?usp=sharing"
      },
      {
        category: "التجميل",
        logo: "",
        logoText: "ميست",
        title: "تصميم وصف المنتج",
        description: "تطوير أوصاف منتجات مقنعة ومحتوى إبداعي لمنتجات التجميل والعناية بالإنجليزية والعربية.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/12APGejnG0859hhYAujfV5T8aKB0jPKUw?usp=drive_link"
      },
      {
        category: "إعادة التدوير",
        logo: "/logos/reviva.webp",
        logoText: "ريفيفا",
        title: "إنشاء نص الفيديو",
        description: "إنشاء نصوص فيديو جذابة لحملات التوعية البيئية وإعادة التدوير، مع التركيز على رسائل الاستدامة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link"
      }
    ],
    "الترجمة والتحرير": [
      {
        category: "الحكومة",
        logo: "/logos/rcmc.webp",
        logoText: "مجمع الملك عبدالله الطبي",
        title: "تحرير المحتوى الحكومي",
        description: "تقديم خدمات تحرير احترافية للاتصالات الحكومية وتطوير محتوى القطاع العام.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1EJ0ia1IIRMizi8ls4NyobYyZGLD_pPwf?usp=sharing"
      },
      {
        category: "التسويق",
        logo: "/logos/rotana.webp",
        logoText: "روتانا",
        title: "تحرير المحتوى التسويقي",
        description: "تحرير وتنقيح المحتوى التسويقي لشركة الإعلام والترفيه الرائدة، مما يضمن اتساق العلامة التجارية.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1gVWbXCdlC8H8CeUlRTN56hnWzX4Tb-v-?usp=drive_link"
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/ncmh.webp",
        logoText: "المركز الوطني للصحة النفسية",
        title: "تحرير المحتوى الصحي",
        description: "تقديم تحرير متخصص للاتصالات الصحية ومشاريع تطوير المحتوى الطبي.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1emjBrN00Ai-a_E1cOwgE8KA72kYptv0t?usp=sharing"
      },
      {
        category: "التعليم",
        logo: "/logos/maarif.webp",
        logoText: "مدارس معارف",
        title: "المحتوى التعليمي",
        description: "تحرير محتوى تعليمي شامل بالإنجليزية والعربية لتطوير مناهج المدرسة الدولية.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing"
      }
    ]
  };

  const serviceTypes = [" كل الأعمال ", "تسويق المحتوى", "التسويق عبر وسائل التواصل الاجتماعي", "استراتيجية العلامة التجارية", "الكتابة التقنية", "التصميم والإبداع", "الترجمة والتحرير"];

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
    if (activeTab === " كل الأعمال ") {
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
              <span className={styles.flechaRatingText + " arabic-body"}>ملف الأعمال الكامل</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText + " arabic-body"}>{getTotalProjectCount()}+ مشروع مُنجز</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
              {activeTab === " كل الأعمال " ? "عرض ملف  الأعمال الكامل" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12 arabic-body"}>
              {activeTab === " كل الأعمال " 
                ? "مجموعة شاملة من مشاريع التسويق المُنجزة عبر صناعات متنوعة في منطقة الخليج. كل مشروع يمثل تفكيراً استراتيجياً وتنفيذاً إبداعياً ونتائج قابلة للقياس."
                : `استكشف مشاريع ${activeTab} التي حققت نتائج قابلة للقياس لشركات الخليج عبر صناعات مختلفة.`
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
              {activeTab === " كل الأعمال " && (
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
            <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={styles.flechaVerificationText + " mr-3 arabic-body"}>جميع المشاريع موثقة ومُتحقق منها</span>
              <Link href="/" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>
                العودة للرئيسية ←
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