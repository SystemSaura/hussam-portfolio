"use client";

import Image from "next/image";
import styles from "./hero.module.css";

interface NavigationHandlers {
  about: () => void;
  portfolio: () => void;
  services: () => void;
  caseStudy: () => void;
}

interface HeroProps {
  onNavigate: NavigationHandlers;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className={styles.bgCustomHero + " min-h-screen flex items-start justify-center pt-36 pb-8 " + styles.heroSection}>
      <div className={styles.homeHeaderComponent}>
        {/* Main Hero Title - Both lines left-aligned */}
        <div className="mb-24">
          <h1 className={styles.flechaHeroTitle}>
            Turn social media into<br />
            <span className={styles.textCustomBlue}>revenue-driving content.</span>
          </h1>
        </div>

        {/* Lower Section - Three parts */}
        <div className={styles.homeHeaderContent}>
          {/* Left: Social Media Problem */}
          <div className={styles.homeHeaderTextWrap}>
            <h2 className={styles.homeHeaderSubheading}>
              Posting into the void<span className={styles.deconstructedQ}>
                <span className={styles.qCurve}>⌐</span>
                <span className={styles.qDot}>•</span>
              </span>
            </h2>
            <p className={styles.homeHeaderText1}>
              Your social media gets likes but not leads. Your content disappears in the feed. Get GCC-focused social strategies that turn followers into customers.
            </p>
          </div>

          {/* Center: Arrow - Desktop horizontal, Mobile vertical */}
          <div className={styles.arrowContainer}>
            {/* Desktop Arrow - Horizontal */}
            <div className={styles.arrowDesktop}>
              <Image
                src="https://ext.same-assets.com/3287453319/171477844.svg"
                alt="Arrow pointing right"
                width={56.13}
                height={56.84}
                className={styles.arrowRight}
              />
            </div>
            {/* Mobile Arrow - Vertical */}
            <div className={styles.arrowMobile}>
              <Image
                src="https://ext.same-assets.com/3287453319/3126314943.svg"
                alt="Arrow pointing down"
                width={48}
                height={48}
                className={styles.arrowDown}
              />
            </div>
          </div>

          {/* Right: Start here form */}
          <div className={styles.homeHeaderFormWrap}>
            <h3 className={styles.homeHeaderSubheadingRight + " mb-6"}>Start here.</h3>
            <div className={styles.sevaFields + " " + styles.formkitFields}>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.subscribeButton + " w-full min-w-max whitespace-nowrap h-12"}
              >
                Book Audit
              </button>
              <button
                type="button"
                onClick={onNavigate.portfolio}
                className={styles.navButtonStrategy + " w-full min-w-max whitespace-nowrap h-12"}
              >
                View Social Media Growth
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}