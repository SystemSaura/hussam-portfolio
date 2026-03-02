"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// ─── Palette Type ────────────────────────────────────────────────────────────
interface ColorPalette {
  name: string;
  nameAr: string;
  background: string;
  headingText: string;
  bodyText: string;
  accent: string;
  buttonBg: string;
  buttonHover: string;
}

// ─── 10 Enterprise Color Palettes ────────────────────────────────────────────
const palettes: ColorPalette[] = [
  {
    name: "Midnight Navy",
    nameAr: "كحلي منتصف الليل",
    background: "#001C46",
    headingText: "#FFFFFF",
    bodyText: "#E5E7EB",
    accent: "#22D3EE",
    buttonBg: "#2762F8",
    buttonHover: "#1E4ED8",
  },
  {
    name: "Obsidian Gold",
    nameAr: "ذهب السبج",
    background: "#0A0A0A",
    headingText: "#FAFAFA",
    bodyText: "#D4D4D4",
    accent: "#D4A574",
    buttonBg: "#B8860B",
    buttonHover: "#9A7209",
  },
  {
    name: "Deep Emerald",
    nameAr: "زمرد عميق",
    background: "#0A1F1A",
    headingText: "#F0FFF4",
    bodyText: "#C6F6D5",
    accent: "#48BB78",
    buttonBg: "#2F855A",
    buttonHover: "#276749",
  },
  {
    name: "Royal Indigo",
    nameAr: "نيلي ملكي",
    background: "#1A0A2E",
    headingText: "#F5F3FF",
    bodyText: "#DDD6FE",
    accent: "#A78BFA",
    buttonBg: "#7C3AED",
    buttonHover: "#6D28D9",
  },
  {
    name: "Charcoal Rose",
    nameAr: "وردي فحمي",
    background: "#1C1017",
    headingText: "#FFF1F2",
    bodyText: "#FECDD3",
    accent: "#FB7185",
    buttonBg: "#E11D48",
    buttonHover: "#BE123C",
  },
  {
    name: "Steel Blue",
    nameAr: "أزرق فولاذي",
    background: "#0F172A",
    headingText: "#F8FAFC",
    bodyText: "#CBD5E1",
    accent: "#38BDF8",
    buttonBg: "#0284C7",
    buttonHover: "#0369A1",
  },
  {
    name: "Mahogany Copper",
    nameAr: "نحاسي ماهوغني",
    background: "#1A0F0A",
    headingText: "#FEF3C7",
    bodyText: "#E5D5B0",
    accent: "#D97706",
    buttonBg: "#B45309",
    buttonHover: "#92400E",
  },
  {
    name: "Slate Teal",
    nameAr: "أردوازي مخضر",
    background: "#0D1B1E",
    headingText: "#F0FDFA",
    bodyText: "#B2DFDB",
    accent: "#14B8A6",
    buttonBg: "#0D9488",
    buttonHover: "#0F766E",
  },
  {
    name: "Onyx Silver",
    nameAr: "فضي عقيقي",
    background: "#111111",
    headingText: "#F5F5F5",
    bodyText: "#B0B0B0",
    accent: "#E0E0E0",
    buttonBg: "#6B7280",
    buttonHover: "#4B5563",
  },
  {
    name: "Burgundy Night",
    nameAr: "ليل عنابي",
    background: "#1A0A14",
    headingText: "#FFF5F7",
    bodyText: "#E8C4CF",
    accent: "#EC4899",
    buttonBg: "#DB2777",
    buttonHover: "#BE185D",
  },
];

// ─── Swatch Labels ───────────────────────────────────────────────────────────
const swatchKeys: { key: keyof ColorPalette; label: string }[] = [
  { key: "background", label: "BG" },
  { key: "headingText", label: "H1" },
  { key: "bodyText", label: "Body" },
  { key: "accent", label: "Accent" },
  { key: "buttonBg", label: "Button" },
  { key: "buttonHover", label: "Hover" },
];

// ─── Page Component ──────────────────────────────────────────────────────────
export default function ColorPalettePage() {
  const [active, setActive] = useState(0);
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);
  const palette = palettes[active];

  const goNext = useCallback(() => {
    setActive((p) => (p + 1) % palettes.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((p) => (p - 1 + palettes.length) % palettes.length);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div style={{ minHeight: "100vh", fontFamily: "var(--font-ibm-plex-arabic), sans-serif", position: "relative" }}>
      {/* ── Preview Container ────────────────────────────────────────────── */}
      <div
        style={{
          transition: "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: palette.background,
        }}
        dir="rtl"
      >
        {/* ── Header ──────────────────────────────────────────────────── */}
        <header
          style={{
            width: "100%",
            height: "51.15px",
            backgroundColor: palette.background,
            transition: "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              margin: "0 85.7266px 0 85.7188px",
              height: "50.65px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <div style={{ flexShrink: 0 }}>
              <span
                style={{
                  color: palette.headingText,
                  fontSize: "18px",
                  fontWeight: 300,
                  fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                حسام بعكة{" "}
                <span
                  style={{
                    color: palette.buttonBg,
                    transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  |
                </span>
              </span>
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {["نبذة عني", "أعمالي", "خدماتي", "دراسة حالة"].map((label) => (
                <span
                  key={label}
                  style={{
                    color: palette.bodyText,
                    fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    padding: "4px 8px",
                    transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "default",
                  }}
                >
                  {label}
                </span>
              ))}
            </nav>

            {/* Right side */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  color: palette.bodyText,
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                dir="ltr"
              >
                EN <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 4px" }}>|</span> ع
              </span>
              <span
                style={{
                  backgroundColor: palette.buttonBg,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                  fontSize: "11.3675px",
                  fontWeight: 300,
                  padding: "0 17px",
                  border: "none",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "135px",
                  height: "36px",
                  transition: "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                }}
              >
                احجز استشارة
              </span>
            </div>
          </div>
        </header>

        {/* ── About / Hero Section ────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: palette.background,
            transition: "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            padding: "48px 0 80px 0",
          }}
        >
          <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            {/* Profile Photo */}
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  margin: "0 auto",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/picofme.webp"
                  alt="حسام بعكة"
                  width={160}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* Main Heading */}
            <h2
              style={{
                color: palette.headingText,
                fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                fontSize: "34px",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                marginBottom: "32px",
                textAlign: "center",
                transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              أهلاً، أنا حسام بعكة. أساعد الشركات الخليجية الرائدة على تحويل استثماراتها التسويقية إلى نمو مستدام وأرباح حقيقية.
            </h2>

            {/* Subtitle */}
            <div style={{ marginBottom: "32px", textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                  fontSize: "11px",
                  color: palette.accent,
                  fontWeight: 500,
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                [ رسالة خاصة لقادة الأعمال الطموحين ]
              </span>
            </div>

            {/* Body Content */}
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                fontSize: "16px",
                color: palette.bodyText,
                lineHeight: 1.8,
                maxWidth: "48rem",
                margin: "0 auto",
                textAlign: "center",
                transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <p>المشكلة ليست فيك، بل في النظام التسويقي الذي تعتمد عليه.</p>

              <p>كل يوم أرى شركات خليجية ناجحة تنفق مبالغ طائلة على حملات إعلانية لا تحقق مبيعات فعلية لهم، ومحتوى لا يجذب العملاء المناسبين لعلامتهم التجارية، واستراتيجيات &quot;رفع الوعي&quot; التي لا تتحول إلى عائد استثمار ملموس لهم.</p>

              <p>والنتيجة؟ إحباط، وميزانيات مهدورة، ونمو أبطأ مما تستحقه هذه الشركات.</p>

              <p>عندما تتكامل رسالتك التسويقية مع احتياجات عملائك الحقيقية، ويحول موقعك الإلكتروني الزوار إلى عملاء، ويبني محتواك الثقة والخبرة في ذهن العميل، وتستهدف حملاتك الشريحة الصحيحة بالرسالة الصحيحة - حينها يصبح النمو نتيجة حتمية، وليس مجرد أمل.</p>

              <p>لا أكتفي بإصلاح المشاكل السطحية. أبني أنظمة تسويقية متكاملة تحول كل درهم / ريال تستثمره إلى نمو قابل للقياس والتكرار.</p>

              <p>منهجيتي تجمع بين الفهم العميق للثقافة والسوق الخليجي، واستراتيجيات النمو المثبتة عالمياً، والتطبيق العملي الذي نقل عشرات الشركات من التحدي إلى الريادة في أسواقها.</p>

              <p>في النهاية، التسويق الحقيقي له هدف واحد فقط:</p>

              <p
                style={{
                  color: palette.accent,
                  fontWeight: 500,
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                تحقيق نتائج قابلة للقياس، يمكن الاعتماد عليها، وتضمن استمرار نموك لسنوات قادمة.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ marginTop: "48px", display: "flex", justifyContent: "center", gap: "12px" }}>
              <button
                style={{
                  backgroundColor: palette.buttonBg,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  padding: "12px 32px",
                  border: "none",
                  borderRadius: "9999px",
                  cursor: "default",
                  transition: "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => { if (!isHoveringBtn) { setIsHoveringBtn(true); e.currentTarget.style.backgroundColor = palette.buttonHover; } }}
                onMouseLeave={(e) => { setIsHoveringBtn(false); e.currentTarget.style.backgroundColor = palette.buttonBg; }}
              >
                احجز استشارتك المجانية
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: palette.bodyText,
                  fontFamily: "var(--font-ibm-plex-arabic), sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  padding: "12px 32px",
                  border: `1px solid ${palette.bodyText}40`,
                  borderRadius: "9999px",
                  cursor: "default",
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                اكتشف أعمالي
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ── Palette Info Bar ──────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 50,
        }}
        dir="ltr"
      >
        {/* Left: Nav arrows + palette name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={goPrev}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              color: "#fff",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            &larr;
          </button>
          <button
            onClick={goNext}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              color: "#fff",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            &rarr;
          </button>
          <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>
            {palette.name}
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontFamily: "system-ui, sans-serif" }}>
            {active + 1}/{palettes.length}
          </span>
        </div>

        {/* Right: Color swatches */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {swatchKeys.map(({ key, label }) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "4px",
                  backgroundColor: palette[key] as string,
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "9px", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {label}
                </span>
                <span style={{ color: "#fff", fontSize: "11px", fontFamily: "ui-monospace, monospace" }}>
                  {(palette[key] as string).toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
