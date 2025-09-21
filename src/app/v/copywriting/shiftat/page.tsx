"use client";

import { useState } from "react";
import CaseStudyDetail from "@/components/en/versions/copywriting/caseStudyPage/caseStudyPage";

export default function CopywritingShiftatCaseStudy() {
  const [currentView, setCurrentView] = useState("caseStudy");

  const handleNavigateToSection = (section: string) => {
    switch(section) {
      case "about":
        window.location.href = "/v/copywriting/homepage#about";
        break;
      case "portfolio":
        window.location.href = "/v/copywriting/portfolio";
        break;
      case "services": 
        window.location.href = "/v/copywriting/homepage#services";
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