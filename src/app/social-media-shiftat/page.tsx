"use client";

import { useLanguage } from "@/lib/language-context";

// English Components
import CaseStudyDetailEN from "@/components/en/versions/socialMedia/caseStudyPage/caseStudyPage";

// Arabic Components
import CaseStudyDetailAR from "@/components/ar/versions/socialMedia/caseStudyPage/caseStudyPage";

export default function SocialMediaShiftatCaseStudy() {
  const { language } = useLanguage();

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/social-media#about";
        break;
      case "portfolio":
        window.location.href = "/social-media-portfolio";
        break;
      case "services":
        window.location.href = "/social-media#services";
        break;
      default:
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