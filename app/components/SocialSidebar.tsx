"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SocialSidebar() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is h-screen (100vh), so check if scrolled past viewport height
      setIsScrolledPastHero(window.scrollY > window.innerHeight * 0.5) ; // 50% of viewport height
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: "https://facebook.com",
      defaultColor: "text-[var(--primary-color)]",
      hoverColor: "hover:text-[var(--primary-hover)]",
      bgColor: "hover:bg-[var(--primary-color)]/10"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="m16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "https://instagram.com",
      defaultColor: "text-[var(--primary-color)]",
      hoverColor: "hover:text-[var(--primary-hover)]",
      bgColor: "hover:bg-[var(--primary-color)]/10"
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.183-.11 6.44 6.44 0 1 0 6.42 6.42V8.71a8.288 8.288 0 0 0 4.815 1.302V6.686z"/>
        </svg>
      ),
      href: "https://tiktok.com",
      defaultColor: "text-[var(--primary-color)]",
      hoverColor: "hover:text-[var(--primary-hover)]",
      bgColor: "hover:bg-[var(--primary-color)]/10"
    }
  ];

  return (
    <div className="hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/20 cursor-hover ${
              isScrolledPastHero
                ? `bg-white/10 border border-gray-200 ${social.defaultColor} ${social.hoverColor} ${social.bgColor}`
                : `bg-white/10 backdrop-blur-md border border-white/20 text-white/80 ${social.hoverColor} ${social.bgColor}`
            } rounded-full`}
            onMouseEnter={() => setHoveredIcon(social.name)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Tooltip */}
            <div className={`absolute left-full ml-4 px-3 py-2 bg-black/80 backdrop-blur-2xl text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap ${
              hoveredIcon === social.name ? 'translate-x-0' : '-translate-x-2'
            }`}>
              {social.name}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
            </div>

            {/* Icon */}
            <div className="transition-transform duration-300 group-hover:scale-110">
              {social.icon}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        ))}

        {/* Decorative line */}
        <div className={`w-px h-16 mx-auto transition-all duration-300 ${
          isScrolledPastHero
            ? 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'
            : 'bg-gradient-to-b from-white/20 via-white/10 to-transparent'
        }`}></div>
      </div>
    </div>
  );
}
