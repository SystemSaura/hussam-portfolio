"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import LanguageToggle from "@/components/shared/languageToggle";

// English Components
import HeaderEN from "../components/en/versions/marketing/homePage/headerSection/header";
import HeroEN from "../components/en/versions/marketing/homePage/heroSection/hero";
import TrustedCompaniesEN from "../components/en/versions/marketing/homePage/trustedCompaniesSection/trustedCompanies";
import AboutEN from "../components/en/versions/marketing/homePage/aboutSection/about";
import ServicesEN from "../components/en/versions/marketing/homePage/servicesSection/services";
import CaseStudyEN from "../components/en/versions/marketing/homePage/caseStudySection/caseStudy";
import PortfolioEN from "../components/en/versions/marketing/homePage/portfolioSection/portfolio";
import TestimonialsEN from "../components/en/versions/marketing/homePage/testimonialsSection/testimonials";
import CTAEN from "../components/en/versions/marketing/homePage/ctaSection/cta";
import FooterEN from "../components/en/versions/marketing/homePage/footerSection/footer";

// Arabic Components
import HeaderAR from "../components/ar/versions/marketing/homePage/headerSection/header";
import HeroAR from "../components/ar/versions/marketing/homePage/heroSection/hero";
import TrustedCompaniesAR from "../components/ar/versions/marketing/homePage/trustedCompaniesSection/trustedCompanies";
import AboutAR from "../components/ar/versions/marketing/homePage/aboutSection/about";
import ServicesAR from "../components/ar/versions/marketing/homePage/servicesSection/services";
import CaseStudyAR from "../components/ar/versions/marketing/homePage/caseStudySection/caseStudy";
import PortfolioAR from "../components/ar/versions/marketing/homePage/portfolioSection/portfolio";
import TestimonialsAR from "../components/ar/versions/marketing/homePage/testimonialsSection/testimonials";
import CTAAR from "../components/ar/versions/marketing/homePage/ctaSection/cta";
import FooterAR from "../components/ar/versions/marketing/homePage/footerSection/footer";

export default function Home() {
  const { language } = useLanguage();
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const caseStudyRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationHandlers = {
    about: () => scrollToSection(aboutRef),
    portfolio: () => scrollToSection(portfolioRef),
    services: () => scrollToSection(servicesRef),
    caseStudy: () => scrollToSection(caseStudyRef),
  };

  // Render components based on selected language
  if (language === 'ar') {
    return (
      <div className="min-h-screen bg-white" dir="rtl">
        <HeaderAR onNavigate={navigationHandlers} />
        <HeroAR onNavigate={navigationHandlers} />
        <TrustedCompaniesAR />
        <AboutAR ref={aboutRef} />
        <ServicesAR ref={servicesRef} />
        <CaseStudyAR ref={caseStudyRef} />
        <PortfolioAR ref={portfolioRef} />
        <TestimonialsAR />
        <CTAAR />
        <FooterAR />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir="ltr">
      <HeaderEN onNavigate={navigationHandlers} />
      <HeroEN onNavigate={navigationHandlers} />
      <TrustedCompaniesEN />
      <AboutEN ref={aboutRef} />
      <ServicesEN ref={servicesRef} />
      <CaseStudyEN ref={caseStudyRef} />
      <PortfolioEN ref={portfolioRef} />
      <TestimonialsEN />
      <CTAEN />
      <FooterEN />
    </div>
  );
}