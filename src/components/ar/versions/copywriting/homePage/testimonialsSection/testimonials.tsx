"use client";

import Image from "next/image";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  // Star component for better mobile optimization
  const StarRating = ({ size = "w-4 h-4" }: { size?: string }) => {
    return (
      <div className="flex items-center space-x-1 space-x-reverse">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`${size} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Verification badge component
  const VerificationBadge = ({ href }: { href: string }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.verifiedBadge}>
        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>تحقق</span>
      </a>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-3 sm:px-4 py-2 mb-4 flex-wrap justify-center gap-1 sm:gap-0">
            <div className="flex items-center space-x-1 space-x-reverse mr-1 sm:mr-2">
              <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className={styles.flechaRatingText}>تقييم مثالي ٥.٠</span>
            <span className="text-gray-400 mx-1 sm:mx-2 hidden sm:inline">•</span>
            <span className={styles.flechaProjectsText}>٤٠+ مشروع</span>
          </div>
          <h2 className={styles.flechaTestimonialHeading + " mb-4 px-4 sm:px-0"}>
            ماذا يقول العملاء عن عملي
          </h2>
          <p className={styles.flechaTestimonialDescription + " max-w-2xl mx-auto px-4 sm:px-0"}>
             آراء عملاء سابقين، جربوا خطة عملية ونتائجا حقيقية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Testimonial 1 - Shiftat */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
                <VerificationBadge href="https://sa.linkedin.com/in/abdullahabalkhail" />
              </div>
              <div className={styles.projectType}>كتابة مواقع</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "كاتب موهوب، شغوف، متحفز، يبذل جهداً إضافياً لتقديم عمل ممتاز. سأعمل معه مرة أخرى."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <Image
                    src="/clientsphotos/abdullahabalkhail.webp"
                    alt="عبدالله العبالخيل"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className={styles.clientNameV2}>عبدالله العبالخيل</div>
                  <div className={styles.clientCompanyV2}>شفتات</div>
                  <div className={styles.clientLocationV2}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/shiftat.webp" alt="شفتات" className="h-6 sm:h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Empire Real Estate */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
                <VerificationBadge href="https://www.linkedin.com/in/raufi" />
              </div>
              <div className={styles.projectType}>كتابة العلامة التجارية</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "عمل عالي الجودة، تواصل ممتاز، يلتزم بكل موعد نهائي. كان العمل معه متعة حقيقية."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <Image
                    src="/clientsphotos/shahidraufi.webp"
                    alt="شاهد رؤوفي"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className={styles.clientNameV2}>شاهد رؤوفي</div>
                  <div className={styles.clientCompanyV2}>امباير العقارية</div>
                  <div className={styles.clientLocationV2}>🇶🇦 قطر</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/empirerealestate.webp" alt="امباير العقارية" className="h-6 sm:h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 3 - Al Nahdi */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
                <VerificationBadge href="https://www.linkedin.com/in/aya-badr-1878921ba/" />
              </div>
              <div className={styles.projectType}>كتابة الإيميل</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "رائع للعمل معه. تواصل ممتاز ومهارات عالية. قدم أكثر من المطلوب للحصول على أفضل جودة."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-xs sm:text-sm">آب</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>آية بدر</div>
                  <div className={styles.clientCompanyV2}>النهدي</div>
                  <div className={styles.clientLocationV2}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/alnahdi.webp" alt="النهدي" className="h-6 sm:h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 4 - Rasya */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
                <VerificationBadge href="https://www.upwork.com/freelancers/~01630436400e1bdae3" />
              </div>
              <div className={styles.projectType}>كتابة العلامة التجارية</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "عمل جيد في كتابة الملف التجاري. تواصل ممتاز، التزام بالمواعيد، ومهارات قوية طوال الوقت."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-xs sm:text-sm">محع</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>محمد العويس</div>
                  <div className={styles.clientCompanyV2}>راسيا</div>
                  <div className={styles.clientLocationV2}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <div className="text-gray-400 text-xs sm:text-sm font-semibold">راسيا</div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 - Hayat Muhamedya */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
                <VerificationBadge href="https://www.upwork.com/freelancers/~01630436400e1bdae3" />
              </div>
              <div className={styles.projectType}>الكتابة الإبداعية</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "العمل مع حسام كان مريحاً. فهم ما هو مطلوب، سلم قبل الموعد النهائي وشعرت وكأنه جزء من الفريق."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-xs sm:text-sm">جت</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>جوهرة التويجري</div>
                  <div className={styles.clientCompanyV2}>حياة محمدية</div>
                  <div className={styles.clientLocationV2}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <img src="/logos/hayatmohamadia.webp" alt="حياة محمدية" className="h-6 sm:h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Testimonial 6 - Consultant */}
          <div className={styles.testimonialCardV2}>
            <div className={styles.testimonialHeaderV2}>
              <div className="flex items-center justify-between mb-3">
                <StarRating size="w-3 h-3 sm:w-4 sm:h-4" />
                <VerificationBadge href="https://www.linkedin.com/in/asma-rjoub-ba3748a5" />
              </div>
              <div className={styles.projectType}>كتابة رقمية</div>
            </div>
            
            <blockquote className={styles.testimonialQuoteV2}>
              "مهني جداً، التسليم في الوقت المحدد، التواصل مثالي. بشكل عام أنصح به بشدة."
            </blockquote>
            
            <div className={styles.testimonialFooterV2}>
              <div className={styles.clientInfoV2}>
                <div className={styles.clientPhotoV2}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-xs sm:text-sm">أر</span>
                  </div>
                </div>
                <div>
                  <div className={styles.clientNameV2}>أسماء رجوب</div>
                  <div className={styles.clientCompanyV2}>مستشارة</div>
                  <div className={styles.clientLocationV2}>🇸🇦 المملكة العربية السعودية</div>
                </div>
              </div>
              <div className={styles.companyLogoV2}>
                <div className="text-gray-400 text-xs sm:text-sm font-semibold">استشارات</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center bg-gray-50 rounded-full px-4 sm:px-6 py-3 border gap-4">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={styles.flechaVerificationText + " text-center arabic-body"}>جميع التقييمات موثقة في أب وورك</span>
            <span className="text-gray-400 mx-2">•</span>
            <a href="https://www.upwork.com/freelancers/~01630436400e1bdae3" target="_blank" rel="noopener noreferrer" className={styles.flechaViewAllText + " hover:text-blue-800 transition-colors"}>شاهد الجميع ←</a>
          </div>
        </div>
      </div>
    </section>
  );
}