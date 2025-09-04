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
            {/* <button className="nav-login-button-centered hidden sm:block">My Work</button> */}
            {/* Commented out for future use when full portfolio page is ready */}
            <button className="nav-button-strategy">
              Book Consultation
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
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className="subscribe-button w-full min-w-max whitespace-nowrap h-12"
                >
                  Book Consultation
                </button>
                <button
                  type="button"
                  className="nav-button-strategy w-full min-w-max whitespace-nowrap h-12"
                >
                  Discover My Work
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
            <div className="logo-grid-container">
              {/* Row 1: 3 lighter logos + 2 heavier logos for balance */}
              <div className="logo-row">
                <img src="/Logos/shiftat.webp" alt="Shiftat" className="color-logo shiftat-logo" />
                <img src="/Logos/empirerealestate.webp" alt="Empire Real Estate" className="color-logo empire-logo" />
                <img src="/Logos/kapsarc.webp" alt="KAPSARC" className="color-logo" />
                <img src="/Logos/alnahdi.webp" alt="Al Nahdi" className="color-logo alnahdi-logo" />
                <img src="/Logos/saeq.webp" alt="SAEQ" className="color-logo" />
              </div>
              
              {/* Row 2: Balanced visual weight distribution */}
              <div className="logo-row">
                <img src="/Logos/abudawood.webp" alt="Abudawood" className="color-logo abudawood-logo" />
                <img src="/Logos/reviva.webp" alt="reviva" className="color-logo" />
                <img src="/Logos/ncmh.webp" alt="NCMH" className="color-logo ncmh-logo" />
                <img src="/Logos/rcmc.webp" alt="RCMC" className="color-logo rcmc-logo" />
                <img src="/Logos/rotana.webp" alt="Rotana" className="color-logo rotana-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="bg-custom-dark-blue py-20 text-white">
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
              Hi. I'm Hussam Baaka. I make every marketing<br />
              Riyal / Dirham work harder for your growth.
            </h2>
          <div className="mb-8">
            <span className="text-cyan-400 text-11px font-medium">[ A note to growth-focused leaders ]</span>
          </div>

          <div className="space-y-6 work-sans-body-white leading-relaxed max-w-3xl mx-auto">
            <p>Your marketing team isn't lazy. Your strategy is just scattered.</p>

            <p>I've seen too many GCC companies burn through budgets on campaigns that don't convert, content that doesn't engage, and "brand awareness" that doesn't drive business.</p>

            <p>The problem isn't your people or your market. It's alignment.</p>

            <p>When your messaging, channels, and metrics all point toward the same business outcome, growth becomes predictable instead of accidental.</p>

            <p>I don't just audit what's broken. I rebuild marketing systems that turn investment into measurable pipeline growth.</p>

            <p>My approach combines deep GCC market knowledge with growth marketing frameworks that have scaled businesses from startup to market leader.</p>

            <p>At the end of the day, marketing should do one thing:</p>

            <p className="text-cyan-400 font-medium">Generate predictable, scalable business results you can bank on.</p>
         
          </div>

          <div className="mt-12">
            {/* <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full font-medium transition-colors">
              Discover My Work
            </button> */}
            {/* Commented out for future use when full portfolio page is ready */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="bg-custom-blue py-20 text-white">
        <div ref={servicesContainerRef} className="services_container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side */}
            <div className="services-heading-wrapper">
              <div 
                ref={leftHeadingRef}
                className={`services-heading-content ${isSticky ? 'is-sticky-active' : ''} ${shouldFadeOut ? 'services-heading-fade' : ''}`}
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
                <div className="services-number mb-4">01</div>
                <h3 className="services-title mb-4">Marketing Strategy and Systems Audit Done For You</h3>
                <p className="services-description mb-6 leading-relaxed">
                  Deep-dive analysis of your current marketing stack, messaging, and conversion paths. Get a complete roadmap to fix what's leaking revenue.
                </p>
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className="services-button"
                >
                  Book Audit
                </button>
              </div>

              {/* Service 2 */}
             <div>
                <div className="services-number mb-4">02</div>
                <h3 className="services-title mb-4">Growth Marketing Implementation and Monitoring</h3>
                <p className="services-description mb-6 leading-relaxed">
                  Hands-on execution of data-driven campaigns, conversion optimization, and marketing automation that turns leads into customers at scale.
                </p>
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className="services-button"
                >
                  Book Consultation
                </button>
              </div>

              {/* Service 3 */}
              <div ref={thirdServiceRef}>
                <div className="services-number mb-4">03</div>
                <h3 className="services-title mb-4">Marketing Team Training and Optimization</h3>
                <p className="services-description mb-6 leading-relaxed">
                  Transform your internal marketing team with frameworks, processes, and skills that deliver consistent results without constant oversight.
                </p>
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className="services-button"
                >
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
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
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
            Get a free 30-minute session to identify your biggest growth opportunities.
          </p>

          <div className="max-w-md mx-auto space-y-4">
            <button
              onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
              className="subscribe-button w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <Link href="/" className="text-xl font-semibold">Hussam Baaka</Link>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">© 2025 Saura Agency LLC</span>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}