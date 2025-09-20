//src/app/v/copywriting/homepage/page.tsx
"use client";

import { useRef } from "react";
import Header from "../../../../components/versions/copywriting/homePage/headerSection/header";
import Hero from "../../../../components/versions/copywriting/homePage/heroSection/hero";
import TrustedCompanies from "../../../../components/versions/marketing/homePage/trustedCompaniesSection/trustedCompanies";
import About from "../../../../components/versions/copywriting/homePage/aboutSection/about";
import Services from "../../../../components/versions/copywriting/homePage/servicesSection/services";
import CaseStudy from "../../../../components/versions/copywriting/homePage/caseStudySection/caseStudy";
import Portfolio from "../../../../components/versions/copywriting/homePage/portfolioSection/portfolio";
import Testimonials from "../../../../components/versions/copywriting/homePage/testimonialsSection/testimonials";
import CTA from "../../../../components/versions/copywriting/homePage/ctaSection/cta";
import Footer from "../../../../components/versions/copywriting/homePage/footerSection/footer";

export default function CopywritingHome() {
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

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigationHandlers} />
      <Hero onNavigate={navigationHandlers} />
      <TrustedCompanies />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <CaseStudy ref={caseStudyRef} />
      <Portfolio ref={portfolioRef} />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}