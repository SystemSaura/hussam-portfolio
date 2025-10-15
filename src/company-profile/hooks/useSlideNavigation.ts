import { useState, useEffect, RefObject } from "react";

interface UseSlideNavigationProps {
  totalSlides: number;
  slideRefs: RefObject<(HTMLElement | null)[]>;
}

export default function useSlideNavigation({
  totalSlides,
  slideRefs,
}: UseSlideNavigationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides && slideRefs.current?.[index]) {
      setCurrentSlide(index);
      slideRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
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