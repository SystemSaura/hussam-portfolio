'use client';

import { useState, useEffect, useRef } from 'react';
import '../globals.css';
import '../home.css';

export default function SEOSpecialistPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formStatus, setFormStatus] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle cursor movement
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Header hide/show
      if (scrollTop > lastScrollY && scrollTop > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => {
        setFormStatus('');
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const projectInput = document.getElementById('project') as HTMLTextAreaElement | null;
        
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (projectInput) projectInput.value = '';
      }, 2000);
    }, 2000);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="portfolio">
      {/* Custom Cursors */}
      {!isMobile && (
        <>
          <div 
            ref={cursorRef}
            className="cursor"
            style={{ 
              left: `${cursorPosition.x}px`, 
              top: `${cursorPosition.y}px` 
            }}
          />
          <div 
            ref={cursorFollowerRef}
            className="cursor-follower"
            style={{ 
              left: `${cursorPosition.x - 20}px`, 
              top: `${cursorPosition.y - 20}px` 
            }}
          />
        </>
      )}

      {/* Scroll Progress */}
      <div className="scroll-indicator">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Header */}
      <header className={`header ${headerVisible ? '' : 'hidden'}`}>
        <nav className="nav">
          <div className="logo">
            <a href="/">Hussam Baaka</a>
          </div>
          <ul className="nav-menu">
  <li><a href="/" className="nav-link">Home</a></li>
  <li><a href="/social-media-manager" className="nav-link">Social Media</a></li>
  <li><a href="/marketing-specialist" className="nav-link">Marketing</a></li>
  <li><a href="/copywriter" className="nav-link">Copywriting</a></li>
  <li><a href="/seo-specialist" className="nav-link">SEO</a></li>
  <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
</ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-bg"></div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Get Found on Google</h1>
              <p className="hero-subtitle">Expert SEO Specialist</p>
              <p className="hero-description">
                Stop being invisible online. I get your business ranking on Google's first page so customers can actually find you. Proven SEO strategies that drive real organic traffic and qualified leads.
              </p>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                <span>Rank Higher on Google</span>
                <div className="button-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className="hero-visual">
              <div className="impact-composition">
                <div className="impact-number">Page 1</div>
                <div className="impact-label">Google Rankings</div>
                <div className="impact-metrics">
                  <div className="impact-metric">
                    <div className="metric-value">300%</div>
                    <div className="metric-label">Traffic Growth</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">50+</div>
                    <div className="metric-label">Keywords</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">Top 3</div>
                    <div className="metric-label">Position</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="services">
          <div className="services-content">
            <h2 className="fade-in">SEO Success Story</h2>
            
            {/* Shiftat Case Study - SEO Focus */}
            <div className="case-study-container fade-in" style={{ maxWidth: '1000px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '3rem', marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '25px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                  SEO TRANSFORMATION SUCCESS
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>
                  How Shiftat Dominates Google Search
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Through strategic SEO optimization and content-driven rankings
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Page 1</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Google Rankings</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>300%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Traffic Increase</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>50+</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Target Keywords</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Top 3</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Position Average</div>
                </div>
              </div>

              <div style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>The Challenge:</strong> Shiftat needed to rank for competitive Arabic HR keywords and capture organic search traffic from business owners actively looking for recruitment solutions in Saudi Arabia.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>My SEO Strategy:</strong> I implemented a comprehensive SEO approach combining technical optimization, strategic keyword targeting, and high-quality Arabic content that Google loves to rank.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>Key SEO Tactics:</strong>
                  <br />• Keyword research targeting high-intent Arabic search terms
                  <br />• Technical SEO optimization for faster loading and better UX  
                  <br />• Content strategy with 50+ SEO-optimized blog articles
                  <br />• Local SEO optimization for Saudi Arabia market
                </p>
                <p>
                  <strong>The Results:</strong> Shiftat now dominates Google search for HR and recruitment keywords in Saudi Arabia. The SEO strategy directly contributes to their organic lead generation and market leadership position.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '16px', borderLeft: '4px solid #667eea' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic', margin: 0 }}>
                  "The SEO strategy didn't just improve rankings—it established Shiftat as the go-to resource that customers find first when searching for AI recruitment solutions in Saudi Arabia."
                </p>
              </div>
            </div>

            {/* Other Client Examples */}
            <div className="services-rows">
              <h3 style={{ textAlign: 'center', color: 'white', fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>More SEO Success Stories</h3>
              
              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">01</div>
                  <h3 className="service-title">Real Estate Portfolio - Local SEO</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Optimized SEO for Goodwill, Akkar, and Empire Real Estate. Increased their visibility for location-based property searches and drove more qualified buyer inquiries through organic traffic.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">02</div>
                  <h3 className="service-title">Healthcare Content - Medical SEO</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Created SEO-optimized health and wellness content for Rehabs Club and MindTales. Built authority through informational articles that rank high and attract patients seeking treatment.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">03</div>
                  <h3 className="service-title">Education Sector - Academic SEO</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Optimized websites for Hayat Mohamadia and Maarif Schools. Improved their search rankings for educational programs and increased enrollment inquiries through organic search.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">04</div>
                  <h3 className="service-title">Government Projects - Public SEO</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Enhanced SEO for KAPSARC research publications and Makkah Bus transportation info. Made government resources more discoverable for citizens and researchers.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="about">
          <div className="about-content fade-in">
            <h2>My SEO Approach</h2>
            <p>
              <strong>Keyword Research:</strong> I find the exact terms your customers search for - both in Arabic and English. No guesswork, just data-driven keyword targeting.
            </p>
            <p>
              <strong>Technical SEO:</strong> Fast loading, mobile-friendly, structured properly. I fix the technical issues that prevent Google from ranking your site.
            </p>
            <p>
              <strong>Content Strategy:</strong> High-quality content that answers customer questions and builds authority. Content that ranks and converts visitors into customers.
            </p>
            <p>
              <strong>Local SEO for GCC:</strong> Optimized for Saudi Arabia, UAE, and GCC markets. I understand local search behavior and Arabic SEO requirements.
            </p>
          </div>
          <div className="stats fade-in">
            <div className="stat">
              <div className="stat-number">Page 1</div>
              <div className="stat-label">Google Rankings</div>
            </div>
            <div className="stat">
              <div className="stat-number">300%</div>
              <div className="stat-label">Traffic Increases</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Keywords Optimized</div>
            </div>
            <div className="stat">
              <div className="stat-number">Bilingual</div>
              <div className="stat-label">Arabic & English</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="fade-in">Ready to Rank Higher?</h2>
            <p className="fade-in">
              Let's discuss your SEO goals. I'll show you exactly how to get your business found by customers who are actively searching for what you offer.
            </p>
            <div className="contact-form fade-in">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="project">Tell Me About Your SEO Needs</label>
                <textarea 
                  id="project" 
                  name="project" 
                  rows={5}
                  placeholder="What keywords do you want to rank for? Are customers finding you on Google? What's your biggest SEO challenge?"
                />
              </div>
              <button onClick={handleSubmit} className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
                {!formStatus && "Let's Improve Your Rankings"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}