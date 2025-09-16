"use client";

import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.bgCustomHero + " min-h-screen flex items-center justify-center py-20"}>
      <div className={styles.homeHeaderComponent}>
<<<<<<< HEAD
        {/* Main Hero Title - Centered on mobile */}
        <div className={styles.heroTitleContainer}>
          <h1 className={styles.flechaHeroTitle + " mb-16"}>
            Turn marketing spend<br />
            into <span className={styles.textCustomBlue}>measurable growth.</span>
          </h1>
        </div>

        {/* Lower Section - Restructured layout */}
=======
        {/* Main Hero Title */}
        {/* Desktop version - hidden on mobile */}
        <h1 className={styles.flechaHeroTitle + " mb-16 hidden md:block"}>
          Turn marketing spend<br />
          into <span className={styles.textCustomBlue}>measurable growth.</span>
        </h1>

        {/* Mobile version - visible only on mobile */}
        <h1 className={styles.flechaHeroTitle + " mb-16 block md:hidden"}>
          Turn marketing<br />
          spend into<br />
          <span className={styles.textCustomBlue}>measurable growth.</span>
        </h1>

        {/* Lower Section - Three parts */}
>>>>>>> 331fb0a788a1e505a4d58c71e5f289e57a634468
        <div className={styles.homeHeaderContent}>
          {/* Left: Tired of guessing section */}
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
            
            {/* Arrow positioned after the text */}
            <div className="flex items-center justify-center mt-8 mb-8">
              <Image
                src="https://ext.same-assets.com/3287453319/171477844.svg"
                alt="Arrow pointing down"
                width={56.13}
                height={56.84}
                className={styles.arrowRight}
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