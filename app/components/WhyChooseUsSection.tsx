"use client";

import Image from "next/image";
import Link from "next/link";
import ContactModal from "./ContactModal";
import { useContactModal } from "../hooks/useContactModal";

export default function WhyChooseUsSection() {
  const { isOpen, openModal, closeModal } = useContactModal();
  return (
    <section className="py-20 bg-black relative">
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
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                Why <span className="text-[var(--primary-color)]">Choose</span> Us
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Discover what sets us apart as Liverpool&apos;s premier cleaning service provider
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-96 lg:h-[700px]">
              <Image
                src="/assets/whyuseus.png"
                alt="Professional cleaning service benefits"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-2 px-4 md:px-0">
            {/* Main Content */}
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-white/90 leading-relaxed">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-[var(--primary-color)] font-bold text-lg">-</span>
                    <div>
                      <h4 className="font-semibold text-white">Local Northwest Team</h4>
                      <p className="text-white/80">We serve Liverpool, Manchester, Wirral, Chester, and St. Helens</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-[var(--primary-color)] font-bold text-lg">-</span>
                    <div>
                      <h4 className="font-semibold text-white">Fully Vetted Staff</h4>
                      <p className="text-white/80">Every team member is personally interviewed and DBS checked</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-[var(--primary-color)] font-bold text-lg">-</span>
                    <div>
                      <h4 className="font-semibold text-white">100% Satisfaction Guarantee</h4>
                      <p className="text-white/80">Not happy? We&apos;ll redo the job at no extra cost</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-[var(--primary-color)] font-bold text-lg">-</span>
                    <div>
                      <h4 className="font-semibold text-white">Transparent Pricing</h4>
                      <p className="text-white/80">No hidden fees, clear quotes upfront</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-[var(--primary-color)] font-bold text-lg">-</span>
                    <div>
                      <h4 className="font-semibold text-white">Flexible Scheduling</h4>
                      <p className="text-white/80">Book at times that work for you</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-[var(--primary-color)] font-bold text-lg">-</span>
                    <div>
                      <h4 className="font-semibold text-white">Professional & Reliable</h4>
                      <p className="text-white/80">Trained staff with professional equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-6 md:pt-8 flex flex-row gap-3 sm:gap-4 md:gap-6 justify-start flex-wrap">
              <button 
                onClick={openModal}
                className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 ml-2 sm:ml-2.5 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <Link href="/work-with-us" className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 border text-white font-semibold text-sm sm:text-base md:text-lg border-white/30 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Work With Us</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 ml-2 sm:ml-2.5 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
