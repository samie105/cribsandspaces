"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/assets/logo.png"
                alt="Crib & Space Cleaning Logo"
                width={140}
                height={140}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary-color)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">info@cribsandspacescleaning.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary-color)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">07700 151227</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary-color)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-gray-300">Northwest England</p>
                  <p className="text-sm text-gray-400 mt-1">Serving Liverpool, Manchester, Wirral, Chester & St. Helens</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Hours & Areas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Service Information</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Assistance Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <p>Mon – Sat: 8:00am - 8:00pm</p>
                  <p>Sunday: CLOSED</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Areas Covered</h4>
                <p className="text-gray-300">Northwest England Service Area</p>
                <p className="text-sm text-gray-400 mt-1">Liverpool • Manchester • Wirral • Chester • St. Helens</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-none border border-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-none border border-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="m16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-none border border-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.183-.11 6.44 6.44 0 1 0 6.42 6.42V8.71a8.288 8.288 0 0 0 4.815 1.302V6.686z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Find Us</h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456785.9938054889!2d-2.8951!3d53.4837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0000000000001%3A0x1!2sNorthwest%20England!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Northwest England Service Area Map"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Crib & Space Cleaning. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
