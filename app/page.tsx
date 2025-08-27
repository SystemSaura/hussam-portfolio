'use client';

import { useState, useEffect, useRef } from 'react';

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
      title: 'Strategic Content Planning',
      description: "I don't just create content—I architect comprehensive strategies that align with your business goals and audience needs."
    },
    {
      icon: 'social',
      title: 'Social Media Mastery',
      description: 'From viral posts to community building, I create social content that sparks conversations and builds loyal communities.'
    },
    {
      icon: 'writing',
      title: 'Premium Copywriting',
      description: "Every word matters. I craft copy that doesn't just inform—it persuades, inspires, and drives action."
    },
    {
      icon: 'translate',
      title: 'Arabic-English Bridge',
      description: 'Seamless translation that captures not just words, but cultural context, tone, and emotional resonance.'
    },
    {
      icon: 'seo',
      title: 'SEO Content Excellence',
      description: 'Content that ranks high and reads even better. I balance search optimization with human connection.'
    },
    {
      icon: 'brand',
      title: 'Brand Storytelling',
      description: 'From company profiles to case studies, I help businesses tell their story in ways that build trust and drive sales.'
    }
  ];

  const stats: Stat[] = [
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Crafting' },
    { number: '15+', label: 'Industries Mastered' },
    { number: '100%', label: 'Passion Driven' }
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
              <h1 className="hero-title">I Craft Stories That Sell</h1>
              <p className="hero-subtitle">Creative Content Architect for GCC Markets</p>
              <p className="hero-description">
                Hey there! I&apos;m Hussam, your go-to content strategist who transforms ideas into compelling narratives. 
                I don&apos;t just write content—I architect experiences that connect, convert, and captivate audiences across the GCC region.
              </p>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                <span>Let&apos;s Create Magic</span>
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
                  <span className="capability-tag">Strategy</span>
                  <span className="capability-tag">Growth</span>
                  <span className="capability-tag">Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="about-content fade-in">
            <h2>My Story</h2>
            <p>
              I believe every brand has a unique voice waiting to be discovered. Over the past 5+ years, 
              I&apos;ve helped businesses across the GCC region find their authentic voice and translate it into content that actually moves people.
            </p>
            <p>
              My approach isn&apos;t just about pretty words—it&apos;s about understanding your audience&apos;s pulse, 
              their desires, their pain points, and crafting messages that resonate on a deeper level. 
              Whether it&apos;s Arabic content that captures cultural nuances or English copy that converts globally, 
              I bring both linguistic expertise and strategic thinking to every project.
            </p>
            <p>
              <strong>My philosophy?</strong> No work left behind. I don&apos;t just deliver—I over-deliver, 
              because your success is my success.
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
            <h2 className="fade-in">What I Do Best</h2>
            <div className="services-rows">
              {services.map((service, index) => (
                <div key={index} className="service-row fade-in">
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

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2 className="fade-in">Ready to Start Something Amazing?</h2>
            <p className="fade-in">
              I&apos;m always excited to collaborate on projects that challenge creativity and drive real results. 
              Let&apos;s discuss how we can take your content strategy to the next level.
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
                <label htmlFor="project">Tell Me About Your Project</label>
                <textarea 
                  id="project" 
                  name="project" 
                  rows={5}
                  placeholder="What's your vision? What challenges are you facing? Let's start the conversation..."
                />
              </div>
              <button onClick={handleSubmit} className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' && 'Sending Magic... ✨'}
                {formStatus === 'sent' && 'Message Sent! 🎉'}
                {!formStatus && "Let's Make It Happen 🚀"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        .portfolio {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #0D0D0D;
          background: #F8F9FA;
          overflow-x: hidden;
        }

        /* Custom Cursor */
        .cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: #F15A24;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
          transform: translate(-50%, -50%);
        }

        .cursor-follower {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid #2D1B69;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.3s ease;
          opacity: 0.5;
          transform: translate(-50%, -50%);
        }

        /* Loading Animation */
        .loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #0D0D0D;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          transition: opacity 0.5s ease;
        }

        .loader-text {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          color: #F8F9FA;
          opacity: 0;
          animation: fadeInOut 2s ease-in-out;
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(248, 249, 250, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          transition: transform 0.3s ease;
        }

        .header.hidden {
          transform: translateY(-100%);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #2D1B69;
          position: relative;
          cursor: pointer;
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .logo:hover::after {
          width: 100%;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          background: none;
          border: none;
          color: #0D0D0D;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #F15A24;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::before {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          background-image: radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 0.95;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(50px);
          animation: slideUp 1s ease forwards;
          animation-delay: 0.5s;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 2rem;
          opacity: 0.95;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 1s ease forwards;
          animation-delay: 0.8s;
          letter-spacing: 0.3px;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.75;
          margin-bottom: 3rem;
          opacity: 0.9;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 1s ease forwards;
          animation-delay: 1.1s;
          font-weight: 400;
        }

        .hero-visual {
          position: relative;
          height: 600px;
          opacity: 0;
          transform: scale(0.8);
          animation: scaleIn 1s ease forwards;
          animation-delay: 1.4s;
        }

        .abstract-composition {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .orb-1 {
          width: 120px;
          height: 120px;
          top: 15%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 20%;
          animation: float 8s ease-in-out infinite;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 25%;
          animation: float 8s ease-in-out infinite;
          animation-delay: -6s;
        }

        .connection-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }

        .animated-path {
          stroke-dasharray: 5 10;
          animation: pathFlow 15s linear infinite;
        }

        .delay-1 {
          animation-delay: -5s;
        }

        @keyframes pathFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 100; }
        }

        .capability-tags {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .capability-tag {
          padding: 0.5rem 1.2rem;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          animation: tagGlow 4s ease-in-out infinite;
        }

        .capability-tag:nth-child(1) { animation-delay: 0s; }
        .capability-tag:nth-child(2) { animation-delay: 1.3s; }
        .capability-tag:nth-child(3) { animation-delay: 2.6s; }

        @keyframes tagGlow {
          0%, 100% { 
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);
            transform: translateY(0);
          }
          50% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
            transform: translateY(-3px);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        /* CTA Button */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.2rem 2.5rem;
          border-radius: 60px;
          border: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
        }

        .cta-button:hover .button-arrow {
          transform: translateX(5px);
        }

        .button-arrow {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .button-arrow svg {
          width: 20px;
          height: 20px;
        }

        /* About Section */
        .about {
          padding: 8rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: #2D1B69;
          font-weight: 600;
        }

        .about-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #4A5568;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .stat {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          border-radius: 24px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .stat:hover::before {
          left: 100%;
        }

        .stat:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .stat-label {
          font-weight: 500;
          color: #4A5568;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        /* Services Section */
        .services {
          background: #0D0D0D;
          color: white;
          padding: 8rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .services-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .services h2 {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-rows {
          max-width: 1000px;
          margin: 0 auto;
        }

        .service-row {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          margin-bottom: 1rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }

        .service-row:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(8px);
        }

        .service-row:hover .row-content {
          max-height: 200px;
          padding: 0 2.5rem 2rem 2.5rem;
          opacity: 1;
        }

        .service-row:hover .expand-icon {
          transform: rotate(90deg);
        }

        .row-header {
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .service-row .service-number {
          font-size: 1.1rem;
          font-weight: 700;
          color: rgba(102, 126, 234, 0.8);
          margin-right: 2rem;
          min-width: 40px;
        }

        .service-row .service-title {
          flex: 1;
          font-size: 1.3rem;
          font-weight: 600;
          color: white;
          font-family: 'Playfair Display', serif;
          margin: 0;
        }

        .expand-icon {
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          margin-left: 1rem;
        }

        .row-content {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .service-row .service-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .row-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          margin: 0 2.5rem;
        }

        /* Contact Section */
        .contact {
          padding: 8rem 2rem;
          background: #F8F9FA;
          position: relative;
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .contact h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: #2D1B69;
          font-weight: 600;
        }

        .contact p {
          font-size: 1.2rem;
          color: #4A5568;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 2rem;
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #2D1B69;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1.2rem;
          border: 2px solid transparent;
          border-radius: 16px;
          background: white;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.08);
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(102, 126, 234, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.15);
        }

        .submit-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1.2rem 3rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-family: inherit;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 1001;
        }

        .scroll-progress {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.1s ease;
        }

        /* Animation Classes */
        :global(.fade-in) {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        :global(.fade-in.visible) {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .about {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .nav-menu {
            display: none;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            height: 400px;
          }

          .services h2,
          .contact h2,
          .about-content h2 {
            font-size: 2.5rem;
          }

          .service-row {
            margin-bottom: 0.5rem;
          }

          .row-header {
            padding: 1.5rem 1.5rem;
          }

          .service-row .service-number {
            margin-right: 1rem;
          }

          .service-row:hover .row-content {
            padding: 0 1.5rem 1.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}