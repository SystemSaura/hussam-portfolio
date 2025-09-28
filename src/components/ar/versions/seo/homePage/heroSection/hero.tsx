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
        {/* Main Hero Title - Arabic RTL */}
        <div className="mb-24">
          <h1 className={styles.flechaHeroTitle}>
             حوّل جهودك في تحسين محركات <br />
            <span className={styles.textCustomBlue}>  البحث  إلى عملاء حقيقيين </span>
          </h1>
        </div>

        {/* Lower Section - Three parts with proper RTL flow */}
        <div className={styles.homeHeaderContent}>
          {/* First in RTL: Problem section */}
          <div className={styles.homeHeaderTextWrap}>
            <h2 className={styles.homeHeaderSubheading}>
              <span className={styles.deconstructedQ}>
                <span className={styles.qCurve}>⌐</span>
                <span className={styles.qDot}>•</span>
              </span>
              {" "}سئمت من المحتوى المهمل
            </h2>
            <p className={styles.homeHeaderText1}>
              محتواك يستحق أكثر من الصفحة الثانية في جوجل. احصل على استراتيجيات تحسين محركات البحث التي تنشر خبرتك في نتائج البحث و بين عملائك المؤهلين في السوق الخليجي.
            </p>
          </div>

          {/* Center: Arrow */}
          <div className={styles.arrowContainer}>
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

          {/* Last in RTL: Action section */}
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
                اكتشف أعمالي
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}