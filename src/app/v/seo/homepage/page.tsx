"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";

// English SEO Components
import HeaderEN from "../../../../components/en/versions/seo/homePage/headerSection/header";
import HeroEN from "../../../../components/en/versions/seo/homePage/heroSection/hero";
import TrustedCompaniesEN from "../../../../components/en/versions/seo/homePage/trustedCompaniesSection/trustedCompanies";
import AboutEN from "../../../../components/en/versions/seo/homePage/aboutSection/about";
import ServicesEN from "../../../../components/en/versions/seo/homePage/servicesSection/services";
import CaseStudyEN from "../../../../components/en/versions/seo/homePage/caseStudySection/caseStudy";
import PortfolioEN from "../../../../components/en/versions/seo/homePage/portfolioSection/portfolio";
import TestimonialsEN from "../../../../components/en/versions/seo/homePage/testimonialsSection/testimonials";
import CTAEN from "../../../../components/en/versions/seo/homePage/ctaSection/cta";
import FooterEN from "../../../../components/en/versions/seo/homePage/footerSection/footer";

// Arabic SEO Components
import HeaderAR from "../../../../components/ar/versions/seo/homePage/headerSection/header";
import HeroAR from "../../../../components/ar/versions/seo/homePage/heroSection/hero";
import TrustedCompaniesAR from "../../../../components/ar/versions/seo/homePage/trustedCompaniesSection/trustedCompanies";
import AboutAR from "../../../../components/ar/versions/seo/homePage/aboutSection/about";
import ServicesAR from "../../../../components/ar/versions/seo/homePage/servicesSection/services";
import CaseStudyAR from "../../../../components/ar/versions/seo/homePage/caseStudySection/caseStudy";
import PortfolioAR from "../../../../components/ar/versions/seo/homePage/portfolioSection/portfolio";
import TestimonialsAR from "../../../../components/ar/versions/seo/homePage/testimonialsSection/testimonials";
import CTAAR from "../../../../components/ar/versions/seo/homePage/ctaSection/cta";
import FooterAR from "../../../../components/ar/versions/seo/homePage/footerSection/footer";

export default function SEOHomepage() {
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