"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AirlinenHeroSectionProps {
  openModal: () => void;
}

export default function AirlinenHeroSection({ openModal }: AirlinenHeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/gallery/IMG_0021.png")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/80 to-black/80"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <Image
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          width={256}
          height={256}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <Image
          src="/floating-elements/ooorganize.svg"
          alt="Decorative floating element"
          width={256}
          height={256}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-200" style={{ fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif' }}>
                <span className="block">Premium</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[var(--primary-color)] animate-fade-in-up delay-300 drop-shadow-lg">
                  Linen Hire
                </span>
                <div className="mt-4 w-24 h-1 bg-[var(--primary-hover)] rounded-full animate-fade-in-up delay-400"></div>
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-white/90 animate-fade-in-up delay-500">
                Professional linen solutions for short-term rentals and serviced accommodations.
                Premium quality delivered straight to your door across Liverpool & Wirral.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="mt-8 md:mt-12 flex flex-row gap-3 md:gap-6 animate-fade-in-up delay-700">
                <button
                  onClick={openModal}
                  className="group relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden text-sm md:text-base"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <svg className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                <button className="group relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden text-sm md:text-base">
                  <span className="relative z-10">View Packages</span>
                  <svg className="ml-2 md:ml-3 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>

            {/* Right side - Stats/Features */}
            <div className="hidden lg:block animate-fade-in-up delay-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-2xl font-bold text-[var(--primary-color)]">90min</div>
                  </div>
                  <div className="text-white/80 text-xs">Delivery Slots</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.586V5L8 4z" />
                    </svg>
                    <div className="text-2xl font-bold text-[var(--primary-color)]">600GSM</div>
                  </div>
                  <div className="text-white/80 text-xs">Premium Towels</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <div className="text-2xl font-bold text-[var(--primary-color)]">200TC</div>
                  </div>
                  <div className="text-white/80 text-xs">Minimum Thread Count</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="text-2xl font-bold text-[var(--primary-color)]">7 Days</div>
                  </div>
                  <div className="text-white/80 text-xs">Weekly Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-up delay-1000">
          <span className="text-sm text-white/80 mb-3 font-medium">Discover our services</span>
          <div className="relative cursor-pointer">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}