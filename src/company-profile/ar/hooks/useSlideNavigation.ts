import { useState, useEffect, RefObject } from "react";

// RTL version for Arabic

interface UseSlideNavigationProps {
  totalSlides: number;
  slideRefs: RefObject<(HTMLElement | null)[]>;
}

export default function useSlideNavigation({
  totalSlides,
  slideRefs,
}: UseSlideNavigationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to specific slide - RTL compatible
  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides && slideRefs.current?.[index]) {
      setCurrentSlide(index);
      slideRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end", // Changed from "start" to "end" for RTL
      });
    }
  };

  // Navigate to next slide
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  // Navigate to previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation - Flipped for RTL
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // RTL: ArrowLeft goes next, ArrowRight goes previous
      if (e.key === "ArrowLeft") nextSlide();
      if (e.key === "ArrowRight") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
  };
}