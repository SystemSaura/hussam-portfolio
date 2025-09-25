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
              <Link href="/v/copywriting/homepage" className={styles.logoName + " arabic-body"}>
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
                  كيف جعلت الكتابة الإعلانية الاستراتيجية شفتات<br />
                  <span className={styles.highlight}>منصة التوظيف بالذكاء الاصطناعي الأولى في السعودية</span>
                </h1>
                <p className={styles.heroSubtitle + " arabic-body"}>
                  تحويل الزوار المرتبكين إلى عملاء ملتزمين من خلال كتابة تعمل فعلاً
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>100+</div>
                    <div className={styles.statLabel + " arabic-body"}>عميل محتمل مؤهل</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>60%+</div>
                    <div className={styles.statLabel + " arabic-body"}>معدل فتح الإيميل</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>5,000+</div>
                    <div className={styles.statLabel + " arabic-body"}>مشترك</div>
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
                نتائج كتابة <span className={styles.resultsHighlight}>تتحدث بوضوح</span>
              </h2>
              <p className={styles.resultsSubheading + " arabic-body"}>
                عندما تُوقف كتابتك الناس المناسبين في مسارهم، تصبح التحويلات متوقعة
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>100+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>عميل محتمل عالي الجودة مُولَّد</div>
                  <div className={styles.primaryDesc + " arabic-body"}>من خلال كتابة تجعل العملاء المحتملين يفكرون "هذا بالضبط ما أحتاجه"</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>60%+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>معدل فتح الإيميل</div>
                  <div className={styles.primaryDesc + " arabic-body"}>عناوين توقف التمرير وتطالب بالانتباه</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>5,000+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>مشترك إيميل متفاعل</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>80%</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>رسالة توفير التكلفة</div>
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
                <h2 className={styles.sectionTitle + " arabic-heading"}>تحدي الكتابة</h2>
                <p className={styles.challengeText + " arabic-body"}>
                  شفتات لديها تكنولوجيا توظيف ذكي قوية، لكن كتابة الموقع كانت تربك العملاء المحتملين بدلاً من تحويلهم. الزوار لم يستطيعوا فهم <strong>ما تفعله شفتات فعلاً</strong>، أو <strong>لمن هي مخصصة</strong>، أو <strong>لماذا يجب أن يهتموا</strong>. الرسائل حاولت التحدث مع الجميع لكن لم تلامس أحداً—حالة كلاسيكية من الكتابة التي تشرح الميزات لكن تفشل في بيع التحول.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag + " arabic-body"}>رسائل مربكة</span>
                  <span className={styles.challengeTag + " arabic-body"}>لا توجد قيمة واضحة</span>
                  <span className={styles.challengeTag + " arabic-body"}>تحويل ضعيف</span>
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
              <h2 className={styles.sectionTitle + " arabic-heading"}>استراتيجية تحول الكتابة</h2>
              <p className={styles.solutionSubheading + " arabic-body"}>
                كتابة إعلانية استراتيجية تحول الارتباك إلى وضوح والزوار إلى عملاء
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>كتابة صفحة رئيسية توقف وتحول</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  حولنا المصطلحات التقنية المربكة إلى رسائل واضحة تتواصل فوراً مع القيمة
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عنوان واضح يوقف الناس المناسبين</span>
                  <span className="arabic-body">عناوين فرعية تركز على الألم تجعل المشاكل حية</span>
                  <span className="arabic-body">كتابة مدفوعة بالفوائد تُظهر التحول</span>
                  <span className="arabic-body">دليل اجتماعي يبني مصداقية فورية</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>سلاسل إيميل تُغذي وتبيع</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  حملات إيميل عالية الأداء توجه العملاء المحتملين من الفضول إلى التحويل
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عناوين بمعدل فتح أكثر من 60%</span>
                  <span className="arabic-body">سلاسل ترحيب تبني علاقات</span>
                  <span className="arabic-body">إيميلات تُغذي تتعامل مع الاعتراضات</span>
                  <span className="arabic-body">سلاسل مبيعات تُغلق الصفقات</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>محتوى يبني مجتمع وسلطة</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  كتابة محتوى استراتيجية تُنمي جماهير متفاعلة وتؤسس قيادة فكرية
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">محتوى لينكد إن يجذب أكثر من 4,000 محترف</span>
                  <span className="arabic-body">كتابة بناء مجتمع تقود التفاعل</span>
                  <span className="arabic-body">محتوى قيادة فكرية يبني الثقة</span>
                  <span className="arabic-body">نمو الجمهور من خلال رؤى قيمة</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>كتابة مبيعات تُغلق الصفقات</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  كتابة صفحة هبوط تتعامل مع كل اعتراض وتجعل قرارات الشراء واضحة
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عناوين تخلق إلحاح</span>
                  <span className="arabic-body">فوائد ترسم التحول</span>
                  <span className="arabic-body">التعامل مع الاعتراضات يبني الثقة</span>
                  <span className="arabic-body">دعوات للعمل تطالب بإجراء فوري</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle + " arabic-heading"}>نمو المجتمع من خلال المحتوى</h2>
              <p className={styles.socialProofSubtitle + " arabic-body"}>
                من صفر متابعين إلى مجتمعات متفاعلة—بناء جماهير تتحول من خلال كتابة محتوى استراتيجية
              </p>
            </div>
            <div className={styles.socialGrid}>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/Linkedin.webp"
                    alt="نمو مجتمع لينكد إن"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>بناء مجتمع لينكد إن</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>4,000+</span> محترف متفاعل من خلال محتوى يبني السلطة ويقود اتصالات ذات معنى</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="نجاح مجتمع الإيميل"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>نمو مجتمع الإيميل</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>60%+</span> معدل فتح من خلال عناوين تخلق ترقب وتبني قراءة مخلصة</p>
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
            "تحول الكتابة لم يحسن رسائلنا فقط—بل جعل العملاء المحتملين يفهمون فوراً لماذا يحتاجون شفتات. الآن موقعنا <strong>يحول الزوار بدلاً من إرباكهم</strong>."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle + " arabic-heading"}>
            تحقق من <span className={styles.verificationHighlight}>نجاح الكتابة هذا</span>
          </h2>
          <p className={styles.verificationText + " arabic-body"}>
            تواصل مع عبدالله مباشرة للتحقق من كيف حولت الكتابة الإعلانية الاستراتيجية معدلات تحويل شفتات:
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
              <h2 className={styles.ctaTitle + " arabic-heading"}>مستعد لكتابة تُحول؟</h2>
              <p className={styles.ctaText + " arabic-body"}>
                احصل على نفس النهج الكتابي الاستراتيجي الذي جعل رسائل شفتات مستحيلة التجاهل.
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton + " arabic-body"}
              >
                احجز جلسة استراتيجية الكتابة
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