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
          مرحباً، أنا حسام بعكة. أحول النصوص المربكة إلى مبيعات تدفع بعملك للأمام.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium"}>[ رسالة لصناع القرار الذين يكرهون النصوص الضعيفة ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center"}>
          <p>كاتب النصوص ليس هو المشكلة. استراتيجية النصوص الخاصة بك مشتتة.</p>

          <p>رأيت الكثير من شركات B2B تهدر الميزانيات على مواقع لا تحقق مبيعات، ورسائل إلكترونية لا يفتحها أحد، وصفحات مبيعات "مقنعة" تجعل العملاء المحتملين ينامون.</p>

          <p>المشكلة ليست في جمهورك أو السوق. إنها في الرسائل التي تحاول التحدث مع الجميع لكنها لا تتردد في قلب أحد.</p>

          <p>عندما تتوقف عناوينك الصحيحة عن الأشخاص المناسبين، وتصيب فوائدك نقاط ألمهم، وتبني براهينك مصداقية فورية، تصبح المبيعات قابلة للتنبؤ بدلاً من التفكير بالأماني.</p>

          <p>لا أعيد كتابة ما هو مكسور فقط. أعيد بناء أنظمة نصوص تحول الزوار إلى عملاء محتملين والعملاء المحتملين إلى عملاء لا يطيقون انتظاراً للشراء.</p>

          <p>منهجي يجمع بين خبرة عميقة في كتابة نصوص B2B وعلم نفس التحويل الذي حقق نتائج قابلة للقياس لشركات دول مجلس التعاون الخليجي عبر الصناعات.</p>

          <p>لأنه في نهاية اليوم، النصوص يجب أن تحقق شيئاً واحداً:</p>

          <p className="text-cyan-400 font-medium">جعل المشتري المناسب يقول "هذا بالضبط ما أحتاجه" ويتخذ إجراءً فورياً.</p>
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