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
          أهلاً، أنا حسام بعكة. أساعد الشركات الخليجية الرائدة على تحويل متابعيها على وسائل التواصل الاجتماعي إلى عملاء محتملين.
        </h2>

        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة لللمشرفين على التسويق الرقمي و لكل قادة الأعمال الطموحين ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>مشكلة فريقك ليست في الكسل. مشكلته في الاستراتيجية التي تفتقر للاستراتيجية وللطابع الخليجي.</p>

          <p>شاهدت عشرات العلامات التجارية في الشرق الأوسط تنسخ خطط غربية لا تصلح هنا. خطط محتوى عامة تتجاهل ثقافتنا. طرق تفاعل تفشل مع جمهورنا.</p>

          <p>المشكلة ليست في الإبداع أو الميزانية. المشكلة في فهم السوق.</p>

          <p>عندما يتحدث محتواك بطريقة تناسب عملاءك الحقيقيين - ثقافياً وليس لغوياً فقط - يصبح التفاعل علاقة حقيقية بدلاً من أرقام فارغة.</p>

          <p>لا أكتفي بصنع المحتوى. أبني أنظمة لوسائل التواصل الاجتماعي تفهم طبيعة السوق الخليجي، والفروق الثقافية الدقيقة، وطريقة اتخاذ القرار التجاري هنا.</p>

          <p>منهجي يجمع بين الفهم العميق للمنطقة وأساليب التواصل المثبتة عالمياً، والتي حولت علامات تجارية من مجهولة إلى رائدة في مجالها عبر لينكد إن وتويتر وإنستغرام.</p>

          <p>في النهاية، وسائل التواصل لها هدف واحد:</p>

          <p className="text-cyan-400 font-medium arabic-heading">جلب عملاء مؤهلين يمكن الاعتماد عليهم، وليس إعجابات لا تتحول لمبيعات.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;