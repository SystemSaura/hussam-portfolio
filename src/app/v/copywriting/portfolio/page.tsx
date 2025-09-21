"use client";

import { useState } from "react";
import PortfolioPage from "@/components/en/versions/copywriting/portfolioPage/portfolioPage";

export default function CopywritingPortfolioPage() {
  const [currentView, setCurrentView] = useState("portfolio");

  const navigationHandlers = {
    about: () => setCurrentView("about"),
    portfolio: () => setCurrentView("portfolio"), 
    services: () => setCurrentView("services"),
    caseStudy: () => setCurrentView("caseStudy")
  };

  const handleNavigateToHome = () => {
    window.location.href = "/v/copywriting/homepage";
  };

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
        setCurrentView(section);
    }
  };

  const updatedNavigationHandlers = {
    about: () => handleNavigateToSection("about"),
    portfolio: () => setCurrentView("portfolio"),
    services: () => handleNavigateToSection("services"), 
    caseStudy: () => handleNavigateToSection("caseStudy")
  };

  return (
    <PortfolioPage onNavigate={updatedNavigationHandlers} />
  );
}