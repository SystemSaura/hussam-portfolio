"use client";

import { useState } from "react";
import PortfolioPage from "@/components/en/versions/socialMedia/portfolioPage/portfolioPage";

export default function SocialMediaPortfolioPage() {
  const [currentView, setCurrentView] = useState("portfolio");

  const navigationHandlers = {
    about: () => setCurrentView("about"),
    portfolio: () => setCurrentView("portfolio"), 
    services: () => setCurrentView("services"),
    caseStudy: () => setCurrentView("caseStudy")
  };

  const handleNavigateToHome = () => {
    window.location.href = "/v/social-media/h";
  };

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/v/social-media/h#about";
        break;
      case "services": 
        window.location.href = "/v/social-media/h#services";
        break;
      case "caseStudy":
        window.location.href = "/v/social-media/shiftat";
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