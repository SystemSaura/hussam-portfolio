"use client";

import PortfolioPage from "../../../../components/versions/marketing/portfolioPage/portfolioPage";

export default function Portfolio() {
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio',
    services: () => window.location.href = '/#services',
    caseStudy: () => window.location.href = '/#caseStudy',
  };

  return <PortfolioPage onNavigate={navigationHandlers} />;
}