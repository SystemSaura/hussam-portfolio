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
  // Social media marketing projects only
  const projects = [
    {
      category: "تقنية الموارد البشرية",
      logo: "/logos/shiftat.webp",
      logoText: "شفتات",
      title: "تواصل اجتماعي للشركات يحقق النتائج",
      description: "نمونا من ٠ إلى ١٢ ألف متابع يهتمون بالتوظيف الذكي. بنينا سلطة على لينكد إن وإكس بمحتوى يشاركه قادة الموارد البشرية وليس يتجاهلونه.",
      buttonColor: "Blue",
      link: "https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link",
      externalLinks: [
        { label: "لينكد إن", url: "https://www.linkedin.com/company/shiftat-sa/" },
        { label: "الموقع", url: "https://shiftat.sa" }
      ]
    },
    {
      category: "اللوجستيات",
      logo: "/logos/abudawood.webp",
      logoText: "أبوداود",
      title: "تموضع سلطة الصناعة",
      description: "وضعنا رائد الخدمات اللوجستية في الخليج كصوت الابتكار في سلسلة التوريد. استراتيجية لينكد إن تبني الثقة قبل البيع.",
      buttonColor: "Orange",
      link: "https://drive.google.com/drive/folders/1OW44Melyr3JIr4rYvE8SQFT-hx_QzI48?usp=drive_link",
      externalLinks: [
        { label: "لينكد إن", url: "https://www.linkedin.com/company/abudawood-group" },
        { label: "الموقع", url: "https://www.abudawood.com/" }
      ]
    },
    {
      category: "التعليم",
      logo: "/logos/downehouse.webp",
      logoText: "داون هاوس",
      title: "استراتيجية اجتماعية للقبولات",
      description: "محتوى اجتماعي يُظهر تميز المدرسة دون مفاخرة. الأهالي يشاركونه لأنه يحل مخاوفهم التعليمية.",
      buttonColor: "Green",
      link: "https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing",
      externalLinks: [
        { label: "انستقرام", url: "https://www.instagram.com/downehouseriyadh/" },
        { label: "الموقع", url: "https://downehouseriyadh.com/" }
      ]
    },
    {
      category: "الفنون",
      logo: "/logos/jaxdistrict.webp",
      logoText: "جاكس ديستريكت",
      title: "محتوى يجمع المجتمع الفني",
      description: "بنينا مجتمع فنون متفاعل من خلال وسائل التواصل. محتوى يحتفي بالمواهب المحلية ويقود حضور الفعاليات.",
      buttonColor: "Pink",
      link: "https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing",
      externalLinks: [
        { label: "انستقرام", url: "https://www.instagram.com/jaxdistrict/" },
        { label: "الموقع", url: "https://jaxdistrict.com/" }
      ]
    },
    {
      category: "البيئة",
      logo: "/logos/reviva.webp",
      logoText: "ريفيفا",
      title: "تفاعل موجه بالقضايا",
      description: "محتوى بيئي يحفز على العمل وليس الوعي فقط. استراتيجية اجتماعية تحول المتابعين إلى دعاة إعادة تدوير.",
      buttonColor: "Green",
      link: "https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link",
      externalLinks: [
        { label: "لينكد إن", url: "https://www.linkedin.com/company/sircsaudi/" },
        { label: "الموقع", url: "https://reviva.sa/" }
      ]
    },
    {
      category: "العقارات",
      logo: "/logos/estater.webp",
      logoText: "إستاتر",
      title: "محتوى مدونة ووسائل تواصل",
      description: "بنينا حضوراً رقمياً يضع إستاتر كمصدر رئيسي للذكاء العقاري في دول الخليج.",
      buttonColor: "Purple",
      link: "",
      externalLinks: [
        { label: "انستقرام", url: "https://www.instagram.com/the.real.estater/" },
        { label: "الموقع", url: "https://estater.com" }
      ]
    }
  ];

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
      case "X":
      case "إكس":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
              <span className="text-gray-400 mx-2">&bull;</span>
              <span className={styles.flechaProjectsText + " arabic-body"}>{projects.length} حملة عالية التأثير</span>
            </div>
            <h1 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
              وسائل تواصل اجتماعي تحرك الأعمال
            </h1>
            <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-12 arabic-body"}>
              توقف عن النشر في الفراغ. هذه الحملات حققت متابعين حقيقيين، تفاعلاً حقيقياً، وعملاء حقيقيين لشركات خليجية. بلا مقاييس وهمية—فقط نتائج مهمة لأرباحك.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div key={index} className={`${styles.portfolioCard} group`}>
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
                    <p className={styles.portfolioServiceDetail + " arabic-body"}>تسويق وسائل التواصل الاجتماعي</p>
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
                    {project.link && (
                      <button
                        onClick={() => window.open(project.link, '_blank')}
                        className={`${styles.portfolioButton} ${styles.portfolioButtonOutline} arabic-body`}
                      >
                      نماذج (داخلي)
                    </button>
                    )}
                    {project.externalLinks.map((extLink, i) => (
                      <button
                        key={i}
                        onClick={() => window.open(extLink.url, '_blank')}
                        className={`${styles.portfolioButton} ${styles.portfolioIconOnly} ${getButtonColorClass(project.buttonColor)}`}
                        title={extLink.label}
                      >
                        {getExternalLinkIcon(extLink.label)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                <Link href="/social-media" className={styles.flechaViewAllText + " inline-flex items-center hover:text-blue-800 transition-colors arabic-body text-blue-600"}>
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
