"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../homePage/footerSection/footer";
import styles from "./caseStudyPage.module.css";

interface NavigationHandlers {
  about: () => void;
  portfolio: () => void;
  services: () => void;
  caseStudy: () => void;
}

interface CaseStudyDetailProps {
  onNavigate: NavigationHandlers;
}

export default function CaseStudyDetail({ onNavigate }: CaseStudyDetailProps) {
  return (
    <div className={styles.detailContainer}>
      {/* Unified Background Container for Header + Hero */}
      <div className={styles.unifiedBackgroundContainer}>
        {/* Header Navigation */}
        <header className={styles.navComponent}>
          <div className={styles.navContainer}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/v/marketing/homepage" className={styles.logoName}>
                حسام بعكة <span className={styles.cursorBlink}>|</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-0 space-x-reverse">
              <button onClick={onNavigate.about} className={styles.navLink + " arabic-body"}>نبذة عني</button>
              <button onClick={onNavigate.portfolio} className={styles.navLink + " arabic-body"}>أعمالي</button>
              <button onClick={onNavigate.services} className={styles.navLink + " arabic-body"}>خدماتي</button>
              <button onClick={onNavigate.caseStudy} className={styles.navLink + " arabic-body"}>دراسة حالة</button>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.navButtonStrategy + " arabic-body"}
              >
                احجز استشارة
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className={`${styles.navLink} p-2`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle + " arabic-heading"}>
                  كيف أصبحت شفتات<br />
                  <span className={styles.highlight}>منصة التوظيف الذكي الرائدة في السعودية</span>
                </h1>
                <p className={styles.heroSubtitle + " arabic-body"}>
                  من خلال التسويق الرقمي الاستراتيجي والنمو القائم على البيانات
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>١٠٠+</div>
                    <div className={styles.statLabel + " arabic-body"}>عميل محتمل مؤهل</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٦٠٪+</div>
                    <div className={styles.statLabel + " arabic-body"}>معدل فتح الإيميل</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٥,٠٠٠+</div>
                    <div className={styles.statLabel + " arabic-body"}>مشترك نشط</div>
                  </div>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.heroImageContainer}>
                  <Image
                    src="/backgrounds/Shiftat.webp"
                    alt="منصة شفتات"
                    width={600}
                    height={400}
                    className={styles.heroImg}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* White sections container starts here */}
      <div className={styles.whiteSectionContainer}>
        {/* Results Section */}
        <section className={styles.resultsNew}>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsMainHeading + " arabic-heading"}>
                نتائج <span className={styles.resultsHighlight}>تتحدث عن نفسها</span>
              </h2>
              <p className={styles.resultsSubheading + " arabic-body"}>
                تأثير قابل للقياس عبر جميع مؤشرات الأداء الرئيسية
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>١٠٠+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>عميل محتمل عالي الجودة</div>
                  <div className={styles.primaryDesc + " arabic-body"}>تم توليدهم من خلال حملات استراتيجية</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>٦٠٪+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>معدل فتح الرسائل الإلكترونية</div>
                  <div className={styles.primaryDesc + " arabic-body"}>تفاعل يقود الصناعة</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٥,٠٠٠+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>مشترك متفاعل</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٤,٠٠٠+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>متابع على لينكد إن</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.challenge}>
          <div className={styles.container}>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeContent}>
                <h2 className={styles.sectionTitle + " arabic-heading"}>التحدي</h2>
                <p className={styles.challengeText + " arabic-body"}>
                  احتاجت شفتات إلى ترسيخ حضورها في السوق السعودي التنافسي للتوظيف والوصول إلى صناع القرار في جميع أنحاء المملكة. مع وجود أكثر من <strong>مليون صاحب عمل</strong> في السعودية، كان التحدي يكمن في خلق الوعي وبناء الثقة في سوق تهيمن عليه طرق التوظيف التقليدية.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag + " arabic-body"}>اختراق السوق</span>
                  <span className={styles.challengeTag + " arabic-body"}>بناء الثقة</span>
                  <span className={styles.challengeTag + " arabic-body"}>الوعي بالعلامة التجارية</span>
                </div>
              </div>
              <div className={styles.challengeIcon}>
                <div className={styles.iconContainer}>!</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className={styles.solutionNew}>
          <div className={styles.container}>
            <div className={styles.solutionHeader}>
              <h2 className={styles.sectionTitle + " arabic-heading"}>الحل الاستراتيجي</h2>
              <p className={styles.solutionSubheading + " arabic-body"}>
                نظام تسويق رقمي شامل مصمم لتحقيق أقصى تأثير
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>استراتيجية النمو القائمة على المحتوى</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  بناء نظام تسويق محتوى شامل يوجه العملاء المحتملين عبر كل مرحلة من رحلة المشتري
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">توسيع الوصول إلى أكثر من مليون صاحب عمل</span>
                  <span className="arabic-body">محتوى تعليمي يبرز نقاط ألم التوظيف</span>
                  <span className="arabic-body">فوائد التوظيف الذكي المركزة على الحلول</span>
                  <span className="arabic-body">دراسات حالة تؤكد على تقليل التكلفة بنسبة ٨٠٪</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>حملات رقمية مستهدفة</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  إعلانات جوجل الاستراتيجية المستهدفة للكلمات المفتاحية العربية عالية النية ومصطلحات التوظيف
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">تحسين الكلمات المفتاحية العربية</span>
                  <span className="arabic-body">تحسين قائم على الأداء</span>
                  <span className="arabic-body">قاعدة بيانات العملاء المحتملين المؤهلين</span>
                  <span className="arabic-body">تحسين مستمر للحملات</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>التميز في التسويق عبر البريد الإلكتروني</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  حملات بريد إلكتروني عالية الأداء بمعدلات تفاعل استثنائية
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">٥,٠٠٠+ مشترك مؤهل</span>
                  <span className="arabic-body">٦٠٪+ معدل فتح أسبوعي</span>
                  <span className="arabic-body">حملات رعاية شهرية</span>
                  <span className="arabic-body">رؤى توظيف مخصصة</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>قيادة وسائل التواصل الاجتماعي</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تأسيس القيادة الفكرية عبر منصات لينكد إن وإكس
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">٨,٠٠٠+ متابع على إكس</span>
                  <span className="arabic-body">٤,٠٠٠+ محترف على لينكد إن</span>
                  <span className="arabic-body">تموضع كسلطة في التوظيف الذكي</span>
                  <span className="arabic-body">محتوى القيادة الفكرية للصناعة</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle + " arabic-heading"}>نجاح وسائل التواصل الاجتماعي</h2>
              <p className={styles.socialProofSubtitle + " arabic-body"}>
                من صفر متابع إلى القيادة في الصناعة - بناء مجتمعات متفاعلة تحقق نتائج أعمال حقيقية
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="نجاح لينكد إن"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>نمو لينكد إن</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>٤,٠٠٠+</span> محترف متفاعل وتموضع القيادة الفكرية</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="نجاح منصة إكس"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>نجاح منصة إكس</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>٨,٠٠٠+</span> متابع من خلال محتوى التوظيف القيم</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <blockquote className={styles.quote + " arabic-body"}>
            "النهج الاستراتيجي لتسويق المحتوى والحملات المستهدفة لم يولد عملاء محتملين فقط - بل أسس شفتات كـ<strong>حل التوظيف الذكي الأمثل</strong> في السعودية."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle + " arabic-heading"}>
            تحقق من <span className={styles.verificationHighlight}>قصة النجاح هذه</span>
          </h2>
          <p className={styles.verificationText + " arabic-body"}>
            يمكنك التواصل مع عبدالله مباشرة للتحقق من صحة ودقة هذه النتائج من خلال بريده الإلكتروني:
          </p>
          <a href="mailto:abdullah@shiftatsa.com" className={styles.verificationEmail}>
            abdullah@shiftatsa.com
          </a>
        </div>
      </section>

      {/* Unified Background Container for CTA + Footer */}
      <div className={styles.unifiedCtaFooterContainer}>
        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle + " arabic-heading"}>مستعد لتوسيع نطاق عملك؟</h2>
              <p className={styles.ctaText + " arabic-body"}>
                احصل على نفس النهج الاستراتيجي الذي جعل شفتات منصة التوظيف الذكي الرائدة في السعودية.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton + " arabic-body"}
              >
                احجز جلسة الاستراتيجية الخاصة بك
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer variant="transparent" />
      </div>
    </div>
  );
}