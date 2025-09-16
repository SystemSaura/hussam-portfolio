"use client";

import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.bgCustomHero + " min-h-screen flex items-center justify-center py-20"}>
      <div className={styles.homeHeaderComponent}>
        {/* Main Hero Title */}
        <h1 className={styles.flechaHeroTitle + " mb-16"}>
          Turn marketing<br />
          spend into<br />
          <span className={styles.textCustomBlue}>measurable growth.</span>
        </h1>

        {/* Lower Section - Three parts */}
        <div className={styles.homeHeaderContent}>
          {/* Left: Want to join us section */}
          <div className={styles.homeHeaderTextWrap}>
            <h2 className={styles.homeHeaderSubheading}>
              Tired of guessing<span className={styles.deconstructedQ}>
                <span className={styles.qCurve}>⌐</span>
                <span className={styles.qDot}>•</span>
              </span>
            </h2>
            <p className={styles.homeHeaderText1}>
              Your marketing budget deserves better than "spray and pray." Get strategies that turn GCC market insights into predictable pipeline growth.
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
                Book Consultation
              </button>
              <button
                type="button"
                className={styles.navButtonStrategy + " w-full min-w-max whitespace-nowrap h-12"}
              >
                Discover My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}