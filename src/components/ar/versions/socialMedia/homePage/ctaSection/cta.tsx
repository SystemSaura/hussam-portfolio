"use client";

import Image from "next/image";
import styles from "./cta.module.css";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 mb-16">
          <h2 className={styles.flechaSectionHeading + " leading-tight arabic-heading"}>
            <span className={styles.textCustomBlue}>كفاك نشراً</span><br />
            بلا هدف.
          </h2>

          <h2 className={styles.flechaSectionHeading + " leading-tight arabic-heading"}>
            <span className={styles.textCustomBlue}>كفاك أرقاماً</span><br />
            وهمية.
          </h2>

          <h2 className={styles.flechaSectionHeading + " leading-tight arabic-heading"}>
            <span className={styles.textCustomBlue}>ابدأ في بناء</span><br />
            عائد حقيقي من التواصل.
          </h2>
        </div>

        <div className="mb-8">
          <Image
            src="https://ext.same-assets.com/3287453319/3126314943.svg"
            alt="سهم لأسفل"
            width={48}
            height={48}
            className="mx-auto"
          />
        </div>

        <h3 className={styles.homeHeaderSubheading + " mb-8 arabic-heading"}>جاهز لتطوير حضورك الرقمي؟</h3>

        <p className={styles.workSansBody + " mb-8 leading-relaxed arabic-body"}>
          احصل على تحليل مجاني لوسائل التواصل لتعرف ما يضر بتفاعلك وكيف تحل المشكلة.
        </p>

        <div className="max-w-md mx-auto space-y-4">
          <button
            onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
            className={styles.subscribeButton + " w-full arabic-body"}
          >
            احجز استشارة
          </button>
        </div>
      </div>
    </section>
  );
}