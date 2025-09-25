"use client";

import { useState, useEffect } from "react";
import CustomCursor from "./CustomCursor";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const contactOptions = [
    {
      type: 'email',
      label: 'Send Email',
      value: 'info@cribsandspacescleaning.co.uk',
      href: 'mailto:info@cribsandspacescleaning.co.uk',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'phone',
      label: 'Call Now',
      value: '07700 151227',
      href: 'tel:+447700151227',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp Message',
      value: '07700 151227',
      href: 'https://wa.me/447700151227',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    }
  ];

  // Mobile Drawer
  if (isMobile) {
    return (
      <>
        <CustomCursor />
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] transition-opacity duration-300"
          onClick={onClose}
        />
        
        {/* Drawer */}
        <div className={`fixed bottom-0 left-0 right-0 z-[10000] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="bg-white rounded-t-3xl shadow-2xl">
            {/* Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">Choose how you'd like to contact us</p>
            </div>
            
            {/* Contact Options */}
            <div className="px-6 py-6 space-y-4">
              {contactOptions.map((option) => (
                <a
                  key={option.type}
                  href={option.href}
                  className="group flex items-center p-4 bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--primary-hover)]/5 rounded-2xl border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  onClick={onClose}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] rounded-xl flex items-center justify-center text-white group-hover:shadow-lg transition-all duration-300">
                    {option.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                      {option.label}
                    </h4>
                    <p className="text-gray-600 text-sm">{option.value}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[var(--primary-color)] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
            
            {/* Safe area padding for iPhone */}
            <div className="h-8"></div>
          </div>
        </div>
      </>
    );
  }

  // Desktop Dialog
  return (
    <>
      <CustomCursor />
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
        onClick={onClose}
      >
        {/* Dialog */}
        <div 
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mt-1">Choose how you'd like to contact us</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="px-8 py-6 space-y-4">
            {contactOptions.map((option) => (
              <a
                key={option.type}
                href={option.href}
                className="group flex items-center p-4 bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--primary-hover)]/5 rounded-2xl border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                onClick={onClose}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] rounded-xl flex items-center justify-center text-white group-hover:shadow-lg transition-all duration-300">
                  {option.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-[var(--primary-color)] transition-colors duration-300 text-lg">
                    {option.label}
                  </h4>
                  <p className="text-gray-600">{option.value}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[var(--primary-color)] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
          
          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 rounded-b-3xl">
            <p className="text-center text-sm text-gray-500">
              We typically respond within 2 hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
