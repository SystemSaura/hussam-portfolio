import { forwardRef } from "react";
import styles from "../CompanyProfile.module.css";

interface SlidePlaceholderProps {
  slideNumber: number;
}

const SlidePlaceholder = forwardRef<HTMLElement, SlidePlaceholderProps>(
  ({ slideNumber }, ref) => {
    return (
      <section ref={ref} className={`${styles.slide} ${styles.slidePlaceholder}`}>
        <div className={styles.placeholderContent}>
          <h2 className={styles.placeholderTitle}>Slide {slideNumber}</h2>
          <p className={styles.placeholderText}>Coming Soon</p>
        </div>
      </section>
    );
  }
);

SlidePlaceholder.displayName = "SlidePlaceholder";

export default SlidePlaceholder;