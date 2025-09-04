"use client";

import Image from "next/image";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="nav-component">
        <div className="nav-container">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="logo-name">Hussam Baaka <span className="cursor-blink">|</span></Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Case Studies</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Work</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="nav-login-button-centered hidden sm:block">My Work</button>
            <button className="nav-button-strategy">
              Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="nav-link p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="flecha-section-heading mb-4">
              Terms of Service
            </h1>
            <p className="work-sans-body text-gray-600">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 work-sans-body leading-relaxed">
              
              <div>
                <h2 className="services-title mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the services provided by Saura Agency LLC ("Company," "we," or "us"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">2. Description of Services</h2>
                <p className="mb-4">
                  Saura Agency LLC provides marketing consulting services including:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Marketing strategy and systems audits</li>
                  <li>• Growth marketing implementation and monitoring</li>
                  <li>• Marketing team training and optimization</li>
                  <li>• Related consulting and advisory services</li>
                </ul>
                <p>
                  All services are provided by Houssem Baaka and authorized representatives of Saura Agency LLC.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">3. Client Responsibilities</h2>
                <p className="mb-4">
                  As a client, you agree to:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Provide accurate and complete information necessary for service delivery</li>
                  <li>• Cooperate in good faith and provide timely feedback</li>
                  <li>• Make payments according to agreed terms</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">4. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Payment is due according to the agreed schedule</li>
                  <li>• Late payments may incur additional fees</li>
                  <li>• Refunds are handled according to our refund policy</li>
                  <li>• All fees are exclusive of applicable taxes</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">5. Intellectual Property</h2>
                <p className="mb-4">
                  Regarding intellectual property:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• We retain ownership of our methodologies, frameworks, and proprietary processes</li>
                  <li>• Deliverables created specifically for clients belong to the client</li>
                  <li>• We may use anonymized case studies for marketing purposes</li>
                  <li>• Clients retain ownership of their confidential information and data</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">6. Confidentiality</h2>
                <p>
                  We maintain strict confidentiality regarding all client information, business strategies, and proprietary data. We will not disclose confidential information to third parties without explicit written consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by UAE law:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Our liability is limited to the amount paid for services</li>
                  <li>• We are not liable for indirect, consequential, or punitive damages</li>
                  <li>• Marketing results cannot be guaranteed due to external factors</li>
                  <li>• Clients are responsible for implementation decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">8. Termination</h2>
                <p className="mb-4">
                  Either party may terminate services:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• With written notice as specified in the service agreement</li>
                  <li>• Immediately for material breach of terms</li>
                  <li>• Upon mutual agreement</li>
                </ul>
                <p>
                  Upon termination, payment for services rendered remains due, and confidentiality obligations continue.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">9. Force Majeure</h2>
                <p>
                  We are not liable for delays or failures in performance due to circumstances beyond our reasonable control, including natural disasters, government actions, or other force majeure events.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">10. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved through the courts of Sharjah, UAE, or through mutually agreed arbitration.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">12. Contact Information</h2>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Saura Agency LLC</strong></p>
                  <p>Houssem Baaka</p>
                  <p>Sharjah, United Arab Emirates</p>
                  <p>Email: hussam@sauragency.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <Link href="/" className="text-xl font-semibold">Hussam Baaka</Link>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">© 2025 Saura Agency LLC</span>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">More About Me</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="https://ext.same-assets.com/3287453319/1536601012.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="filter invert"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="https://ext.same-assets.com/3287453319/51193599.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="filter invert"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}