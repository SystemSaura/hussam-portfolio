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

  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const exportThumbnail = async (id: string, title: string) => {
    const element = cardRefs.current[id];
    if (!element) return;

    try {
      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 2, // Higher quality for Retina displays
        backgroundColor: '#F9FAFB'
      });
      
      // Create download link
      const link = document.createElement('a');
      link.download = `thumbnail-${id}-${title.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  const exportAll = async () => {
    for (const item of portfolioItems) {
      await exportThumbnail(item.id, item.title);
      // Small delay between exports to prevent browser issues
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

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
        
        {/* Export All Button */}
        <button 
          onClick={exportAll}
          style={{
            marginTop: '20px',
            padding: '12px 32px',
            background: '#2762F8',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: 'Flecha S, sans-serif',
            fontWeight: 500,
            transition: 'background 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#1E40AF'}
          onMouseOut={(e) => e.currentTarget.style.background = '#2762F8'}
        >
          📥 Export All Thumbnails as PNG
        </button>
      </header>

      {/* Thumbnail Grid */}
      <div className={styles.thumbnailGrid}>
        {portfolioItems.map((item) => (
          <div key={item.id} style={{ position: 'relative' }}>
            <div 
              ref={(el) => { cardRefs.current[item.id] = el; }}
              className={`${styles.thumbnailCard} ${styles[`card${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`}
            >
              {/* Card Header - REDESIGNED */}
              <div className={styles.cardHeader}>
                {/* Left: Your Branding */}
                <div className={styles.personalBranding}>
                  <Image
                    src="/picofme.webp"
                    alt="Hussam Baaka"
                    width={50}
                    height={50}
                    className={styles.profileImage}
                  />
                  <div className={styles.brandingText}>
                    <span className={styles.brandName}>Hussam Baaka</span>
                    <span className={styles.brandDivider}>|</span>
                    <span className={styles.brandTitle}>Marketing Specialist</span>
                  </div>
                </div>

                {/* Right: Client Logo */}
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

            {/* Individual Export Button */}
            <button
              onClick={() => exportThumbnail(item.id, item.title)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #E2E8F0',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                zIndex: 10,
                fontFamily: 'Flecha S, sans-serif',
                color: '#001C46',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              💾 Export PNG
            </button>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className={styles.instructions}>
        <h3 className={styles.instructionsTitle}>How to Use These Thumbnails</h3>
        <ol className={styles.instructionsList}>
          <li>Click "Export All Thumbnails as PNG" to download all cards at once</li>
          <li>Or click individual "Export PNG" buttons on each card</li>
          <li>Upload the PNG files to your Upwork portfolio or presentations</li>
          <li>Each card is optimized at 2x resolution for high-quality display</li>
          <li>Cards maintain your brand consistency while highlighting different project types</li>
        </ol>
      </div>
    </div>
  );
}