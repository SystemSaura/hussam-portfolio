"use client";

import { useRef } from "react";
import styles from "./CompanyProfile.module.css";
import useSlideNavigation from "./hooks/useSlideNavigation";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlidePlaceholder from "./slide/SlidePlaceholder";

export default function CompanyProfile() {
  const totalSlides = 6;
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  
  const { currentSlide, goToSlide, nextSlide, prevSlide } = useSlideNavigation({
    totalSlides,
    slideRefs,
  });

  return (
    <div className={styles.profileContainer}>
      {/* Navigation Dots */}
      <div className={styles.navigation}>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.navDot} ${
              index === currentSlide ? styles.navDotActive : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>

      {/* Slides Container */}
      <div className={styles.slidesContainer}>
        <SlideOne 
          ref={(el) => { slideRefs.current[0] = el; }}
          onNext={nextSlide}
        />
        
        <SlideTwo 
          ref={(el) => { slideRefs.current[1] = el; }}
        />
        
        <SlidePlaceholder 
          ref={(el) => { slideRefs.current[2] = el; }}
          slideNumber={3}
        />
        
        <SlidePlaceholder 
          ref={(el) => { slideRefs.current[3] = el; }}
          slideNumber={4}
        />
        
        <SlidePlaceholder 
          ref={(el) => { slideRefs.current[4] = el; }}
          slideNumber={5}
        />
        
        <SlidePlaceholder 
          ref={(el) => { slideRefs.current[5] = el; }}
          slideNumber={6}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        style={{ opacity: currentSlide === 0 ? 0.3 : 1 }}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        style={{ opacity: currentSlide === totalSlides - 1 ? 0.3 : 1 }}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}