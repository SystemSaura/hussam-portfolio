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
          <h2 className={styles.flechaSectionHeading + " mb-6"}>
            نصوص تحقق المبيعات
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"}>
            مشاريع كتابة نصوص حقيقية حولت الزوار المرتبكين إلى عملاء ملتزمين لشركات دول الخليج.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Website Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>تقنية الموارد البشرية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>كتابة نصوص المواقع</h4>
                <p className={styles.portfolioServiceDetail}>الصفحة الرئيسية + صفحات الوصول</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                نصوص منصة التوظيف بالذكاء الاصطناعي
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                حولت المصطلحات التقنية المربكة إلى عناوين واضحة ومقنعة تجعل مدراء الموارد البشرية يشعرون وكأن أحداً يفهم كابوس التوظيف الذي يواجهونه. النتيجة: ١٠٠+ عميل محتمل عالي الجودة و٦٠٪+ معدلات تحويل من البريد الإلكتروني.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                اطلع على النماذج
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - Al Nahdi Email Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>الرعاية الصحية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/alnahdi.webp" alt="النهدي" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>كتابة رسائل إلكترونية</h4>
                <p className={styles.portfolioServiceDetail}>حملات النشرة الإخبارية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                سلاسل رسائل الرعاية الصحية
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                أنشأت حملات نشرة إخبارية جذابة حولت النصائح الصحية إلى تفاعل العملاء، مما أدى إلى زيادة زيارات المتجر ومبيعات المنتجات لصيدلية المملكة الرائدة.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                اطلع على الرسائل
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Empire Real Estate Sales Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>العقارات</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/empirerealestate.webp" alt="امباير العقارية" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoEmpire}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>نصوص المبيعات</h4>
                <p className={styles.portfolioServiceDetail}>تموضع العلامة التجارية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                نصوص مبيعات العقارات الفاخرة
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                طورت نصوص مبيعات راقية تموضع العقارات الفاخرة كاستثمارات حصرية، تجذب السوق الممتاز في قطر بعروض قيمة مقنعة.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                اطلع على النصوص
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - KAPSARC Technical Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>الأبحاث الحكومية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="كابسارك" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>الكتابة التقنية</h4>
                <p className={styles.portfolioServiceDetail}>محتوى البحوث</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                محتوى بوابة الأبحاث
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                حولت أبحاث الطاقة المعقدة إلى رؤى واضحة وقابلة للتطبيق لصناع السياسات وقادة الصناعة. تواصل واضح للمفاهيم التقنية.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                اطلع على النصوص التقنية
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Abudawood B2B Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>اللوجستيات</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="أبوداود" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>نصوص B2B</h4>
                <p className={styles.portfolioServiceDetail}>محتوى اجتماعي + ويب</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                رسائل اللوجستيات B2B
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                أنشأت نصوص B2B موثوقة رسخت القيادة الفكرية الصناعية لأحد أكبر مقدمي الخدمات اللوجستية في دول الخليج، مما أدى إلى جذب عملاء المؤسسات.
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                اطلع على نصوص B2B
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - SAEQ Brand Copy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory}>اللوجستيات</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/saeq.webp" alt="سائق" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType}>نصوص العلامة التجارية</h4>
                <p className={styles.portfolioServiceDetail}>محتوى التموضع</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>
                نصوص تموضع العلامة التجارية
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription}>
                طورت رسائل علامة تجارية مقنعة ميزت سائق في السوق اللوجستي التنافسي، وأنشأت تموضعاً سوقياً واضحاً للتوسع في دول الخليج.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                اطلع على نصوص العلامة
              </button>
            </div>
          </div>
        </div>

        {/* View Complete Portfolio Button */}
        <div className="text-center mt-16">
         <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " mr-3"}>المزيد من نماذج الكتابة متاح</span>
            <button 
              onClick={() => window.location.href = '/v/copywriting/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              اطلع على جميع النصوص ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;