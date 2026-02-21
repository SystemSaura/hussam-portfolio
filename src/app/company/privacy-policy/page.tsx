"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
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
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
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
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">About Me</Link>
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
