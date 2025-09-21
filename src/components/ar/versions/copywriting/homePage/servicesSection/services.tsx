"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./services.module.css";

const Services = forwardRef<HTMLElement>((_, ref) => {
  const [isSticky, setIsSticky] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [stickyStyles, setStickyStyles] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);
  
  const leftHeadingRef = useRef<HTMLDivElement>(null);
  const thirdServiceRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Skip all sticky logic on mobile
    if (isMobile) {
      setIsSticky(false);
      setShouldFadeOut(false);
      setStickyStyles({});
      return;
    }

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
  }, [isSticky, shouldFadeOut, ref, isMobile]);

  // Mobile layout
  if (isMobile) {
    return (
      <section ref={ref} className={styles.bgCustomBlue + " py-20 text-white"}>
        <div ref={servicesContainerRef} className={styles.servicesContainer}>
          {/* Static centered heading for mobile */}
          <div className={styles.mobileStaticHeading}>
            <h2 className={styles.servicesMainHeading + " leading-tight"}>
              3 ways I fix copy<br />
              <span className={styles.servicesMainHeadingAccent}>so it converts.</span>
            </h2>
          </div>

          {/* Services content for mobile */}
          <div className="space-y-12">
            <div>
              <div className={styles.servicesNumber + " mb-4"}>01</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Website Copy That Stops & Converts</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Complete website copywriting that instantly communicates what you do, who it's for, and why prospects should care. Homepage to checkout—every page optimized for conversion.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Book Consultation
              </button>
            </div>

            <div>
              <div className={styles.servicesNumber + " mb-4"}>02</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Social Content That Builds Authority & Drives Leads</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Strategic social media copy that positions you as the obvious choice in your industry. LinkedIn posts that attract decision-makers, thought leadership content that builds trust, and social proof that converts followers into customers.
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
              <h3 className={styles.servicesTitle + " mb-4"}>Sales Pages & Email Copy That Close Deals</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                High-converting sales pages, landing pages, and email sequences that address every objection, build desire, and make the buying decision obvious. From product launches to nurture campaigns—copy that turns prospects into customers.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout (unchanged)
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
                3 ways I fix copy<br />
                <span className={styles.servicesMainHeadingAccent}>so it converts.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className={styles.servicesNumber + " mb-4"}>01</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Website Copy That Stops & Converts</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Complete website copywriting that instantly communicates what you do, who it's for, and why prospects should care. Homepage to checkout—every page optimized for conversion.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Book Consultation
              </button>
            </div>

            <div>
              <div className={styles.servicesNumber + " mb-4"}>02</div>
              <h3 className={styles.servicesTitle + " mb-4"}>Social Content That Builds Authority & Drives Leads</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                Strategic social media copy that positions you as the obvious choice in your industry. LinkedIn posts that attract decision-makers, thought leadership content that builds trust, and social proof that converts followers into customers.
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
              <h3 className={styles.servicesTitle + " mb-4"}>Sales Pages & Email Copy That Close Deals</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                High-converting sales pages, landing pages, and email sequences that address every objection, build desire, and make the buying decision obvious. From product launches to nurture campaigns—copy that turns prospects into customers.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                Book Consultation
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