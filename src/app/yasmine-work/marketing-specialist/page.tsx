'use client';

import { useState, useEffect, useRef } from 'react';
import '../globals.css';
import '../home.css';

export default function MarketingSpecialistPage() {
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
              <h1 className="hero-title">Marketing That Gets Results</h1>
              <p className="hero-subtitle">Expert Marketing Strategist</p>
              <p className="hero-description">
                Stop throwing money at marketing that doesn't work. I create strategies that actually bring customers and increase sales. Data-driven, ROI-focused marketing for serious businesses.
              </p>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                <span>Increase Your Sales</span>
                <div className="button-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className="hero-visual">
              <div className="impact-composition">
                <div className="impact-number">100+</div>
                <div className="impact-label">Quality Leads</div>
                <div className="impact-metrics">
                  <div className="impact-metric">
                    <div className="metric-value">60%</div>
                    <div className="metric-label">Open Rate</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">5K+</div>
                    <div className="metric-label">Subscribers</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">90%</div>
                    <div className="metric-label">Time Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="services">
          <div className="services-content">
            <h2 className="fade-in">Marketing Success Story</h2>
            
            {/* Shiftat Case Study - Marketing Strategy Focus */}
            <div className="case-study-container fade-in" style={{ maxWidth: '1000px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '3rem', marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '25px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                  MARKETING STRATEGY SUCCESS
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>
                  How Shiftat Became Market Leader
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Through strategic digital marketing and data-driven growth
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>100+</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Quality Leads</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>60%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Email Open Rate</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>5,000+</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Subscribers</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>80%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Cost Reduction</div>
                </div>
              </div>

              <div style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>The Challenge:</strong> Shiftat needed to reach 1+ million business owners in Saudi Arabia's competitive recruitment market and build trust in AI-powered hiring solutions.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>My Strategy:</strong> I created a comprehensive digital marketing ecosystem with strategic funnels, targeted campaigns, and high-converting email sequences that guide prospects from awareness to decision.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>Key Tactics:</strong>
                  <br />• Google Ads targeting high-intent Arabic keywords
                  <br />• Content marketing funnel with 4-stage buyer journey
                  <br />• Email marketing with industry-leading 60% open rates  
                  <br />• Strategic lead magnets generating 100+ quality leads monthly
                </p>
                <p>
                  <strong>The Results:</strong> Shiftat transformed from startup to Saudi Arabia's leading AI recruitment platform. The marketing strategy directly contributed to placing 7,000+ Saudis annually and establishing market dominance.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '16px', borderLeft: '4px solid #667eea' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic', margin: 0 }}>
                  "The strategic approach to marketing didn't just generate leads—it established Shiftat as the definitive AI recruitment solution in Saudi Arabia and created sustainable, scalable growth."
                </p>
              </div>
            </div>

            {/* Other Client Examples */}
            <div className="services-rows">
              <h3 style={{ textAlign: 'center', color: 'white', fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>More Marketing Wins</h3>
              
              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">01</div>
                  <h3 className="service-title">KAPSARC - Government Research</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Developed comprehensive digital marketing strategy for Saudi Arabia's premier energy research center. Created content funnels that positioned KAPSARC as the leading voice in energy policy and research.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">02</div>
                  <h3 className="service-title">Al Nahdi Pharmacy - Healthcare Marketing</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Built email marketing campaigns and content strategy that drove customer engagement across the GCC. Created bilingual campaigns that increased customer retention and pharmacy visits.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">03</div>
                  <h3 className="service-title">SAEQ Logistics - B2B Strategy</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Created B2B marketing strategy that generated qualified leads for logistics services. Developed company positioning and messaging that differentiated SAEQ in competitive Saudi market.
                  </p>
                </div>
                <div className="row-divider"></div>
              </div>

              <div className="service-row fade-in">
                <div className="row-header">
                  <div className="service-number">04</div>
                  <h3 className="service-title">FieldBio Security - Tech Marketing</h3>
                  <div className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="row-content">
                  <p className="service-description">
                    Developed marketing strategy for biometric security solutions. Created educational content and lead generation campaigns that established FieldBio as trusted security partner.
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
            <h2>My Marketing Approach</h2>
            <p>
              <strong>Data-Driven Strategy:</strong> Every decision backed by data. I track what works, optimize what doesn't, and scale what succeeds. No guesswork.
            </p>
            <p>
              <strong>Complete Funnels:</strong> From awareness to purchase - I create marketing funnels that guide prospects through every step of the buying journey.
            </p>
            <p>
              <strong>ROI Focus:</strong> Marketing should make money, not spend it. I focus on strategies that deliver measurable returns on your investment.
            </p>
            <p>
              <strong>GCC Market Expertise:</strong> 10+ years understanding what motivates GCC customers to buy. I know the culture, language, and psychology that drives purchasing decisions.
            </p>
          </div>
          <div className="stats fade-in">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Quality Leads Monthly</div>
            </div>
            <div className="stat">
              <div className="stat-number">60%</div>
              <div className="stat-label">Email Open Rates</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Campaigns Managed</div>
            </div>
            <div className="stat">
              <div className="stat-number">90%</div>
              <div className="stat-label">Time Savings</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="fade-in">Ready to Scale Your Business?</h2>
            <p className="fade-in">
              Let's discuss your marketing challenges. I'll show you exactly how to build a marketing system that consistently brings quality leads and customers.
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
                <label htmlFor="project">Tell Me About Your Marketing Goals</label>
                <textarea 
                  id="project" 
                  name="project" 
                  rows={5}
                  placeholder="What's your current marketing challenge? What results are you looking for? How many leads do you need monthly?"
                />
              </div>
              <button onClick={handleSubmit} className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
                {!formStatus && "Let's Scale Your Business"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}