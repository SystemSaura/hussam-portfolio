"use client";

import Image from "next/image";
import { forwardRef } from "react";
import styles from "./about.module.css";

const logos = [
  { src: "/logos/shiftat.webp", alt: "Shiftat" },
  { src: "/logos/empirerealestate.webp", alt: "Empire Real Estate" },
  { src: "/logos/kapsarc.webp", alt: "KAPSARC" },
  { src: "/logos/alnahdi.webp", alt: "Al Nahdi", original: true, tall: true },
  { src: "/logos/saeq.webp", alt: "SAEQ" },
  { src: "/logos/abudawood.webp", alt: "Abudawood" },
  { src: "/logos/reviva.webp", alt: "Reviva" },
  { src: "/logos/ncmh.webp", alt: "NCMH", tall: true },
  { src: "/logos/rcmc.webp", alt: "RCMC" },
  { src: "/logos/rotana2.webp", alt: "Rotana", original: true, tall: true },
];

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.bgCustomDarkBlue + " text-white"}>
      {/* Hero content */}
      <div className="flex flex-col items-center justify-center px-10 sm:px-6 lg:px-8 text-center" style={{ minHeight: 'calc(100vh - 180px)' }}>
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full mx-auto flex items-center justify-center overflow-hidden">
            <Image
              src="/picofme.webp"
              alt="حسام بعكة"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-8 sm:mb-10 max-w-4xl text-center">
          <p className={styles.heroSubtitle + " text-gray-300 mb-3 arabic-body"}>اسمي حسام بعكة،</p>
          <h2 className={styles.flechaHeroTitleAbout + " text-white leading-tight arabic-heading"}>
            وأساعد الشركات الخليجية على تحويل إنفاقها التسويقي إلى إيرادات حقيقية.
          </h2>
        </div>

        <button
          onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
          className="bg-[#2762F8] text-white font-[var(--font-ibm-plex-arabic)] text-sm font-light px-8 py-3 border-none rounded-full cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:bg-[#1E4ED8]"
        >
          احجز استشارة
        </button>
      </div>

      {/* Rolling logos - OUTSIDE the flex container */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.marqueeGroup} aria-hidden={copy === 1 || undefined}>
              {logos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${styles.marqueeLogo} ${logo.original ? styles.logoOriginal : ''} ${logo.tall ? styles.logoTall : ''}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Body copy */}
      <div className="max-w-4xl mx-auto px-10 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">
        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>

          <p className="text-white font-bold">المشكلة التي أراها كل يوم:</p>

          <p>شركات خليجية قوية، منتجات ممتازة وفرق طموحة، لكن تسويقها لا يعمل لصالحها.</p>

          <p>ميزانيات إعلانية كبيرة، ونتائج مبيعات لا تعكسها. محتوى كثير، لكن العميل المستهدف لا يتفاعل. حملات &quot;رفع وعي&quot; لا تتحول إلى شيء ملموس.</p>

          <p>المشكلة ليست في المنتج ولا في الفريق. المشكلة في النظام التسويقي نفسه.</p>

          <p className="text-white font-bold">ما أقدمه مختلف:</p>

          <p>لا أصلح حملة هنا أو إعلاناً هناك. أبني نظاماً تسويقياً متكاملاً:</p>

          <p>رسالة واضحة تخاطب العميل المناسب، موقع يحوّل الزائر إلى عميل، محتوى يبني الثقة قبل أن يبيع، وحملات تستهدف الشريحة الصحيحة في الوقت الصحيح.</p>

          <p>النتيجة: نمو تستطيع قياسه، تكراره، والبناء عليه.</p>

          <p className="text-white font-bold">خبرتي تجمع بين:</p>

          <p>فهم عميق للسوق الخليجي وثقافة المستهلك فيه، واستراتيجيات نمو مثبتة عالمياً، مطبّقة على أرض الواقع مع عشرات الشركات.</p>

          <p className="text-cyan-400 font-medium">إذا أردت تسويقاً يحقق نتائج فعلية، تواصل معي.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
