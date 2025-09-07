"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.bgGray900 + " text-white py-12"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <Link href="/" className="text-xl font-semibold">Hussam Baaka</Link>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-gray-400 text-sm">© 2025 Saura Agency LLC</span>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}