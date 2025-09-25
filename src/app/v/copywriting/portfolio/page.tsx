"use client";

import { useLanguage } from "@/lib/language-context";

// English Components
import PortfolioPageEN from "@/components/en/versions/copywriting/portfolioPage/portfolioPage";

// Arabic Components
import PortfolioPageAR from "@/components/ar/versions/copywriting/portfolioPage/portfolioPage";

export default function CopywritingPortfolioPage() {
  const { language } = useLanguage();

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/v/copywriting/homepage#about";
        break;
      case "services": 
        window.location.href = "/v/copywriting/homepage#services";
        break;
      case "caseStudy":
        window.location.href = "/v/copywriting/shiftat";
        break;
      default:
        // Stay on current page for portfolio
        break;
    }
  };

  const navigationHandlers = {
    about: () => handleNavigateToSection("about"),
    portfolio: () => {}, // Stay on current page
    services: () => handleNavigateToSection("services"), 
    caseStudy: () => handleNavigateToSection("caseStudy")
  };

  // Render components based on selected language
  if (language === 'ar') {
    return (
      <div dir="rtl">
        <PortfolioPageAR onNavigate={navigationHandlers} />
      </div>
    );
  }

  return (
    <div dir="ltr">
      <PortfolioPageEN onNavigate={navigationHandlers} />
    </div>
  );
}