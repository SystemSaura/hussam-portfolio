"use client";

import { useRef } from "react";
import Header from "../../../../components/en/versions/seo/homePage/headerSection/header";
import Hero from "../../../../components/en/versions/seo/homePage/heroSection/hero";
import TrustedCompanies from "../../../../components/en/versions/seo/homePage/trustedCompaniesSection/trustedCompanies";
import About from "../../../../components/en/versions/seo/homePage/aboutSection/about";
import Services from "../../../../components/en/versions/seo/homePage/servicesSection/services";
import CaseStudy from "../../../../components/en/versions/seo/homePage/caseStudySection/caseStudy";
import Portfolio from "../../../../components/en/versions/seo/homePage/portfolioSection/portfolio";
import Testimonials from "../../../../components/en/versions/seo/homePage/testimonialsSection/testimonials";
import CTA from "../../../../components/en/versions/seo/homePage/ctaSection/cta";
import Footer from "../../../../components/en/versions/seo/homePage/footerSection/footer";

export default function SEOHomepage() {
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