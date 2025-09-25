"use client";

import Link from "next/link";
import styles from "./footer.module.css";

interface FooterProps {
  variant?: 'default' | 'gradient' | 'white' | 'transparent';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return styles.bgGradientBlue;
      case 'white':
        return 'bg-white';
      case 'transparent':
        return 'bg-transparent';
      default:
        return styles.bgGray900;
    }
  };

  const getTextColor = () => {
    return variant === 'white' ? 'text-gray-900' : 'text-white';
  };

  const getLinkColor = () => {
    return variant === 'white' 
      ? 'text-gray-600 hover:text-gray-900' 
      : 'text-gray-400 hover:text-white';
  };

  return (
    <footer className={`${getBackgroundClass()} ${getTextColor()} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-8 space-x-reverse mb-4 md:mb-0">
            <Link href="/" className="text-xl font-semibold arabic-heading">حسام بعكة</Link>
          </div>

          <div className="flex items-center space-x-6 space-x-reverse mb-4 md:mb-0">
            <span className={`${getTextColor()} text-sm arabic-body`}>© ٢٠٢٥ شركة ساورا المحدودة</span>
            <Link href="/company/privacy-policy" className={`${getLinkColor()} text-sm arabic-body`}>سياسة الخصوصية</Link>
            <Link href="/company/terms" className={`${getLinkColor()} text-sm arabic-body`}>الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}