"use client";

import Link from "next/link";

interface FooterProps {
  variant?: 'default' | 'gradient';
}

export default function Footer({ variant = 'default' }: FooterProps) {
return (
    <footer className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <Link href="/" className="text-xl font-semibold">Hussam Baaka</Link>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <span className="text-white text-sm">© 2025 Saura Agency LLC</span>            
          <Link href="/company/privacy-policy" className="text-white hover:text-white text-sm">Privacy Policy</Link>
          <Link href="/company/terms" className="text-white hover:text-white text-sm">Terms</Link>          </div>
        </div>
      </div>
    </footer>
  );
}