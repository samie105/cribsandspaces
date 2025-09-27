"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About Us", id: "about" },
    { href: "#why-choose-us", label: "Why Choose Us", id: "why-choose-us" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#gallery", label: "Gallery", id: "gallery" },
    { href: "#faq", label: "FAQ", id: "faq" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only detect active sections on the home page
      if (pathname === "/") {
        const sections = ['home', 'about', 'why-choose-us', 'services', 'gallery', 'faq'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        // Reset active section when not on home page
        setActiveSection('');
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      // No dropdown to handle click outside for
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pathname]);

  const getNavHref = (itemHref: string) => {
    return pathname === "/" ? itemHref : `/${itemHref}`;
  };

  const getNavLinkClass = (itemId: string) => {
    const baseClass = "relative px-4 py-2 text-sm font-semibold transition-all duration-300 group";
    const isActive = activeSection === itemId;
    
    if (isScrolled) {
      return `${baseClass} ${isActive ? 'text-[var(--primary-color)]' : 'text-white hover:text-[var(--primary-color)]'}`;
    }
    return `${baseClass} ${isActive ? 'text-[var(--primary-color)]' : 'text-white/80 hover:text-white'}`;
  };

  const getMobileNavClass = (itemId: string) => {
    const baseClass = "stagger-item group relative flex items-center px-6 py-5 text-base font-medium transition-all duration-400 rounded-full border border-transparent";
    const isActive = activeSection === itemId;
    
    if (isScrolled) {
      return `${baseClass} ${isActive ? 'text-[var(--primary-color)]' : 'text-white hover:text-[var(--primary-color)] hover:bg-white/10 hover:shadow-md hover:border-white/30'}`;
    }
    return `${baseClass} ${isActive ? 'text-[var(--primary-color)]' : 'text-white/85 hover:text-white hover:bg-white/15 hover:shadow-lg hover:border-white/30'}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
      isScrolled
        ? 'bg-black/65 backdrop-blur-xl shadow-2xl border-b border-white/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[90rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 md:py-6">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex-shrink-0">
              <Link href="/" className="block transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/assets/logo.png"
                  alt="Crib & Space Cleaning Services"
                  width={100}
                  height={20}
                  className={`transition-all duration-300 w-20 h-auto sm:w-24 md:w-[100px]`}
                />
              </Link>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="hidden xl:block">
            <div className="ml-6 sm:ml-8 md:ml-10 flex items-baseline space-x-1 sm:space-x-2 md:space-x-3 xl:space-x-1">
              {navItems.map((item) => (
                <Link key={item.id} href={getNavHref(item.href)} className={getNavLinkClass(item.id)}>
                  <span className="relative z-10">{item.label}</span>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced CTA and Contact Info */}
          <div className="hidden xl:flex items-center space-x-6">
            {/* <div className={`text-sm transition-all duration-300 p-3 rounded-lg border ${
              isScrolled
                ? 'text-white/90 border-white/30 bg-white/5 backdrop-blur-sm'
                : 'text-white/80 border-white/30 /bg-white/5 backdrop-blur-sm'
            }`}>
              <span className="block font-medium">Call us today</span>
              <span className={`font-bold text-lg ${
                isScrolled ? 'text-white' : 'text-white drop-shadow-sm'
              }`}>07700 151227</span>
            </div> */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {pathname !== "/work-with-us" && (
                <Link href="/work-with-us" className="group relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/10 border border-white/30 text-white font-bold text-xs md:text-sm rounded-full hover:bg-white/20 hover:border-white/50 hover:backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                  <span className="relative z-10">Work With Us</span>
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700 rounded-full"></div>
                </Link>
              )}

              {pathname !== "/linen-hire" && (
                <Link href="/linen-hire" className="group relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/10 border border-white/30 text-white font-bold text-xs md:text-sm rounded-full hover:bg-white/20 hover:border-white/50 hover:backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                  <span className="relative z-10">Linen Hire</span>
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700 rounded-full"></div>
                </Link>
              )}

              {pathname !== "/get-a-quote" && (
                <Link href="/get-a-quote" className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                <span className="relative z-10">Get Quote</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              )}
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-3 transition-all duration-300 group cursor-hover ${
                isScrolled
                  ? 'text-white hover:text-[var(--primary-color)] hover:bg-white/10 backdrop-blur-sm'
                  : 'text-white hover:text-white/80 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <div className={`absolute inset-0 transition-all duration-300 ${
                isScrolled ? 'bg-[var(--primary-color)]/10' : 'bg-white/10'
              } opacity-0 group-hover:opacity-100`}></div>
            </button>
          </div>
        </div>

        {/* Ultra-Elegant Mobile Menu - Slides from Right */}
        <div className={`xl:hidden fixed inset-0 z-50 transition-all duration-500 ease-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Full-Screen Backdrop with Strong Blur */}
          <div
            className={`absolute h-screen inset-0 transition-all duration-500 ${
              isMenuOpen
                ? 'bg-black/60 backdrop-blur-md'
                : 'bg-black/60 backdrop-blur-md'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className={`absolute z-899 top-0 right-0 h-screen w-80 max-w-[85vw] transform transition-all duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className={`h-full flex flex-col border-l transition-all duration-500 ${
              isScrolled
                ? 'bg-black/60 backdrop-blur-md border-white/30 shadow-2xl shadow-gray-900/30'
                : 'bg-black/60 backdrop-blur-md border-white/30 shadow-2xl shadow-black/40'
            }`}>
              {/* Header */}
              <div className={`px-8 py-8 border-b transition-all duration-300 ${
                isScrolled ? 'border-white/30' : 'border-white/20'
              }`}>
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-bold tracking-wide transition-all duration-300 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`}>
                    Menu
                  </h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isScrolled ? 'bg-white/10 hover:bg-white/20' : 'bg-white/15 hover:bg-white/25'
                    }`}
                  >
                    <svg className={`w-5 h-5 transition-all duration-300 ${
                      isScrolled ? 'text-white' : 'text-white/80'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-6 space-y-3 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <style jsx>{`
                  @keyframes staggerIn {
                    0% { opacity: 0; transform: translateX(30px); }
                    100% { opacity: 1; transform: translateX(0); }
                  }
                  .stagger-item {
                    animation: staggerIn 0.6s ease-out forwards;
                    opacity: 0;
                  }
                `}</style>
                {navItems.map((item, index) => (
                  <Link key={item.id} href={getNavHref(item.href)} className={getMobileNavClass(item.id)} 
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                    <span className="flex-1 font-semibold tracking-wide">{item.label}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {activeSection === item.id && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--primary-color)] rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Section */}
              <div className={`px-6 pb-8 pt-4 border-t transition-all duration-300 ${
                isScrolled ? 'border-white/30' : 'border-white/20'
              }`}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {pathname !== "/work-with-us" && (
                      <Link href="/work-with-us" className={`group relative w-full inline-flex items-center justify-center px-6 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full transition-all duration-400 shadow-xl overflow-hidden hover:bg-white/20 hover:border-white/50`}>
                        <span className="relative z-10 font-bold text-base tracking-wide">Work With Us</span>
                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          isScrolled
                            ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full'
                            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full'
                        }`}></div>
                      </Link>
                    )}

                    {pathname !== "/get-a-quote" && (
                      <Link href="/get-a-quote" className={`group relative w-full inline-flex items-center justify-center px-6 py-4 text-white font-bold rounded-full transition-all duration-400 shadow-xl overflow-hidden ${
                        isScrolled
                          ? 'bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] shadow-[var(--primary-color)]/40 hover:shadow-[var(--primary-color)]/60 hover:shadow-2xl'
                          : 'bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] shadow-[var(--primary-color)]/50 hover:shadow-[var(--primary-color)]/70 hover:shadow-2xl'
                      }`}>
                        <span className="relative z-10 font-bold text-base tracking-wide">Get Your Quote</span>
                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          isScrolled
                            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full'
                            : 'bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full'
                        }`}></div>
                      </Link>
                    )}

                    {pathname !== "/linen-hire" && (
                      <Link href="/linen-hire" className={`group relative w-full inline-flex items-center justify-center px-6 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full transition-all duration-400 shadow-xl overflow-hidden hover:bg-white/20 hover:border-white/50`}>
                        <span className="relative z-10 font-bold text-base tracking-wide">Linen Hire</span>
                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          isScrolled
                            ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full'
                            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full'
                        }`}></div>
                      </Link>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className={`p-4 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-white/10 border border-white/30'
                      : 'bg-white/10 border border-white/20'
                  }`}>
                    <div className="text-center">
                      <p className={`text-sm font-medium mb-2 transition-all duration-300 ${
                        isScrolled ? 'text-white/80' : 'text-white/75'
                      }`}>
                        Need immediate help?
                      </p>
                      <p className={`text-lg font-bold transition-all duration-300 ${
                        isScrolled ? 'text-white' : 'text-white'
                      }`}>
                        07700 151227


                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}