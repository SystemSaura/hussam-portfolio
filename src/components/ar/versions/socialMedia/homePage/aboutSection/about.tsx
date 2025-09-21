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
              alt="Hussam Baaka"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h2 className={styles.flechaHeroTitleAbout + " text-white mb-6 sm:mb-8 leading-tight text-center"}>
          Hi. I'm Hussam Baaka. I turn your social media followers into paying customers.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium"}>[ A note to social media leaders ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center"}>
          <p>Your social media team isn't failing. Your content strategy is just missing the GCC context.</p>

          <p>I've seen too many Middle Eastern brands copy Western social strategies that don't work here. Generic content calendars that ignore local culture. Engagement tactics that fall flat with regional audiences.</p>

          <p>The problem isn't your creativity or your budget. It's cultural alignment.</p>

          <p>When your social content speaks the language of your actual customers—not just literally, but culturally—engagement becomes authentic connection instead of empty vanity metrics.</p>

          <p>I don't just create content. I build social media systems that understand GCC market dynamics, cultural nuances, and business decision-making patterns.</p>

          <p>My approach combines deep regional insights with proven social frameworks that have grown brands from unknown to industry leaders across LinkedIn, X, and Instagram.</p>

          <p>At the end of the day, social media should do one thing:</p>

          <p className="text-cyan-400 font-medium">Generate qualified leads and customers you can count on, not just likes you can't convert.</p>
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