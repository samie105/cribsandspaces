"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CustomCursor from "../components/CustomCursor";
import SocialSidebar from "../components/SocialSidebar";
import FooterSection from "../components/FooterSection";
import ContactModal from "../components/ContactModal";
import { useContactModal } from "../hooks/useContactModal";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [scrollY, setScrollY] = useState(0);
  const { isOpen, openModal, closeModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      items: [
        "Personal Information: Name, email address, phone number, physical address, and any details you provide when requesting a quote, booking services, or contacting us.",
        "Payment Information: If applicable, payments are processed securely through third-party providers (we do not store your credit card details).",
        "Usage Data: IP address, browser type, device information, and website activity collected through cookies and analytics tools."
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      items: [
        "To provide cleaning services and respond to inquiries.",
        "To generate quotes and manage bookings.",
        "To communicate updates, promotions, or important notices (only if you opt-in).",
        "To improve our website, services, and customer experience."
      ]
    },
    {
      id: 3,
      title: "Sharing of Information",
      content: "We do not sell or rent your personal information. We may share it only with:",
      items: [
        "Trusted third parties who help deliver our services (e.g., payment processors, booking platforms).",
        "Legal authorities if required by law or to protect our rights."
      ]
    },
    {
      id: 4,
      title: "Data Security",
      content: "We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, alteration, or disclosure."
    },
    {
      id: 5,
      title: "Cookies",
      content: "Our website may use cookies to improve functionality and analyze traffic. You can disable cookies in your browser settings, but some features may not work properly."
    },
    {
      id: 6,
      title: "Your Rights",
      content: "Depending on your location, you may have rights to:",
      items: [
        "Access, correct, or delete your personal data.",
        "Request restriction or objection to processing.",
        "Withdraw consent at any time."
      ],
      footer: "To exercise these rights, please contact us at info@cribsandspacescleaning.co.uk"
    },
    {
      id: 7,
      title: "Contact Us",
      content: "If you have questions about this Privacy Policy, email us at info@cribsandspacescleaning.co.uk"
    }
  ];

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Social Media Sidebar - Desktop Only */}
      <SocialSidebar />

      {/* Navigation Component - Fixed */}
      <Navigation />

      {/* Main Content */}
      <div className="">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/galleryimg2.png')",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                  Privacy <span className="text-[var(--primary-color)]">Policy</span>
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                </div>
                <p className="text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
            onClick={() => {
              const nextSection = document.querySelector('[data-section="intro"]');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="bg-black/30 backdrop-blur-md rounded-full p-3 group-hover:bg-black/50 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section data-section="intro" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-[var(--primary-color)] pl-8 py-6">
              <p className="text-xl text-gray-800 leading-relaxed font-light">
                Cribs and Spaces Cleaning Ltd. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={section.id} className="bg-white border-l-4 border-gray-200 hover:border-[var(--primary-color)] transition-colors duration-300">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <span className="text-3xl font-light text-[var(--primary-color)]">
                            {String(section.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-tight">{section.title}</h2>
                        {section.content && (
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg font-light">{section.content}</p>
                        )}
                        {section.items && (
                          <ul className="space-y-4 mb-6">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4 text-gray-700 leading-relaxed text-lg font-light">
                                <span className="text-[var(--primary-color)] mt-1.5 text-sm">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.footer && (
                          <p className="text-gray-600 leading-relaxed text-base font-light pt-4 border-t border-gray-100">{section.footer}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < sections.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border-t-4 border-[var(--primary-color)] p-10 md:p-12 text-white">
              <div className="flex items-start gap-6">
                <svg className="w-10 h-10 flex-shrink-0 mt-1 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Your Privacy Matters</h3>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    We are committed to protecting your personal information and being transparent about how we use it. 
                    If you have any concerns or questions about our privacy practices, please don&apos;t hesitate to reach out to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white border-t-4 border-[var(--primary-color)] p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">Need More Information?</h2>
              <p className="text-gray-700 mb-8 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                If you have any questions about our Privacy Policy, please feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-black text-white font-light text-lg border border-black rounded-full hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  <span className="relative z-10">Back to Home</span>
                  <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center px-10 py-4 bg-[var(--primary-color)] text-white font-light text-lg border border-[var(--primary-color)] rounded-full hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                >
                  <span className="relative z-10">Contact Us</span>
                  <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
