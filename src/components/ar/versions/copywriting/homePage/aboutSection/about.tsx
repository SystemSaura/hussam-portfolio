"use client";

import Image from "next/image";
import { forwardRef } from "react";
import styles from "./about.module.css";

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.bgCustomDarkBlue + " py-12 sm:py-16 lg:py-20 text-white"}>
      <div className="max-w-4xl mx-auto px-10 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full mx-auto flex items-center justify-content overflow-hidden">
            <Image
              src="/picofme.webp"
              alt="حسام بعكة"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h2 className={styles.flechaHeroTitleAbout + " text-white mb-6 sm:mb-8 leading-tight text-center"}>
          مرحباً، أنا حسام بعكة. أحوّل كلماتك إلى مبيعات.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium"}>[ رسالة لأصحاب القرار الذين سئموا المحتوى الضعيف ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center"}>
          <p><strong>لماذا لا ينجح تسويقك؟</strong></p>

          <p><strong>لا خلل في منتجك أو خدمتك. لكن طريقة تقديمها للعملاء تحتاج للتطوير.</strong></p>

          <p>عملت مع عشرات الشركات التي تنفق آلاف الريالات على:</p>
          <p>- مواقع "جميلة" لا تجلب عملاء<br />
          - إعلانات "ذكية" لا يفهمها أحد<br />  
          - محتوى "إبداعي" لا يبيع شيئاً</p>

          <p><strong>السبب؟</strong> محتواهم يحاول إعجاب الجميع... فلا يؤثر في أحد.</p>

          <p><strong>الحل؟</strong> محتوى يفهم عميلك ويتكلم لغته.</p>

          <p>عندما يقرأ عميلك المثالي محتواك ويشعر أنك تقرأ أفكاره، وتفهم مشاكله، وتقدم له الحل الذي يبحث عنه... <strong>تصبح المبيعات سهلة ومضمونة.</strong></p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          {/* Future button placeholder */}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;