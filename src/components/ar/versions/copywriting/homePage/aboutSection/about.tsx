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
          Hi. I'm Hussam Baaka. I turn confusing copy into conversions that drive your business forward.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium"}>[ A note to decision-makers who hate bad copy ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center"}>
          <p>Your copywriter isn't the problem. Your copy strategy is scattered.</p>

          <p>I've seen too many B2B companies waste budgets on websites that don't convert, emails nobody opens, and "compelling" sales pages that put prospects to sleep.</p>

          <p>The issue isn't your audience or your market. It's messaging that tries to speak to everyone but resonates with no one.</p>

          <p>When your headlines stop the right people, your benefits hit their pain points, and your proof builds instant credibility, conversion becomes predictable instead of wishful thinking.</p>

          <p>I don't just rewrite what's broken. I rebuild copy systems that turn visitors into leads and leads into customers who can't wait to buy.</p>

          <p>My approach combines deep B2B copywriting expertise with conversion psychology that's driven measurable results for GCC companies across industries.</p>

          <p>Because at the end of the day, copy should do one thing:</p>

          <p className="text-cyan-400 font-medium">Make the right buyer say "This is exactly what I need" and take action immediately.</p>
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