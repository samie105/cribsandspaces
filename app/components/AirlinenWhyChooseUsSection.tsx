"use client";

import Image from "next/image";

interface AirlinenWhyChooseUsSectionProps {
  openModal: () => void;
}

export default function AirlinenWhyChooseUsSection({ openModal }: AirlinenWhyChooseUsSectionProps) {
  return (
    <section className="py-20 bg-black relative">
      {/* Floating Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <img
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <img
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4" style={{ fontFamily: 'MonteCarlo, cursive' }}>
                Why Choose <span className="text-[var(--primary-color)]">Us</span>?
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                The complete solution for professional linen management
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-96 lg:h-[700px]">
              <Image
                src="/assets/whyuseus.jpg"
                alt="Professional linen service quality"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Premium Quality Assurance</p>
                <p className="text-gray-300 text-xs">Every item inspected and cleaned to perfection</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--primary-color)]">Lightning Fast Delivery</h4>
                </div>
                <p className="text-white/90 leading-relaxed">
                  90-minute delivery slots across Liverpool and surrounding areas. Real-time tracking keeps you informed.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--primary-color)]">Premium Quality Standards</h4>
                </div>
                <p className="text-white/90 leading-relaxed">
                  200 thread count linen and 600GSM towels. All items professionally cleaned, pressed, and quality checked.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--primary-color)]">Dedicated Account Management</h4>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Personal account manager and 7-day customer support. We're here when you need us most.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">1000+</div>
                <div className="text-white/80 text-xs">Properties Served</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">99.5%</div>
                <div className="text-white/80 text-xs">On-Time Delivery</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">24hrs</div>
                <div className="text-white/80 text-xs">Turnaround Time</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">7 Days</div>
                <div className="text-white/80 text-xs">Weekly Service</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Start Your Account</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}