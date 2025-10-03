"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CustomCursor from "../components/CustomCursor";
import SocialSidebar from "../components/SocialSidebar";
import FooterSection from "../components/FooterSection";
import Link from "next/link";

export default function TermsOfService() {
  const [scrollY, setScrollY] = useState(0);

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
      title: "Services",
      content: "We provide professional cleaning services, subject to availability and acceptance of your booking. Service details (e.g., duration, pricing) will be confirmed prior to commencement."
    },
    {
      id: 2,
      title: "Bookings & Quotes",
      items: [
        "All quotes are estimates based on the information you provide. Final pricing may vary depending on actual scope of work.",
        "Bookings must be made through our website, phone, or email.",
        "You are responsible for providing accurate details when requesting a service."
      ]
    },
    {
      id: 3,
      title: "Payment Terms",
      items: [
        "Payment must be made as agreed before or after service, depending on your booking arrangement.",
        "Late payments may incur additional charges.",
        "We use secure third-party payment providers and do not store your payment details."
      ]
    },
    {
      id: 4,
      title: "Cancellations & Rescheduling",
      items: [
        "You may cancel or reschedule a booking by giving at least 48 hours notice.",
        "Cancellations with insufficient notice may result in a cancellation fee."
      ]
    },
    {
      id: 5,
      title: "Client Responsibilities",
      items: [
        "You must provide safe and reasonable access to the property.",
        "You must disclose any health or safety risks in the environment.",
        "Valuables should be secured; we are not liable for items left unsecured."
      ]
    },
    {
      id: 6,
      title: "Our Responsibilities",
      items: [
        "We will provide services with reasonable skill and care.",
        "All cleaners must hold a valid DBS check and carry personal indemnity insurance.",
        "We reserve the right to refuse service if conditions are unsafe or unsuitable."
      ]
    },
    {
      id: 7,
      title: "Liability",
      items: [
        "We are not liable for indirect, incidental, or consequential damages.",
        "Our liability for direct damages is limited to the total amount paid for the specific service.",
        "We are not responsible for pre-existing damage to property or items."
      ]
    },
    {
      id: 8,
      title: "Termination",
      content: "We may suspend or terminate services at our discretion if these Terms are breached."
    },
    {
      id: 9,
      title: "Changes to Terms",
      content: "We may update these Terms at any time. Continued use of our website or services constitutes acceptance of the updated Terms."
    },
    {
      id: 10,
      title: "Governing Law",
      content: "These Terms are governed by the laws of the United Kingdom. Any disputes will be handled in the courts of the United Kingdom."
    },
    {
      id: 11,
      title: "Contact Us",
      content: "For questions about these Terms, email us at info@cribsandspacescleaning.co.uk"
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
              backgroundImage: "url('/gallery/IMG_1480.png')",
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
                  Terms of <span className="text-[var(--primary-color)]">Service</span>
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                </div>
               
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
                These Terms of Service (&quot;Terms&quot;) govern your use of Cribs and Spaces Cleaning Ltd.&apos;s website and services. 
                By accessing our website or booking our services, you agree to these Terms.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
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
                          <p className="text-gray-700 leading-relaxed text-lg font-light">{section.content}</p>
                        )}
                        {section.items && (
                          <ul className="space-y-4">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4 text-gray-700 leading-relaxed text-lg font-light">
                                <span className="text-[var(--primary-color)] mt-1.5 text-sm">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
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

        {/* Back to Home CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="border-t-4 border-[var(--primary-color)] bg-gray-50 p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">Have Questions?</h2>
              <p className="text-gray-700 mb-8 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                If you have any questions about our Terms of Service, please don&apos;t hesitate to contact us.
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
                <Link
                  href="/get-a-quote"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-[var(--primary-color)] text-white font-light text-lg border border-[var(--primary-color)] rounded-full hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
