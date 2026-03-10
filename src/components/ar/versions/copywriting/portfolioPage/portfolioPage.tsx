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
  const [activeTab, setActiveTab] = useState("جميع الأعمال");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // بيانات المحفظة للكتابة التسويقية باللغة العربية
  const portfolioData = {
    "نصوص صفحات رئيسية": [
      {
        category: "تكنولوجيا الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "صفحة رئيسية تجذب الانتباه وتحقق المبيعات",
        description: "حولنا المصطلحات التقنية المعقدة إلى عناوين تجعل مدراء الموارد البشرية يفكرون 'أخيراً، شخص يفهم معاناة التوظيف'. النتيجة: معدل استجابة أكثر من 60% من الزوار الذين فهموا القيمة فعلاً.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://shiftat.sa" }]
      },
      {
        category: "البحوث الحكومية",
        logo: "/logos/kapsarc.webp",
        logoText: "كابسارك",
        title: "بوابة أبحاث مفهومة ومؤثرة",
        description: "حولنا بحوث سياسات الطاقة المعقدة إلى رؤى واضحة وقابلة للتنفيذ. نصوص تحول التعقيد التقني إلى قيمة مقنعة لصناع القرار الذين يحتاجون حلولاً، ليس أوراقاً أكاديمية.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.kapsarc.org/" }]
      },
      {
        category: "العقارات",
        logo: "/logos/empirerealestate.webp",
        logoText: "امباير العقارية",
        title: "نصوص عقارات فاخرة تبيع الأحلام",
        description: "نصوص مبيعات تموضع العقارات الفاخرة كترقيات حياة حصرية، وليس مجرد عقارات. كتابة تجعل المشترين الراقين في قطر يشعرون بأنهم يفوتون فرصة العمر إن لم يتصرفوا الآن.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.empirerealestate.qa/" }]
      },
      {
        category: "اللوجستيات",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "نصوص B2B تخترق الضوضاء",
        description: "رسائل تجعل سائق الخيار الواضح لشركات اللوجستيات في الخليج. كتابة تميز في سوق تنافسي بالتركيز على ما يقلق مدراء سلسلة التوريد ليلاً.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://saeq.com/" }]
      }
    ],
    "رسائل بريد إلكتروني فعالة": [
      {
        category: "تكنولوجيا الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "سلاسل رسائل يقرأها الناس فعلاً",
        description: "عناوين رسائل تنجو من مذبحة صندوق الوارد ونصوص تبني علاقات بدلاً من إلغاء الاشتراك. سلاسل توجه العملاء المحتملين من الفضول إلى الشراء.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://shiftat.sa" }]
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/alnahdi.webp",
        logoText: "النهدي",
        title: "نشرة إخبارية تجلب الزوار للصيدليات",
        description: "حملات بريد إلكتروني تحول النصائح الصحية إلى إجراءات العملاء. كتابة تبني الثقة وتقود زيارات الصيدليات ومبيعات المنتجات لأكبر سلسلة صيدليات سعودية بذكاء.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://nahdi.sa/" }]
      },
      {
        category: "التعليم",
        logo: "/logos/bonyan.webp",
        logoText: "بنيان",
        title: "رسائل تعليمية تجلب الطلاب",
        description: "سلاسل بريد إلكتروني تحول منهجيات التعلم إلى تجارب تعليمية لا غنى عنها. كتابة تجعل الأهالي يشعرون بأنهم يفشلون أطفالهم إن لم يسجلوا.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing",
        externalLinks: []
      }
    ],
    "نصوص مبيعات تتم الصفقات": [
      {
        category: "العقارات",
        logo: "/logos/empirerealestate.webp",
        logoText: "امباير العقارية",
        title: "صفحات عقارات تخلق الحاجة الملحة",
        description: "نصوص مبيعات تموضع العقارات الفاخرة كاستثمارات العمر. كتابة تتعامل مع كل اعتراض وتجعل المشترين الراقين في قطر يشعرون بالحاجة الملحة دون يأس.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.empirerealestate.qa/" }]
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "نصوص صحة نفسية تبني الثقة",
        description: "نصوص مبيعات حساسة تجعل طلب المساعدة النفسية يبدو آمناً وضرورياً. كتابة تتعامل مع الوصمة الاجتماعية وتخلق حاجة ملحة للحصول على المساعدة قبل تفاقم الأمور.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.mindtales.me/" }]
      },
      {
        category: "التعليم",
        logo: "/logos/hayatmohamadia.webp",
        logoText: "حياة محمدية",
        title: "نصوص برامج تعليمية للتسجيل",
        description: "نصوص مبيعات تحول ميزات التعليم إلى مزايا مطلوبة لمستقبل الطلاب. كتابة تجعل الأهالي يشعرون بأن عدم التسجيل يعني حرمان أطفالهم من التفوق التنافسي.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1KLbVMaX4Z0jQ1KiDcaKEaszyTjZRHFcu?usp=sharing",
        externalLinks: []
      }
    ],
    "رسائل العلامة التجارية": [
      {
        category: "اللوجستيات",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "نصوص تموضع تهيمن على الأسواق",
        description: "رسائل علامة تجارية تؤسس سائق كالخيار المنطقي الوحيد لشركات اللوجستيات في الخليج. كتابة تخلق قيادة سوقية من خلال امتلاك محادثة الفئة.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://saeq.com/" }]
      },
      {
        category: "الفنون",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "الهنوف الحمدان",
        title: "علامة شخصية تجذب الفرص",
        description: "رسائل علامة شخصية تموضع المحترفة الفنية كالخبيرة المرجعية. كتابة تبني السلطة وتجذب الفرص المميزة من خلال امتلاك تخصص محدد.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing",
        externalLinks: []
      },
      {
        category: "الاستشارات",
        logo: "",
        logoText: "المتفرد",
        title: "صوت علامة استشارية يبني المصداقية",
        description: "رسائل علامة مهنية تؤسس خبرة لا تُشكك فيها. كتابة تبني المصداقية وتموضع السلطة في الأسواق العربية والإنجليزية.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing",
        externalLinks: []
      }
    ],
    "محتوى تسويقي مؤثر": [
      {
        category: "ثقافي",
        logo: "",
        logoText: "رؤى ثقافية",
        title: "70 مقالة تبني القيادة الفكرية",
        description: "محتوى كتابي يموضع الخبرة وفي نفس الوقت يشرك جماهير متنوعة. كتابة تبني السلطة من خلال القصص وتجعل القراء يعودون لمزيد من الرؤى.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link",
        externalLinks: []
      },
      {
        category: "الصحة",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "محتوى صحة نفسية يزيل الوصمة",
        description: "محتوى تعليمي يبني الثقة ويشجع على اتخاذ إجراء. كتابة تجعل محادثات الصحة النفسية طبيعية وطلب المساعدة ضرورياً، وليس مخزياً.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.mindtales.me/" }]
      },
      {
        category: "صناعات متنوعة",
        logo: "",
        logoText: "متعدد الصناعات",
        title: "كتابة متخصصة بالصناعة تلامس القلوب",
        description: "محتوى مستهدف مخصص لنقاط ألم جماهير محددة. كل قطعة مصنوعة لتجعل المشتري المستهدف يفكر 'هذا الشخص يفهم صناعتي حقاً.'",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link",
        externalLinks: []
      },
      {
        category: "الصحة",
        logo: "",
        logoText: "نادي إعادة التأهيل",
        title: "محتوى رعاية صحية يبني السلطة",
        description: "محتوى تعليمي يموضع خبرة إعادة التأهيل ويبني الثقة. كتابة تجعل المرضى واثقين في اختيار المسار العلاجي الصحيح.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1F4WrSTr40mf6PTW1_xCyAvRMY6Kx04-D?usp=sharing",
        externalLinks: []
      }
    ]
  };

  const serviceTypes = ["جميع الأعمال", "نصوص صفحات رئيسية", "رسائل بريد إلكتروني فعالة", "نصوص مبيعات تتم الصفقات", "رسائل العلامة التجارية", "محتوى تسويقي مؤثر"];

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
    if (activeTab === "جميع الأعمال") {
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
              <span className={styles.flechaRatingText + " arabic-body"}>كتابة نصوص تسويقية تحقق النتائج</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className={styles.flechaProjectsText + " arabic-body"}>{getTotalProjectCount()}+ مشروع ناجح</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
              {activeTab === "جميع الأعمال" ? "نصوص تسويقية تحقق المبيعات" : activeTab}
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12 arabic-body"}>
              {activeTab === "جميع الأعمال" 
                ? "مجموعة شاملة من النصوص التسويقية التي تحول الزوار المترددين إلى عملاء. كل نص يجعل العميل المناسب يفكر 'أخيراً، شخص يفهم مشكلتي'  ثم يتخذ إجراءً فورياً."
                : `مشاريع ${activeTab} التي حولت الرسائل من المربكة إلى الواضحة تماماً، مما جعل العملاء المحتملين متحمسين للشراء بدلاً من الخروج السريع.`
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
              {activeTab === "جميع الأعمال" && (
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
                      <div className={styles.portfolioButtons}>
                        <button
                          onClick={() => project.link !== "#" ? window.open(project.link, '_blank') : null}
                          className={`${styles.portfolioButton} ${styles.portfolioButtonOutline} ${project.link === "#" ? "opacity-50 cursor-not-allowed" : ""} arabic-body`}
                          disabled={project.link === "#"}
                        >
                          {project.link !== "#" ? "نماذج (داخلي)" : "قريباً"}
                        </button>
                        {project.externalLinks.map((extLink, i) => (
                          <button
                            key={i}
                            onClick={() => window.open(extLink.url, '_blank')}
                            className={`${styles.portfolioButton} ${styles.portfolioIconBtn} ${getButtonColorClass(project.buttonColor)} arabic-body`}
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

          {/* Portfolio Summary */}
        <div className={`text-center border-t border-gray-200 ${styles.portfolioSummary}`}>
          <div className="space-y-4">
            {/* Verification Badge */}
            <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 border border-green-200">
              <svg className="w-5 h-5 text-green-500 ml-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={styles.flechaVerificationText + " arabic-body"}>جميع النصوص مُثبتة ومجربة</span>
            </div>
            
            {/* Back Link */}
            <div>
              <Link href="/copywriting" className={styles.flechaViewAllText + " inline-flex items-center hover:text-blue-800 transition-colors arabic-body text-blue-600"}>
                العودة لصفحة الكتابة التسويقية
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