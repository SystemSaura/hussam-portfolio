"use client";

import { useRef } from "react";
import Header from "../components/headerSection/header";
import Hero from "../components/heroSection/hero";
import TrustedCompanies from "../components/trustedCompaniesSection/trustedCompanies";
import About from "../components/aboutSection/about";
import Services from "../components/servicesSection/services";
import CaseStudy from "../components/caseStudySection/caseStudy";
import Portfolio from "../components/portfolioSection/portfolio";
import Testimonials from "../components/testimonialsSection/testimonials";
import CTA from "../components/ctaSection/cta";
import Footer from "../components/footerSection/footer";

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