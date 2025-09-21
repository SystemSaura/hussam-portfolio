"use client";

import CaseStudyDetail from "../../../../components/en/versions/seo/caseStudyPage/caseStudyPage";

export default function ShiftatCaseStudy() {
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio', 
    services: () => window.location.href = '/#services',
    caseStudy: () => window.location.href = '/#caseStudy',
  };

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyDetail onNavigate={navigationHandlers} />
    </div>
  );
}