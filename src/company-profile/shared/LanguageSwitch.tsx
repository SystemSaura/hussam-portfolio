"use client";

import { useRouter } from "next/navigation";
import styles from "./LanguageSwitch.module.css";

interface LanguageSwitchProps {
  currentLanguage: "en" | "ar";
}

export default function LanguageSwitch({ currentLanguage }: LanguageSwitchProps) {
  const router = useRouter();

  const handleSwitch = () => {
    const targetLanguage = currentLanguage === "en" ? "ar" : "en";
    router.push(`/company-profile/${targetLanguage}`);
  };

  return (
    <button
      onClick={handleSwitch}
      className={styles.languageSwitch}
      aria-label={currentLanguage === "en" ? "Switch to Arabic" : "Switch to English"}
      title={currentLanguage === "en" ? "العربية" : "English"}
    >
      {currentLanguage === "en" ? "ع" : "EN"}
    </button>
  );
}