"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="navComponent">
        <div className="navContainer">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="logo-name">Hussam Baaka <span className="cursor-blink">|</span></Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            <Link href="/" className="nav-link">About</Link>
            <Link href="/" className="nav-link">Portfolio</Link>
            <Link href="/" className="nav-link">Services</Link>
          </nav>

          {/* Right side button */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.upwork.com/freelancers/~01630436400e1bdae3"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button-strategy"
            >
              Consultation
            </Link>
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
                  By accessing and using the services provided by Saura Agency LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
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
      <footer className="bg-[#001C46] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <Link href="/" className="text-xl font-semibold font-['Work_Sans']">Hussam Baaka</Link>
            </div>

            <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <span className="text-gray-400">© 2025 Saura Agency LLC</span>
              <Link href="/company/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/company/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">More About Me</Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Twitter/X icon */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn icon */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
