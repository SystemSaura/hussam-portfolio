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
          أنا حسام بعكة. أحول الفوضى التسويقية إلى نظام يحقق نتائج حقيقية.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة للقادة الذين سئموا من إضاعة الميزانيات ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>فريقك التسويقي ليس كسولاً. المشكلة في أن الاستراتيجية مبعثرة.</p>

          <p>رأيت شركات خليجية كثيرة تحرق الميزانيات على حملات تجلب زيارات لكن لا تحقق مبيعات. مواقع جميلة لكن المبيعات ضعيفة. محتوى كثير لكن التأثير على الأرباح قليل.</p>

          <p>المشكلة ليست في فريقك أو في السوق. المشكلة في التنسيق.</p>

          <p>عندما تتصل رسالتك التسويقية مع احتياجات العميل الحقيقية، وموقعك يحول الزائر إلى عميل محتمل، ومحتواك يبني الثقة، وحملاتك تجذب العملاء المناسبين - عندها يصبح النمو أمراً طبيعياً وليس حظاً.</p>

          <p>لا أكتفي بإصلاح مشاكل التسويق. أبني أنظمة تسويقية تجعل النمو قابلاً للتنبؤ.</p>

          <p>خبرتي تجمع بين الفهم العميق للسوق الخليجي وأطر عمل التسويق التي ساعدت شركات على النمو من البداية إلى الريادة في السوق.</p>

          <p>في النهاية، التسويق يجب أن يفعل شيئاً واحداً:</p>

          <p className="text-cyan-400 font-medium arabic-heading">يحقق نتائج أعمال قابلة للقياس والاعتماد عليها.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;