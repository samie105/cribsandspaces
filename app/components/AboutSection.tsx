"use client";

import Image from "next/image";
import Link from "next/link";
import ContactModal from "./ContactModal";
import { useContactModal } from "../hooks/useContactModal";

export default function AboutSection() {
  const { isOpen, openModal: _, closeModal } = useContactModal(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <section className="py-20 bg-white relative">
      {/* Floating Element - Center Left */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <Image
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          width={256}
          height={256}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      {/* Floating Element - Center Right */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <Image
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          width={256}
          height={256}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'MonteCarlo, cursive' }}>
                <span className="text-[var(--primary-color)]">About</span> Us
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                Your trusted Liverpool cleaning experts committed to exceptional service and customer satisfaction
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-96 lg:h-[700px]">
              <Image
                src="/assets/about-us.png"
                alt="Professional cleaning service team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-2 px-4 md:px-0">
            {/* Main Content */}
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg md:text-2xl font-medium text-gray-600 leading-snug">
                  We love to clean. We know that not everyone does, but we&apos;re pretty sure that everyone loves a clean space.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  That&apos;s why we&apos;ve made it our full-time job to help people live and work in cleaner spaces. We are a reliable and trustworthy cleaning service operating across Liverpool, Manchester, Wirral, Chester, Oakenholt, and St. Helens.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg leading-relaxed">
                  Our team is fully insured, and all our cleaners are DBS-checked for your peace of mind. We also use eco-friendly and pet-friendly products, ensuring a safe and effective clean for your home or business.
                </p>

                <p className="text-lg md:text-xl font-medium text-gray-500 italic leading-relaxed border-l-4 border-[var(--primary-color)] pl-4 md:pl-6">
                  We&apos;ll come to your space with a smile and a sponge, and we won&apos;t leave until everything is sparkling.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  We treat every space as though it were our own – with respect and integrity.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-6 md:pt-8 flex flex-row gap-3 sm:gap-4 md:gap-6 justify-start flex-wrap">
              <button className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 ml-2 sm:ml-2.5 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <Link 
                href="/airlinen-hire"
                className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-black text-white font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Linen Hire</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 ml-2 sm:ml-2.5 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
