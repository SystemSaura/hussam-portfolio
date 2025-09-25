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
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-xl font-light text-white arabic-heading">حسام بعكة</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/company/terms" className="text-white text-sm arabic-body hover:text-gray-300 transition-colors">الشروط والأحكام</Link>
          <Link href="/company/privacy-policy" className="text-white text-sm arabic-body hover:text-gray-300 transition-colors">سياسة الخصوصية</Link>
          <span className="text-white text-sm arabic-body">شركة سرى ذ.م.م ٢٠٢٥ ©</span>
        </div>
      </div>
      </div>
    </footer>
  );
}