"use client";

import { useLanguage } from "@/lib/language-context";

// English Components
import PortfolioPageEN from "../../../../components/en/versions/seo/portfolioPage/portfolioPage";

// Arabic Components
import PortfolioPageAR from "../../../../components/ar/versions/seo/portfolioPage/portfolioPage";

export default function Portfolio() {
  const { language } = useLanguage();
  
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio',
    services: () => window.location.href = '/#services',
    caseStudy: () => window.location.href = '/#caseStudy',
  };

  // Render components based on selected language
  if (language === 'ar') {
    return <PortfolioPageAR onNavigate={navigationHandlers} />;
  }

  return <PortfolioPageEN onNavigate={navigationHandlers} />;
}