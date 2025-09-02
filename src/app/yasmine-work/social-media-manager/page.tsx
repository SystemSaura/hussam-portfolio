'use client';

import { useState, useEffect, useRef } from 'react';
import '../globals.css';
import '../home.css';

export default function SocialMediaManagerPage() {
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
              <h1 className="hero-title">Social Media That Sells</h1>
              <p className="hero-subtitle">Expert Social Media Manager</p>
              <p className="hero-description">
                Stop wasting money on social media that doesn't work. I create content that gets followers, engagement, and most importantly - customers. From Instagram to LinkedIn, I know what works in the GCC.
              </p>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                <span>Grow Your Following</span>
                <div className="button-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className="hero-visual">
              <div className="impact-composition">
                <div className="impact-number">8K+</div>
                <div className="impact-label">Followers Generated</div>
                <div className="impact-metrics">
                  <div className="impact-metric">
                    <div className="metric-value">15+</div>
                    <div className="metric-label">Platforms</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">50+</div>
                    <div className="metric-label">Accounts</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">200%</div>
                    <div className="metric-label">Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="services">
          <div className="services-content">
            <h2 className="fade-in">Success Story</h2>
            
            {/* Shiftat Case Study - Social Media Focus */}
            <div className="case-study-container fade-in" style={{ maxWidth: '1000px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '3rem', marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '25px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                  HR TECH SUCCESS
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>
                  How Shiftat Built 8,000+ Followers
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Through strategic social media management and content creation
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>8,000+</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>X (Twitter) Followers</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>4,000+</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>LinkedIn Followers</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>200%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Engagement Growth</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Daily</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Content Creation</div>
                </div>
              </div>

              <div style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>The Challenge:</strong> Shiftat needed to establish thought leadership in Saudi Arabia's competitive HR tech space and build a community of engaged business owners and HR professionals.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>My Strategy:</strong> I created a comprehensive social media strategy focusing on valuable content that educated the market about AI recruitment while positioning Shiftat as the industry expert.
                </p>
                <p>
                  <strong>The Results:</strong> Built two thriving social media communities - 8,000+ followers on X and 4,000+ on LinkedIn. Most importantly, these followers convert into qualified leads and customers, directly contributing to Shiftat's growth as Saudi Arabia's leading AI recruitment platform.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '16px', borderLeft: '4px solid #667eea' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic', margin: 0 }}>
                  "The strategic approach to social media didn't just generate followers—it established Shiftat as the definitive AI recruitment solution in Saudi Arabia and built a community that drives real business results."
                </p>
              </div>
            </div>

            {/* Other Client Examples */}
            <div className="services-rows">
              <h3 style={{ textAlign: 'center', color: 'white', fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>More Social Media Wins</h3>
              
              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">01</div>
                  <h3 className="service-title">Reviva Recycling - Environmental Impact</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Built their social media presence from zero to a engaged community of environmentally conscious followers. Created content that educated about recycling while driving app downloads and user engagement.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">02</div>
                  <h3 className="service-title">Makkah Bus - Government Transportation</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Managed social media for Makkah's public transportation system in both Arabic and English. Increased citizen engagement and improved public awareness of bus routes and schedules.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">03</div>
                  <h3 className="service-title">Abudawood Logistics - B2B Growth</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Created LinkedIn strategy that positioned them as logistics experts. Generated quality B2B leads through educational content about supply chain solutions and industry insights.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">04</div>
                  <h3 className="service-title">Syahya Tourism - Travel & Culture</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Built visual-first social media strategy showcasing Saudi Arabia's hidden gems. Increased bookings through Instagram and Facebook with stunning visuals and compelling travel stories.
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
            <h2>What You Get</h2>
            <p>
              <strong>Content Strategy:</strong> I create content that your audience actually wants to see - not just pretty pictures, but posts that drive engagement and sales.
            </p>
            <p>
              <strong>Platform Expertise:</strong> Instagram, LinkedIn, X (Twitter), Facebook - I know what works on each platform and how to adapt your message for maximum impact.
            </p>
            <p>
              <strong>Arabic & English:</strong> Bilingual content that speaks to your GCC audience in their language, respecting local culture and values.
            </p>
            <p>
              <strong>Results You Can Track:</strong> More followers, higher engagement, and most importantly - more customers and sales from social media.
            </p>
          </div>
          <div className="stats fade-in">
            <div className="stat">
              <div className="stat-number">8K+</div>
              <div className="stat-label">Followers Generated</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Platforms Managed</div>
            </div>
            <div className="stat">
              <div className="stat-number">200%</div>
              <div className="stat-label">Average Growth</div>
            </div>
            <div className="stat">
              <div className="stat-number">Daily</div>
              <div className="stat-label">Content Creation</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="fade-in">Ready to Grow Your Following?</h2>
            <p className="fade-in">
              Let's talk about your social media goals. I'll show you exactly how to turn your social media into a customer-generating machine.
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
                <label htmlFor="project">Tell Me About Your Social Media Goals</label>
                <textarea 
                  id="project" 
                  name="project" 
                  rows={5}
                  placeholder="Which platforms do you use? Who are your ideal customers? What's your biggest social media challenge?"
                />
              </div>
              <button onClick={handleSubmit} className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
                {!formStatus && "Let's Build Your Following"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}