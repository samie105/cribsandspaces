"use client"
"use client";

import Link from "next/link";
import ContactModal from "./ContactModal";
import { useContactModal } from "../hooks/useContactModal";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const { isOpen, openModal, closeModal } = useContactModal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          // poster="/assets/hero-section-image.png"
        >
          <source src="/assets/herovid.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          {/* <Image
            src="/assets/hero-section-image.png"
            alt="Professional cleaning service"
            fill
            className="object-cover object-center"
            priority
          /> */}
        </video>
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-black/70"></div>
      </div>

      

 
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-1 items-center">
            {/* Left Content */}
            <div className="text-white  animate-fade-in-up pl-0 sm:pl-4 lg:pl-8 bg-red-500/ lg:ml-11 xl:pl-0">
              {/* Enhanced Tag Header - Commented out */}
              {/*
              <div className="inline-flex items-center px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full border border-white/30 mb-6 md:mb-8 shadow-none shadow-black/20">
                 <svg className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm font-semibold text-white tracking-wide">Liverpool's Trusted Cleaning Experts</span>
              </div>
              */}

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-wide tracking-wide  mb-6 animate-fade-in-up delay-200">
                <span className="block">Let Us Do The</span>
                <span className=" text-transparent/ bg-clip-text bg-gradient-to-r from-white via-white/90 to-[var(--primary-color)] animate-fade-in-up delay-300 drop-shadow-lg">
                  Cleaning!
                </span>
                <div className="mt-4 w-24 h-1 bg-[var(--primary-hover)] rounded-full animate-fade-in-up delay-400"></div>
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-white/90 animate-fade-in-up delay-500">
                You deserve a spotless home, and that&apos;s exactly our specialty. 
                Professional cleaning services that give you more time for what matters most.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="mt-8 md:mt-12 flex flex-row gap-3 md:gap-6 animate-fade-in-up delay-700">
                <button 
                  onClick={openModal}
                  className="group relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden text-sm md:text-base"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <svg className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                <Link href="/linen-hire" className="group relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden text-sm md:text-base">
                  <span className="relative z-10">Linen Hire</span>
                  <svg className="ml-2 md:ml-3 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>

          
            </div>

            {/* Right side - Visual Elements */}
            
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-up delay-1000 cursor-hover">
          <span className="text-sm text-white/80 mb-3 font-medium">Scroll to explore</span>
          <div 
            className="relative cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-center justify-center hover:border-white/80 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce"></div>
            </div>
            <div className="absolute -inset-2 bg-white/10 rounded-full blur-sm animate-pulse"></div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
