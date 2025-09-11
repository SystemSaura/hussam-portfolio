"use client";

import PortfolioPage from "../../portfolioPage/portfolioPage";

export default function Portfolio() {
  const navigationHandlers = {
    about: () => window.location.href = '/#about',
    portfolio: () => window.location.href = '/#portfolio',
    services: () => window.location.href = '/#services',
  };

  return <PortfolioPage onNavigate={navigationHandlers} />;
}