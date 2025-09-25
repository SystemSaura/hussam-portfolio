"use client";

import { useLanguage } from "@/lib/language-context";

// English Components
import CaseStudyDetailEN from "@/components/en/versions/copywriting/caseStudyPage/caseStudyPage";

// Arabic Components
import CaseStudyDetailAR from "@/components/ar/versions/copywriting/caseStudyPage/caseStudyPage";

export default function CopywritingShiftatCaseStudy() {
  const { language } = useLanguage();

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/v/copywriting/homepage#about";
        break;
      case "portfolio":
        window.location.href = "/v/copywriting/portfolio";
        break;
      case "services": 
        window.location.href = "/v/copywriting/homepage#services";
        break;
      default:
        // Stay on current page for case study
        break;
    }
  };

  const navigationHandlers = {
    about: () => handleNavigateToSection("about"),
    portfolio: () => handleNavigateToSection("portfolio"),
    services: () => handleNavigateToSection("services"),
    caseStudy: () => {} // Stay on current page
  };

  // Render components based on selected language
  if (language === 'ar') {
    return (
      <div dir="rtl">
        <CaseStudyDetailAR onNavigate={navigationHandlers} />
      </div>
    );
  }

  return (
    <div dir="ltr">
      <CaseStudyDetailEN onNavigate={navigationHandlers} />
    </div>
  );
}