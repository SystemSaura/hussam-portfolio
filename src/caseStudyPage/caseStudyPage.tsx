// src/caseStudyPage/caseStudyPage.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./caseStudyPage.module.css";

interface NavigationHandlers {
  about: () => void;
  portfolio: () => void;
  services: () => void;
}

interface CaseStudyDetailProps {
  onNavigate: NavigationHandlers;
}

export default function CaseStudyDetail({ onNavigate }: CaseStudyDetailProps) {
  return (
    <div className={styles.detailContainer}>
      {/* Unified Background Container for Header + Hero */}
      <div className={styles.unifiedBackgroundContainer}>
        {/* Header Navigation - Merged from shiftatHeader */}
        <header className={styles.navComponent}>
          <div className={styles.navContainer}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className={styles.logoName}>
                Hussam Baaka <span className={styles.cursorBlink}>|</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-0">
              <button onClick={onNavigate.about} className={styles.navLink}>About</button>
              <button onClick={onNavigate.portfolio} className={styles.navLink}>Portfolio</button>
              <button onClick={onNavigate.services} className={styles.navLink}>Services</button>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className={styles.navButtonStrategy}>
                Book Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className={`${styles.navLink} p-2`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                How Shiftat Became Saudi Arabia's<br />
                <span className={styles.highlight}>Leading AI Recruitment Platform</span>
              </h1>
                <p className={styles.heroSubtitle}>
                  Through Strategic Digital Marketing & Data-Driven Growth
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>100+</div>
                    <div className={styles.statLabel}>Quality Leads</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>60%+</div>
                    <div className={styles.statLabel}>Email Open Rates</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>5,000+</div>
                    <div className={styles.statLabel}>Subscribers</div>
                  </div>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.heroImageContainer}>
                  <Image
                    src="/backgrounds/Shiftat.webp"
                    alt="Shiftat Platform"
                    width={600}
                    height={400}
                    className={styles.heroImg}
                    priority
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.overlayText}>Shiftat Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* White sections container starts here */}
      <div className={styles.whiteSectionContainer}>
        {/* Results Section - Redesigned */}
        <section className={styles.resultsNew}>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsMainHeading}>
                Results That <span className={styles.resultsHighlight}>Speak Volumes</span>
              </h2>
              <p className={styles.resultsSubheading}>
                Measurable impact across all key performance indicators
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>100+</div>
                  <div className={styles.primaryLabel}>High-Quality Leads</div>
                  <div className={styles.primaryDesc}>Generated through strategic campaigns</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>60%+</div>
                  <div className={styles.primaryLabel}>Email Open Rates</div>
                  <div className={styles.primaryDesc}>Industry-leading engagement</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>5,000+</div>
                  <div className={styles.secondaryLabel}>Engaged Subscribers</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>4,000+</div>
                  <div className={styles.secondaryLabel}>LinkedIn Followers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.challenge}>
          <div className={styles.container}>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeContent}>
                <h2 className={styles.sectionTitle}>The Challenge</h2>
                <p className={styles.challengeText}>
                  Shiftat needed to establish market presence in Saudi Arabia's competitive recruitment landscape and reach decision-makers across the kingdom. With over <strong>1 million business owners</strong> in Saudi Arabia, the challenge was creating awareness and building trust in a market dominated by traditional recruitment methods.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag}>Market Penetration</span>
                  <span className={styles.challengeTag}>Trust Building</span>
                  <span className={styles.challengeTag}>Brand Awareness</span>
                </div>
              </div>
              <div className={styles.challengeIcon}>
                <div className={styles.iconContainer}>!</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - Redesigned with Uniform Cards */}
        <section className={styles.solutionNew}>
          <div className={styles.container}>
            <div className={styles.solutionHeader}>
              <h2 className={styles.sectionTitle}>The Strategic Solution</h2>
              <p className={styles.solutionSubheading}>
                Comprehensive digital marketing ecosystem designed for maximum impact
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Content-Driven Growth Strategy</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Built comprehensive content marketing ecosystem guiding prospects through every buyer's journey stage
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Expanded reach to 1M+ business owners</span>
                  <span>Educational content highlighting recruitment pain points</span>
                  <span>Solution-focused AI recruitment benefits</span>
                  <span>Case studies emphasizing 80% cost reduction</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Targeted Digital Campaigns</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Strategic Google Ads targeting high-intent Arabic keywords and recruitment terms
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Arabic keyword optimization</span>
                  <span>Performance-based optimization</span>
                  <span>Qualified prospect database</span>
                  <span>Continuous campaign refinement</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Email Marketing Excellence</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  High-performing email campaigns with exceptional engagement rates
                </p>
                <div className={styles.solutionFeatures}>
                  <span>5,000+ qualified subscribers</span>
                  <span>60%+ weekly open rates</span>
                  <span>Monthly nurturing campaigns</span>
                  <span>Personalized recruitment insights</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Social Media Leadership</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Established thought leadership across LinkedIn and X platforms
                </p>
                <div className={styles.solutionFeatures}>
                  <span>8,000+ followers on X</span>
                  <span>4,000+ LinkedIn professionals</span>
                  <span>AI recruitment authority positioning</span>
                  <span>Industry thought leadership content</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof - Centered */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle}>Social Media Success</h2>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="LinkedIn Success"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>LinkedIn Growth</h3>
                  <p className={styles.socialDesc}>4,000+ engaged professionals and thought leadership positioning</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="X (Twitter) Success"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>X Platform Success</h3>
                  <p className={styles.socialDesc}>8,000+ followers through valuable recruitment content</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            "The strategic approach to content marketing and targeted campaigns didn't just generate leads—it established Shiftat as the <strong>definitive AI recruitment solution</strong> in Saudi Arabia."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.container}>
          <div className={styles.verificationCard}>
            <h2 className={styles.verificationTitle}>Verify This Success Story</h2>
            <p className={styles.verificationText}>
              You can contact Abdullah directly to verify the authenticity and accuracy of these results through his email:
            </p>
            <a href="mailto:abdullah@shiftatsa.com" className={styles.verificationEmail}>
              abdullah@shiftatsa.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Scale Your Business?</h2>
            <p className={styles.ctaText}>
              Get the same strategic approach that made Shiftat Saudi Arabia's leading AI recruitment platform.
            </p>
            <button 
              onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
              className={styles.ctaButton}
            >
              Book Your Strategy Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}