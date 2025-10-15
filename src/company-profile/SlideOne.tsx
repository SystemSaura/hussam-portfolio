"use client";

import { useState, useEffect } from "react";
import styles from "./CompanyProfile.module.css";

export default function SlideOne() {
  const [isMounted, setIsMounted] = useState(false);
  const totalSlides = 6;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.profileContainer}>
      {/* Navigation Dots - Visual only, no click functionality */}
      <div className={styles.navigation}>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`${styles.navDot} ${
              index === 0 ? styles.navDotActive : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides Container */}
      <div className={styles.slidesContainer}>
        {/* Slide 1: Hero - Only slide with content */}
        <section className={`${styles.slide} ${styles.slideHero}`}>
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <h1 className={styles.logoArabic}>سُرى</h1>
              <div className={styles.logoLine}></div>
              <h2 className={styles.logoEnglish}>SAURA</h2>
            </div>
            <p className={styles.tagline}>
              Digital Marketing Agency
            </p>
            <div className={styles.heroSubtext}>
              <p className={styles.arabicProverb}>
                "عند الصباح يحمد القوم السُرَى"
              </p>
              <p className={styles.proverbTranslation}>
                In the morning, people praise the night journey
              </p>
            </div>
          </div>
          <button
            className={styles.nextSlideBtn}
            aria-label="Next slide"
          >
            →
          </button>
        </section>
      </div>

      {/* Navigation Arrows - Visual only, no click functionality */}
      <button
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}