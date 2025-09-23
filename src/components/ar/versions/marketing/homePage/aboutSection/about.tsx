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
          أنا حسام بعكة. أحول الإنفاق التسويقي المبعثر إلى آلة مبيعات يمكن التنبؤ بها.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ للمدراء التنفيذيين الذين سئموا من تبرير الميزانية التسويقية ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>فريق التسويق يقول "نحتاج وقت أكثر". المبيعات تقول "العملاء المحتملين ضعاف". المدير المالي يسأل "أين العائد؟"</p>

          <p>المشكلة ليست في الميزانية أو الفريق. المشكلة في النظام.</p>

          <p>رأيت شركات خليجية تحرق ملايين الريالات على حملات تجلب زيارات لكن لا تحقق مبيعات. مواقع جميلة لكن لا أحد يملأ النموذج. محتوى كثير لكن بلا تأثير على أرقام المبيعات.</p>

          <p>السبب؟ كل قطعة تعمل لوحدها بدلاً من أن تعمل كنظام واحد.</p>

          <p>عندما تتصل الرسالة التسويقية بألم العميل الحقيقي، والموقع يحول الزائر لعميل محتمل، والمحتوى يبني الثقة، والحملات تجذب العميل المناسب - تصبح النتائج قابلة للتنبؤ.</p>

          <p>لا أصلح مشاكل التسويق فقط. أبني أنظمة تسويقية تجعل النمو أمراً محتوماً وليس مجرد أمل.</p>

          <p>٥٠+ شركة في الخليج توقفت عن تبرير الإنفاق التسويقي وبدأت إثبات العائد.</p>

          <p className="text-cyan-400 font-medium arabic-heading">لأن في النهاية، المطلوب شيء واحد: مبيعات أكثر بتكلفة أقل.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;