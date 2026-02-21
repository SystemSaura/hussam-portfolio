"use client";

import Image from "next/image";
import styles from "./cta.module.css";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 mb-16">
          <h2 className={styles.flechaSectionHeading + " leading-tight arabic-heading"}>
            <span className={styles.textCustomBlue}>توقف عن إنشاء محتوى</span><br />
            لا يجده أحد
          </h2>

          <h2 className={styles.flechaSectionHeading + " leading-tight arabic-heading"}>
            <span className={styles.textCustomBlue}>توقف عن التخمين</span><br />
            أي الكلمات المفتاحية مهمة
          </h2>

          <h2 className={styles.flechaSectionHeading + " leading-tight arabic-heading"}>
            <span className={styles.textCustomBlue}>ابدأ في احتلال مراتب عالية</span><br />
            حيث يبحث العملاء المحتملون
          </h2>
        </div>

        <div className="mb-8">
          <Image
            src="/arrow-down.svg"
            alt="سهم لأسفل"
            width={48}
            height={48}
            className="mx-auto"
          />
        </div>

        <h3 className={styles.homeHeaderSubheading + " mb-8 arabic-heading"}>جاهز للهيمنة على نتائج البحث؟</h3>

        <p className={styles.workSansBody + " mb-8 leading-relaxed arabic-body"}>
          احصل على مراجعة SEO مجانية لمدة ٣٠ دقيقة لتحديد أكبر فرصك في البحث.
        </p>

        <div className="max-w-md mx-auto space-y-4">
          <button
            onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
            className={styles.subscribeButton + " w-full arabic-body"}
          >
            احجز الآن
          </button>
        </div>
      </div>
    </section>
  );
}