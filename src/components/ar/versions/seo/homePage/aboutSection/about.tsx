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
        <h2 className={styles.flechaHeroTitleAbout + " text-white mb-6 sm:mb-8 leading-tight text-center arabic-heading"}>
          مرحباً، أنا حسام بعكة. أحوّل خبرتك في المحتوى إلى ظهور في محركات البحث يجلب لك الأعمال.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة للشركات التي تعتمد على المحتوى ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>المحتوى ليس مشكلتك. استراتيجية البحث مشتتة.</p>

          <p>رأيت الكثير من الشركات الخليجية التي تنتج محتوى رائعاً لا يجده أحد، وتحسّن محتواها لكلمات مفتاحية لا تجلب عملاء محتملين، وتتساءل لماذا الزيارات العضوية لا تزيد.</p>

          <p>المشكلة ليست في خبرتك أو السوق. المشكلة في عدم التوافق مع البحث.</p>

          <p>عندما تتجه استراتيجية المحتوى، واستهداف الكلمات المفتاحية، ونية المستخدم جميعها نحو نفس النتيجة التجارية، يصبح الظهور في محركات البحث متوقعاً بدلاً من كونه صدفة.</p>

          <p>لا أكتفي بمراجعة ما هو معطل. أبني أنظمة تحسين محركات البحث التي تحوّل محتواك إلى ماكينة جذب عملاء محتملين.</p>

          <p>منهجيتي تجمع بين فهم عميق لسلوك البحث في دول الخليج مع أطر عمل تحسين محركات البحث التي نمت بالزيارات العضوية من الصفر إلى الريادة في السوق.</p>

          <p>في النهاية، تحسين محركات البحث يجب أن يحقق شيئاً واحداً:</p>

          <p className="text-cyan-400 font-medium arabic-heading">ربط خبرتك بالأشخاص الذين يبحثون بنشاط عن الحلول.</p>
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