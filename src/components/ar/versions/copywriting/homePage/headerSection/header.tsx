"use client";

import Link from "next/link";
import LanguageToggle from "@/components/shared/languageToggle";

interface HeaderProps {
  onNavigate: {
    about: () => void;
    portfolio: () => void;
    services: () => void;
    caseStudy: () => void;
  };
  variant?: "default" | "white";
}

export default function Header({ onNavigate, variant = "default" }: HeaderProps) {
  const baseClasses = "w-full h-[51.15px]";
  const backgroundClass = variant === "white" ? "bg-white" : "bg-[#F2F5FA]";

  return (
    <header className={`${baseClasses} ${backgroundClass}`}>
      {/* Desktop Layout */}
      <div className="hidden md:flex mx-4 md:mx-20 lg:mx-[85.7266px] h-[50.65px] items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/v/copywriting/homepage" className="text-[#001C46] text-lg font-light font-['Work_Sans'] no-underline">
            حسام بعكة <span className="text-[#2762F8] animate-pulse">|</span>
          </Link>
        </div>

        {/* Navigation - Right to left order for Arabic */}
        <nav className="flex items-center space-x-0 space-x-reverse gap-4">
          <button onClick={onNavigate.about} className="text-[#222222] font-['Work_Sans'] text-sm font-normal px-2 py-1 hover:text-black transition-colors">نبذة عني</button>
          <button onClick={onNavigate.portfolio} className="text-[#222222] font-['Work_Sans'] text-sm font-normal px-2 py-1 hover:text-black transition-colors">أعمالي</button>
          <button onClick={onNavigate.services} className="text-[#222222] font-['Work_Sans'] text-sm font-normal px-2 py-1 hover:text-black transition-colors">خدماتي</button>
          <button onClick={onNavigate.caseStudy} className="text-[#222222] font-['Work_Sans'] text-sm font-normal px-2 py-1 hover:text-black transition-colors">دراسة حالة</button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4 space-x-reverse gap-3">
          <LanguageToggle />
          <button 
            onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
            className="bg-[#001C46] text-white font-['Work_Sans'] text-[11.3675px] font-light px-4 border-none rounded-full cursor-pointer inline-flex items-center justify-center w-[135px] h-9 transition-all duration-200 hover:bg-[#2762F8]"
          >
            احجز استشارة
          </button>
        </div>
      </div>

      {/* Mobile Layout RTL: Consultation Button - Language Toggle - Logo */}
      <div className="flex md:hidden mx-4 h-[50.65px] items-center justify-between" dir="rtl">
        {/* Logo (Right in RTL) */}
        <div className="flex-shrink-0">
          <Link href="/v/copywriting/homepage" className="text-[#001C46] text-lg font-light font-['Work_Sans'] no-underline">
            حسام بعكة <span className="text-[#2762F8] animate-pulse">|</span>
          </Link>
        </div>

        {/* Language Toggle (Center) */}
        <div className="absolute left-1/2" style={{ transform: 'translateX(-50%)' }}>
          <LanguageToggle />
        </div>

        {/* Consultation Button (Left in RTL) */}
        <button 
          onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
          className="bg-[#001C46] text-white font-['Work_Sans'] text-xs font-light px-3 border-none rounded-full cursor-pointer inline-flex items-center justify-center h-8 transition-all duration-200 hover:bg-[#2762F8] whitespace-nowrap"
        >
           احجز استشارة
        </button>
      </div>
    </header>
  );
}