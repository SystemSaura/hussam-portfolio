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
            نتائج قابلة للقياس
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed arabic-body"}>
            مشاريع تسويق رقمي حققت نمواً حقيقياً وقابلاً للقياس للشركات الرائدة في منطقة الخليج
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Digital Marketing */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>تقنية الموارد البشرية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>تسويق رقمي متكامل</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>تحسين محركات البحث + إعلانات مدفوعة</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                منصة التوظيف الذكية
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                استراتيجية تسويق متكاملة حولت شفتات إلى المنصة الرائدة للتوظيف بالذكاء الاصطناعي في السعودية. 
                النتيجة: زيادة ٤٠٠٪ في الزيارات و ٨٥٪ تحسن في معدل التحويل.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                شاهد دراسة الحالة
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - Al Nahdi SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>الصحة والأدوية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/alnahdi.webp" alt="النهدي" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>تحسين محركات البحث</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>محتوى طبي + تحسين تقني</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                صيدليات النهدي الرقمية
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير استراتيجية محتوى طبي موثوق وتحسين الحضور الرقمي لأكبر سلسلة صيدليات في المملكة، 
                مما أدى لزيادة الزيارات العضوية والثقة في العلامة التجارية.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1N6chNmBHwYBxLdscan04HA1CjZSEc8ML?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                شاهد النتائج
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Empire Real Estate Social Media */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>العقارات الفاخرة</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/empirerealestate.webp" alt="امباير ريل استيت" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoEmpire}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>إدارة وسائل التواصل</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>محتوى راقي + إعلانات مستهدفة</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                العقارات الراقية في قطر
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير هوية رقمية راقية تليق بالعقارات الفاخرة، مع محتوى مخصص للسوق القطري يجذب المستثمرين 
                ويبرز قيمة الاستثمارات العقارية الحصرية.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1uyDkcHna72VXnfUl00kP9PS42XjA26K_?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                شاهد الحملة
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - KAPSARC Content Strategy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>البحوث الحكومية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="كابسارك" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>استراتيجية المحتوى</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>محتوى تعليمي + نشر علمي</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                بحوث الطاقة والاستدامة
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير استراتيجية محتوى تعليمي يبسط البحوث المعقدة ويجعلها قابلة للفهم للجمهور العام، 
                مما عزز مكانة المركز كمرجع موثوق في أبحاث الطاقة.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                شاهد المحتوى
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Abudawood B2B Marketing */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>اللوجستيات والنقل</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="أبوداود" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>تسويق B2B</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>قيادة فكرية + شراكات</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                عملاق اللوجستيات الخليجي
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                بناء استراتيجية تسويق B2B تركز على القيادة الفكرية في قطاع اللوجستيات، 
                مما عزز مكانة أبوداود كشريك موثوق للشركات الكبرى في المنطقة.
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                شاهد الاستراتيجية
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - SAEQ Brand Development */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>النقل الذكي</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/saeq.webp" alt="سائق" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>تطوير العلامة التجارية</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>هوية رقمية + حملات توعية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                منصة النقل الذكي
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="سهم"
                  width={18}
                  height={18}
                  className={styles.portfolioArrow}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </h3>
              <p className={styles.portfolioDescription + " arabic-body"}>
                تطوير هوية رقمية قوية لمنصة النقل الذكي، مع التركيز على الأمان والموثوقية، 
                مما ساعد في بناء الثقة مع المستخدمين والسائقين على حد سواء.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/18fE4IrH1FR6ik2XXWXOJos0lz7bMyHh0?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                شاهد العلامة التجارية
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
            <span className={styles.flechaVerificationText + " mr-3 arabic-body"}>المزيد من النتائج المثبتة متاحة</span>
            <button 
              onClick={() => window.location.href = '/v/marketing/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              شاهد جميع المشاريع ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;