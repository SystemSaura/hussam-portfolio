"use client";

import { useRef } from "react";
import Header from "../components/versions/marketing/homePage/headerSection/header";
import Hero from "../components/versions/marketing/homePage/heroSection/hero";
import TrustedCompanies from "../components/versions/marketing/homePage/trustedCompaniesSection/trustedCompanies";
import About from "../components/versions/marketing/homePage/aboutSection/about";
import Services from "../components/versions/marketing/homePage/servicesSection/services";
import CaseStudy from "../components/versions/marketing/homePage/caseStudySection/caseStudy";
import Portfolio from "../components/versions/marketing/homePage/portfolioSection/portfolio";
import Testimonials from "../components/versions/marketing/homePage/testimonialsSection/testimonials";
import CTA from "../components/versions/marketing/homePage/ctaSection/cta";
import Footer from "../components/versions/marketing/homePage/footerSection/footer";

export default function Home() {
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