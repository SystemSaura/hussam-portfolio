"use client";

import styles from "./trustedCompanies.module.css";

export default function TrustedCompanies() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider arabic-body">
            موثوق من قبل الشركات الرائدة في دول الخليج
          </p>
        </div>
        <div className="flex justify-center">
          <div className={styles.logoGridContainer}>
            
            {/* DESKTOP LAYOUT ONLY - 2 rows of 5 logos each */}
            <div className={`${styles.logoRow} ${styles.desktopOnly}`}>
              <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.colorLogo} ${styles.shifttatLogo}`} />
              <img src="/logos/empirerealestate.webp" alt="امباير ريل استيت" className={`${styles.colorLogo} ${styles.empireLogo}`} />
              <img src="/logos/kapsarc.webp" alt="كابسارك" className={styles.colorLogo} />
              <img src="/logos/alnahdi.webp" alt="النهدي" className={`${styles.colorLogo} ${styles.alnahdiLogo}`} />
              <img src="/logos/saeq.webp" alt="سائق" className={styles.colorLogo} />
            </div>
            
            <div className={`${styles.logoRow} ${styles.desktopOnly}`}>
              <img src="/logos/abudawood.webp" alt="أبوداود" className={`${styles.colorLogo} ${styles.abudawoodLogo}`} />
              <img src="/logos/reviva.webp" alt="ريفيفا" className={styles.colorLogo} />
              <img src="/logos/ncmh.webp" alt="المركز الوطني للصحة النفسية" className={`${styles.colorLogo} ${styles.ncmhLogo}`} />
              <img src="/logos/rcmc.webp" alt="مجمع الملك عبدالله الطبي" className={`${styles.colorLogo} ${styles.rcmcLogo}`} />
              <img src="/logos/rotana.webp" alt="روتانا" className={`${styles.colorLogo} ${styles.rotanaLogo}`} />
            </div>

            {/* MOBILE LAYOUT ONLY - 4 rows: 3+3+3+1 */}
            <div className={`${styles.logoRow} ${styles.mobileOnly}`}>
              <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.colorLogo} ${styles.shifttatLogo}`} />
              <img src="/logos/empirerealestate.webp" alt="امباير ريل استيت" className={`${styles.colorLogo} ${styles.empireLogo}`} />
              <img src="/logos/kapsarc.webp" alt="كابسارك" className={styles.colorLogo} />
            </div>
            
            <div className={`${styles.logoRow} ${styles.mobileOnly}`}>
              <img src="/logos/alnahdi.webp" alt="النهدي" className={`${styles.colorLogo} ${styles.alnahdiLogo}`} />
              <img src="/logos/saeq.webp" alt="سائق" className={styles.colorLogo} />
              <img src="/logos/abudawood.webp" alt="أبوداود" className={`${styles.colorLogo} ${styles.abudawoodLogo}`} />
            </div>

            <div className={`${styles.logoRow} ${styles.mobileOnly}`}>
              <img src="/logos/reviva.webp" alt="ريفيفا" className={styles.colorLogo} />
              <img src="/logos/ncmh.webp" alt="المركز الوطني للصحة النفسية" className={`${styles.colorLogo} ${styles.ncmhLogo}`} />
              <img src="/logos/rcmc.webp" alt="مجمع الملك عبدالله الطبي" className={`${styles.colorLogo} ${styles.rcmcLogo}`} />
            </div>

            <div className={`${styles.logoRow} ${styles.singleLogoRow} ${styles.mobileOnly}`}>
              <img src="/logos/rotana.webp" alt="روتانا" className={`${styles.colorLogo} ${styles.rotanaLogo}`} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}