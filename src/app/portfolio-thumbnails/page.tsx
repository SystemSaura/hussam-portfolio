"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function PortfolioThumbnails() {
  const portfolioItems = [
    {
      id: "001",
      title: "AI Recruitment Platform Blog Strategy",
      company: "Shiftat",
      category: "Blog Content",
      readTime: "5 min read",
      color: "blue",
      logo: "/logos/shiftat.webp"
    },
    {
      id: "002", 
      title: "Multilingual Design & Presentation",
      company: "Hayat Mohamadeia",
      category: "Translation & Design",
      readTime: "4 min read",
      color: "purple",
      logo: "/logos/hayatmohamadia.webp"
    },
    {
      id: "003",
      title: "Public Transportation Social Campaign",
      company: "Makkah Bus",
      category: "Social Media",
      readTime: "3 min read",
      color: "teal",
      logo: "/logos/makkahbus.webp"
    },
    {
      id: "004",
      title: "Healthcare Newsletter Strategy",
      company: "Al Nahdi",
      category: "Email Marketing",
      readTime: "4 min read",
      color: "pink",
      logo: "/logos/alnahdi.webp"
    },
    {
      id: "005",
      title: "Bilingual Sustainability Content",
      company: "Reviva",
      category: "Website Content",
      readTime: "6 min read",
      color: "green",
      logo: "/logos/reviva.webp"
    },
    {
      id: "006",
      title: "Energy Policy Research Portal",
      company: "KAPSARC",
      category: "Technical Writing",
      readTime: "7 min read",
      color: "slate",
      logo: "/logos/kapsarc.webp"
    },
    {
      id: "007",
      title: "Bilingual Social Media Strategy",
      company: "GAMI",
      category: "Social & Translation",
      readTime: "4 min read",
      color: "orange",
      logo: "/logos/gami.webp"
    },
    {
      id: "008",
      title: "Educational Handbook Editing",
      company: "Maarif Schools",
      category: "Editorial Services",
      readTime: "5 min read",
      color: "indigo",
      logo: "/logos/maarif.webp"
    },
    {
      id: "009",
      title: "MENA Development Award Winner",
      company: "INVESTMED",
      category: "Award-Winning Article",
      readTime: "8 min read",
      color: "gold",
      logo: "/logos/investmed.webp"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Main Site
        </Link>
        <h1 className={styles.pageTitle}>Portfolio Thumbnails</h1>
        <p className={styles.pageSubtitle}>
          Professional showcase cards for Upwork and portfolio presentations
        </p>
      </header>

      {/* Thumbnail Grid */}
      <div className={styles.thumbnailGrid}>
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.thumbnailCard} ${styles[`card${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`}
          >
            {/* Card Header with Profile */}
            <div className={styles.cardHeader}>
              <div className={styles.profileSection}>
                <Image
                  src="/picofme.webp"
                  alt="Hussam Baaka"
                  width={80}
                  height={80}
                  className={styles.profileImage}
                />
                <div className={styles.brandingText}>
                  <span className={styles.brandName}>Hussam</span>
                  <span className={styles.brandNameLast}>Baaka</span>
                </div>
              </div>
              <div className={styles.roleSection}>
                <span className={styles.brandDivider}>/</span>
                <span className={styles.brandRole}>Marketing<br />Expert</span>
              </div>
              {item.logo && (
                <div className={styles.companyLogo}>
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={80}
                    height={80}
                    className={styles.logoImage}
                  />
                </div>
              )}
            </div>

            {/* Project Number */}
            <div className={styles.projectNumber}>
              <span className={styles.hashSymbol}>#</span>
              <span className={styles.numberText}>{item.id}</span>
              <div className={styles.numberUnderline}></div>
            </div>

            {/* Project Title */}
            <h2 className={styles.projectTitle}>{item.title}</h2>

            {/* Card Footer */}
            <div className={styles.cardFooter}>
              <div className={styles.metaInfo}>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.readTime}>{item.readTime}</span>
              </div>
            </div>

            {/* Company Badge */}
            <div className={styles.companyBadge}>
              {item.company}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className={styles.instructions}>
        <h3 className={styles.instructionsTitle}>How to Use These Thumbnails</h3>
        <ol className={styles.instructionsList}>
          <li>Right-click on any card and select "Save image as..." or take a screenshot</li>
          <li>Upload to your Upwork portfolio or presentations</li>
          <li>Each card is optimized for visual impact and professional presentation</li>
          <li>Cards maintain your brand consistency while highlighting different project types</li>
        </ol>
      </div>
    </div>
  );
}