"use client";

import { useRef } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustedCompanies from "../components/TrustedCompanies/TrustedCompanies";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

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
      <Portfolio ref={portfolioRef} />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}