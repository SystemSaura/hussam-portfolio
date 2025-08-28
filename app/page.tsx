'use client';

import { useState, useEffect, useRef } from 'react';
import './home.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
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

  // Handle loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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
    if (isLoading) return;

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
  }, [isLoading]);

  // Handle form submission
  const handleSubmit = () => {
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => {
        setFormStatus('');
        // Clear form fields with proper type checking
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

  const services: Service[] = [
    {
      icon: 'strategy',
      title: 'Marketing Strategy',
      description: "I build marketing plans that work. No fluff, just clear steps to reach your customers and grow your business."
    },
    {
      icon: 'social',
      title: 'Social Media Marketing',
      description: 'I create social posts that get noticed and drive sales. From Instagram to LinkedIn, I know what works in the GCC.'
    },
    {
      icon: 'writing',
      title: 'Content Writing',
      description: "I write copy that sells. Whether it's your website, emails, or ads - I make your message clear and convincing."
    },
    {
      icon: 'translate',
      title: 'Arabic Marketing',
      description: 'I speak your market. Perfect Arabic content that connects with GCC audiences and respects local culture.'
    },
    {
      icon: 'seo',
      title: 'SEO & Online Visibility',
      description: 'I get your business found on Google. SEO content that ranks high and brings in real customers.'
    },
    {
      icon: 'brand',
      title: 'Brand Building',
      description: 'I help you stand out from competitors. Clear messaging that makes customers choose you over others.'
    }
  ];
  
  const stats = [
    { number: '50+', label: 'GCC Businesses Helped' },
    { number: '200+', label: 'Marketing Campaigns' },
    { number: '15+', label: 'Industries Covered' },
    { number: '5+', label: 'Years in GCC Markets' }
  ];

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

      {/* Loader */}
      {isLoading && (
        <div className="loader">
          <div className="loader-text">Hussam</div>
        </div>
      )}

      {/* Scroll Progress */}
      <div className="scroll-indicator">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Header */}
      <header className={`header ${headerVisible ? '' : 'hidden'}`}>
        <nav className="nav">
          <div className="logo">Hussam Baaka</div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="nav-link">Services</button></li>
            <li><button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button></li>
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
              <h1 className="hero-title">Marketing That Actually Works</h1>
              <p className="hero-subtitle">GCC Marketing Expert</p>
              <p className="hero-description">
                Your marketing should bring customers, not just likes. I help GCC businesses get real results - more sales, stronger brands, better ROI.
              </p>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                <span>Grow Your Business</span>
                <div className="button-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className="hero-visual">
              <div className="abstract-composition">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
                <div className="connection-lines">
                  <svg width="100%" height="100%" viewBox="0 0 400 400">
                    <path className="animated-path" d="M50,150 Q200,50 350,200 T300,350" stroke="url(#gradient1)" strokeWidth="2" fill="none"/>
                    <path className="animated-path delay-1" d="M100,100 Q250,200 200,300" stroke="url(#gradient2)" strokeWidth="1.5" fill="none"/>
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.8)"/>
                        <stop offset="100%" stopColor="rgba(255,255,255,0.2)"/>
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(102,126,234,0.6)"/>
                        <stop offset="100%" stopColor="rgba(118,75,162,0.3)"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="capability-tags">
                  <span className="capability-tag">Results</span>
                  <span className="capability-tag">Growth</span>
                  <span className="capability-tag">ROI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="about-content fade-in">
            <h2>Why Choose Me</h2>
            <p>
              I know the GCC market inside out. For 5+ years, I've helped businesses across Saudi Arabia, UAE, and the Gulf region get more customers and grow faster.
            </p>
            <p>
              My marketing works because I understand your customers. I know what makes them buy, what makes them trust, and what makes them choose you over competitors.
            </p>
            <p>
              <strong>My promise:</strong> I deliver results, not excuses. Your success is how I measure mine.
            </p>
          </div>
          <div className="stats fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="services-content">
            <h2 className="fade-in">How I Help You Grow</h2>
            <div className="services-rows">
              {services.map((service, index) => (
                <div 
                key={index} 
                className="service-row fade-in" style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="row-header">
                    <div className="service-number">0{index + 1}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <div className="expand-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="row-content">
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="row-divider"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="portfolio-content">
            <h2 className="fade-in">My Results</h2>
            <p className="portfolio-intro fade-in">
              Real businesses, real growth. Here's how I've helped GCC companies win more customers.
            </p>
            
            {/* Portfolio Stats */}
            <div className="portfolio-stats fade-in">
              <div className="portfolio-stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">Successful Campaigns</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Growing Businesses</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Industries</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-number">6</div>
                <div className="stat-label">Core Services</div>
              </div>
            </div>

            {/* Featured Case Studies */}
            <div className="featured-work">
              <h3 className="fade-in">Client Wins</h3>
              <div className="case-studies-grid">
                <div className="case-study-card fade-in">
                  <div className="case-study-header">
                    <div className="industry-badge">Healthcare</div>
                    <div className="service-tags">
                      <span>Content Strategy</span>
                      <span>Email Marketing</span>
                    </div>
                  </div>
                  <h4>Al Nahdi Pharmacy</h4>
                  <p>Built their content strategy and email campaigns. Helped them speak to customers in both Arabic and English across the GCC.</p>
                  <div className="case-study-footer">
                    <span className="project-type">Multi-Market Campaign</span>
                  </div>
                </div>

                <div className="case-study-card fade-in">
                  <div className="case-study-header">
                    <div className="industry-badge">HR Tech</div>
                    <div className="service-tags">
                      <span>Social Media</span>
                      <span>LinkedIn</span>
                    </div>
                  </div>
                  <h4>Shiftat HR Platform</h4>
                  <p>Took them from unknown to industry leaders on LinkedIn. Built their social presence and positioned them as the go-to HR solution.</p>
                  <div className="case-study-footer">
                    <span className="project-type">Brand Building</span>
                  </div>
                </div>

                <div className="case-study-card fade-in">
                  <div className="case-study-header">
                    <div className="industry-badge">Real Estate</div>
                    <div className="service-tags">
                      <span>Website Copy</span>
                      <span>SEO</span>
                    </div>
                  </div>
                  <h4>Real Estate Portfolio</h4>
                  <p>Rewrote websites for Goodwill, Akkar, and Empire Real Estate. Made their properties sell faster with better copy.</p>
                  <div className="case-study-footer">
                    <span className="project-type">Sales-Focused Copy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="industry-expertise">
              <h3 className="fade-in">Industries I Know</h3>
              <div className="expertise-grid">
                <div className="expertise-item fade-in">
                  <h4>Healthcare</h4>
                  <p>Al Nahdi, Rehabs Club, MindTales, YCC & NCMH</p>
                </div>
                <div className="expertise-item fade-in">
                  <h4>Real Estate</h4>
                  <p>Goodwill, Akkar, Empire Real Estate</p>
                </div>
                <div className="expertise-item fade-in">
                  <h4>Education</h4>
                  <p>Hayat Mohamadia, Maarif Schools, Bonyan</p>
                </div>
                <div className="expertise-item fade-in">
                  <h4>Government</h4>
                  <p>KAPSARC, RCMC, Makkah Bus</p>
                </div>
                <div className="expertise-item fade-in">
                  <h4>Business Services</h4>
                  <p>Shiftat HR, SAEQ Logistics, Saudi Signs Media</p>
                </div>
                <div className="expertise-item fade-in">
                  <h4>Technology</h4>
                  <p>FieldBio Security, LDPlayer Gaming, Reviva Recycling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="fade-in">Ready to Grow?</h2>
            <p className="fade-in">
              Let&apos;s talk about your business goals. I&apos;ll show you exactly how marketing can help you get more customers and increase sales.
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
                <label htmlFor="project">Tell Me About Your Business</label>
                <textarea 
                  id="project" 
                  name="project" 
                  rows={5}
                  placeholder="What do you sell? Who are your customers? What's your biggest marketing challenge?"
                />
              </div>
              <button onClick={handleSubmit} className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
                {!formStatus && "Let's Talk Business"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}