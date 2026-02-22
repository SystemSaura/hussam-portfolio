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
            مشاريع نجحت في بناء الحضور الرقمي
          </h2>
          <p className={styles.workSansBody + " text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed arabic-body"}>
            حملات حقيقية لوسائل التواصل حققت نمواً قابلاً للقياس لشركات خليجية عبر لينكد إن وتويتر وإنستغرام.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Portfolio Project 1 - Shiftat Social Media Growth */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-blue-500 to-blue-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>تقنيات الموارد البشرية</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/shiftat.webp" alt="شفتات" className={`${styles.portfolioLogoImg} ${styles.portfolioLogoShiftat}`} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>نمو وسائل التواصل</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>استراتيجية لينكد إن + تويتر</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                ١٢ ألف متابع في ٨ شهور
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
                بنينا لشفتات حضوراً رقمياً من الصفر إلى الريادة بمحتوى مدروس، وتكتيكات تفاعل، وتموضع كخبير في المجال.
              </p>
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/shiftat-sa/', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonBlue}`}
              >
                شاهد قصة النجاح
              </button>
            </div>
          </div>

          {/* Portfolio Project 2 - Abudawood B2B LinkedIn Strategy */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-orange-500 to-orange-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>اللوجستيات</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/abudawood.webp" alt="أبوداود" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>استراتيجية لينكد إن</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>قيادة فكرية B2B</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                بناء السمعة المهنية على لينكد إن
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
                طورنا استراتيجية محتوى شاملة على لينكد إن لأكبر مقدمي الخدمات اللوجستية في الخليج، وثبتنا موقعهم كخبراء في المجال وجلبنا لهم عملاء B2B مؤهلين.
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vHitoxacrfiaiVLRC1zr5Zb1JfzIdHTj/edit?usp=drive_link&ouid=108184149443351395686&rtpof=true&sd=true', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonOrange}`}
              >
                شاهد المحتوى
              </button>
            </div>
          </div>

          {/* Portfolio Project 3 - Downe House Educational Institution */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-green-500 to-green-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>التعليم</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/downehouse.webp" alt="داون هاوس" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>إنستغرام وفيسبوك</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>محتوى تعليمي</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                حملة تواصل اجتماعي تعليمية
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
                أنشأنا محتوى جذاباً لمؤسسة تعليمية مرموقة، ركزنا فيه على حياة الطلاب، والتفوق الأكاديمي، وإشراك أولياء الأمور.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/14HO-MTvpGGteiaJG7o3vBMDiIQecnoYM?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonGreen}`}
              >
                شاهد الحملة
              </button>
            </div>
          </div>

          {/* Portfolio Project 4 - JAX District Arts & Culture */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-pink-500 to-pink-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>الفنون والثقافة</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/jaxdistrict.webp" alt="جاكس ديستريكت" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>محتوى إبداعي</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>إنستغرام + فيسبوك</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                نمو مجتمع الفنون
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
                طورنا حملات إبداعية لعرض المواهب الفنية والفعاليات الثقافية، وبنينا مجتمعاً متفاعلاً حول الفنون المحلية.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1TXrFtUlfxUvZosRY-WTqDlzqF_HVJimE?usp=sharing', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPink}`}
              >
                شاهد العمل الإبداعي
              </button>
            </div>
          </div>

          {/* Portfolio Project 5 - REVIVA Sustainability Campaign */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-teal-500 to-teal-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>الاستدامة</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/reviva.webp" alt="ريفيفا" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>حملة بيئية</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>محتوى متعدد المنصات</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                حراك اجتماعي للاستدامة
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
                أنشأنا محتوى مؤثراً لنشر الوعي البيئي وتشجيع الممارسات المستدامة، وحفزنا التفاعل المجتمعي والتغيير السلوكي.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1MIsTVRn7wXAlOfqHV32Ra0Va2BMumXYS?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonTeal}`}
              >
                شاهد تأثير الحملة
              </button>
            </div>
          </div>

          {/* Portfolio Project 6 - Makkah Bus Public Transport */}
          <div className={`${styles.portfolioCard} group`}>
            <div className={`${styles.portfolioHeader} bg-gradient-to-br from-purple-500 to-purple-600`}>
              <div className={styles.portfolioHeaderContent}>
                <div className={styles.portfolioCategory + " arabic-body"}>النقل العام</div>
                <div className={styles.portfolioCompanyLogo}>
                  <img src="/logos/makkahbus.webp" alt="باص مكة" className={styles.portfolioLogoImg} />
                </div>
              </div>
              <div className={styles.portfolioHeaderMain}>
                <h4 className={styles.portfolioServiceType + " arabic-heading"}>تفاعل مجتمعي</h4>
                <p className={styles.portfolioServiceDetail + " arabic-body"}>استراتيجية محلية</p>
              </div>
            </div>
            
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle + " arabic-heading"}>
                استراتيجية تواصل للخدمات العامة
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
                طورنا استراتيجية شاملة لنظام النقل العام في مكة، وركزنا على التفاعل مع المجتمع ونشر الوعي بالخدمات.
              </p>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1PugWB7ye9naVYdQJn8l6_6pS1gVfChzu?usp=drive_link', '_blank')}
                className={`${styles.portfolioButton} ${styles.portfolioButtonPurple}`}
              >
                شاهد الاستراتيجية
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
        <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border gap-4">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " arabic-body"}>ملف الأعمال كاملاً متاح</span>
            <span className="text-gray-400 mx-2">•</span>
            <button 
              onClick={() => window.location.href = '/v/social-media/portfolio'}
              className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}
            >
              شاهد جميع مشاريع التواصل الاجتماعي ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;