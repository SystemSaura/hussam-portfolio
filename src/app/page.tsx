"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [stickyStyles, setStickyStyles] = useState<React.CSSProperties>({});
  
  const servicesRef = useRef<HTMLElement>(null);
  const leftHeadingRef = useRef<HTMLDivElement>(null);
  const thirdServiceRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current || !leftHeadingRef.current || !thirdServiceRef.current || !servicesContainerRef.current) {
        return;
      }

      const servicesRect = servicesRef.current.getBoundingClientRect();
      const containerRect = servicesContainerRef.current.getBoundingClientRect();
      const thirdServiceRect = thirdServiceRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Sticky logic
      const shouldBeSticky = servicesRect.top <= 120 && servicesRect.bottom > windowHeight * 0.3;

      if (shouldBeSticky !== isSticky) {
        setIsSticky(shouldBeSticky);
        
        if (shouldBeSticky) {
          // Calculate positioning
          const containerLeft = containerRect.left;
          const gridGap = 64; // 4rem gap between grid columns  
          const leftColumnWidth = (containerRect.width - gridGap) / 2;
          
          setStickyStyles({
            position: 'fixed',
            top: '120px',
            left: `${containerLeft}px`,
            width: `${leftColumnWidth}px`,
            zIndex: 10,
          });
        } else {
          setStickyStyles({});
        }
      }

      // Fade logic
      const shouldFade = thirdServiceRect.bottom <= windowHeight * 0.4;
      if (shouldFade !== shouldFadeOut) {
        setShouldFadeOut(shouldFade);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isSticky, shouldFadeOut]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="nav-component">
        <div className="nav-container">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="logo-name">Hussam Baaka <span className="cursor-blink">|</span></Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link">About</button>
            <button onClick={() => scrollToSection(portfolioRef)} className="nav-link">Portfolio</button>
            <button onClick={() => scrollToSection(servicesRef)} className="nav-link">Services</button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="nav-login-button-centered hidden sm:block">My Work</button>
            <button className="nav-button-strategy">
              Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="nav-link p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-custom-hero py-20">
        <div className="home_header_component">
          {/* Main Hero Title */}
          <h1 className="flecha-hero-title mb-16">
            Turn marketing spend<br />
            into <span className="text-custom-blue">measurable growth.</span>
          </h1>

          {/* Lower Section - Three parts */}
          <div className="home_header_content">
            {/* Left: Want to join us section */}
            <div className="home_header_text-wrap">
              <h2 className="home_header_subheading">Tired of guessing?</h2>
              <p className="home_header_text1">
                Your marketing budget deserves better than "spray and pray." Get strategies that turn GCC market insights into predictable pipeline growth.
              </p>
            </div>

            {/* Center: Arrow */}
            <div className="flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/3287453319/171477844.svg"
                alt="Arrow pointing right"
                width={56.13}
                height={56.84}
                className="arrow-right"
              />
            </div>

            {/* Right: Start here form */}
            <div className="home_header_form-wrap">
              <h3 className="home_header_subheading-right mb-6">Start here.</h3>
              <div className="seva-fields formkit-fields">
                <input
                  type="email"
                  placeholder="Business Email"
                  className="formkit-input"
                />
                <button
                  type="submit"
                  className="subscribe-button"
                >
                  Consult Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Trusted by leading GCC companies
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-x-12 gap-y-8 items-center justify-items-center max-w-4xl">
              <img src="/logos/shiftat.webp" alt="Shiftat" className="color-logo shiftat-logo" />
              <img src="/logos/abudawood.webp" alt="Abudawood" className="color-logo abudawood-logo" />
              <img src="/logos/kapsarc.webp" alt="KAPSARC" className="color-logo" />
              <img src="/logos/alnahdi.webp" alt="Al Nahdi" className="color-logo alnahdi-logo" />
              <img src="/logos/saeq.webp" alt="SAEQ" className="color-logo" />
              <img src="/logos/empirerealestate.webp" alt="Empire Real Estate" className="color-logo empire-logo" />
              <img src="/logos/reviva.webp" alt="reviva" className="color-logo" />
              <img src="/logos/ncmh.webp" alt="NCMH" className="color-logo ncmh-logo" />
              <img src="/logos/rcmc.webp" alt="RCMC" className="color-logo rcmc-logo" />
              <img src="/logos/rotana.webp" alt="Rotana" className="color-logo rotana-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="bg-gradient-to-b from-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-40 h-40 rounded-full mx-auto flex items-center justify-content overflow-hidden">
            <Image
              src="/picofme.webp"
              alt="Hussam Baaka"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
            </div>
          </div>

          <h2 className="flecha-hero-title-about text-white mb-8 leading-tight">
            Hi—I'm Hussam Baaka. I turn marketing<br />
            chaos into predictable growth systems.
          </h2>

          <div className="mb-8">
            <span className="text-cyan-400 text-lg font-medium">[ A note to growth-focused leaders ]</span>
          </div>

          <div className="space-y-6 work-sans-body-white leading-relaxed max-w-3xl mx-auto">
            <p>Your marketing team isn't lazy. Your strategy is just scattered.</p>

            <p>I've seen too many GCC companies burn through budgets on tactics that don't connect—social campaigns that don't convert, content that doesn't engage, and "brand awareness" that doesn't drive business.</p>

            <p>The problem isn't your people or your market. It's alignment.</p>

            <p>When your messaging, channels, and metrics all point toward the same business outcome, growth becomes predictable instead of accidental.</p>

            <p>I don't just audit what's broken. I rebuild marketing systems that turn investment into measurable pipeline growth.</p>

            <p>My approach combines deep GCC market knowledge with growth marketing frameworks that have scaled businesses from startup to market leader.</p>

            <p>At the end of the day, marketing should do one thing:</p>

            <p className="text-cyan-400 font-medium">Generate predictable, scalable business results you can bank on.</p>
          </div>

          <div className="mt-12">
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors">
              Discover My Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="bg-custom-blue py-20 text-white">
        <div ref={servicesContainerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side */}
            <div>
              <div 
                ref={leftHeadingRef}
                className={`${isSticky ? 'is-sticky-active' : ''} ${shouldFadeOut ? 'services-heading-fade' : ''}`}
                style={stickyStyles}
              >
                <h2 className="services-main-heading leading-tight">
                  3 ways I help you<br />
                  <span className="services-main-heading-accent">scale faster.</span>
                </h2>
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-12">
              {/* Service 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="services-number mr-4">01</div>
                  <h3 className="services-title">Marketing Strategy & Systems Audit</h3>
                </div>
                <p className="services-description mb-6 leading-relaxed">
                  Deep-dive analysis of your current marketing stack, messaging, and conversion paths. Get a complete roadmap to fix what's leaking revenue.
                </p>
                <button className="services-button">
                  Book Audit
                </button>
              </div>

              {/* Service 2 */}
             <div>
                <div className="flex items-center mb-4">
                  <div className="services-number mr-4">02</div>
                  <h3 className="services-title">Growth Marketing Implementation</h3>
                </div>
                <p className="services-description mb-6 leading-relaxed">
                  Hands-on execution of data-driven campaigns, conversion optimization, and marketing automation that turns leads into customers at scale.
                </p>
                <button className="services-button">
                  Book Consultation
                </button>
              </div>

              {/* Service 3 */}
              <div ref={thirdServiceRef}>
                <div className="flex items-center mb-4">
                  <div className="services-number mr-4">03</div>
                  <h3 className="services-title">Marketing Team Training & Optimization</h3>
                </div>
                <p className="services-description mb-6 leading-relaxed">
                  Transform your internal marketing team with frameworks, processes, and skills that deliver consistent results without constant oversight.
                </p>
                <button className="services-button">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={portfolioRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="flecha-section-heading mb-4">
              Recent Client Results
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 - Shiftat */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 mb-4 transition-transform group-hover:scale-105 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/picofme.webp"
                    alt="Hussam Baaka"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-80 mb-2">Shiftat</div>
                  <div className="text-2xl font-bold mb-4">187%</div>
                  <div className="text-lg">Lead Quality Increase</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                From Generic Ads to Qualified Pipeline
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="inline ml-2"
                />
              </h3>
              <p className="work-sans-body text-gray-600">
                Transformed Shiftat's lead gen from quantity-focused to quality-driven, resulting in 3x more qualified opportunities and 40% shorter sales cycles.
              </p>
            </div>

            {/* Case Study 2 - Influence */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 mb-4 transition-transform group-hover:scale-105 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/picofme.webp"
                    alt="Hussam Baaka"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-80 mb-2">Influence</div>
                  <div className="text-2xl font-bold mb-4">$2.1M</div>
                  <div className="text-lg">Revenue Attributed</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                Marketing ROI That Actually Tracks
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="inline ml-2"
                />
              </h3>
              <p className="work-sans-body text-gray-600">
                Built complete attribution system for Influence, connecting every marketing dollar to actual sales revenue. Finally proved marketing's value to the C-suite.
              </p>
            </div>

            {/* Case Study 3 - Estater */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 mb-4 transition-transform group-hover:scale-105 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/picofme.webp"
                    alt="Hussam Baaka"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-80 mb-2">Estater</div>
                  <div className="text-2xl font-bold mb-4">340%</div>
                  <div className="text-lg">Conversion Lift</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                When Compliance Meets Conversion
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="inline ml-2"
                />
              </h3>
              <p className="work-sans-body text-gray-600">
                Redesigned entire customer onboarding experience for Estater, balancing regulatory requirements with user experience. Result: highest conversion rates in company history.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-4">
              <div className="flex items-center space-x-1 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="flecha-rating-text">Perfect 5.0 Rating</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="flecha-projects-text">40+ Projects</span>
            </div>
            <h2 className="flecha-testimonial-heading mb-4">
              What Clients Say About My Work
            </h2>
            <p className="flecha-testimonial-description max-w-2xl mx-auto">
              Real feedback from clients who've experienced measurable results from strategic marketing work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 - Shiftat */}
            <div className="testimonial-card-v2">
              <div className="testimonial-header-v2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a href="https://sa.linkedin.com/in/abdullahabalkhail" target="_blank" rel="noopener noreferrer" className="verified-badge">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verify</span>
                  </a>
                </div>
                <div className="project-type">Social Media Marketing</div>
              </div>
              
              <blockquote className="testimonial-quote-v2">
                "Talented writer, passionate, motivated, goes the extra mile to deliver excellent work. Will work with him again."
              </blockquote>
              
              <div className="testimonial-footer-v2">
                <div className="client-info-v2">
                  <div className="client-photo-v2">
                    <Image
                      src="/clientsphotos/abdullahabalkhail.webp"
                      alt="Abdullah Aballkhail"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="client-name-v2">Abdullah Aballkhail</div>
                    <div className="client-company-v2">Shiftat</div>
                    <div className="client-location-v2">🇸🇦 Saudi Arabia</div>
                  </div>
                </div>
                <div className="company-logo-v2">
                  <img src="/logos/shiftat.webp" alt="Shiftat" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Empire Real Estate */}
            <div className="testimonial-card-v2">
              <div className="testimonial-header-v2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a href="https://www.linkedin.com/in/raufi" target="_blank" rel="noopener noreferrer" className="verified-badge">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verify</span>
                  </a>
                </div>
                <div className="project-type">Content Marketing</div>
              </div>
              
              <blockquote className="testimonial-quote-v2">
                "High quality work, excellent communication, meets every deadline. His work was a pleasure to collaborate with."
              </blockquote>
              
              <div className="testimonial-footer-v2">
                <div className="client-info-v2">
                  <div className="client-photo-v2">
                    <Image
                      src="/clientsphotos/shahidraufi.webp"
                      alt="Shahid Raufi"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="client-name-v2">Shahid Raufi</div>
                    <div className="client-company-v2">Empire Real Estate</div>
                    <div className="client-location-v2">🇶🇦 Qatar</div>
                  </div>
                </div>
                <div className="company-logo-v2">
                  <img src="/logos/empirerealestate.webp" alt="Empire Real Estate" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Al Nahdi */}
            <div className="testimonial-card-v2">
              <div className="testimonial-header-v2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a href="https://www.linkedin.com/in/aya-badr-1878921ba/" target="_blank" rel="noopener noreferrer" className="verified-badge">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verify</span>
                  </a>
                </div>
                <div className="project-type">Email Marketing</div>
              </div>
              
              <blockquote className="testimonial-quote-v2">
                "Amazing to work with. Great communication and skills. He delivered more than requested for best quality."
              </blockquote>
              
              <div className="testimonial-footer-v2">
                <div className="client-info-v2">
                  <div className="client-photo-v2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">AB</span>
                    </div>
                  </div>
                  <div>
                    <div className="client-name-v2">Aya Badr</div>
                    <div className="client-company-v2">Al Nahdi</div>
                    <div className="client-location-v2">🇸🇦 Saudi Arabia</div>
                  </div>
                </div>
                <div className="company-logo-v2">
                  <img src="/logos/alnahdi.webp" alt="Al Nahdi" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Testimonial 4 - Rasya */}
            <div className="testimonial-card-v2">
              <div className="testimonial-header-v2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className="verified-badge">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verify</span>
                  </a>
                </div>
                <div className="project-type">Brand Marketing</div>
              </div>
              
              <blockquote className="testimonial-quote-v2">
                "Good work on business profile writing. Top communication, met deadlines, and strong skills throughout."
              </blockquote>
              
              <div className="testimonial-footer-v2">
                <div className="client-info-v2">
                  <div className="client-photo-v2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">MA</span>
                    </div>
                  </div>
                  <div>
                    <div className="client-name-v2">Mohammed Alowais</div>
                    <div className="client-company-v2">Rasya</div>
                    <div className="client-location-v2">🇸🇦 Saudi Arabia</div>
                  </div>
                </div>
                <div className="company-logo-v2">
                  <div className="text-gray-400 text-sm font-semibold">RASYA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Hayat Muhamedya */}
            <div className="testimonial-card-v2">
              <div className="testimonial-header-v2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className="verified-badge">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verify</span>
                  </a>
                </div>
                <div className="project-type">Creative Marketing</div>
              </div>
              
              <blockquote className="testimonial-quote-v2">
                "Working with Hussam was relaxing. He understood what was needed, delivered before deadline and felt like part of the team."
              </blockquote>
              
              <div className="testimonial-footer-v2">
                <div className="client-info-v2">
                  <div className="client-photo-v2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">JA</span>
                    </div>
                  </div>
                  <div>
                    <div className="client-name-v2">Jawhrah Altuwaijri</div>
                    <div className="client-company-v2">Hayat Muhamedya</div>
                    <div className="client-location-v2">🇸🇦 Saudi Arabia</div>
                  </div>
                </div>
                <div className="company-logo-v2">
                  <img src="/logos/hayatmohamadia.webp" alt="Hayat Muhamedya" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Testimonial 6 - Consultant */}
            <div className="testimonial-card-v2">
              <div className="testimonial-header-v2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a href="https://www.linkedin.com/in/asma-rjoub-ba3748a5" target="_blank" rel="noopener noreferrer" className="verified-badge">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verify</span>
                  </a>
                </div>
                <div className="project-type">Digital Marketing</div>
              </div>
              
              <blockquote className="testimonial-quote-v2">
                "Very Professional, Delivery on Time, Communication Perfect. Overall extremely recommended."
              </blockquote>
              
              <div className="testimonial-footer-v2">
                <div className="client-info-v2">
                  <div className="client-photo-v2">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold text-sm">AR</span>
                    </div>
                  </div>
                  <div>
                    <div className="client-name-v2">Asma Rjoub</div>
                    <div className="client-company-v2">Consultant</div>
                    <div className="client-location-v2">🇸🇦 Saudi Arabia</div>
                  </div>
                </div>
                <div className="company-logo-v2">
                  <div className="text-gray-400 text-sm font-semibold">CONSULTANT</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="flecha-verification-text mr-3">All reviews verified on Upwork</span>
              <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className="flecha-view-all-text hover:text-blue-800 transition-colors">View All →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12 mb-16">
            <h2 className="flecha-section-heading leading-tight">
              <span className="text-custom-blue">Stop guessing</span><br />
              what's working.
            </h2>

            <h2 className="flecha-section-heading leading-tight">
              <span className="text-custom-blue">Stop explaining</span><br />
              marketing spend.
            </h2>

            <h2 className="flecha-section-heading leading-tight">
              <span className="text-custom-blue">Start scaling</span><br />
              with confidence.
            </h2>
          </div>

          <div className="mb-8">
            <Image
              src="https://ext.same-assets.com/3287453319/3126314943.svg"
              alt="Arrow down"
              width={48}
              height={48}
              className="mx-auto"
            />
          </div>

          <h3 className="home_header_subheading mb-8">Ready to grow predictably?</h3>

          <p className="work-sans-body mb-8 leading-relaxed">
            Get a free 30-minute strategy session where we'll identify the biggest growth opportunities in your current marketing approach.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <button
              type="submit"
              className="subscribe-button w-full"
            >
              Contact
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <span className="text-xl font-semibold">Hussam Baaka</span>
              <button className="flex items-center text-gray-400 hover:text-white">
                Resources
                <Image
                  src="https://ext.same-assets.com/3287453319/305373772.svg"
                  alt="External link"
                  width={16}
                  height={16}
                  className="ml-2 filter invert"
                />
              </button>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">© 2024 Hussam Baaka</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">More About Me</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="https://ext.same-assets.com/3287453319/1536601012.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="filter invert"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="https://ext.same-assets.com/3287453319/51193599.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="filter invert"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}