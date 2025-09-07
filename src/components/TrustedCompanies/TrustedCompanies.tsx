"use client";

import styles from "./TrustedCompanies.module.css";

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Trusted by leading GCC companies
          </p>
        </div>
        <div className="flex justify-center">
          <div className={styles.logoGridContainer}>
            {/* Row 1: 3 lighter logos + 2 heavier logos for balance */}
            <div className={styles.logoRow}>
              <img src="/logos/shiftat.webp" alt="Shiftat" className={`${styles.colorLogo} ${styles.shifttatLogo}`} />
              <img src="/logos/empirerealestate.webp" alt="Empire Real Estate" className={`${styles.colorLogo} ${styles.empireLogo}`} />
              <img src="/logos/kapsarc.webp" alt="KAPSARC" className={styles.colorLogo} />
              <img src="/logos/alnahdi.webp" alt="Al Nahdi" className={`${styles.colorLogo} ${styles.alnahdiLogo}`} />
              <img src="/logos/saeq.webp" alt="SAEQ" className={styles.colorLogo} />
            </div>
            
            {/* Row 2: Balanced visual weight distribution */}
            <div className={styles.logoRow}>
              <img src="/logos/abudawood.webp" alt="Abudawood" className={`${styles.colorLogo} ${styles.abudawoodLogo}`} />
              <img src="/logos/reviva.webp" alt="reviva" className={styles.colorLogo} />
              <img src="/logos/ncmh.webp" alt="NCMH" className={`${styles.colorLogo} ${styles.ncmhLogo}`} />
              <img src="/logos/rcmc.webp" alt="RCMC" className={`${styles.colorLogo} ${styles.rcmcLogo}`} />
              <img src="/logos/rotana.webp" alt="Rotana" className={`${styles.colorLogo} ${styles.rotanaLogo}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}