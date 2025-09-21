"use client";

import Image from "next/image";
import styles from "./hero.module.css";

interface NavigationHandlers {
  about: () => void;
  portfolio: () => void;
  services: () => void;
  caseStudy: () => void;
}

interface HeroProps {
  onNavigate: NavigationHandlers;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className={styles.bgCustomHero + " min-h-screen flex items-start justify-center pt-36 pb-8 " + styles.heroSection}>
      <div className={styles.homeHeaderComponent}>
        {/* Main Hero Title - Arabic aligned right */}
        <div className="mb-24">
          <h1 className={styles.flechaHeroTitle}>
            خبير التسويق الرقمي<br />
            <span className={styles.textCustomBlue}>الذي يحقق النتائج الفعلية</span>
          </h1>
        </div>

        {/* Lower Section - Three parts with proper RTL flow */}
        <div className={styles.homeHeaderContent}>
          {/* First in RTL: Problem section (appears on the right) */}
          <div className={styles.homeHeaderTextWrap}>
            <h2 className={styles.homeHeaderSubheading}>
              التسويق الذي لا يحقق النتائج؟ <span className={styles.deconstructedQ}>
                <span className={styles.qCurve}>⌐</span>
                <span className={styles.qDot}>•</span>
              </span>
            </h2>
            <p className={styles.homeHeaderText1}>
              نحن متخصصون في التسويق الرقمي، تحسين محركات البحث، ووسائل التواصل الاجتماعي للشركات في منطقة الخليج. استراتيجيات مثبتة تحقق نموًا قابلاً للقياس ونتائج حقيقية لعملك.
            </p>
          </div>

          {/* Center: Arrow - Desktop horizontal (flipped for RTL), Mobile vertical */}
          <div className={styles.arrowContainer}>
            {/* Desktop Arrow - Horizontal (flipped for RTL) */}
            <div className={styles.arrowDesktop}>
              <Image
                src="https://ext.same-assets.com/3287453319/171477844.svg"
                alt="سهم يشير لليسار"
                width={56.13}
                height={56.84}
                className={styles.arrowRight}
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            {/* Mobile Arrow - Vertical */}
            <div className={styles.arrowMobile}>
              <Image
                src="https://ext.same-assets.com/3287453319/3126314943.svg"
                alt="سهم يشير للأسفل"
                width={48}
                height={48}
                className={styles.arrowDown}
              />
            </div>
          </div>

          {/* Last in RTL: Start here form (appears on the left) */}
          <div className={styles.homeHeaderFormWrap}>
            <h3 className={styles.homeHeaderSubheadingRight + " mb-6"}>ابدأ من هنا</h3>
            <div className={styles.sevaFields + " " + styles.formkitFields}>
              <button
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.subscribeButton + " w-full min-w-max whitespace-nowrap h-12"}
              >
                احجز استشارة
              </button>
              <button
                type="button"
                onClick={onNavigate.portfolio}
                className={styles.navButtonStrategy + " w-full min-w-max whitespace-nowrap h-12"}
              >
                شاهد أعمالي
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}