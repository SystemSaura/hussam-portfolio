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
        category: "الموارد البشرية",
        logo: "/logos/shiftat.webp",
        logoText: "شفتات",
        title: "محتوى مدونة منصة التوظيف",
        description: "إنشاء استراتيجية محتوى مدونة جذابة لمنصة شفتات للتوظيف بالذكاء الاصطناعي، مع التركيز على رؤى الصناعة والقيادة الفكرية.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://shiftat.sa" }]
      },
      {
        category: "ثقافي",
        logo: "",
        logoText: "مقالات ثقافية",
        title: "70 مقالة ثقافية تحليلية",
        description: "تطوير محتوى تحليلي واسع يغطي المواضيع الثقافية والاتجاهات والرؤى لجماهير متنوعة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1M6bb2AZxHQPHzsk19LUMj1mo3PAMz-YP?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "قطاعات متنوعة",
        logo: "",
        logoText: "متعدد الصناعات",
        title: "7 مقالات متخصصة",
        description: "إنشاء مقالات مستهدفة عبر صناعات متعددة، كل منها مصممة خصيصاً لاحتياجات الجمهور ومتطلبات السوق.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "التعليم",
        logo: "/logos/bonyan.webp",
        logoText: "بنيان",
        title: "محتوى المدونة التعليمية",
        description: "تطوير منشورات مدونة تعليمية جذابة تركز على منهجيات التعلم واستراتيجيات تطوير الطلاب.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الصحة",
        logo: "/logos/mindtales.webp",
        logoText: "مايند تيلز",
        title: "محتوى الصحة النفسية",
        description: "إنشاء محتوى مدونة شامل للصحة النفسية بالعربية والإنجليزية، مع التركيز على التوعية والعافية.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.mindtales.me/" }]
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/alnahdi.webp",
        logoText: "النهدي",
        title: "استراتيجية النشرة الإخبارية ",
        description: "تصميم وكتابة حملات نشرة إخبارية جذابة تركز على النصائح الصحية وترويج المنتجات لسلسلة الصيدليات الرائدة.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://nahdi.sa/" }]
      },
      {
        category: "العقارات",
        logo: "/logos/akkar.webp",
        logoText: "عقار",
        title: "محتوى تطبيق وموقع العقارات",
        description: "صياغة محتوى شامل لتطبيق وموقع منصة عقارية، مع ضمان تجربة مستخدم واضحة ورسائل مقنعة.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/u/3/folders/1zqgUfZjCYgVbONE2JT667Kesry_5f-mq",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الألعاب",
        logo: "/logos/ldplayer.webp",
        logoText: "إل دي بلاير",
        title: "مقالات مدونة منصة الألعاب",
        description: "تطوير محتوى مدونة جذاب لمنصة ألعاب، مع التركيز على أدلة اللاعبين وأخبار الصناعة والتفاعل المجتمعي.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/1GM-v7MLUpMRjCfCvZTtB8F8f6OeqwmpH?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "المالية",
        logo: "/logos/haseef.webp",
        logoText: "حصيف",
        title: "محتوى موقع الخدمات المالية",
        description: "إنشاء محتوى موقع احترافي لشركة خدمات مالية، مع التركيز على الثقة والخبرة والحلول المتمحورة حول العميل.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1dtc3yLs7EsB2615iCQ28cBjivReCQbhk?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الأغذية والمشروبات",
        logo: "",
        logoText: "مكسيكا",
        title: "محتوى موقع لمطعم (عربي وإنجليزي)",
        description: "تطوير محتوى موقع ثنائي اللغة لسلسلة مطاعم، يلتقط جوهر العلامة التجارية وعروض القائمة بالعربية والإنجليزية.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1FSeZ9W5VnNB3az-50URptVguvtthz1Ok?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الصحة",
        logo: "",
        logoText: "نادي الإعادة التأهيل",
        title: "محتوى مدونة الرعاية الصحية",
        description: "إنشاء استراتيجية محتوى مدونة شاملة لخدمات إعادة التأهيل، مع التركيز على تعليم المرضى ورؤى العلاج.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1F4WrSTr40mf6PTW1_xCyAvRMY6Kx04-D?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
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
        link: "https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.empirerealestate.qa/" }]
      },
      {
        category: "اللوجستيات",
        logo: "/logos/saeq.webp",
        logoText: "سائق",
        title: "تموضع علامة اللوجستيات",
        description: "إعداد ملف أعمال تجاري شامل واستراتيجية تموضع سوقي للتوسع عبر أسواق دول مجلس التعاون الخليجي.",
        buttonColor: "Purple",
        link: "https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://saeq.com/" }]
      },
      {
        category: "الاستشارات",
        logo: "",
        logoText: "المتفرد",
        title: "ملف أعمال العلامة الاستشارية",
        description: "إنشاء هوية علامة تجارية احترافية وتموضع لخدمات الاستشارات الإدارية بالعربية والإنجليزية.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1eHA2pjJ7IaJ8AzY0jrUqfmDuh0z_7vfA?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الفنون",
        logo: "/logos/alhanoufalhamdan.webp",
        logoText: "الهنوف الحمدان",
        title: "تطوير العلامة الشخصية",
        description: "تطوير استراتيجية علامة تجارية شخصية شاملة لمحترف الفنون، بما في ذلك ملف الأعمال وتموضع السوق.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/1ynfAswNhb7MctrCkBZJYmNjCMOdIJU8X?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "العقارات",
        logo: "",
        logoText: "جود ويل",
        title: "هوية العلامة العقارية",
        description: "إنشاء ملف أعمال تجاري وتموضع سوقي لخدمات العقارات في الأسواق العربية والإنجليزية.",
        buttonColor: "Orange",
        link: "https://drive.google.com/drive/folders/1ymhNGtgbzt8yK5iu0Rpq2BnAJMYkbmJ-?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "قطاعات متنوعة",
        logo: "",
        logoText: "متعدد الصناعات",
        title: "7 ملفات أعمال شركات",
        description: "إنشاء ملفات أعمال تجارية شاملة لشركات عبر صناعات مختلفة، تؤسس تموضع السوق الاحترافي والهوية.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1IR3u27P6q867EFrF2_KEkxsuys08jahX?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
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
        link: "https://drive.google.com/drive/folders/1aAw4aTUWEWpWn7HMs2ryEXenQ5uISfw4?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الجوائز",
        logo: "/logos/investmed.webp",
        logoText: "التقدير",
        title: "تقرير التقدير الصناعي",
        description: "إنشاء تقرير مفصل يوثق الإنجازات والتقدير الصناعي لتطوير ملف الأعمال المهني.",
        buttonColor: "Orange",
        link: "https://drive.google.com/file/d/1qETT2GSKrcUwk42hCvwKEqgfmfDtG7OJ/view?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "البحوث الحكومية",
        logo: "/logos/kapsarc.webp",
        logoText: "كابسارك",
        title: "محتوى بوابة الأبحاث",
        description: "إنشاء استراتيجية محتوى شاملة لمنصة الأبحاث، تحسين إمكانية الوصول لرؤى سياسات الطاقة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing",
        externalLinks: [{ label: "الموقع", url: "https://www.kapsarc.org/" }]
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
        link: "https://drive.google.com/drive/folders/1KLbVMaX4Z0jQ1KiDcaKEaszyTjZRHFcu?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "التجميل",
        logo: "",
        logoText: "ميست",
        title: "تصميم وصف المنتج",
        description: "تطوير أوصاف منتجات مقنعة ومحتوى إبداعي لمنتجات التجميل والعناية بالإنجليزية والعربية.",
        buttonColor: "Pink",
        link: "https://drive.google.com/drive/folders/12APGejnG0859hhYAujfV5T8aKB0jPKUw?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "إعادة التدوير",
        logo: "/logos/reviva.webp",
        logoText: "ريفيفا",
        title: "إنشاء نص الفيديو",
        description: "إنشاء نصوص فيديو جذابة لحملات التوعية البيئية وإعادة التدوير، مع التركيز على رسائل الاستدامة.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link",
        externalLinks: [{ label: "الموقع", url: "https://reviva.sa/" }]
      }
    ],
    "الترجمة والتحرير": [
      {
        category: "حكومي",
        logo: "/logos/rcmc.webp",
        logoText: "مجمع الملك عبدالله الطبي",
        title: "تحرير المحتوى الحكومي",
        description: "تقديم خدمات تحرير احترافية للاتصالات الحكومية وتطوير محتوى القطاع العام.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1EJ0ia1IIRMizi8ls4NyobYyZGLD_pPwf?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "التسويق",
        logo: "/logos/rotana.webp",
        logoText: "روتانا",
        title: "تحرير المحتوى التسويقي",
        description: "تحرير وتنقيح المحتوى التسويقي لشركة الإعلام والترفيه الرائدة، مما يضمن اتساق العلامة التجارية.",
        buttonColor: "Teal",
        link: "https://drive.google.com/drive/folders/1gVWbXCdlC8H8CeUlRTN56hnWzX4Tb-v-?usp=drive_link",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "الرعاية الصحية",
        logo: "/logos/ncmh.webp",
        logoText: "المركز الوطني للصحة النفسية",
        title: "تحرير المحتوى الصحي",
        description: "تقديم تحرير متخصص للاتصالات الصحية ومشاريع تطوير المحتوى الطبي.",
        buttonColor: "Blue",
        link: "https://drive.google.com/drive/folders/1emjBrN00Ai-a_E1cOwgE8KA72kYptv0t?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      },
      {
        category: "التعليم",
        logo: "/logos/maarif.webp",
        logoText: "مدارس معارف",
        title: "المحتوى التعليمي",
        description: "تحرير محتوى تعليمي شامل بالإنجليزية والعربية لتطوير مناهج المدرسة الدولية.",
        buttonColor: "Green",
        link: "https://drive.google.com/drive/folders/1wVUGzktBTHEYNqO7xWiJrj3hNS9pyvG6?usp=sharing",
        externalLinks: [] as { label: string, url: string }[]
      }
    ]
  };

  const serviceTypes = [" كل الأعمال ", "تسويق المحتوى", "استراتيجية العلامة التجارية", "الكتابة التقنية", "التصميم والإبداع", "الترجمة والتحرير"];

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

  // Helper function to format category with or without "قطاع" prefix
  const formatCategoryTitle = (category: string) => {
    // Don't add "قطاع" if category already contains "قطاعات" or is "الجوائز"
    if (category === "قطاعات متنوعة" || category === "الجوائز") {
      return category;
    }
    return `قطاع ${category}`;
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
                        <h4 className={styles.portfolioServiceType + " arabic-heading"}>{formatCategoryTitle(project.category)}</h4>
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

          {/* Portfolio Summary - FIXED LAYOUT */}
          <div className={`text-center border-t border-gray-200 ${styles.portfolioSummary}`}>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-gray-50 rounded-full px-6 py-3 border">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={styles.flechaVerificationText + " arabic-body"}>جميع المشاريع موثقة ومُتحقق منها</span>
              </div>
              <Link href="/" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors whitespace-nowrap"}>
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