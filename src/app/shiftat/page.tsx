"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CaseStudyDetail from "../../components/CaseStudy/CaseStudyDetail";

export default function ShiftatCaseStudy() {
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio', 
    services: () => window.location.href = '/#services',
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigationHandlers} />
      <CaseStudyDetail />
      <Footer />
    </div>
  );
}