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
          Hi. I'm Hussam Baaka. I turn your content expertise into search visibility that drives business.
        </h2>
        <div className="mb-6 sm:mb-8 text-center">
          <span className={styles.text11px + " text-cyan-400 font-medium"}>[ A note to content-driven businesses ]</span>
        </div>

        <div className={styles.workSansBodyWhite + " space-y-4 sm:space-y-6 leading-relaxed max-w-3xl mx-auto text-center"}>
          <p>Your content isn't the problem. Your search strategy is scattered.</p>

          <p>I've seen too many GCC businesses create brilliant content that nobody finds, optimizing for keywords that don't convert, and wondering why their organic traffic flatlines.</p>

          <p>The problem isn't your expertise or your market. It's search alignment.</p>

          <p>When your content strategy, keyword targeting, and user intent all point toward the same business outcome, search visibility becomes predictable instead of accidental.</p>

          <p>I don't just audit what's broken. I rebuild SEO systems that turn your content into a lead generation engine.</p>

          <p>My approach combines deep GCC search behavior insights with SEO frameworks that have grown organic traffic from zero to market leadership.</p>

          <p>At the end of the day, SEO should do one thing:</p>

          <p className="text-cyan-400 font-medium">Connect your expertise with people actively searching for solutions.</p>
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