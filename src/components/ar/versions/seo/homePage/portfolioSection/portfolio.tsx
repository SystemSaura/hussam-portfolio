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
            نماذج من أعمال SEO المميزة
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed arabic-body"}>
            مشاريع SEO حقيقية حققت ظهوراً في محركات البحث ونمواً في الزيارات العضوية لشركات خليجية في قطاعات مختلفة.
          </p>
        </div>

        {/* Portfolio Grid - SEO Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat SEO Content */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>تقنية الموارد البشرية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>استراتيجية محتوى SEO</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>بحث الكلمات المفتاحية + المحتوى</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                مركز محتوى SEO للتوظيف بالذكاء الاصطناعي
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
                أنشأت استراتيجية محتوى SEO شاملة تستهدف كلمات مفتاحية لصناعة التوظيف، حققت ١٥+ ترتيب في الصفحة الأولى و٢٠٠٪ نمو في الزيارات العضوية.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1ElAfxFFWKU1S1gXfZsQ7soWTV29OFmrL?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - KAPSARC SEO Content */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>الأبحاث الحكومية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/kapsarc.webp" alt="كابسارك" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>محتوى موقع SEO</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>بوابة أبحاث محسنة للبحث</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                مركز محتوى SEO لسياسات الطاقة
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
                حسّنت محتوى بوابة الأبحاث لكلمات مفتاحية خاصة بسياسات الطاقة، مما حسّن ظهور البحث وإمكانية الوصول للرؤى لأصحاب المصلحة في السياسات.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/145vK-1CBxdCD7RxYql0SVoixnGym_SzE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Cultural Articles SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>المحتوى الثقافي</div>
                <div className={styles.portfolioCompanyLogo}>
                  <div className={styles.portfolioLogoText + " arabic-body"}>محتوى ثقافي SEO</div>
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>مقالات مدونة SEO</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>محتوى محسن للكلمات المفتاحية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                ٧٠ مقال ثقافي محسن لمحركات البحث
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
                طورت محتوى SEO واسع يغطي مواضيع ثقافية مع بحث مستهدف للكلمات المفتاحية، وهيكل محسن، وتنسيق صديق لمحركات البحث لأقصى ظهور.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1MrTvvieV9rfqk0i8mj0898MXiQLf0XSa?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - Educational SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>التعليم</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/bonyan.webp" alt="بنيان" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>محتوى SEO تعليمي</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>كلمات مفتاحية متخصصة في التعلم</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                استراتيجية مدونة SEO تعليمية
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
                أنشأت محتوى SEO محسن يستهدف كلمات مفتاحية لمنهجيات التعلم، مما حسّن ظهور البحث للموارد التعليمية ومحتوى تطوير الطلاب.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1LDTLQjH-em-ML0FSL40yXAZzM8Uw9MPt?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - Mental Health SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>الصحة النفسية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/mindtales.webp" alt="حكايات العقل" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>محتوى SEO صحي</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>كلمات مفتاحية للعافية (عربي/إنجليزي)</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                مركز محتوى SEO للصحة النفسية
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
                طورت استراتيجية محتوى SEO ثنائية اللغة لمواضيع الصحة النفسية، تستهدف كلمات مفتاحية للعافية والصحة النفسية بالعربية والإنجليزية لأقصى وصول.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/13gUT5QgcXH4IodeHxQ7p2KB_ATpRPHjd?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - Multi-Industry SEO */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>قطاعات متنوعة</div>
                <div className={styles.portfolioCompanyLogo}>
                  <div className={styles.portfolioLogoText + " arabic-body"}>متعدد القطاعات</div>
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>مقالات SEO متخصصة</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>كلمات مفتاحية خاصة بالقطاع</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                محتوى SEO خاص بالقطاعات
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
                أنشأت مقالات SEO مستهدفة عبر قطاعات متعددة، كل منها محسن لكلمات مفتاحية متخصصة وسلوكيات بحث فريدة لشرائح سوقية مختلفة.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1u6uaGYj0iP6H6E_DMeXuVNTVCBwHyUlh?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                شاهد العمل كاملاً
              </button>
            </div>
          </div>
        </div>

        {/* View Complete Portfolio Button */}
        <div className="text-center mt-16">
         <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border gap-4">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " arabic-body"}>ملف أعمال SEO الكامل متاح</span>
            <span className="text-gray-400 mx-2">•</span>
            <button 
              onClick={() => window.location.href = '/v/seo/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              شاهد الكل ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;