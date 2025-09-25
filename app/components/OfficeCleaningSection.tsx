"use client";

import Image from "next/image";
import ContactModal from "./ContactModal";
import { useContactModal } from "../hooks/useContactModal";

export default function OfficeCleaningSection() {
  const { isOpen, openModal, closeModal } = useContactModal();
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Element - Center Left */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <img
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      {/* Floating Element - Center Right */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <img
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Top Center */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4" style={{ fontFamily: 'MonteCarlo, cursive' }}>
                <span className="text-[var(--primary-color)]">Office</span> and Commercial Cleaning
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Professional cleaning solutions for businesses and commercial spaces across Liverpool
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[600px]">
          {/* Content Section */}
          <div className="space-y-8 flex flex-col justify-center">

            {/* Mobile Image - Show only on mobile after header */}
            <div className="lg:hidden relative h-64 w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/assets/officecleaningsection.webp"
                alt="Professional office and commercial cleaning services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Overlay Text for Mobile */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold mb-1">Professional Service</h3>
                <p className="text-sm opacity-90">Trusted by businesses nationwide</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-white">
              <p className="text-lg leading-relaxed opacity-90">
                We provide a trustworthy, reliable and professional office & commercial cleaning service to businesses and organisations across Northwest England. Our comprehensive service covers <span className="text-[var(--primary-color)] font-bold">Liverpool</span>, <span className="text-[var(--primary-color)] font-bold">Manchester</span>, <span className="text-[var(--primary-color)] font-bold">Wirral</span>, <span className="text-[var(--primary-color)] font-bold">Chester</span>, <span className="text-[var(--primary-color)] font-bold">Oakenholt</span>, and <span className="text-[var(--primary-color)] font-bold">St. Helens</span>, ensuring that whether you're a small local business or a large corporate office, we can deliver the same high standards of cleanliness and professionalism.
              </p>

              <p className="text-base leading-relaxed opacity-80">
                With years of experience serving the commercial sector, we understand that every business has unique cleaning requirements. From bustling city centre offices in Manchester and Liverpool to industrial facilities and retail spaces across the region, our team adapts our cleaning protocols to meet your specific operational needs while maintaining the highest standards of hygiene and safety.
              </p>

              <p className="text-base leading-relaxed opacity-80">
                Below are our comprehensive cleaning services tailored to meet your specific needs, designed to keep your workplace spotless, productive, and welcoming for your team and clients.
              </p>
            </div>
          </div>

          {/* Image Section - Desktop only */}
          <div className="relative h-full hidden lg:block">
            <div className="relative h-full w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/officecleaningsection.webp"
                alt="Professional office and commercial cleaning services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Service</h3>
                <p className="text-base opacity-90">Trusted by businesses nationwide</p>
              </div>
            </div>

            {/* Floating Stats */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div> */}

            {/* <div className="absolute -top-6 -right-6 bg-[var(--primary-color)] text-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Service Details Cards - Integrated with main content */}
        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.586V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">Industrial Cleaning Services</h4>
              </div>
              <p className="text-white/90 leading-relaxed">
                From a regular factory floor clean to a full industrial workplace clean, we have gathered years of experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">Office & General Cleaning</h4>
              </div>
              <p className="text-white/90 leading-relaxed">
                Our contract cleaning team look after over 100 customers. All staff receive industry leading training and their work is monitored closely. They are responsible for ensuring specifications are being met and standards are exceeded at every possible opportunity.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">Clinical, Medical, and Health Centre Cleaning</h4>
              </div>
              <p className="text-white/90 leading-relaxed mb-3">
                We carry out daily cleaning to GP, medical, dental, cosmetic and healthcare centers and surgeries. We are also able to provide specialist cleaning services for contamination and sanitation cleaning requirements, including emergency cleaning services.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">Communal Area Cleaning</h4>
              </div>
              <p className="text-white/90 leading-relaxed mb-3">
                The communal areas of your building reflect the service that you provide your tenants with the most. We provide communal area cleaning and have an industry specific offering that will give you peace of mind.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">Flats/Apartment Blocks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">Student Accommodation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">Managed Office Buildings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">Retirement Facilities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">Shopping/Retail Spaces</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">Education Sector Cleaning</h4>
              </div>
              <p className="text-white/90 leading-relaxed">
                We provide a cleaning service to schools, colleges and other educational establishments. We understand the differences between the education sector and others and have built up expertise so we can guarantee a great, safe and secure service.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">Specialist Cleaning</h4>
              </div>
              <p className="text-white/90 leading-relaxed">
                We offer specialist data center cleaning, IT equipment cleaning and medical cleaning services. We use the latest cleaning methods to clean your equipment with minimal downtime and disruption.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <button
              onClick={openModal}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
