"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-4">
            <div className="flex items-center space-x-1 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className={styles.flechaRatingText}>Perfect 5.0 Rating</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className={styles.flechaProjectsText}>40+ Projects</span>
          </div>
          <h2 className={styles.flechaTestimonialHeading + " mb-4"}>
            What Clients Say About My Work
          </h2>
          <p className={styles.flechaTestimonialDescription + " max-w-2xl mx-auto"}>
            Real feedback from clients who've experienced measurable results from strategic marketing work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 - Shiftat */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a href="https://sa.linkedin.com/in/abdullahabalkhail" target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verify</span>
                </a>
              </div>
              <div className={styles.projectType}>Social Media Marketing</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "Talented writer, passionate, motivated, goes the extra mile to deliver excellent work. Will work with him again."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <Image
                    src="/clientsphotos/abdullahabalkhail.webp"
                    alt="Abdullah Aballkhail"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className={styles.clientNameV2}>Abdullah Aballkhail</div>
                  <div className={styles.clientCompanyV2}>Shiftat</div>
                  <div className={styles.clientLocationV2}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/shiftat.webp" alt="Shiftat" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Empire Real Estate */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a href="https://www.linkedin.com/in/raufi" target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verify</span>
                </a>
              </div>
              <div className={styles.projectType}>Content Marketing</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "High quality work, excellent communication, meets every deadline. His work was a pleasure to collaborate with."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <Image
                    src="/clientsphotos/shahidraufi.webp"
                    alt="Shahid Raufi"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className={styles.clientNameV2}>Shahid Raufi</div>
                  <div className={styles.clientCompanyV2}>Empire Real Estate</div>
                  <div className={styles.clientLocationV2}>🇶🇦 Qatar</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/empirerealestate.webp" alt="Empire Real Estate" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 3 - Al Nahdi */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a href="https://www.linkedin.com/in/aya-badr-1878921ba/" target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verify</span>
                </a>
              </div>
              <div className={styles.projectType}>Email Marketing</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "Amazing to work with. Great communication and skills. He delivered more than requested for best quality."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">AB</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>Aya Badr</div>
                  <div className={styles.clientCompanyV2}>Al Nahdi</div>
                  <div className={styles.clientLocationV2}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/alnahdi.webp" alt="Al Nahdi" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 4 - Rasya */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verify</span>
                </a>
              </div>
              <div className={styles.projectType}>Brand Marketing</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "Good work on business profile writing. Top communication, met deadlines, and strong skills throughout."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">MA</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>Mohammed Alowais</div>
                  <div className={styles.clientCompanyV2}>Rasya</div>
                  <div className={styles.clientLocationV2}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <div className="text-gray-400 text-sm font-semibold">RASYA</div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 - Hayat Muhamedya */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verify</span>
                </a>
              </div>
              <div className={styles.projectType}>Creative Marketing</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "Working with Hussam was relaxing. He understood what was needed, delivered before deadline and felt like part of the team."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">JA</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>Jawhrah Altuwaijri</div>
                  <div className={styles.clientCompanyV2}>Hayat Muhamedya</div>
                  <div className={styles.clientLocationV2}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/hayatmohamadia.webp" alt="Hayat Muhamedya" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 6 - Consultant */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a href="https://www.linkedin.com/in/asma-rjoub-ba3748a5" target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verify</span>
                </a>
              </div>
              <div className={styles.projectType}>Digital Marketing</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "Very Professional, Delivery on Time, Communication Perfect. Overall extremely recommended."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-sm">AR</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>Asma Rjoub</div>
                  <div className={styles.clientCompanyV2}>Consultant</div>
                  <div className={styles.clientLocationV2}>🇸🇦 Saudi Arabia</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <div className="text-gray-400 text-sm font-semibold">CONSULTANT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 border">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " mr-3"}>All reviews verified on Upwork</span>
            <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>View All →</a>
          </div>
        </div>
      </div>
    </section>
  );
}