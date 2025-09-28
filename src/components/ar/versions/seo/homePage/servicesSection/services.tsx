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
          // RTL: Position from the right side
          const containerRight = window.innerWidth - containerRect.right;
          const gridGap = 64;
          const leftColumnWidth = (containerRect.width - gridGap) / 2;
          
          setStickyStyles({
            position: 'fixed',
            top: '120px',
            right: `${containerRight}px`,
            width: `${leftColumnWidth}px`,
            zIndex: 10,
            textAlign: 'right',
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
            <h2 className={styles.servicesMainHeading + " leading-tight arabic-heading"}>
              ٣ طرق أعزز بها<br />
              <span className={styles.servicesMainHeadingAccent}>ظهورك في محركات البحث</span>
            </h2>
          </div>

          {/* Services content for mobile */}
          <div className="space-y-12">
            <div className={styles.serviceItem}>
              <div className={styles.servicesNumber + " mb-4"}>01</div>
              <h3 className={styles.servicesTitle + " mb-4 arabic-heading"}>استراتيجية محتوى SEO وبحث الكلمات المفتاحية - جاهزة لك</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed arabic-body"}>
                تحليل معمق لبيئة البحث الخاصة بك، وثغرات المنافسين، وفرص المحتوى. احصل على خارطة طريق كاملة للهيمنة على مصطلحات البحث في مجالك.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز مراجعة
              </button>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.servicesNumber + " mb-4"}>02</div>
              <h3 className={styles.servicesTitle + " mb-4 arabic-heading"}>إنشاء وتحسين المحتوى المحسن لمحركات البحث</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed arabic-body"}>
                إنشاء وتحسين عملي للمحتوى الذي يحتل مراتب عالية ويحوّل الزوار. حوّل خبرتك إلى مقالات وصفحات وموارد صديقة لمحركات البحث تجذب زيارات مؤهلة.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز استشارة
              </button>
            </div>

            <div ref={thirdServiceRef} className={styles.serviceItem}>
              <div className={styles.servicesNumber + " mb-4"}>03</div>
              <h3 className={styles.servicesTitle + " mb-4 arabic-heading"}>تحسين SEO التقني وتحسين الأداء</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed arabic-body"}>
                حوّل الأساس التقني لموقعك بأفضل ممارسات تحسين محركات البحث، وتحسين سرعة الموقع، وبناء هيكل صديق لمحركات البحث يدعم النمو طويل المدى.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز استشارة
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - RTL optimized
  return (
    <section ref={ref} className={styles.bgCustomBlue + " py-20 text-white"}>
      <div ref={servicesContainerRef} className={styles.servicesContainer}>
        <div className={styles.servicesGridContainer}>
          {/* Right column for RTL - Heading */}
          <div className={styles.servicesLeftColumn}>
            <div className={styles.servicesHeadingWrapper}>
              <div 
                ref={leftHeadingRef}
                className={`${styles.servicesHeadingContent} ${isSticky ? styles.isStickyActive : ''} ${shouldFadeOut ? styles.servicesHeadingFade : ''}`}
                style={stickyStyles}
              >
                <h2 className={styles.servicesMainHeading + " leading-tight arabic-heading"}>
                  ٣ طرق أعزز بها<br />
                  <span className={styles.servicesMainHeadingAccent}>ظهورك في محركات البحث</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Left column for RTL - Services */}
          <div className={styles.servicesRightColumn}>
            <div className="space-y-12">
              <div className={styles.serviceItem}>
                <div className={styles.servicesNumber + " mb-4"}>01</div>
                <h3 className={styles.servicesTitle + " mb-4 arabic-heading"}>استراتيجية محتوى SEO وبحث الكلمات المفتاحية - جاهزة لك</h3>
                <p className={styles.servicesDescription + " mb-6 leading-relaxed arabic-body"}>
                  تحليل معمق لبيئة البحث الخاصة بك، وثغرات المنافسين، وفرص المحتوى. احصل على خارطة طريق كاملة للهيمنة على مصطلحات البحث في مجالك.
                </p>
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className={styles.servicesButton}
                >
                  احجز مراجعة
                </button>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.servicesNumber + " mb-4"}>02</div>
                <h3 className={styles.servicesTitle + " mb-4 arabic-heading"}>إنشاء وتحسين المحتوى المحسن لمحركات البحث</h3>
                <p className={styles.servicesDescription + " mb-6 leading-relaxed arabic-body"}>
                  إنشاء وتحسين عملي للمحتوى الذي يحتل مراتب عالية ويحوّل الزوار. حوّل خبرتك إلى مقالات وصفحات وموارد صديقة لمحركات البحث تجذب زيارات مؤهلة.
                </p>
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className={styles.servicesButton}
                >
                  احجز استشارة
                </button>
              </div>

              <div ref={thirdServiceRef} className={styles.serviceItem}>
                <div className={styles.servicesNumber + " mb-4"}>03</div>
                <h3 className={styles.servicesTitle + " mb-4 arabic-heading"}>تحسين SEO التقني وتحسين الأداء</h3>
                <p className={styles.servicesDescription + " mb-6 leading-relaxed arabic-body"}>
                  حوّل الأساس التقني لموقعك بأفضل ممارسات تحسين محركات البحث، وتحسين سرعة الموقع، وبناء هيكل صديق لمحركات البحث يدعم النمو طويل المدى.
                </p>
                <button
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                  className={styles.servicesButton}
                >
                  احجز استشارة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;