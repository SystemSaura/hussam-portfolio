"use client";

import Image from "next/image";
import styles from "./cta.module.css";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 mb-16">
          <h2 className={styles.flechaSectionHeading + " leading-tight"}>
            <span className={styles.textCustomBlue}>Stop creating content</span><br />
            that nobody finds.
          </h2>

          <h2 className={styles.flechaSectionHeading + " leading-tight"}>
            <span className={styles.textCustomBlue}>Stop guessing</span><br />
            which keywords matter.
          </h2>

          <h2 className={styles.flechaSectionHeading + " leading-tight"}>
            <span className={styles.textCustomBlue}>Start ranking</span><br />
            where prospects search.
          </h2>
        </div>

        <div className="mb-8">
          <Image
            src="/arrow-down.svg"
            alt="Arrow down"
            width={48}
            height={48}
            className="mx-auto"
          />
        </div>

        <h3 className={styles.homeHeaderSubheading + " mb-8"}>Ready to dominate search results?</h3>

        <p className={styles.workSansBody + " mb-8 leading-relaxed"}>
          Get a free 30-minute SEO audit to identify your biggest search opportunities.
        </p>

        <div className="max-w-md mx-auto space-y-4">
          <button
            onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
            className={styles.subscribeButton + " w-full"}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}