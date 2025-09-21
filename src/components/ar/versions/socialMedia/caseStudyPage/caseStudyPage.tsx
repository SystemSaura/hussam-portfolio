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
              <Link href="/v/social-media/h" className={styles.logoName}>
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

        {/* Hero Section - Optimized for Social Media Buyers */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  From Zero to Saudi Arabia's Most<br />
                  <span className={styles.highlight}>Recognized AI Recruitment Brand</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  How strategic social media transformed Shiftat from startup to industry leader
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>8K+</div>
                    <div className={styles.statLabel}>X Followers</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>4K+</div>
                    <div className={styles.statLabel}>LinkedIn Network</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>100+</div>
                    <div className={styles.statLabel}>Quality Leads</div>
                  </div>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.heroImageContainer}>
                  <Image
                    src="/backgrounds/Shiftat.webp"
                    alt="Shiftat Platform Social Media Success"
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

      {/* White sections container */}
      <div className={styles.whiteSectionContainer}>
        {/* Results Section */}
        <section className={styles.resultsNew}>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsMainHeading}>
                When Social Media <span className={styles.resultsHighlight}>Actually Drives Business</span>
              </h2>
              <p className={styles.resultsSubheading}>
                Real engagement metrics that converted to real revenue growth
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>12K+</div>
                  <div className={styles.primaryLabel}>Total Followers</div>
                  <div className={styles.primaryDesc}>Across LinkedIn and X platforms</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>100+</div>
                  <div className={styles.primaryLabel}>Quality Leads</div>
                  <div className={styles.primaryDesc}>From organic social content</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>60%+</div>
                  <div className={styles.secondaryLabel}>Email Open Rates</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>5K+</div>
                  <div className={styles.secondaryLabel}>Newsletter Subscribers</div>
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
                <h2 className={styles.sectionTitle}>The Social Media Reality Check</h2>
                <p className={styles.challengeText}>
                  Your social media isn't working because it's all about you. Your products. Your achievements. Your company updates. Meanwhile, your ideal clients scroll past because they can't see themselves in your content. Shiftat faced the same problem—brilliant AI technology, but social media that screamed "tech company" instead of "recruitment solution."
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag}>Generic Content</span>
                  <span className={styles.challengeTag}>Zero Engagement</span>
                  <span className={styles.challengeTag}>No Leads</span>
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
              <h2 className={styles.sectionTitle}>The Social Strategy That Actually Works</h2>
              <p className={styles.solutionSubheading}>
                Stop talking about your product. Start solving your buyer's problems.
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Buyer-Obsessed Content Strategy</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Every post addressed a specific recruitment pain point Saudi HR leaders face daily
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Daily recruitment insights in Arabic</span>
                  <span>Case studies showing 80% cost reduction</span>
                  <span>Industry trend analysis HR directors share</span>
                  <span>Solution-focused content, not product pitches</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Platform-Specific Authority Building</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Different platforms, different conversations—all pointing to the same conclusion
                </p>
                <div className={styles.solutionFeatures}>
                  <span>LinkedIn: Professional thought leadership</span>
                  <span>X: Real-time industry commentary</span>
                  <span>Consistent brand voice across channels</span>
                  <span>Cross-platform content amplification</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Engagement-to-Lead Pipeline</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Social engagement that actually converts to business conversations
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Comment engagement protocols</span>
                  <span>DM conversation starters</span>
                  <span>Newsletter signup from social content</span>
                  <span>Direct lead qualification process</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Authority Through Consistency</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Daily value delivery until the market recognized Shiftat as the AI recruitment expert
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Daily posting schedule maintained</span>
                  <span>Industry events live coverage</span>
                  <span>Thought leadership positioning</span>
                  <span>Competitor analysis and differentiation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle}>The Numbers Don't Lie</h2>
              <p className={styles.socialProofSubtitle}>
                From <span className={styles.highlightNumber}>0 to 12,000+</span> engaged followers who actually care about recruitment solutions
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="LinkedIn Growth Results"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>LinkedIn Authority</h3>
                  <p className={styles.socialDesc}><span className={styles.highlightNumber}>4,000+</span> HR directors and business leaders who engage with recruitment content</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="X Platform Success"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>X Platform Reach</h3>
                  <p className={styles.socialDesc}><span className={styles.highlightNumber}>8,000+</span> followers actively discussing AI recruitment trends</p>
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
            "Before this strategy, our social media was just noise. Now it's our <strong>primary lead generation channel</strong>—and the leads are actually qualified."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle}>
            Still Skeptical? <span className={styles.verificationHighlight}>Verify Everything</span>
          </h2>
          <p className={styles.verificationText}>
            Contact Abdullah directly to verify these results and see the actual social media growth:
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
              <h2 className={styles.ctaTitle}>Ready to Stop Wasting Your Social Media?</h2>
              <p className={styles.ctaText}>
                Get the same social strategy that transformed Shiftat from unknown startup to industry authority. No vanity metrics—just leads that convert.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton}
              >
                Fix My Social Media Strategy
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