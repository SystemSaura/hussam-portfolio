"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="nav-component">
        <div className="nav-container">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="logo-name">Hussam Baaka <span className="cursor-blink">|</span></span>
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

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="flecha-section-heading mb-4">
              Privacy Policy
            </h1>
            <p className="work-sans-body text-gray-600">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 work-sans-body leading-relaxed">
              
              <div>
                <h2 className="services-title mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  At Saura Agency LLC, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Fill out consultation forms or contact forms</li>
                  <li>• Subscribe to our newsletter or marketing communications</li>
                  <li>• Request services or schedule consultations</li>
                  <li>• Communicate with us via email, phone, or other channels</li>
                </ul>
                <p>
                  This may include your name, email address, phone number, company information, and any other details you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Provide, maintain, and improve our marketing consulting services</li>
                  <li>• Process and fulfill your service requests</li>
                  <li>• Communicate with you about our services, including responding to inquiries</li>
                  <li>• Send you marketing communications (with your consent)</li>
                  <li>• Analyze and improve our website and service offerings</li>
                  <li>• Comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">3. Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• With your explicit consent</li>
                  <li>• To trusted service providers who assist us in operating our website and conducting business</li>
                  <li>• When required by law or to protect our rights and safety</li>
                  <li>• In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">5. International Data Transfers</h2>
                <p>
                  As our company is based in Sharjah, UAE, your information may be transferred to and processed in the United Arab Emirates. We ensure appropriate safeguards are in place for international transfers.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">6. Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="ml-6 mb-4 space-y-2">
                  <li>• Access and receive a copy of your personal information</li>
                  <li>• Correct inaccurate or incomplete information</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Object to or restrict processing of your information</li>
                  <li>• Withdraw consent for marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="services-title mb-4">7. Cookies and Tracking</h2>
                <p>
                  Our website may use cookies and similar technologies to enhance your experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="services-title mb-4">9. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
              <span className="text-xl font-semibold">Hussam Baaka</span>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-gray-400 text-sm">© 2025 Saura Agency LLC</span>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
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