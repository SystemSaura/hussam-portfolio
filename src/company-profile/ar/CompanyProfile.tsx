"use client";
import { useRef } from "react";
import styles from "./CompanyProfile.module.css";
import useSlideNavigation from "./hooks/useSlideNavigation";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";
import SlideFour from "./slides/SlideFour";
import SlideFive from "./slides/SlideFive";
import SlideSix from "./slides/SlideSix";

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
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
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
        
        <SlideThree 
          ref={(el) => { slideRefs.current[2] = el; }}
        />
        
        <SlideFour 
          ref={(el) => { slideRefs.current[3] = el; }}
        />
        
        <SlideFive 
          ref={(el) => { slideRefs.current[4] = el; }}
        />
        
        <SlideSix 
          ref={(el) => { slideRefs.current[5] = el; }}
        />
      </div>

      {/* Navigation Arrows - Hidden on first slide */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        style={{ display: currentSlide === 0 ? 'none' : 'flex' }}
        aria-label="الشريحة السابقة"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        style={{ 
          display: currentSlide === 0 ? 'none' : 'flex',
          opacity: currentSlide === totalSlides - 1 ? 0.3 : 1 
        }}
        aria-label="الشريحة التالية"
      >
        →
      </button>
    </div>
  );
}