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
              ٣ طرق لإصلاح النصوص<br />
              <span className={styles.servicesMainHeadingAccent}>لتحقق المبيعات</span>
            </h2>
          </div>

          {/* Services content for mobile */}
          <div className="space-y-12">
            <div>
              <div className={styles.servicesNumber + " mb-4"}>٠١</div>
              <h3 className={styles.servicesTitle + " mb-4"}>نصوص مواقع تتوقف وتحقق المبيعات</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                كتابة مواقع كاملة توصل فوراً ما تفعله، لمن مخصص، ولماذا يجب أن يهتم العملاء المحتملون. من الصفحة الرئيسية إلى الدفع—كل صفحة محسنة للتحويل.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز استشارة
              </button>
            </div>

            <div>
              <div className={styles.servicesNumber + " mb-4"}>٠٢</div>
              <h3 className={styles.servicesTitle + " mb-4"}>محتوى اجتماعي يبني السلطة ويجذب العملاء</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                نصوص وسائل التواصل الاجتماعي الاستراتيجية تموضعك كالخيار الواضح في صناعتك. منشورات لينكد إن تجذب صناع القرار، محتوى القيادة الفكرية يبني الثقة، وإثبات اجتماعي يحول المتابعين إلى عملاء.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز استشارة
              </button>
            </div>

            <div ref={thirdServiceRef}>
              <div className={styles.servicesNumber + " mb-4"}>٠٣</div>
              <h3 className={styles.servicesTitle + " mb-4"}>صفحات مبيعات ونصوص إيميل تحقق الصفقات</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                صفحات مبيعات عالية التحويل، وصفحات وصول، وسلاسل رسائل إلكترونية تعالج كل اعتراض، وتبني الرغبة، وتجعل قرار الشراء واضحاً. من إطلاق المنتجات إلى حملات الرعاية—نصوص تحول العملاء المحتملين إلى عملاء.
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
                ٣ طرق لإصلاح النصوص<br />
                <span className={styles.servicesMainHeadingAccent}>لتحقق المبيعات</span>
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className={styles.servicesNumber + " mb-4"}>٠١</div>
              <h3 className={styles.servicesTitle + " mb-4"}>نصوص مواقع تتوقف وتحقق المبيعات</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                كتابة مواقع كاملة توصل فوراً ما تفعله، لمن مخصص، ولماذا يجب أن يهتم العملاء المحتملون. من الصفحة الرئيسية إلى الدفع—كل صفحة محسنة للتحويل.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز استشارة
              </button>
            </div>

            <div>
              <div className={styles.servicesNumber + " mb-4"}>٠٢</div>
              <h3 className={styles.servicesTitle + " mb-4"}>محتوى اجتماعي يبني السلطة ويجذب العملاء</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                نصوص وسائل التواصل الاجتماعي الاستراتيجية تموضعك كالخيار الواضح في صناعتك. منشورات لينكد إن تجذب صناع القرار، محتوى القيادة الفكرية يبني الثقة، وإثبات اجتماعي يحول المتابعين إلى عملاء.
              </p>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.servicesButton}
              >
                احجز استشارة
              </button>
            </div>

            <div ref={thirdServiceRef}>
              <div className={styles.servicesNumber + " mb-4"}>٠٣</div>
              <h3 className={styles.servicesTitle + " mb-4"}>صفحات مبيعات ونصوص إيميل تحقق الصفقات</h3>
              <p className={styles.servicesDescription + " mb-6 leading-relaxed"}>
                صفحات مبيعات عالية التحويل، وصفحات وصول، وسلاسل رسائل إلكترونية تعالج كل اعتراض، وتبني الرغبة، وتجعل قرار الشراء واضحاً. من إطلاق المنتجات إلى حملات الرعاية—نصوص تحول العملاء المحتملين إلى عملاء.
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
    </section>
  );
});

Services.displayName = "Services";

export default Services;