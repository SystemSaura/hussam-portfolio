"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./LanguageSelection.module.css";
import useFullscreen from "@/hooks/useFullscreen";

export default function LanguageSelection() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { requestFullscreen } = useFullscreen();

  const handleLanguageSelect = async (language: "en" | "ar") => {
    setIsTransitioning(true);

    // Attempt fullscreen
    await requestFullscreen();

    // Small delay for smooth transition
    setTimeout(() => {
      router.push(`/company-profile/${language === "en" ? "en" : "ar"}`);
    }, 300);
  };

  return (
    <div className={styles.container} dir="ltr">
      {/* Ambient Background Effects */}
      <div className={styles.ambientGlow} />
      <div className={styles.ambientGlow2} />

      {/* Main Content */}
      <div className={styles.content}>
        {/* Logo Mark */}
        <div className={styles.logoMark}>
          <div className={styles.englishMark}>SAURA</div>
          <div className={styles.separator} />
          <div className={styles.arabicMark}>سُرى</div>
        </div>

        {/* Instruction */}
        <div className={styles.instruction}>
          <span className={styles.instructionEn}>Choose Language</span>
          <span className={styles.instructionDot}>•</span>
          <span className={styles.instructionAr}>اختر لغتك</span>
        </div>

        {/* Language Buttons */}
        <div className={styles.languageButtons}>
          <button
            onClick={() => handleLanguageSelect("en")}
            disabled={isTransitioning}
            className={`${styles.languageButton} ${styles.englishButton}`}
            aria-label="Choose English"
          >
            <span className={styles.buttonText}>English</span>
            <span className={styles.buttonArrow}>→</span>
          </button>

          <button
            onClick={() => handleLanguageSelect("ar")}
            disabled={isTransitioning}
            className={`${styles.languageButton} ${styles.arabicButton}`}
            aria-label="اختر العربية"
          >
            <span className={styles.buttonText}>العربية</span>
            <span className={styles.buttonArrow}>←</span>
          </button>
        </div>

        {/* Subtle Footer */}
        <div className={styles.footer}>
          <div className={styles.footerLine} />
          <p className={styles.footerText}>Digital Marketing Agency</p>
        </div>
      </div>

      {/* Transition Overlay */}
      {isTransitioning && <div className={styles.transitionOverlay} />}
    </div>
  );
}