"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactModal from "./ContactModal";
import { useContactModal } from "../hooks/useContactModal";

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { isOpen, openModal, closeModal } = useContactModal();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const services = [
    {
      title: 'We Cover The Following',
      subtitle: 'Property Types We Service',
      description: 'We provide professional cleaning services for a wide range of property types, ensuring every space gets the attention it deserves.',
      features: [
        'Residential homes',
        'Student accommodation',
        'Airbnbs',
        'Holiday homes',
        'Offices, schools, shops'
      ],
      image: '/assets/our-services.jpg',
      price: 'Custom pricing available'
    },
    {
      title: 'We Offer',
      subtitle: 'Our Cleaning Services',
      description: 'Choose from our comprehensive range of cleaning services designed to meet your specific needs and schedule.',
      features: [
        'Deep clean',
        'One-off clean',
        'End of tenancy clean',
        'Regular clean (weekly & fortnightly)',
        'Commercial cleans'
      ],
      image: '/assets/ourservice-deep.jpg',
      price: 'From £15.95/hour'
    },
    {
      title: 'Extras (Additional Charge)',
      subtitle: 'Specialized Cleaning Services',
      description: 'Enhance your cleaning service with our specialized extras for those hard-to-reach areas and appliances.',
      features: [
        'Oven cleaning',
        'Fridge/freezer clean',
        'Blinds/internal window clean',
        'Microwave clean'
      ],
      image: '/assets/ourservices-extra.jpg',
      price: 'Additional charges apply'
    }
  ];

  return (
    <section 
      id="services" 
      className="w-full bg-white relative"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m/b-16">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'MonteCarlo, cursive' }}>
                  Our <span className="text-[var(--primary-color)]">Services</span>
                </h2>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                </div>
                <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                  Professional cleaning solutions tailored to your property type and schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--primary-color)] via-[var(--primary-hover)] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10 mb-20 md:mb-32"
          >
            {/* Timeline Marker & Service Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start max-w-xs lg:max-w-xl md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white/ flex items-center justify-center border-none">
                <div className="h-4 w-4 rounded-full bg-[var(--primary-color)] border-2 border-white shadow-sm" />
              </div>
              <div className="hidden md:block md:pl-20 w-full">
                <h3 className="text-lg md:text-2xl font-bold text-gray-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-[var(--primary-color)] font-semibold mb-6">
                  {service.subtitle}
                </p>
                
                {/* Text Content Below Headers */}
                <div className="space-y-8 max-w-4xl">
                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-600">What's Included:</h4>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-gray-600">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={openModal}
                      className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Get a Quote</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full md:flex md:justify-end">
              {/* Mobile Title */}
              <div className="md:hidden block mb-6">
                <h3 className="text-lg font-bold text-gray-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-[var(--primary-color)] font-semibold mb-6">
                  {service.subtitle}
                </p>
                
                {/* Mobile Image - Right after title/tagline */}
                <div className="relative w-full mb-8">
                  <div className="relative rounded-lg md:rounded-none h-80 overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      quality={100}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Mobile Text Content */}
                <div className="space-y-8 max-w-4xl">
                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-base font-semibold text-gray-600">What's Included:</h4>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-gray-600">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={openModal}
                      className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Get a Quote</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Large Image on Right */}
              <div className="relative hidden md:block">
                <div className="relative h-[600px] w-[500px] overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    quality={90}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}