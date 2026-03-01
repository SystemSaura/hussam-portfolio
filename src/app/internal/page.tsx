"use client";

import { useState, useEffect } from "react";
import styles from "./internal.module.css";

type Language = "en" | "ar";
type Category = "homepages" | "portfolios" | "case-studies" | "company-profile";

interface PageLink {
  label: string;
  labelAr: string;
  href: string;
  description: string;
  descriptionAr: string;
  badge?: string;
  lang?: "en" | "ar";
}

const pages: Record<Category, PageLink[]> = {
  homepages: [
    {
      label: "SEO",
      labelAr: "تحسين محركات البحث",
      href: "/seo",
      description: "Homepage tailored for SEO clients",
      descriptionAr: "الصفحة الرئيسية لعملاء تحسين محركات البحث",
    },
    {
      label: "Copywriting",
      labelAr: "كتابة المحتوى",
      href: "/copywriting",
      description: "Homepage tailored for copywriting clients",
      descriptionAr: "الصفحة الرئيسية لعملاء كتابة المحتوى",
    },
    {
      label: "Social Media",
      labelAr: "التواصل الاجتماعي",
      href: "/social-media",
      description: "Homepage tailored for social media clients",
      descriptionAr: "الصفحة الرئيسية لعملاء التواصل الاجتماعي",
    },
  ],
  portfolios: [
    {
      label: "Main Portfolio",
      labelAr: "المعرض الرئيسي",
      href: "/portfolio-thumbnails",
      description: "Primary portfolio with all work",
      descriptionAr: "المعرض الرئيسي بجميع الأعمال",
      badge: "Main",
    },
    {
      label: "SEO Portfolio",
      labelAr: "معرض تحسين محركات البحث",
      href: "/seo-portfolio",
      description: "Portfolio for SEO clients",
      descriptionAr: "معرض أعمال تحسين محركات البحث",
    },
    {
      label: "Copywriting Portfolio",
      labelAr: "معرض كتابة المحتوى",
      href: "/copywriting-portfolio",
      description: "Portfolio for copywriting clients",
      descriptionAr: "معرض أعمال كتابة المحتوى",
    },
    {
      label: "Marketing Portfolio",
      labelAr: "معرض التسويق",
      href: "/marketing-portfolio",
      description: "Portfolio for marketing clients",
      descriptionAr: "معرض أعمال التسويق",
    },
    {
      label: "Social Media Portfolio",
      labelAr: "معرض التواصل الاجتماعي",
      href: "/social-media-portfolio",
      description: "Portfolio for social media clients",
      descriptionAr: "معرض أعمال التواصل الاجتماعي",
    },
  ],
  "case-studies": [
    {
      label: "SEO — Shiftat",
      labelAr: "تحسين محركات البحث — شفتات",
      href: "/seo-shiftat",
      description: "Shiftat case study for SEO clients",
      descriptionAr: "دراسة حالة شفتات لعملاء تحسين محركات البحث",
    },
    {
      label: "Copywriting — Shiftat",
      labelAr: "كتابة المحتوى — شفتات",
      href: "/copywriting-shiftat",
      description: "Shiftat case study for copywriting clients",
      descriptionAr: "دراسة حالة شفتات لعملاء كتابة المحتوى",
    },
    {
      label: "Marketing — Shiftat",
      labelAr: "التسويق — شفتات",
      href: "/marketing-shiftat",
      description: "Shiftat case study for marketing clients",
      descriptionAr: "دراسة حالة شفتات لعملاء التسويق",
    },
    {
      label: "Social Media — Shiftat",
      labelAr: "التواصل الاجتماعي — شفتات",
      href: "/social-media-shiftat",
      description: "Shiftat case study for social media clients",
      descriptionAr: "دراسة حالة شفتات لعملاء التواصل الاجتماعي",
    },
  ],
  "company-profile": [
    {
      label: "Company Profile",
      labelAr: "الملف التعريفي",
      href: "/company-profile",
      description: "Language selection page",
      descriptionAr: "صفحة اختيار اللغة",
    },
    {
      label: "Company Profile",
      labelAr: "الملف التعريفي",
      href: "/company-profile/en",
      description: "English company profile",
      descriptionAr: "الملف التعريفي بالإنجليزية",
      lang: "en",
    },
    {
      label: "Company Profile",
      labelAr: "الملف التعريفي",
      href: "/company-profile/ar",
      description: "Arabic company profile",
      descriptionAr: "الملف التعريفي بالعربية",
      lang: "ar",
    },
  ],
};

const categoryLabels: Record<Category, { en: string; ar: string; icon: string }> = {
  homepages: { en: "Homepages", ar: "الصفحات الرئيسية", icon: "🏠" },
  portfolios: { en: "Portfolios", ar: "المعارض", icon: "💼" },
  "case-studies": { en: "Case Studies", ar: "دراسات الحالة", icon: "📊" },
  "company-profile": { en: "Company Profile", ar: "الملف التعريفي", icon: "🏢" },
};

const categories: Category[] = ["homepages", "portfolios", "case-studies", "company-profile"];

export default function InternalDirectory() {
  const [language, setLanguageState] = useState<Language>("en");
  const [activeCategory, setActiveCategory] = useState<Category>("homepages");

  // Read saved language on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("language") as Language;
      if (stored === "ar" || stored === "en") {
        setLanguageState(stored);
      }
    } catch {}
  }, []);

  // Sync language toggle to localStorage so target pages open in the right language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
    } catch {}
  };

  const isAr = language === "ar";

  const filterByLang = (items: PageLink[]) =>
    items.filter((p) => !p.lang || p.lang === language);

  const filteredPages = filterByLang(pages[activeCategory]);

  return (
    <div className={styles.wrapper} dir={isAr ? "rtl" : "ltr"}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div>
              <h1 className={styles.title}>
                {isAr ? "دليل الصفحات" : "Page Directory"}
              </h1>
              <p className={styles.subtitle}>
                {isAr
                  ? "جميع صفحات الموقع في مكان واحد — للاستخدام الداخلي"
                  : "All website pages in one place — internal use"}
              </p>
            </div>
            {/* Language Toggle */}
            <div className={styles.langToggle}>
              <button
                className={`${styles.langBtn} ${language === "en" ? styles.langBtnActive : ""}`}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
              <button
                className={`${styles.langBtn} ${language === "ar" ? styles.langBtnActive : ""}`}
                onClick={() => setLanguage("ar")}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <nav className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className={styles.tabIcon}>{categoryLabels[cat].icon}</span>
                <span>{isAr ? categoryLabels[cat].ar : categoryLabels[cat].en}</span>
                <span className={styles.tabCount}>{filterByLang(pages[cat]).length}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Page Cards */}
        <main className={styles.grid}>
          {filteredPages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {isAr ? page.labelAr : page.label}
                </h3>
                {page.badge && <span className={styles.badge}>{page.badge}</span>}
              </div>
              <p className={styles.cardDesc}>
                {isAr ? page.descriptionAr : page.description}
              </p>
              <div className={styles.cardFooter}>
                <code className={styles.cardUrl}>{page.href}</code>
                <span className={styles.cardArrow}>
                  {isAr ? "←" : "→"}
                </span>
              </div>
            </a>
          ))}
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>
            {isAr
              ? "للاستخدام الداخلي فقط — Saura Digital"
              : "Internal use only — Saura Digital"}
          </p>
        </footer>
      </div>
    </div>
  );
}
