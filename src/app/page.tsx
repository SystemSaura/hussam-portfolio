import Image from "next/image";

export default function Home() {
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
            <a href="#" className="nav-link">Articles</a>
            <a href="#" className="nav-link">Membership</a>
            <a href="#" className="nav-link">Newsletter</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="nav-login-button hidden sm:block">Log in</button>
            <button className="nav-button">
              Join 175K+ Subscribers
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

      {/* Hero Section - Exact replication from inspection boxes */}
      <section className="bg-custom-hero py-20">
        <div className="home_header_component">
          {/* Main Hero Title */}
          <h1 className="flecha-hero-title mb-16">
            Turn your knowledge<br />
            into <span className="text-custom-blue">income.</span>
          </h1>

          {/* Lower Section - Three parts */}
          <div className="home_header_content">
            {/* Left: Want to join us section */}
            <div className="home_header_text-wrap">
              <h2 className="home_header_subheading">Want to join us?</h2>
              <p className="home_header_text1">
                Join 175K+ readers of The Saturday Solopreneur for tips, strategies, and resources to launch, grow, and monetize your internet business.
              </p>
            </div>

            {/* Center: Arrow */}
            <div className="flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/3287453319/171477844.svg"
                alt="Arrow pointing right"
                width={56.13}
                height={56.84}
                className="arrow-right"
              />
            </div>

            {/* Right: Start here form */}
            <div className="home_header_form-wrap">
              <h3 className="home_header_subheading-right mb-6">Start here.</h3>
              <div className="seva-fields formkit-fields">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="formkit-input"
                />
                <button
                  type="submit"
                  className="subscribe-button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Trusted by leading GCC companies
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-x-12 gap-y-8 items-center justify-items-center max-w-4xl">
              <img src="/Logos/shiftat.webp" alt="Shiftat" className="color-logo shiftat-logo" />
              <img src="/Logos/abudawood.webp" alt="Abudawood" className="color-logo abudawood-logo" />
              <img src="/Logos/kapsarc.webp" alt="KAPSARC" className="color-logo" />
              <img src="/Logos/alnahdi.webp" alt="Al Nahdi" className="color-logo alnahdi-logo" />
              <img src="/Logos/saeq.webp" alt="SAEQ" className="color-logo" />
              <img src="/Logos/empirerealestate.webp" alt="Empire Real Estate" className="color-logo empire-logo" />
              <img src="/Logos/reviva.webp" alt="reviva" className="color-logo" />
              <img src="/Logos/ncmh.webp" alt="NCMH" className="color-logo ncmh-logo" />
              <img src="/Logos/rcmc.webp" alt="RCMC" className="color-logo rcmc-logo" />
              <img src="/Logos/rotana.webp" alt="Rotana" className="color-logo rotana-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-40 h-40 rounded-full mx-auto bg-gray-300 flex items-center justify-center overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3287453319/1493219665.webp"
                alt="Justin Welsh"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Hi—I'm Justin Welsh. I help internet<br />
            solopreneurs own their work and life.
          </h2>

          <div className="mb-8">
            <span className="text-cyan-400 text-lg font-medium">[ An open letter to freedom seekers ]</span>
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>Being a solopreneur is about embracing your life.</p>

            <p>We approach our work in a way that prioritizes independence, flexibility, and fulfillment, rather than maximizing our financial gain.</p>

            <p>The solopreneur doesn't ask: "how can I make more money?"</p>

            <p>They ask: "what kind of life do I want to lead?", and then build a business that supports that life.</p>

            <p>It's not about getting more. It's about finding enough.</p>

            <p>We keep our businesses lean and nimble — prioritizing simplicity and efficiency in our operations.</p>

            <p>Sometimes that means a true 1-person show, but often we rely on a small team of freelancers, contractors, or assistants.</p>

            <p>At the end of the day, what binds us together is a simple goal:</p>

            <p className="text-cyan-400 font-medium">Achieve the freedom to do everything we want...and nothing we don't.</p>
          </div>

          <div className="mt-12">
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors">
              More About Me
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Three more ways<br />
                I can help <span className="text-cyan-300">you.</span>
              </h2>
            </div>

            {/* Right side */}
            <div className="space-y-12">
              {/* Service 1 */}
              <div>
                <div className="text-6xl font-bold text-blue-300 mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">The Saturday Solopreneur Weekly Newsletter</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Saturday morning, I share practical guidance to help you start and scale your one-person internet business.
                </p>
                <div className="flex items-center space-x-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none"
                  />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Service 2 */}
              <div>
                <div className="text-6xl font-bold text-blue-300 mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Deep-dive Digital Courses for Solopreneurs</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Self-paced courses teaching you to grow your audience, find profitable ideas, build a business, and productize knowledge.
                </p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
                  View Courses
                </button>
              </div>

              {/* Service 3 */}
              <div>
                <div className="text-6xl font-bold text-blue-300 mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Put Your Brand in Front of 175K+ Entrepreneurs Every Week</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Saturday, 175,000+ entrepreneurs trust my newsletter to deliver insights and solutions. Place your brand exactly where your ideal customers are already looking.
                </p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
                  Book Your Sponsorship Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Issues of <Image
                src="https://ext.same-assets.com/3287453319/3207876544.svg"
                alt="The Saturday Solopreneur"
                width={200}
                height={32}
                className="inline h-8 w-auto"
              />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Newsletter 1 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 transition-transform group-hover:scale-105">
                <Image
                  src="https://ext.same-assets.com/3287453319/830969865.png"
                  alt="Newsletter issue"
                  width={300}
                  height={200}
                  className="w-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                Why I drink coffee at 10:47 AM on Thursdays.
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="inline ml-2"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                Discover how micro-freedoms - small daily choices like Thursday coffee runs or working from park benches - prove you're truly free and reshape your identity.
              </p>
            </div>

            {/* Newsletter 2 */}
            <div className="group cursor-pointer">
              <div className="bg-blue-500 rounded-lg p-6 mb-4 transition-transform group-hover:scale-105">
                <Image
                  src="https://ext.same-assets.com/3287453319/1650271574.png"
                  alt="Newsletter issue"
                  width={300}
                  height={200}
                  className="w-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                Your parents advice is outdated.
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="inline ml-2"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                Why following your parents' career advice in today's economy is the riskiest move you can make. The old rules of job security no longer apply.
              </p>
            </div>

            {/* Newsletter 3 */}
            <div className="group cursor-pointer">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-4 transition-transform group-hover:scale-105">
                <Image
                  src="https://ext.same-assets.com/3287453319/2323763866.png"
                  alt="Newsletter issue"
                  width={300}
                  height={200}
                  className="w-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                I'll draw your dog for $350.
                <Image
                  src="https://ext.same-assets.com/3287453319/2624132661.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="inline ml-2"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                How a casual sketcher turned a notepad and 30-minute pet portraits into a $350-per-session business. The simple formula anyone can follow to start earning from their skills.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Freedom Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-500">Freedom to</span><br />
              live how you want.
            </h2>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-500">Freedom to</span><br />
              put family first.
            </h2>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-500">Freedom to</span><br />
              own your story.
            </h2>
          </div>

          <div className="mb-8">
            <Image
              src="https://ext.same-assets.com/3287453319/3126314943.svg"
              alt="Arrow down"
              width={48}
              height={48}
              className="mx-auto"
            />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-8">Subscribe to begin.</h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Join 175K+ readers of The Saturday Solopreneur for exclusive tips, strategies, and resources to launch, grow, and monetize your one-person internet business.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">I will never spam or sell your info. Ever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <Image
                src="https://ext.same-assets.com/3287453319/444665820.svg"
                alt="Justin Welsh"
                width={120}
                height={32}
                className="h-8 w-auto filter invert"
              />
              <button className="flex items-center text-gray-400 hover:text-white">
                Tools
                <Image
                  src="https://ext.same-assets.com/3287453319/305373772.svg"
                  alt="External link"
                  width={16}
                  height={16}
                  className="ml-2 filter invert"
                />
              </button>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">© 2024 Justin D Welsh LLC</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Fulfillment Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a>
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
                  src="https://ext.same-assets.com/3287453319/602996969.svg"
                  alt="Instagram"
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