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
                  كيف حولت استراتيجية التسويق الرقمي شفتات<br />
                  <span className={styles.highlight}>إلى منصة التوظيف الرائدة في السعودية</span>
                </h1>
                <p className={styles.heroSubtitle + " arabic-body"}>
                  تحويل الزوار المشتتين إلى عملاء ملتزمين من خلال استراتيجية تسويق فعالة ومثبتة
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٤٠٠٪</div>
                    <div className={styles.statLabel + " arabic-body"}>زيادة الزيارات</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٨٥٪</div>
                    <div className={styles.statLabel + " arabic-body"}>تحسن التحويل</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٥,٠٠٠+</div>
                    <div className={styles.statLabel + " arabic-body"}>مشترك جديد</div>
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
                نتائج تسويقية <span className={styles.resultsHighlight}>تتحدث عن نفسها</span>
              </h2>
              <p className={styles.resultsSubheading + " arabic-body"}>
                عندما تصل رسالتك للجمهور المناسب بالطريقة الصحيحة، تصبح التحويلات قابلة للتنبؤ
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>٤٠٠٪</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>زيادة في الزيارات</div>
                  <div className={styles.primaryDesc + " arabic-body"}>من خلال استراتيجية تحسين محركات البحث المتكاملة</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>٨٥٪</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>تحسن معدل التحويل</div>
                  <div className={styles.primaryDesc + " arabic-body"}>رسائل تسويقية تركز على احتياجات العميل الحقيقية</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٥,٠٠٠+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>مشترك نشط في القائمة البريدية</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٣٥٪</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>انخفاض تكلفة اكتساب العميل</div>
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
                <h2 className={styles.sectionTitle + " arabic-heading"}>التحدي التسويقي</h2>
                <p className={styles.challengeText + " arabic-body"}>
                  كانت شفتات تمتلك تقنية متطورة للتوظيف بالذكاء الاصطناعي، لكن موقعها الإلكتروني كان يشتت الزوار بدلاً من تحويلهم إلى عملاء. 
                  لم يتمكن الزوار من فهم <strong>ما تقدمه المنصة بالضبط</strong>، <strong>لمن مخصصة</strong>، أو <strong>لماذا يجب اختيارها</strong>. 
                  كانت الرسالة التسويقية تحاول مخاطبة الجميع لكنها لم تلامس أحداً - مشكلة كلاسيكية في التسويق الذي يشرح الميزات دون بيع الحل.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag + " arabic-body"}>رسائل مشتتة</span>
                  <span className={styles.challengeTag + " arabic-body"}>عدم وضوح القيمة</span>
                  <span className={styles.challengeTag + " arabic-body"}>ضعف التحويلات</span>
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
              <h2 className={styles.sectionTitle + " arabic-heading"}>استراتيجية التحول التسويقي</h2>
              <p className={styles.solutionSubheading + " arabic-body"}>
                تسويق رقمي استراتيجي يحول التشتت إلى وضوح والزوار إلى عملاء
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>رسائل واضحة تحول وتقنع</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تحويل المصطلحات التقنية المعقدة إلى رسائل واضحة ومقنعة تركز على القيمة الحقيقية للعميل
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عناوين توقف العميل المناسب في مساره</span>
                  <span className="arabic-body">رسائل فرعية تجعل المشاكل واضحة ومؤلمة</span>
                  <span className="arabic-body">محتوى يركز على الفوائد والتحول</span>
                  <span className="arabic-body">دليل اجتماعي يبني الثقة فوراً</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>تحسين محركات البحث المتخصص</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  استراتيجية SEO مخصصة للسوق السعودي تضمن ظهور المنصة عند البحث عن حلول التوظيف
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">كلمات مفتاحية مدروسة للسوق المحلي</span>
                  <span className="arabic-body">محتوى تعليمي يبني السلطة والثقة</span>
                  <span className="arabic-body">تحسين تقني يحسن تجربة المستخدم</span>
                  <span className="arabic-body">استراتيجية ربط خارجي محلية</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>حملات إعلانية مستهدفة</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  إعلانات ذكية تستهدف أصحاب القرار في الموارد البشرية بدقة عالية وتكلفة مدروسة
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">استهداف دقيق لمدراء الموارد البشرية</span>
                  <span className="arabic-body">رسائل إعلانية تخاطب التحديات الحقيقية</span>
                  <span className="arabic-body">حملات ريتارغيتنغ ذكية</span>
                  <span className="arabic-body">تحسين مستمر وقائم على البيانات</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>محتوى اجتماعي بناء للسلطة</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  استراتيجية محتوى اجتماعي تبني سمعة المنصة كخبير موثوق في مجال التوظيف والموارد البشرية
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">محتوى لينكد إن يجذب أصحاب القرار</span>
                  <span className="arabic-body">نصائح عملية تبني الثقة والسلطة</span>
                  <span className="arabic-body">قصص نجاح تلهم وتحفز</span>
                  <span className="arabic-body">تفاعل استراتيجي مع المجتمع المهني</span>
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
            "التحول في الاستراتيجية التسويقية لم يحسن رسائلنا فقط - بل جعل العملاء المحتملين يفهمون فوراً لماذا يحتاجون شفتات. 
            الآن موقعنا <strong>يحول الزوار بدلاً من تشتيتهم</strong>."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle + " arabic-heading"}>
            تحقق من <span className={styles.verificationHighlight}>نجاح هذه الاستراتيجية</span>
          </h2>
          <p className={styles.verificationText + " arabic-body"}>
            تواصل مع عبدالله مباشرة للتحقق من كيفية تحويل الاستراتيجية التسويقية لمعدلات تحويل شفتات:
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
              <h2 className={styles.ctaTitle + " arabic-heading"}>هل أنت مستعد لتسويق يحقق النتائج؟</h2>
              <p className={styles.ctaText + " arabic-body"}>
                احصل على نفس النهج التسويقي الاستراتيجي الذي جعل رسائل شفتات مستحيلة التجاهل
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton + " arabic-body"}
              >
                احجز جلسة الاستراتيجية التسويقية
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