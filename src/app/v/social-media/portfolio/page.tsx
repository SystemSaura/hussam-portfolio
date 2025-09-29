"use client";

import { useLanguage } from "@/lib/language-context";

// English Components
import PortfolioPageEN from "../../../../components/en/versions/socialMedia/portfolioPage/portfolioPage";

// Arabic Components
import PortfolioPageAR from "../../../../components/ar/versions/socialMedia/portfolioPage/portfolioPage";

export default function SocialMediaPortfolioPage() {
  const { language } = useLanguage();

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/v/social-media/homepage#about";
        break;
      case "services": 
        window.location.href = "/v/social-media/homepage#services";
        break;
      case "caseStudy":
        window.location.href = "/v/social-media/shiftat";
        break;
      default:
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