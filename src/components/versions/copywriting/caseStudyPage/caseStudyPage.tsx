"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../homePage/footerSection/footer";
import styles from "./caseStudyPage.module.css";

interface NavigationHandlers {
  about: () => void;
  portfolio: () => void;
  services: () => void;
  caseStudy: () => void;
}

interface CaseStudyDetailProps {
  onNavigate: NavigationHandlers;
}

export default function CaseStudyDetail({ onNavigate }: CaseStudyDetailProps) {
  return (
    <div className={styles.detailContainer}>
      {/* Unified Background Container for Header + Hero */}
      <div className={styles.unifiedBackgroundContainer}>
        {/* Header Navigation */}
        <header className={styles.navComponent}>
          <div className={styles.navContainer}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/v/copywriting/homepage" className={styles.logoName}>
                Hussam Baaka <span className={styles.cursorBlink}>|</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-0">
              <button onClick={onNavigate.about} className={styles.navLink}>About</button>
              <button onClick={onNavigate.portfolio} className={styles.navLink}>Portfolio</button>
              <button onClick={onNavigate.services} className={styles.navLink}>Services</button>
              <button onClick={onNavigate.caseStudy} className={styles.navLink}>Case Study</button>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.navButtonStrategy}
              >
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
                  How Strategic Copywriting Made Shiftat<br />
                  <span className={styles.highlight}>Saudi Arabia's Go-To AI Recruitment Platform</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Converting confused visitors into committed customers through copy that actually works
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* White sections container starts here */}
      <div className={styles.whiteSectionContainer}>
        {/* Results Section */}
        <section className={styles.resultsNew}>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsMainHeading}>
                Copy Results That <span className={styles.resultsHighlight}>Speak Volumes</span>
              </h2>
              <p className={styles.resultsSubheading}>
                When your copy stops the right people in their tracks, conversions become predictable
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>100+</div>
                  <div className={styles.primaryLabel}>Quality Leads Generated</div>
                  <div className={styles.primaryDesc}>Through copy that makes prospects think "This is exactly what I need"</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>60%+</div>
                  <div className={styles.primaryLabel}>Email Open Rates</div>
                  <div className={styles.primaryDesc}>Subject lines that stop the scroll and demand attention</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>5,000+</div>
                  <div className={styles.secondaryLabel}>Engaged Email Subscribers</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>80%</div>
                  <div className={styles.secondaryLabel}>Cost Reduction Message</div>
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
                <h2 className={styles.sectionTitle}>The Copy Challenge</h2>
                <p className={styles.challengeText}>
                  Shiftat had powerful AI recruitment technology, but their website copy was confusing prospects instead of converting them. Visitors couldn't instantly understand <strong>what Shiftat actually did</strong>, <strong>who it was for</strong>, or <strong>why they should care</strong>. The messaging tried to speak to everyone but resonated with no one—a classic case of copy that explains features but fails to sell the transformation.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag}>Confusing Messaging</span>
                  <span className={styles.challengeTag}>No Clear Value Prop</span>
                  <span className={styles.challengeTag}>Poor Conversion</span>
                </div>
              </div>
              <div className={styles.challengeIcon}>
                <div className={styles.iconContainer}>!</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className={styles.solutionNew}>
          <div className={styles.container}>
            <div className={styles.solutionHeader}>
              <h2 className={styles.sectionTitle}>The Copy Transformation Strategy</h2>
              <p className={styles.solutionSubheading}>
                Strategic copywriting that turns confusion into clarity and visitors into customers
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Homepage Copy That Stops & Converts</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Transformed confusing tech jargon into crystal-clear messaging that instantly communicates value
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Clear headline that stops the right people</span>
                  <span>Pain-focused subheads that make problems visceral</span>
                  <span>Benefit-driven copy that shows transformation</span>
                  <span>Social proof that builds instant credibility</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Email Sequences That Nurture & Sell</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  High-performing email campaigns that guide prospects from curiosity to conversion
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Subject lines with 60%+ open rates</span>
                  <span>Welcome sequences that build relationships</span>
                  <span>Nurture emails that address objections</span>
                  <span>Sales sequences that close deals</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Social Proof Copy That Builds Trust</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Strategic social media copy that establishes thought leadership and industry authority
                </p>
                <div className={styles.solutionFeatures}>
                  <span>LinkedIn posts that attract decision-makers</span>
                  <span>Industry insights that build authority</span>
                  <span>Case studies that prove results</span>
                  <span>Thought leadership content that converts</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Sales Copy That Closes Deals</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Landing page copy that addresses every objection and makes buying decisions obvious
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Headlines that create urgency</span>
                  <span>Benefits that paint the transformation</span>
                  <span>Objection-handling that builds confidence</span>
                  <span>CTAs that demand immediate action</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle}>Copy Performance Results</h2>
              <p className={styles.socialProofSubtitle}>
                From confusing messaging to crystal-clear copy that converts visitors into customers
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="LinkedIn Copy Success"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>LinkedIn Copy Performance</h3>
                  <p className={styles.socialDesc}><span className={styles.highlightNumber}>4,000+</span> professionals engaged through copy that builds authority and drives leads</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="Email Copy Success"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>Email Copy Results</h3>
                  <p className={styles.socialDesc}><span className={styles.highlightNumber}>60%+</span> open rates through subject lines that stop the scroll and demand attention</p>
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
            "The copy transformation didn't just improve our messaging—it made prospects immediately understand why they needed Shiftat. Now our website <strong>converts visitors instead of confusing them</strong>."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle}>
            Verify This <span className={styles.verificationHighlight}>Copy Success</span>
          </h2>
          <p className={styles.verificationText}>
            Contact Abdullah directly to verify how strategic copywriting transformed Shiftat's conversion rates:
          </p>
          <a href="mailto:abdullah@shiftatsa.com" className={styles.verificationEmail}>
            abdullah@shiftatsa.com
          </a>
        </div>
      </section>

      {/* Unified Background Container for CTA + Footer */}
      <div className={styles.unifiedCtaFooterContainer}>
        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready For Copy That Converts?</h2>
              <p className={styles.ctaText}>
                Get the same strategic copywriting approach that made Shiftat's messaging impossible to ignore.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton}
              >
                Book Your Copy Strategy Session
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer variant="transparent" />
      </div>
    </div>
  );
}