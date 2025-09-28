"use client";

import { useLanguage } from "@/lib/language-context";

// English Components
import CaseStudyDetailEN from "../../../../components/en/versions/seo/caseStudyPage/caseStudyPage";

// Arabic Components  
import CaseStudyDetailAR from "../../../../components/ar/versions/seo/caseStudyPage/caseStudyPage";

export default function ShiftatCaseStudy() {
  const { language } = useLanguage();
  
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio', 
    services: () => window.location.href = '/#services',
    caseStudy: () => window.location.href = '/#caseStudy',
  };

  // Render components based on selected language
  if (language === 'ar') {
    return (
      <div className="min-h-screen bg-white" dir="rtl">
        <CaseStudyDetailAR onNavigate={navigationHandlers} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir="ltr">
      <CaseStudyDetailEN onNavigate={navigationHandlers} />
    </div>
  );
}