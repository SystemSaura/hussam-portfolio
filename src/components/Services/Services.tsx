"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./Services.module.css";

const Services = forwardRef<HTMLElement>((_, ref) => {
  const [isSticky, setIsSticky] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [stickyStyles, setStickyStyles] = useState<React.CSSProperties>({});
  
  const leftHeadingRef = useRef<HTMLDivElement>(null);
  const thirdServiceRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const servicesElement = ref && 'current' in ref ? ref.current : null;
      
      if (!servicesElement || !leftHeadingRef.current || !thirdServiceRef.current || !servicesContainerRef.current) {
        return;
      }

      const servicesRect = servicesElement.getBoundingClientRect();
      const containerRect = servicesContainerRef.current.getBoundingClientRect();
      const thirdServiceRect = thirdServiceRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const shouldBeSticky = servicesRect.top <= 120 && servicesRect.bottom > windowHeight * 0.3;

      if (shouldBeSticky !== isSticky) {
        setIsSticky(shouldBeSticky);
        
        if (shouldBeSticky) {
          const containerLeft = containerRect.left;
          const gridGap = 64;
          const leftColumnWidth = (containerRect.width - gridGap) / 2;
          
          setStickyStyles({
            position: 'fixed',
            top: '120px',
            left: `${containerLeft}px`,
            width: `${leftColumnWidth}px`,
            zIndex: 10,
          });
        } else {
          setStickyStyles({});
        }
      }

      const shouldFade = thirdServiceRect.bottom <= windowHeight * 0.4;
      if (shouldFade !== shouldFadeOut) {
        setShouldFadeOut(shouldFade);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isSticky, shouldFadeOut, ref]);

  return (
    <section ref={ref} className={styles.bgCustomBlue + " py-20 text-white"}>
      <div ref={servicesContainerRef} className={styles.servicesContainer}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={styles.servicesHeadingWrapper}>
            <div 
              ref={leftHeadingRef}
              className={`${styles.servicesHeadingContent} ${isSticky ? styles.isStickyActive : ''} ${shouldFadeOut ? styles.servicesHeadingFade : ''}`}
              style={stickyStyles}
            >
              <h2 className={styles.servicesMainHeading + " leading-tight"}>
                3 ways I help you<br />
                <span className={styles.servicesMainHeadingAccent}>scale faster.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className={styles.servicesNumber + " mb-4"}>01</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Marketing Strategy and Systems Audit Done For You</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Deep-dive analysis of your current marketing stack, messaging, and conversion paths. Get a complete roadmap to fix what's leaking revenue.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Book Audit
              </button>
            </div>

            <div>
              <div className={styles.servicesNumber + " mb-4"}>02</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Growth Marketing Implementation and Monitoring</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Hands-on execution of data-driven campaigns, conversion optimization, and marketing automation that turns leads into customers at scale.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Book Consultation
              </button>
            </div>

            <div ref={thirdServiceRef}>
              <div className={styles.servicesNumber + " mb-4"}>03</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Marketing Team Training and Optimization</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Transform your internal marketing team with frameworks, processes, and skills that deliver consistent results without constant oversight.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;