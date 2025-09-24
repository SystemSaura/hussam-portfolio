"use client";

import Image from "next/image";
import { forwardRef } from "react";
import styles from "./about.module.css";

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.bgCustomDarkBlue + " py-12 sm:py-16 lg:py-20 text-white"}>
      <div className="max-w-4xl mx-auto px-10 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full mx-auto flex items-center justify-center overflow-hidden">
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
          أهلاً، أنا حسام بعكة. أساعد الشركات الخليجية الرائدة على تحويل استثماراتها التسويقية إلى نمو مستدام وأرباح حقيقية.
        </h2>

        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة خاصة لقادة الأعمال الطموحين ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>المشكلة ليست فيك، بل في النظام التسويقي الذي تعتمد عليه.</p>

          <p>كل يوم أرى شركات خليجية ناجحة تنفق مبالغ طائلة على حملات إعلانية لا تحقق مبيعات فعلية لهم، ومحتوى لا يجذب العملاء المناسبين لعلامتهم التجارية، واستراتيجيات "رفع الوعي" التي لا تتحول إلى عائد استثمار ملموس لهم.</p>

          <p>والنتيجة؟ إحباط، وميزانيات مهدورة، ونمو أبطأ مما تستحقه هذه الشركات.</p>

          <p>عندما تتكامل رسالتك التسويقية مع احتياجات عملائك الحقيقية، ويحول موقعك الإلكتروني  الزوار إلى عملاء، ويبني محتواك الثقة والخبرة في ذهن العميل، وتستهدف حملاتك الشريحة الصحيحة بالرسالة الصحيحة - حينها يصبح النمو نتيجة حتمية، وليس مجرد أمل.</p>

          <p>لا أكتفي بإصلاح المشاكل السطحية. أبني أنظمة تسويقية متكاملة تحول كل دينار تستثمره إلى نمو قابل للقياس والتكرار.</p>

          <p>منهجيتي تجمع بين الفهم العميق للثقافة والسوق الخليجي، واستراتيجيات النمو المثبتة عالمياً، والتطبيق العملي الذي نقل عشرات الشركات من التحدي إلى الريادة في أسواقها.</p>

          <p>في النهاية، التسويق الحقيقي له هدف واحد فقط:</p>

          <p className="text-cyan-400 font-medium arabic-heading">تحقيق نتائج أعمال قابلة للقياس، يمكن الاعتماد عليها، وتضمن استمرار نموك لسنوات قادمة.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;