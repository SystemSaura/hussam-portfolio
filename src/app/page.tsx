"use client";

import { useRef } from "react";
import Header from "../homepage/headerSection/header";
import Hero from "../homepage/heroSection/hero";
import TrustedCompanies from "../homepage/trustedCompaniesSection/trustedCompanies";
import About from "../homepage/aboutSection/about";
import Services from "../homepage/servicesSection/services";
import CaseStudy from "../homepage/caseStudySection/caseStudy";
import Portfolio from "../homepage/portfolioSection/portfolio";
import Testimonials from "../homepage/testimonialsSection/testimonials";
import CTA from "../homepage/ctaSection/cta";
import Footer from "../homepage/footerSection/footer";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationHandlers = {
    about: () => scrollToSection(aboutRef),
    portfolio: () => scrollToSection(portfolioRef),
    services: () => scrollToSection(servicesRef),
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigationHandlers} />
      <Hero />
      <TrustedCompanies />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <CaseStudy />
      <Portfolio ref={portfolioRef} />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}