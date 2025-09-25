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
              <Link href="/v/social-media/homepage" className={styles.logoName + " arabic-body"}>
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
                  كيف حولت وسائل التواصل الاجتماعي الاستراتيجية<br />
                  <span className={styles.highlight}>"شفتات" من شركة ناشئة إلى رائدة في المجال</span>
                </h1>
                <p className={styles.heroSubtitle + " arabic-body"}>
                  من الصفر إلى أشهر علامة توظيف ذكي في المملكة العربية السعودية
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٨ آلاف+</div>
                    <div className={styles.statLabel + " arabic-body"}>متابع على إكس</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>٤ آلاف+</div>
                    <div className={styles.statLabel + " arabic-body"}>شبكة لينكد إن</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>١٠٠+</div>
                    <div className={styles.statLabel + " arabic-body"}>عميل مؤهل</div>
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
                عندما تحقق وسائل التواصل <span className={styles.resultsHighlight}>نتائج حقيقية</span>
              </h2>
              <p className={styles.resultsSubheading + " arabic-body"}>
                نتائج تفاعل تترجم مباشرة إلى نمو الأرباح
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>١٢ ألف+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>إجمالي المتابعين</div>
                  <div className={styles.primaryDesc + " arabic-body"}>عبر منصتي لينكد إن وإكس</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>١٠٠+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>عميل مؤهل</div>
                  <div className={styles.primaryDesc + " arabic-body"}>من المحتوى العضوي</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٦٠٪+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>معدل فتح الرسائل</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>٥ آلاف+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>مشترك في النشرة البريدية</div>
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
                <h2 className={styles.sectionTitle + " arabic-heading"}>التحدي: طبيعة وسائل التواصل الاجتماعي</h2>
                <p className={styles.challengeText + " arabic-body"}>
                  وسائل التواصل لا تعمل لأنها تتحدث عنك فقط. عن منتجاتك. إنجازاتك. أخبار شركتك. بينما عملاؤك المستهدفون يتجاهلون منشوراتك لأنهم لا يرون أنفسهم في المحتوى.
                  <br /><br />
                  شفتات واجهت نفس المشكلة—تقنية ذكاء اصطناعي رائعة، لكن وسائل تواصل تصرخ "شركة تقنية" بدلاً من "حلول توظيف".
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag + " arabic-body"}>محتوى عام</span>
                  <span className={styles.challengeTag + " arabic-body"}>عدم تفاعل</span>
                  <span className={styles.challengeTag + " arabic-body"}>لا يجلب عملاء</span>
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
              <h2 className={styles.sectionTitle + " arabic-heading"}>استراتيجية وسائل التواصل التي تحقق النتائج</h2>
              <p className={styles.solutionSubheading + " arabic-body"}>
                توقف عن الحديث عن منتجك. ابدأ في حل مشاكل المشتري.
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>١. استراتيجية محتوى مهووسة بالعميل</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  كل منشور يعالج مشكلة توظيف محددة يواجهها قادة الموارد البشرية السعوديون يومياً
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">رؤى توظيف يومية بالعربية</span>
                  <span className="arabic-body">دراسات حالة تظهر توفير ٨٠٪ من التكاليف</span>
                  <span className="arabic-body">تحليل اتجاهات الصناعة يشاركه مديرو الموارد البشرية</span>
                  <span className="arabic-body">محتوى يركز على الحلول وليس عروض المنتجات</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>٢. بناء السلطة المهنية لكل منصة</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  منصات مختلفة، محادثات مختلفة—كلها تؤدي لنفس النتيجة
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">لينكد إن: قيادة فكرية مهنية</span>
                  <span className="arabic-body">إكس: تعليق فوري على أحداث الصناعة</span>
                  <span className="arabic-body">صوت علامة تجارية متسق عبر القنوات</span>
                  <span className="arabic-body">تضخيم المحتوى عبر المنصات</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>٣. مسار تحويل التفاعل إلى عملاء محتملين</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تفاعل اجتماعي يتحول فعلاً إلى محادثات أعمال
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">بروتوكولات التفاعل مع التعليقات</span>
                  <span className="arabic-body">بدء محادثات الرسائل المباشرة</span>
                  <span className="arabic-body">تحويل متابعي وسائل التواصل إلى مشتركين في النشرة</span>
                  <span className="arabic-body">عملية تأهيل العملاء المحتملين المباشرة</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>٤. السلطة من خلال الاستمرارية</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  تقديم قيمة يومية حتى اعترف السوق بشفتات كخبير التوظيف الذكي
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">جدول نشر يومي ثابت</span>
                  <span className="arabic-body">تغطية مباشرة لفعاليات الصناعة</span>
                  <span className="arabic-body">تموضع قيادة فكرية</span>
                  <span className="arabic-body">تحليل المنافسين والتميز</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle + " arabic-heading"}>الأرقام لا تكذب</h2>
              <p className={styles.socialProofSubtitle + " arabic-body"}>
                من صفر إلى <span className={styles.highlightNumber}>١٢,٠٠٠+</span> متابع متفاعل يهتمون فعلاً بحلول التوظيف
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="سلطة لينكد إن"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>سلطة لينكد إن</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>٤,٠٠٠+</span> مدير موارد بشرية وقائد أعمال يتفاعلون مع محتوى التوظيف</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="وصول منصة إكس"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>وصول منصة إكس</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>٨,٠٠٠+</span> متابع يناقشون بنشاط اتجاهات التوظيف الذكي</p>
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
            "قبل هذه الاستراتيجية، كانت وسائل التواصل مجرد ضوضاء. الآن هي قناة توليد العملاء الأساسية—<strong>والعملاء مؤهلون فعلاً</strong>."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle + " arabic-heading"}>
            لا تزال متشككاً؟ <span className={styles.verificationHighlight}>تحقق من كل شيء</span>
          </h2>
          <p className={styles.verificationText + " arabic-body"}>
            تواصل مع عبدالله مباشرة للتحقق من هذه النتائج ومشاهدة النمو الفعلي لوسائل التواصل:
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
              <h2 className={styles.ctaTitle + " arabic-heading"}>مستعد لتوقف إهدار وسائل التواصل؟</h2>
              <p className={styles.ctaText + " arabic-body"}>
                احصل على نفس الاستراتيجية الاجتماعية التي حولت شفتات من شركة ناشئة مجهولة إلى سلطة في الصناعة. بلا مقاييس وهمية—فقط عملاء محتملون يتحولون لعملاء.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton + " arabic-body"}
              >
                أصلح استراتيجية وسائل التواصل
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