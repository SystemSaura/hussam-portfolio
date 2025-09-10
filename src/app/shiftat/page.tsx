"use client";

import Footer from "../../components/footerSection/footer";
import CaseStudyDetail from "../../caseStudyPage/caseStudyPage";

export default function ShiftatCaseStudy() {
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio', 
    services: () => window.location.href = '/#services',
  };

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyDetail onNavigate={navigationHandlers} />
      <Footer />
    </div>
  );
}