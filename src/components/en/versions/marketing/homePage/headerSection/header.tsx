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
      <div className="mx-4 md:mx-20 lg:mx-[85.7266px] h-[50.65px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-[#001C46] text-lg font-light font-['Work_Sans'] no-underline">
            Hussam Baaka <span className="text-[#2762F8] animate-pulse">|</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={onNavigate.about} className="text-[#222222] font-['Work_Sans'] text-[11.3675px] font-light px-2 py-1 hover:text-black transition-colors">About</button>
          <button onClick={onNavigate.portfolio} className="text-[#222222] font-['Work_Sans'] text-[11.3675px] font-light px-2 py-1 hover:text-black transition-colors">Portfolio</button>
          <button onClick={onNavigate.services} className="text-[#222222] font-['Work_Sans'] text-[11.3675px] font-light px-2 py-1 hover:text-black transition-colors">Services</button>
          <button onClick={onNavigate.caseStudy} className="text-[#222222] font-['Work_Sans'] text-[11.3675px] font-light px-2 py-1 hover:text-black transition-colors">Case Study</button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4 gap-3">
          <LanguageToggle />
          <button 
            onClick={() => window.open('https://www.upwork.com/freelancers/~01630436400e1bdae3', '_blank')}
            className="bg-[#001C46] text-white font-['Work_Sans'] text-[11.3675px] font-light px-4 border-none rounded-full cursor-pointer inline-flex items-center justify-center w-[135px] h-9 transition-all duration-200 hover:bg-[#2762F8]"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button className="text-[#222222] p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}