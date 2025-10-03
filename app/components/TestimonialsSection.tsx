'use client';

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oge Sandra",
    location: "Reviewed on Google Maps",
    rating: 5,
    text: "I'm absolutely impressed with the service your team provided! They were punctual, professional, and did an outstanding job cleaning my home.",
    service: "Residential Cleaning"
  },
  {
    id: 2,
    name: "Ihuoma Obi-Obasi",
    location: "Reviewed on Google Maps",
    rating: 5,
    text: "Spectacular service!",
    service: "Cleaning Service"
  },
  {
    id: 3,
    name: "Mint",
    location: "Reviewed on Google Maps",
    rating: 5,
    text: "Cribs and spaces is worth it. they handled by end of contract apartment cleaning. everything was professionally done and the customer service is excellent. would highly recommend",
    service: "End of Tenancy"
  },
  {
    id: 4,
    name: "Ezinwanne Okeke",
    location: "Reviewed on Google Maps",
    rating: 5,
    text: "I highly recommend this management. They are efficient, open to feedback, approachable and good to employers and customers alike. and they're all 5 star",
    service: "Cleaning Service"
  }
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Floating Element - Top Right */}
      <div className="absolute rotate-15 -top-90 -right-60 z-10 opacity-10 hover:opacity-40 transition-opacity duration-300">
        <Image
          src="/floating-elements/floater.svg"
          alt="Decorative floating element"
          width={768}
          height={768}
          className="w-[48rem] h-[48rem] md:w-[56rem] md:h-[56rem] lg:w-[64rem] lg:h-[64rem]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header Section Above */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                What Our <span className="text-[var(--primary-color)]">Customers</span> Say
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                Real experiences from Liverpool families and businesses who trust us with their cleaning needs
              </p>
            </div>
          </div>
        </div>

        {/* Carousel with shadcn */}
        <div className="opacity-0 animate-fade-in-up delay-300">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[var(--primary-color)] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-[var(--text-dark)] leading-relaxed mb-6 font-light text-sm lg:text-base line-clamp-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-[var(--text-dark)] text-base">
                          {testimonial.name}
                        </div>
                        {/* Google Icon */}
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Controls and Dots on Same Line */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex justify-center gap-2 opacity-0 animate-fade-in-up delay-500 flex-1">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current - 1
                      ? 'bg-[var(--primary-color)] scale-125' 
                      : 'bg-gray-300 hover:bg-[var(--primary-color)]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
              {/* Previous Button */}
              <button
                onClick={() => api?.scrollPrev()}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button
                onClick={() => api?.scrollNext()}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 opacity-0 animate-fade-in-up delay-600">
            <a
              href="https://www.bark.com/en/gb/company/cribs-and-spaces-cleaning-ltd/PwVwRM/?show_reviews=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">See All Testimonials</span>
              <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}