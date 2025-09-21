// src/components/versions/seo/caseStudyPage/caseStudyPage.tsx

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
        {/* Header Navigation - Fixed to include all navigation items */}
        <header className={styles.navComponent}>
          <div className={styles.navContainer}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className={styles.logoName}>
                Hussam Baaka <span className={styles.cursorBlink}>|</span>
              </Link>
            </div>

            {/* Navigation - Fixed order and added Case Study */}
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
                How Shiftat Achieved<br />
                <span className={styles.highlight}>Search Dominance in Saudi Arabia</span>
              </h1>
                <p className={styles.heroSubtitle}>
                  Through Strategic SEO Content & Keyword Optimization
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>200%</div>
                    <div className={styles.statLabel}>Organic Traffic Growth</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>15+</div>
                    <div className={styles.statLabel}>Page 1 Rankings</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>85%</div>
                    <div className={styles.statLabel}>Keyword Coverage</div>
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
        {/* Results Section - Redesigned */}
        <section className={styles.resultsNew}>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsMainHeading}>
                Search Results That <span className={styles.resultsHighlight}>Speak Volumes</span>
              </h2>
              <p className={styles.resultsSubheading}>
                Measurable SEO impact across all key search performance indicators
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>200%</div>
                  <div className={styles.primaryLabel}>Organic Traffic Growth</div>
                  <div className={styles.primaryDesc}>Generated through strategic SEO content</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>15+</div>
                  <div className={styles.primaryLabel}>Page 1 Rankings</div>
                  <div className={styles.primaryDesc}>High-value recruitment keywords</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>50+</div>
                  <div className={styles.secondaryLabel}>SEO Articles Created</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>85%</div>
                  <div className={styles.secondaryLabel}>Keyword Coverage</div>
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
                <h2 className={styles.sectionTitle}>The SEO Challenge</h2>
                <p className={styles.challengeText}>
                  Shiftat needed to establish search visibility in Saudi Arabia's competitive recruitment landscape. With <strong>thousands of recruitment-related searches</strong> happening daily, the challenge was ranking for high-intent keywords while building topical authority in a market dominated by established players.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag}>Zero Search Visibility</span>
                  <span className={styles.challengeTag}>High Competition Keywords</span>
                  <span className={styles.challengeTag}>No Content Foundation</span>
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
              <h2 className={styles.sectionTitle}>The Strategic SEO Solution</h2>
              <p className={styles.solutionSubheading}>
                Comprehensive SEO ecosystem designed for maximum search visibility
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Comprehensive Keyword Research</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Deep analysis of recruitment industry search behavior and competitor keyword gaps to identify high-value opportunities
                </p>
                <div className={styles.solutionFeatures}>
                  <span>500+ recruitment keywords analyzed</span>
                  <span>Arabic and English search terms mapped</span>
                  <span>Competitor content gap analysis completed</span>
                  <span>Search intent categorization finished</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>SEO Content Strategy</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Strategic content creation targeting recruitment pain points with optimized structure and keyword placement
                </p>
                <div className={styles.solutionFeatures}>
                  <span>50+ SEO-optimized articles created</span>
                  <span>Recruitment industry topics covered</span>
                  <span>Search-friendly content structure</span>
                  <span>Internal linking strategy implemented</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Technical SEO Optimization</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Website structure and technical improvements to enhance search engine crawlability and user experience
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Site architecture optimization</span>
                  <span>Meta tags and schema markup</span>
                  <span>Page speed improvements</span>
                  <span>Mobile-first optimization</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle}>Search Performance Monitoring</h3>
                </div>
                <p className={styles.solutionCardDesc}>
                  Continuous tracking and optimization of search rankings, organic traffic, and keyword performance
                </p>
                <div className={styles.solutionFeatures}>
                  <span>Weekly ranking reports delivered</span>
                  <span>Organic traffic growth tracking</span>
                  <span>Keyword position monitoring</span>
                  <span>Content performance analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof - Centered */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle}>Search Visibility Success</h2>
              <p className={styles.socialProofSubtitle}>
                From zero search presence to industry authority – building search visibility that drives qualified traffic and leads
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="Search Rankings Success"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>Google Rankings</h3>
                  <p className={styles.socialDesc}><span className={styles.highlightNumber}>15+</span> page 1 rankings for high-value recruitment keywords</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="Content Performance"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle}>Content Performance</h3>
                  <p className={styles.socialDesc}><span className={styles.highlightNumber}>50+</span> SEO articles driving organic search traffic</p>
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
            "The strategic SEO approach didn't just improve our search rankings—it established Shiftat as the <strong>go-to resource for recruitment insights</strong> in Saudi Arabia's search results."
          </blockquote>
        </div>
      </section>

      {/* Verification - Redesigned */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle}>
            Verify This <span className={styles.verificationHighlight}>SEO Success Story</span>
          </h2>
          <p className={styles.verificationText}>
            You can contact Abdullah directly to verify the authenticity and accuracy of these SEO results through his email:
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
              <h2 className={styles.ctaTitle}>Ready to Dominate Search Results?</h2>
              <p className={styles.ctaText}>
                Get the same strategic SEO approach that made Shiftat a search authority in Saudi Arabia's recruitment industry.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton}
              >
                Book Your SEO Strategy Session
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