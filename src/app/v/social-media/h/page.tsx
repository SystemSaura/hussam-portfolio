"use client";

import { useRef } from "react";
import Header from "../../../../components/versions/socialMedia/homePage/headerSection/header";
import Hero from "../../../../components/versions/socialMedia/homePage/heroSection/hero";
import TrustedCompanies from "../../../../components/versions/marketing/homePage/trustedCompaniesSection/trustedCompanies";
import About from "../../../../components/versions/socialMedia/homePage/aboutSection/about";
import Services from "../../../../components/versions/socialMedia/homePage/servicesSection/services";
import CaseStudy from "../../../../components/versions/socialMedia/homePage/caseStudySection/caseStudy";
import Portfolio from "../../../../components/versions/socialMedia/homePage/portfolioSection/portfolio";
import Testimonials from "../../../../components/versions/socialMedia/homePage/testimonialsSection/testimonials";
import CTA from "../../../../components/versions/socialMedia/homePage/ctaSection/cta";
import Footer from "../../../../components/versions/socialMedia/homePage/footerSection/footer";

export default function SocialMediaHome() {
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
      <Hero />
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