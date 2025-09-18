"use client";

import { useState } from "react";
import CaseStudyDetail from "@/components/versions/socialMedia/caseStudyPage/caseStudyPage";

export default function SocialMediaShiftatCaseStudy() {
  const [currentView, setCurrentView] = useState("caseStudy");

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/v/social-media/h#about";
        break;
      case "portfolio":
        window.location.href = "/v/social-media/portfolio";
        break;
      case "services": 
        window.location.href = "/v/social-media/h#services";
        break;
      default:
        setCurrentView(section);
    }
  };

  const navigationHandlers = {
    about: () => handleNavigateToSection("about"),
    portfolio: () => handleNavigateToSection("portfolio"),
    services: () => handleNavigateToSection("services"),
    caseStudy: () => setCurrentView("caseStudy")
  };

  return (
    <CaseStudyDetail onNavigate={navigationHandlers} />
  );
}