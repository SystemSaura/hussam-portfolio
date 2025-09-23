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
          مرحباً، أنا حسام بعكة. أجعل كل ريال / درهم تسويقي يعمل بجد أكبر لنمو شركتك.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة للقادة المهتمين بالنمو ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>فريقك التسويقي ليس كسولاً. استراتيجيتك فقط مبعثرة.</p>

          <p>رأيت الكثير من شركات الخليج تحرق الميزانيات على حملات لا تحول، محتوى لا يشرك، و"الوعي بالعلامة التجارية" الذي لا يقود الأعمال.</p>

          <p>المشكلة ليست في الناس أو السوق. المشكلة في التناغم.</p>

          <p>عندما تتجه رسائلك وقنواتك ومقاييسك جميعاً نحو نفس النتيجة التجارية، يصبح النمو قابلاً للتنبؤ بدلاً من أن يكون عرضياً.</p>

          <p>لا أقوم فقط بتدقيق ما هو معطل. أعيد بناء أنظمة تسويقية تحول الاستثمار إلى نمو قابل للقياس في خط المبيعات.</p>

          <p>منهجيتي تجمع بين المعرفة العميقة بأسواق الخليج وأطر النمو التسويقية التي رفعت الأعمال من الناشئة إلى رائدة السوق.</p>

          <p>في نهاية المطاف، التسويق يجب أن يفعل شيئاً واحداً:</p>

          <p className="text-cyan-400 font-medium arabic-heading">توليد نتائج تجارية قابلة للتنبؤ والتوسع يمكنك الاعتماد عليها.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;