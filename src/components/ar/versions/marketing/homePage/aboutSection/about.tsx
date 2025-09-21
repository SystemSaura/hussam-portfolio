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
          مرحباً، أنا حسام بعكة. خبير التسويق الرقمي الذي يساعد الشركات على تحقيق نمو مستدام وقابل للقياس.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة لأصحاب القرار الذين يبحثون عن نتائج حقيقية ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>المشكلة ليست في ميزانيتك التسويقية. المشكلة في الاستراتيجية المبعثرة.</p>

          <p>رأيت العديد من الشركات في منطقة الخليج تهدر الميزانيات على حملات لا تحقق نتائج، مواقع لا تحول الزوار إلى عملاء، ومحتوى لا يجذب الجمهور المستهدف.</p>

          <p>المشكلة ليست في السوق أو المنتج. المشكلة في استراتيجية تسويقية غير متماسكة تحاول الوصول للجميع دون التركيز على العميل المثالي.</p>

          <p>عندما تكون رسالتك واضحة، وتستهدف العميل المناسب، وتقدم قيمة حقيقية، يصبح النمو أمراً قابلاً للتنبؤ بدلاً من مجرد أمل.</p>

          <p>لا أقوم فقط بتحسين حملاتك الحالية. أبني أنظمة تسويقية متكاملة تحول الزوار إلى عملاء محتملين والعملاء المحتملين إلى عملاء دائمين.</p>

          <p>منهجيتي تجمع بين خبرة عميقة في التسويق الرقمي واستراتيجيات مثبتة تحقق نتائج قابلة للقياس للشركات في منطقة الخليج عبر مختلف الصناعات.</p>

          <p>لأن في النهاية، التسويق يجب أن يحقق شيئاً واحداً:</p>

          <p className="text-cyan-400 font-medium arabic-heading">نمو مستدام وقابل للقياس يقود عملك إلى الأمام.</p>
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