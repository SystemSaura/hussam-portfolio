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
                  كيف حوّلت الكتابة الإعلانية الاستراتيجية "شفتات"<br />
                  <span className={styles.highlight}>إلى منصة التوظيف الذكي الرائدة في المملكة</span>
                </h1>
                <p className={styles.heroSubtitle + " arabic-body"}>
                  تحويل الزوار المتردّدين إلى عملاء مقتنعين من خلال نصوص تسويقية تحقق النتائج فعلاً
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>100+</div>
                    <div className={styles.statLabel + " arabic-body"}>عميل محتمل عالي الجودة</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>60%+</div>
                    <div className={styles.statLabel + " arabic-body"}>معدل فتح الرسائل</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>5,000+</div>
                    <div className={styles.statLabel + " arabic-body"}>مشترك متفاعل</div>
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
                أرقام <span className={styles.resultsHighlight}>تتحدث عن نفسها</span>
              </h2>
              <p className={styles.resultsSubheading + " arabic-body"}>
                عندما تخاطب نصوصك التسويقية العميل المناسب بالطريقة الصحيحة، تصبح المبيعات أمراً طبيعياً
              </p>
            </div>
            
            <div className={styles.resultsShowcase}>
              <div className={styles.primaryResults}>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>100+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>عميل محتمل عالي الجودة</div>
                  <div className={styles.primaryDesc + " arabic-body"}>نصوص تجعل العملاء المحتملين يشعرون "هذا بالضبط ما كنت أبحث عنه"</div>
                </div>
                <div className={styles.primaryStat}>
                  <div className={styles.primaryNumber}>60%+</div>
                  <div className={styles.primaryLabel + " arabic-heading"}>معدل فتح الرسائل الإلكترونية</div>
                  <div className={styles.primaryDesc + " arabic-body"}>عناوين تُوقف القارئ وتُجبره على فتح الرسالة</div>
                </div>
              </div>
              
              <div className={styles.secondaryResults}>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>5,000+</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>مشترك متفاعل في القائمة البريدية</div>
                </div>
                <div className={styles.secondaryStat}>
                  <div className={styles.secondaryNumber}>80%</div>
                  <div className={styles.secondaryLabel + " arabic-heading"}>توفير في تكاليف التسويق</div>
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
                <h2 className={styles.sectionTitle + " arabic-heading"}>التحدّي: رسائل تقنية مُربكة</h2>
                <p className={styles.challengeText + " arabic-body"}>
                  شفتات تملك تقنية توظيف ذكية متطوّرة، لكن موقعها الإلكتروني كان يُشتت العملاء بدلاً من إقناعهم. الزوّار لم يفهموا <strong>ماذا تقدّم شفتات بالضبط</strong>، <strong>لمن تُوجّه خدماتها</strong>، أو <strong>لماذا يجب أن يختاروها</strong>. المحتوى كان يحاول مخاطبة الجميع، فلم يصل إلى أحد—مثال كلاسيكي على كتابة تشرح المزايا التقنية لكن تفشل في بيع الحلول.
                </p>
                <div className={styles.challengeTags}>
                  <span className={styles.challengeTag + " arabic-body"}>رسائل مُشتتة</span>
                  <span className={styles.challengeTag + " arabic-body"}>قيمة غير واضحة</span>
                  <span className={styles.challengeTag + " arabic-body"}>معدل تحويل ضعيف</span>
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
              <h2 className={styles.sectionTitle + " arabic-heading"}>الحل: استراتيجية تسويقية شاملة</h2>
              <p className={styles.solutionSubheading + " arabic-body"}>
                كتابة إعلانية استراتيجية تحوّل التشتت إلى وضوح والزوار إلى عملاء
              </p>
            </div>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>كتابة موقع إلكتروني يُحوّل الزوّار إلى عملاء</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  حوّلنا المصطلحات التقنية المُعقّدة إلى رسائل واضحة تُظهر القيمة فوراً
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عنوان رئيسي يُوقف العميل المناسب في مساره</span>
                  <span className="arabic-body">عناوين فرعية تُسلّط الضوء على المشاكل الحقيقية</span>
                  <span className="arabic-body">محتوى يُركّز على الفوائد ويُظهر التحوّل المطلوب</span>
                  <span className="arabic-body">شهادات عملاء تبني المصداقية من اللحظة الأولى</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>رسائل إلكترونية تبني الثقة وتُحوّل المهتمّين إلى عملاء</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  رسائل إلكترونية عالية الأداء تأخذ العميل من مرحلة الفضول إلى مرحلة الشراء
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عناوين بمعدل فتح يتجاوز 60%</span>
                  <span className="arabic-body">سلسلة ترحيب تبني علاقة قوية مع المشترك</span>
                  <span className="arabic-body">رسائل تُعالج الاعتراضات والشكوك</span>
                  <span className="arabic-body">سلسلة مبيعات تُنهي الصفقة</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>محتوى يُؤسس لسلطة العلامة التجارية ويبني جمهوراً مُخلصاً</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  استراتيجية محتوى تُنمّي جمهوراً مُتفاعلاً وتُرسّخ القيادة الفكرية
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">محتوى لينكد إن جذب أكثر من 4,000 محترف مُتخصص</span>
                  <span className="arabic-body">كتابة تُحفّز التفاعل وتبني مجتمعاً مُخلصاً</span>
                  <span className="arabic-body">محتوى قيادة فكرية يُعزّز الثقة في العلامة التجارية</span>
                  <span className="arabic-body">نموّ مستمر للجمهور من خلال رؤى قيّمة ومُفيدة</span>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.solutionCardHeader}>
                  <h3 className={styles.solutionCardTitle + " arabic-heading"}>كتابة مبيعات تُنجز الصفقات</h3>
                </div>
                <p className={styles.solutionCardDesc + " arabic-body"}>
                  كتابة صفحات هبوط تُعالج كل اعتراض وتجعل قرارات الشراء واضحة
                </p>
                <div className={styles.solutionFeatures}>
                  <span className="arabic-body">عناوين تخلق شعوراً بالإلحاح</span>
                  <span className="arabic-body">فوائد تُظهر التحوّل المطلوب</span>
                  <span className="arabic-body">معالجة الاعتراضات تُعزّز الثقة</span>
                  <span className="arabic-body">دعوات للعمل تُحفّز على اتخاذ القرار فوراً</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <div className={styles.centeredTextContent}>
              <h2 className={styles.sectionTitle + " arabic-heading"}>نموّ حقيقي من خلال المحتوى الاستراتيجي</h2>
              <p className={styles.socialProofSubtitle + " arabic-body"}>
                من الصفر إلى مجتمعات نشطة—بناء جماهير مُتفاعلة من خلال كتابة محتوى مدروسة
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
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>4,000+</span> محترف مُتخصص من خلال محتوى يُرسّخ السلطة المهنية ويُحفّز التفاعل الهادف</p>
                </div>
              </div>
              <div className={styles.socialCard}>
                <div className={styles.socialImageContainer}>
                  <Image
                    src="/backgrounds/X.webp"
                    alt="نجاح القائمة البريدية"
                    width={400}
                    height={300}
                    className={styles.socialImage}
                  />
                </div>
                <div className={styles.socialContent}>
                  <h3 className={styles.socialTitle + " arabic-heading"}>نمو القائمة البريدية</h3>
                  <p className={styles.socialDesc + " arabic-body"}><span className={styles.highlightNumber}>60%+</span> معدل فتح من خلال عناوين تخلق الترقّب وتبني جمهوراً مُخلصاً</p>
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
            "التحوّل في كتابتنا التسويقية لم يُحسّن رسائلنا فحسب—بل جعل العملاء المحتملين يفهمون فوراً لماذا يحتاجون شفتات. موقعنا الآن <strong>يُحوّل الزوّار بدلاً من تشتيتهم</strong>."
          </blockquote>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verification}>
        <div className={styles.verificationContainer}>
          <h2 className={styles.verificationTitle + " arabic-heading"}>
            تأكّد من <span className={styles.verificationHighlight}>هذا النجاح بنفسك</span>
          </h2>
          <p className={styles.verificationText + " arabic-body"}>
            تواصل مع عبدالله مباشرة للتحقق من كيف حوّلت الكتابة الإعلانية الاستراتيجية معدلات تحويل شفتات:
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
              <h2 className={styles.ctaTitle + " arabic-heading"}>هل أنت مُستعد لكتابة تسويقية تُحقق النتائج؟</h2>
              <p className={styles.ctaText + " arabic-body"}>
                احصل على نفس الاستراتيجية الكتابية التي جعلت رسائل شفتات مُستحيلة التجاهل
              </p>
              <button 
                onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
                className={styles.ctaButton + " arabic-body"}
              >
                احجز جلسة استراتيجية تسويقية
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