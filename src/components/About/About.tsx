"use client";

import Image from "next/image";
import { forwardRef } from "react";
import styles from "./About.module.css";

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.bgCustomDarkBlue + " py-20 text-white"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-40 h-40 rounded-full mx-auto flex items-center justify-content overflow-hidden">
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
        <h2 className={styles.flechaHeroTitleAbout + " text-white mb-8 leading-tight"}>
          Hi. I'm Hussam Baaka. I make every marketing<br />
          Riyal / Dirham work harder for your growth.
        </h2>
        <div className="mb-8">
          <span className={styles.text11px + " text-cyan-400 font-medium"}>[ A note to growth-focused leaders ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-6 leading-relaxed max-w-3xl mx-auto"}>
          <p>Your marketing team isn't lazy. Your strategy is just scattered.</p>

          <p>I've seen too many GCC companies burn through budgets on campaigns that don't convert, content that doesn't engage, and "brand awareness" that doesn't drive business.</p>

          <p>The problem isn't your people or your market. It's alignment.</p>

          <p>When your messaging, channels, and metrics all point toward the same business outcome, growth becomes predictable instead of accidental.</p>

          <p>I don't just audit what's broken. I rebuild marketing systems that turn investment into measurable pipeline growth.</p>

          <p>My approach combines deep GCC market knowledge with growth marketing frameworks that have scaled businesses from startup to market leader.</p>

          <p>At the end of the day, marketing should do one thing:</p>

          <p className="text-cyan-400 font-medium">Generate predictable, scalable business results you can bank on.</p>
        </div>

        <div className="mt-12">
          {/* Future button placeholder */}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;