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
          مرحباً، أنا حسام بعكة. أساعد الشركات الخليجية على تحقيق نمو مستدام من خلال التسويق الذكي.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium arabic-body"}>[ رسالة لقادة الأعمال الطموحين ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center arabic-body"}>
          <p>لست أنت المشكلة. المشكلة في النظام التسويقي.</p>

          <p>أرى شركات خليجية رائدة تستثمر مبالغ ضخمة في حملات لا تحقق مبيعات، ومحتوى لا يجذب العملاء المناسبين، و"زيادة الوعي بالعلامة التجارية" التي لا تترجم إلى أرباح حقيقية.</p>

          <p>ليس العيب في فريقك أو في السوق. العيب في عدم التناسق.</p>

          <p>عندما تتكامل رسالتك التسويقية مع احتياجات عملائك الفعلية، وموقعك الإلكتروني يحول الزوار إلى عملاء، ومحتواك يبني الثقة والخبرة، وحملاتك الإعلانية تجذب الشريحة المناسبة - حينها يصبح النمو نتيجة طبيعية، وليس مجرد حظ.</p>

          <p>لا أقتصر على إصلاح مشاكل التسويق الظاهرة. بل أبني أنظمة تسويقية متكاملة تحول الاستثمار إلى نمو قابل للقياس والتكرار.</p>

          <p>منهجيتي تجمع بين الفهم العميق للثقافة والسوق الخليجي، واستراتيجيات النمو المثبتة التي نقلت الشركات من مرحلة البداية إلى الريادة في أسواقها.</p>

          <p>في النهاية، التسويق الفعال يحقق هدفاً واحداً بوضوح:</p>

          <p className="text-cyan-400 font-medium arabic-heading">نتائج أعمال قابلة للقياس والاعتماد عليها، تدعم نموك المستقبلي.</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;