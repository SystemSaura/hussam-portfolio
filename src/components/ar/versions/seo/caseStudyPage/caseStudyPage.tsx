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
    <div className={styles.detailContainer} dir="rtl">
      {/* Unified Background Container for Header + Hero */}
      <div className={styles.unifiedBackgroundContainer}>
        {/* Header Navigation */}
        <header className={styles.navComponent}>
          <div className={styles.navContainer}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/v/seo/homepage" className={styles.logoName + " arabic-body"}>
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
                  كيف هيمنت شفتات على<br />
                  <span className={styles.highlight}>نتائج البحث في المملكة العربية السعودية</span>
                </h1>
                <p className={styles.heroSubtitle + " arabic-body"}>
                  من خلال المحتوى الاستراتيجي وتحسين محركات البحث المتقدم
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٢٠٠٪</div>
                    <div className={styles.statLabel + " arabic-body"}>نمو الزيارات العضوية</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>١٥+</div>
                    <div className={styles.statLabel + " arabic-body"}>كلمة مفتاحية في الصفحة الأولى</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٨٥٪</div>
                    <div className={styles.statLabel + " arabic-body"}>تغطية الكلمات المستهدفة</div>
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
                نتائج بحث <span className={styles.resultsHighlight}>تتحدث عن نفسها</span>
              </h2>
              <p className={styles.resultsSubheading + " arabic-body"}>
                تأثير قابل للقياس عبر جميع مؤشرات أداء البحث الرئيسية
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>٢٠٠٪</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>نمو الزيارات العضوية</div>
                  <div className={styles.primaryDesc + " arabic-body"}>تم تحقيقه من خلال المحتوى الاستراتيجي</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>١٥+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>ترتيب في الصفحة الأولى</div>
                  <div className={styles.primaryDesc + " arabic-body"}>لكلمات التوظيف عالية القيمة</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٥٠+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>مقال محسّن لمحركات البحث</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٨٥٪</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>تغطية الكلمات المفتاحية</div>
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
                <h2 className={styles.sectionTitle + " arabic-heading"}>التحدي في محركات البحث</h2>
                <p className={styles.challengeText + " arabic-body"}>
                  احتاجت شفتات إلى ترسيخ ظهورها في نتائج البحث في سوق التوظيف السعودي التنافسي. مع <strong>آلاف عمليات البحث</strong> اليومية المتعلقة بالتوظيف، كان التحدي يكمن في الترتيب للكلمات المفتاحية عالية النية مع بناء سلطة موضوعية في سوق تهيمن عليه أسماء راسخة.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag + " arabic-body"}>صفر ظهور في البحث</span>
                  <span className={styles.challengeTag + " arabic-body"}>منافسة شديدة</span>
                  <span className={styles.challengeTag + " arabic-body"}>لا يوجد أساس محتوى</span>
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
              <h2 className={styles.sectionTitle + " arabic-heading"}>حل تحسين محركات البحث الاستراتيجي</h2>
              <p className={styles.solutionSubheading + " arabic-body"}>
                نظام شامل لتحسين محركات البحث مصمم لتحقيق أقصى ظهور في النتائج
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>بحث شامل للكلمات المفتاحية</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تحليل عميق لسلوك البحث في صناعة التوظيف وثغرات الكلمات المفتاحية للمنافسين لتحديد الفرص عالية القيمة
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">تحليل ٥٠٠+ كلمة مفتاحية للتوظيف</span>
                  <span className="arabic-body">رسم خريطة مصطلحات البحث العربية والإنجليزية</span>
                  <span className="arabic-body">إكمال تحليل ثغرات محتوى المنافسين</span>
                  <span className="arabic-body">إنهاء تصنيف نوايا البحث</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>استراتيجية المحتوى المحسّن</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  إنشاء محتوى استراتيجي يستهدف نقاط ألم التوظيف مع هيكلة محسّنة ووضع الكلمات المفتاحية
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">إنشاء ٥٠+ مقال محسّن لمحركات البحث</span>
                  <span className="arabic-body">تغطية مواضيع صناعة التوظيف</span>
                  <span className="arabic-body">هيكل محتوى ملائم لمحركات البحث</span>
                  <span className="arabic-body">تطبيق استراتيجية الربط الداخلي</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>تحسين تقني لمحركات البحث</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تحسينات هيكل الموقع والتقنية لتعزيز قابلية الزحف لمحركات البحث وتجربة المستخدم
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">تحسين بنية الموقع</span>
                  <span className="arabic-body">علامات وصفية وترميز منطقي</span>
                  <span className="arabic-body">تحسينات سرعة الصفحة</span>
                  <span className="arabic-body">تحسين للجوال أولاً</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>مراقبة أداء البحث</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تتبع مستمر وتحسين لترتيب البحث والزيارات العضوية وأداء الكلمات المفتاحية
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">تقارير ترتيب أسبوعية</span>
                  <span className="arabic-body">تتبع نمو الزيارات العضوية</span>
                  <span className="arabic-body">مراقبة مواقع الكلمات المفتاحية</span>
                  <span className="arabic-body">تحليل أداء المحتوى</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle + " arabic-heading"}>نجاح الظهور في البحث</h2>
              <p className={styles.socialProofSubtitle + " arabic-body"}>
                من صفر ظهور في البحث إلى سلطة صناعية – بناء ظهور بحثي يجلب زيارات وعملاء مؤهلين
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/seophotos/googleshiftat.webp"
                    alt="نجاح ترتيب جوجل"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>ترتيب جوجل</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>١٥+</span> ترتيب في الصفحة الأولى لكلمات التوظيف عالية القيمة</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/seophotos/blogshiftat.webp"
                    alt="أداء المحتوى المحسّن"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>أداء المحتوى</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>٥٠+</span> مقال محسّن يجلب زيارات بحث عضوية</p>
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
            "النهج الاستراتيجي لتحسين محركات البحث لم يحسّن ترتيبنا فحسب—بل رسّخ شفتات كـ<strong>المصدر الأول لرؤى التوظيف</strong> في نتائج البحث السعودية."
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
            يمكنك التواصل مع عبدالله مباشرة للتحقق من صحة ودقة نتائج تحسين محركات البحث هذه:
          </p>
          <a href="mailto:abdullah@shiftatsa.com" className={styles.verificationEmail + " arabic-body"}>
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
              <h2 className={styles.ctaTitle + " arabic-heading"}>مستعد لهيمنة نتائج البحث؟</h2>
              <p className={styles.ctaText + " arabic-body"}>
                احصل على نفس النهج الاستراتيجي لتحسين محركات البحث الذي جعل شفتات سلطة بحثية في صناعة التوظيف السعودية.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton + " arabic-body"}
              >
                احجز جلسة استراتيجية تحسين محركات البحث
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