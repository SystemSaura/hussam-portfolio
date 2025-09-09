"use client";

import Image from "next/image";
import styles from "./caseStudyDetail.module.css";

export default function CaseStudyDetail() {
  return (
    <div className={styles.detailContainer}>
      {/* Hero Section - Full Screen */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroCategory}>Success Story</div>
              <h1 className={styles.heroTitle}>
                How Shiftat Became Saudi Arabia's
                <br />
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

      {/* About Shiftat - Centered */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGridCentered}>
            <div className={styles.aboutContentCentered}>
              <h2 className={styles.sectionTitle}>About Shiftat</h2>
              <p className={styles.aboutText}>
                Shiftat is Saudi Arabia's pioneering AI-powered recruitment platform that owns the entire hiring process from start to finish. Using advanced AI for screening and shortlisting, Shiftat helps organizations reduce time-to-hire by up to <strong>90%</strong> and cut hiring costs by <strong>80%</strong>.
              </p>
              <p className={styles.aboutText}>
                The platform has successfully placed over <strong>7,000 Saudis</strong> annually and continues to scale rapidly across the Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Centered */}
      <section className={styles.results}>
        <div className={styles.container}>
          <div className={styles.centeredTextContent}>
            <h2 className={styles.sectionTitle}>Results That Speak Volumes</h2>
            <p className={styles.sectionSubtitle}>Measurable impact across all key performance indicators</p>
          </div>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>100+</div>
              <div className={styles.resultLabel}>High-Quality Leads</div>
              <div className={styles.resultDesc}>Generated through strategic campaigns</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>5,000+</div>
              <div className={styles.resultLabel}>Engaged Subscribers</div>
              <div className={styles.resultDesc}>Qualified decision-maker database</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>60%+</div>
              <div className={styles.resultLabel}>Email Open Rates</div>
              <div className={styles.resultDesc}>Industry-leading engagement</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>4,000+</div>
              <div className={styles.resultLabel}>LinkedIn Followers</div>
              <div className={styles.resultDesc}>Professional community growth</div>
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

      {/* Solution Section - Centered */}
      <section className={styles.solution}>
        <div className={styles.container}>
          <div className={styles.centeredTextContent}>
            <h2 className={styles.sectionTitle}>The Strategic Solution</h2>
            <p className={styles.sectionSubtitle}>Comprehensive digital marketing ecosystem designed for maximum impact</p>
          </div>
          
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionTitle}>Content-Driven Growth Strategy</h3>
              <p className={styles.solutionText}>
                Built comprehensive content marketing ecosystem guiding prospects through every buyer's journey stage
              </p>
              <ul className={styles.solutionList}>
                <li>Interest Stage: Expanded reach to 1 million business owners</li>
                <li>Awareness Stage: Educational content highlighting recruitment pain points</li>
                <li>Consideration Stage: Solution-focused AI recruitment benefits</li>
                <li>Decision Stage: Case studies emphasizing 80% cost reduction</li>
              </ul>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={styles.solutionTitle}>Targeted Digital Campaigns</h3>
              <p className={styles.solutionText}>
                Strategic Google Ads targeting high-intent Arabic keywords and recruitment terms
              </p>
              <ul className={styles.solutionList}>
                <li>Targeted keywords: 'مطلوب كاشير', 'مطلوب مهندس', 'شركة توظيف سعودية'</li>
                <li>Continuous optimization based on performance data</li>
                <li>Built qualified prospect database through strategic targeting</li>
              </ul>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={styles.solutionTitle}>Email Marketing Excellence</h3>
              <p className={styles.solutionText}>
                Developed high-performing email campaigns with exceptional engagement rates
              </p>
              <ul className={styles.solutionList}>
                <li>5,000+ qualified subscriber base through Mailchimp</li>
                <li>60%+ weekly open rates with personalized content</li>
                <li>Monthly nurturing campaigns with recruitment insights</li>
              </ul>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={styles.solutionTitle}>Social Media Leadership</h3>
              <p className={styles.solutionText}>
                Established thought leadership across LinkedIn and X platforms
              </p>
              <ul className={styles.solutionList}>
                <li>8,000+ followers on X through valuable content</li>
                <li>4,000+ engaged LinkedIn professionals</li>
                <li>Positioned as AI recruitment thought leader</li>
              </ul>
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

      {/* Impact Section - Centered */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.centeredTextContent}>
            <h2 className={styles.sectionTitle}>The Transformative Impact</h2>
          </div>
          <div className={styles.impactContent}>
            <p className={styles.impactText}>
              By focusing on Shiftat's core value propositions—reducing hiring costs by <strong>80%</strong> and cutting time-to-hire by <strong>90%</strong>—we created messaging that resonated with business owners' deepest pain points. Our innovative "Interest Stage" approach allowed us to reach prospects before they even realized they needed recruitment solutions, creating a pipeline that continuously nurtures over <strong>1 million potential customers</strong>.
            </p>
            <p className={styles.impactText}>
              The result: Shiftat transformed from a startup to Saudi Arabia's leading AI recruitment platform, with a robust digital presence that drives consistent, qualified leads and positions them as the go-to solution for modern recruitment challenges.
            </p>
            <div className={styles.impactTags}>
              <span className={styles.impactTag}>Market Leadership</span>
              <span className={styles.impactTag}>Brand Authority</span>
              <span className={styles.impactTag}>Sustainable Growth</span>
            </div>
          </div>
        </div>
      </section>

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