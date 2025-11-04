"use client";

import { useState, useEffect } from "react";
import styles from "./FullscreenToggle.module.css";

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Initial check
    checkFullscreen();

    // Listen for fullscreen changes
    document.addEventListener("fullscreenchange", checkFullscreen);
    return () => document.removeEventListener("fullscreenchange", checkFullscreen);
  }, []);

  const handleToggle = async () => {
    try {
      if (isFullscreen) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen toggle error:", error);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={styles.fullscreenToggle}
      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      title={isFullscreen ? "Exit fullscreen (Esc)" : "Enter fullscreen"}
    >
      {isFullscreen ? "✕" : "⛶"}
    </button>
  );
}