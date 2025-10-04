"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { toPng } from 'html-to-image';
import { useRef } from 'react';

export default function PortfolioThumbnails() {
  const portfolioItems = [
    {
      id: "001",
      title: "Blog Strategy, Content & SEO",
      company: "Shiftat",
      category: "Blog Content & SEO",
      readTime: "5 min read",
      color: "blue",
      logo: "/logos/shiftat.webp"
    },
    {
      id: "002", 
      title: "Bilingual Translation & Design ",
      company: "Hayat Mohamadeia",
      category: "Translation & Design",
      readTime: "4 min read",
      color: "purple",
      logo: "/logos/hayatmohamadia.webp"
    },
    {
      id: "003",
      title: "Social Media content",
      company: "Makkah Bus",
      category: "Social Media",
      readTime: "3 min read",
      color: "teal",
      logo: "/logos/makkahbus.webp"
    },
    {
      id: "004",
      title: "Newsletter Strategy & Content",
      company: "Al Nahdi",
      category: "Email Marketing",
      readTime: "4 min read",
      color: "pink",
      logo: "/logos/alnahdi.webp"
    },
    {
      id: "005",
      title: "Bilingual Website Content & Strategy",
      company: "Reviva",
      category: "Website Content",
      readTime: "6 min read",
      color: "green",
      logo: "/logos/reviva.webp"
    },
    {
      id: "006",
      title: "Website Portal Content",
      company: "KAPSARC",
      category: "Technical Writing",
      readTime: "7 min read",
      color: "slate",
      logo: "/logos/kapsarc.webp"
    },
    {
      id: "007",
      title: "Bilingual Social Media content & Translation",
      company: "GAMI",
      category: "Social & Translation",
      readTime: "4 min read",
      color: "orange",
      logo: "/logos/gami.webp"
    },
    {
      id: "008",
      title: "Handbook Editing & Proofreading",
      company: "Maarif Schools",
      category: "Editorial Services",
      readTime: "5 min read",
      color: "indigo",
      logo: "/logos/maarif.webp"
    },
    {
      id: "009",
      title: "Award-Winning Article ",
      company: "INVESTMED",
      category: "MENA Development vision",
      readTime: "8 min read",
      color: "gold",
      logo: "/logos/investmed.webp"
    },
        {
      id: "010", 
      title: " Blog & Social Media ",
      company: "Estater",
      category: "Content Marketing",
      readTime: "10 min read",
      color: "purple",
      logo: "/logos/estater.webp"
    }
  ];

  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const exportThumbnail = async (id: string, title: string) => {
    const element = cardRefs.current[id];
    if (!element) return;

    try {
      // Export at EXACTLY the rendered size (400×320px)
      const dataUrl = await toPng(element, {
        quality: 0.95,
        pixelRatio: 1,
        backgroundColor: '#F9FAFB',
        width: 400,
        height: 320
      });
      
      const link = document.createElement('a');
      link.download = `upwork-${id}-${title.replace(/\s+/g, '-').toLowerCase().substring(0, 40)}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  const exportAll = async () => {
    for (const item of portfolioItems) {
      await exportThumbnail(item.id, item.title);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Main Site
        </Link>
        <h1 className={styles.pageTitle}>Upwork Portfolio Thumbnails</h1>
        <p className={styles.pageSubtitle}>
          Professional 400×320px thumbnails optimized for Upwork
        </p>
        
        <button 
          onClick={exportAll}
          style={{
            marginTop: '20px',
            padding: '14px 36px',
            background: '#2762F8',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '17px',
            cursor: 'pointer',
            fontFamily: 'Flecha S, sans-serif',
            fontWeight: 600,
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(39, 98, 248, 0.25)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#1E40AF';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(39, 98, 248, 0.35)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#2762F8';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(39, 98, 248, 0.25)';
          }}
        >
          Export All Thumbnails
        </button>

        <div style={{
          marginTop: '16px',
          padding: '16px 24px',
          background: '#EFF6FF',
          border: '2px solid #BFDBFE',
          borderRadius: '12px',
          color: '#1E40AF',
          fontSize: '15px',
          fontFamily: 'Flecha S, sans-serif',
          lineHeight: '1.6'
        }}>
          <strong>Fixed Dimensions:</strong> Each card renders at exactly 400×320px, then scales up for display
        </div>
      </header>

      <div className={styles.thumbnailGrid}>
        {portfolioItems.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <div 
              ref={(el) => { cardRefs.current[item.id] = el; }}
              className={`${styles.thumbnailCard} ${styles[`card${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.personalBranding}>
                  <Image
                    src="/picofme.webp"
                    alt="Hussam Baaka"
                    width={28}
                    height={28}
                    className={styles.profileImage}
                  />
                  <div className={styles.brandingText}>
                    <span className={styles.brandName}>Hussam Baaka</span>
                    <span className={styles.brandDivider}>|</span>
                    <span className={styles.brandTitle}>Marketing Specialist</span>
                  </div>
                </div>

                {item.logo && (
                  <div className={styles.companyLogo}>
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={45}
                      height={45}
                      className={styles.logoImage}
                    />
                  </div>
                )}
              </div>

              {/* Middle Content */}
              <div className={styles.middleContent}>
                <div className={styles.projectNumber}>
                  <span className={styles.hashSymbol}>#</span>
                  <span className={styles.numberText}>{item.id}</span>
                  <div className={styles.numberUnderline}></div>
                </div>

                <h2 className={styles.projectTitle}>{item.title}</h2>
              </div>

              {/* Card Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.metaInfo}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.separator}>•</span>
                  <span className={styles.readTime}>{item.readTime}</span>
                </div>
                
                <div className={styles.companyBadge}>
                  {item.company}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className={styles.instructions}>
        <h3 className={styles.instructionsTitle}>How It Works</h3>
        <ol className={styles.instructionsList}>
          <li>Each card renders at exactly 400×320px in the DOM</li>
          <li>CSS transform scales them up 150% for comfortable viewing</li>
          <li>Export captures the full-size 400×320px version</li>
          <li>Result: Perfect Upwork thumbnails with no cropping or stretching</li>
        </ol>
      </div>
    </div>
  );
}