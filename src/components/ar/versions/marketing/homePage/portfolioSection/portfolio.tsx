"use client";

import Image from "next/image";
import { forwardRef } from "react";
import styles from "./portfolio.module.css";

const Portfolio = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={styles.flechaSectionHeading + " mb-6 arabic-heading"}>
            مشاريع حققت نتائج استثنائية
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed arabic-body"}>
            نماذج حقيقية من مشاريع التسويق التي نفذتها لشركات خليجية رائدة، وحققت نمواً قابلاً للقياس
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Social Media Marketing */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>تقنية الموارد البشرية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>استراتيجية وسائل التواصل</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>لينكد إن + تويتر</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                محتوى احترافي للتوظيف
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير استراتيجية محتوى شاملة لمنصة شفتات للتوظيف بالذكاء الاصطناعي، مع التركيز على القيادة الفكرية واتجاهات استقطاب المواهب.
              </p>
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/shiftat-sa/', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - KAPSARC Website Content Strategy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>البحوث الحكومية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="كابسارك" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>استراتيجية محتوى الموقع</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>منصة البحوث + محتوى السياسات</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                محتوى منصة البحوث الحكومية
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير استراتيجية محتوى شاملة لمنصة أبحاث كابسارك، لتحسين إمكانية الوصول لرؤى سياسات الطاقة لأصحاب المصلحة.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Abudawood B2B Social Media Marketing */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>اللوجستيات وسلسلة التوريد</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="أبوداود" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>تسويق وسائل التواصل</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>لينكد إن B2B + محتوى القطاع</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                استراتيجية اللوجستيات الاجتماعية B2B
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير استراتيجية تسويق B2B احترافية عبر لينكد إن ومحتوى القطاع لأحد أكبر مقدمي الخدمات اللوجستية في الخليج، لترسيخ القيادة الفكرية.
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - Al Nahdi Email Marketing */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>الرعاية الصحية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/alnahdi.webp" alt="النهدي" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>التسويق عبر البريد الإلكتروني</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>حملة النشرة الإخبارية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                استراتيجية النشرة الصحية
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تصميم وكتابة حملات نشرة إخبارية جذابة لصيدلية النهدي، مع التركيز على النصائح الصحية وترويج المنتجات.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Empire Real Estate Brand Profile */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>العقارات</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/empirerealestate.webp" alt="امباير ريل استيت" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoEmpire}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>الملف التجاري للعلامة</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>تموضع الشركة</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                قصة العلامة التجارية الفاخرة
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير ملف تجاري شامل واستراتيجية تموضع لمحفظة العقارات الفاخرة لشركة امباير ريل استيت في قطر.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - SAEQ Company Profile */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>اللوجستيات</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/saeq.webp" alt="سائق" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>الملف التجاري للشركة</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>تموضع العلامة التجارية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                تموضع علامة اللوجستيات
                <Image
                  src="/arrow-right.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                إعداد ملف تجاري شامل واستراتيجية تموضع سوقي لتوسع سائق عبر أسواق الخليج.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
        <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border gap-4">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText}> ملف الأعمال الكاملة </span>
            <span className="text-gray-400 mx-2">•</span>
            <button 
              onClick={() => window.location.href = '/v/marketing/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
             اطلع على جميع المشاريع ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;