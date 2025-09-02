'use client';

import { useState, useEffect, useRef } from 'react';
import '../globals.css';
import '../home.css';

export default function CopywriterPage() {
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
        <ul className="nav-menu">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/social-media-manager" className="nav-link">Social Media</a></li>
          <li><a href="/marketing-specialist" className="nav-link">Marketing</a></li>
          <li><a href="/copywriter" className="nav-link">Copywriting</a></li>
          <li><a href="/seo-specialist" className="nav-link">SEO</a></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-bg"></div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Words That Sell</h1>
              <p className="hero-subtitle">Expert Copywriter</p>
              <p className="hero-description">
                Your words should work as hard as you do. I write copy that turns visitors into customers, browsers into buyers, and prospects into profits. Clear, compelling, conversion-focused writing.
              </p>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                <span>Improve Your Copy</span>
                <div className="button-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className="hero-visual">
              <div className="impact-composition">
                <div className="impact-number">70+</div>
                <div className="impact-label">Articles Written</div>
                <div className="impact-metrics">
                  <div className="impact-metric">
                    <div className="metric-value">25+</div>
                    <div className="metric-label">Websites</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">15+</div>
                    <div className="metric-label">Industries</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">2</div>
                    <div className="metric-label">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="services">
          <div className="services-content">
            <h2 className="fade-in">Copywriting Success Story</h2>
            
            {/* Shiftat Case Study - Content/Copywriting Focus */}
            <div className="case-study-container fade-in" style={{ maxWidth: '1000px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '3rem', marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '25px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                  COPYWRITING SUCCESS
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>
                  How Content Made Shiftat the AI Leader
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Through strategic content writing and compelling copy
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>50+</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Blog Articles</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Complete</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Website Copy</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Email</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Campaigns</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Arabic</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>& English</div>
                </div>
              </div>

              <div style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>The Challenge:</strong> Shiftat needed compelling content that would educate the Saudi market about AI recruitment while building trust and positioning them as the industry authority.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>My Approach:</strong> I created a comprehensive content strategy with website copy, blog articles, email campaigns, and social media content that spoke directly to business owners' pain points and demonstrated Shiftat's value.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>Content Created:</strong>
                  <br />• 50+ educational blog articles about AI recruitment
                  <br />• Complete website copywriting and optimization
                  <br />• High-converting email campaign sequences
                  <br />• Arabic and English content for maximum reach
                </p>
                <p>
                  <strong>The Results:</strong> The content strategy established Shiftat as the thought leader in AI recruitment, generating consistent qualified leads and contributing directly to their position as Saudi Arabia's leading recruitment platform.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '16px', borderLeft: '4px solid #667eea' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic', margin: 0 }}>
                  "The strategic content didn't just generate traffic—it educated the market, built trust, and positioned Shiftat as the definitive AI recruitment solution that customers turn to first."
                </p>
              </div>
            </div>

            {/* Other Client Examples */}
            <div className="services-rows">
              <h3 style={{ textAlign: 'center', color: 'white', fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>More Copywriting Wins</h3>
              
              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">01</div>
                  <h3 className="service-title">Goodwill Real Estate - Sales Copy</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Rewrote their entire website with conversion-focused copy that highlights property benefits and drives inquiries. Clear, persuasive writing that turns visitors into qualified leads and property buyers.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">02</div>
                  <h3 className="service-title">Al Nahdi Pharmacy - Newsletter Content</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Created engaging newsletter content in both Arabic and English that drives customer engagement and pharmacy visits. Health tips, product features, and promotional content that customers actually read.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">03</div>
                  <h3 className="service-title">Rehabs Club - Health Content</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Wrote 20+ blog posts about wellness and rehabilitation that position Rehabs Club as the trusted health authority. Educational content that builds credibility and attracts patients seeking recovery solutions.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">04</div>
                  <h3 className="service-title">Empire Real Estate - Company Profiles</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Crafted compelling company profiles that showcase Empire's expertise and build trust with potential clients. Professional copy that differentiates them in the competitive real estate market.
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
            <h2>What I Write</h2>
            <p>
              <strong>Website Copy:</strong> Landing pages, sales pages, product descriptions - copy that converts visitors into customers. Every word chosen to guide readers toward action.
            </p>
            <p>
              <strong>Blog Articles & Content:</strong> Educational content that builds authority and attracts customers. SEO-optimized writing that ranks high and drives organic traffic.
            </p>
            <p>
              <strong>Email Campaigns:</strong> Sequences that nurture leads and drive sales. From welcome series to promotional campaigns - emails people actually want to read.
            </p>
            <p>
              <strong>Arabic & English:</strong> Bilingual copywriting that speaks to your GCC audience in their preferred language, respecting cultural nuances and local buying behaviors.
            </p>
          </div>
          <div className="stats fade-in">
            <div className="stat">
              <div className="stat-number">70+</div>
              <div className="stat-label">Articles Written</div>
            </div>
            <div className="stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Websites</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Industries</div>
            </div>
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Languages</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="fade-in">Ready for Better Copy?</h2>
            <p className="fade-in">
              Let's discuss your copywriting needs. I'll show you how the right words can transform your business and increase your sales.
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
                <label htmlFor="project">What Do You Need Written?</label>
                <textarea 
                  id="project" 
                  name="project" 
                  rows={5}
                  placeholder="Website copy? Blog articles? Email campaigns? Tell me about your copywriting project and goals."
                />
              </div>
              <button onClick={handleSubmit} className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
                {!formStatus && "Let's Write Something Great"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}