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
    name: "Sarah Johnson",
    location: "Liverpool City Centre",
    rating: 5,
    text: "Absolutely fantastic service! Our team at Crib & Space are incredibly thorough and professional. They transformed our office space and we couldn't be happier with the results. The attention to detail is remarkable.",
    service: "Office Cleaning"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Woolton Village",
    rating: 5,
    text: "I've been using their residential cleaning service for over a year now. The cleaners are reliable, trustworthy, and always go above and beyond. My home has never looked better. Highly recommend to anyone in Liverpool!",
    service: "Residential Cleaning"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Aigburth",
    rating: 5,
    text: "After our kitchen renovation, we needed a deep clean that would tackle everything from construction dust to paint splatters. The team did an incredible job - it's like having a brand new home. Professional and efficient!",
    service: "Deep Cleaning"
  },
  {
    id: 4,
    name: "David Rodriguez",
    location: "Baltic Triangle",
    rating: 5,
    text: "Our startup needed regular office cleaning and Crib & Space delivered perfectly. They work around our schedule, never interrupt important meetings, and maintain our space to the highest standards. Great value too!",
    service: "Office Cleaning"
  },
  {
    id: 5,
    name: "Lisa Williams",
    location: "Allerton",
    rating: 5,
    text: "Moving house is stressful enough without worrying about cleaning. Their move-in cleaning service was a lifesaver - we walked into a spotless home ready to start our new chapter. Thank you so much!",
    service: "Move In/Out Cleaning"
  },
  {
    id: 6,
    name: "James Parker",
    location: "Lark Lane",
    rating: 5,
    text: "I run a busy restaurant and cleanliness is everything. The commercial cleaning team understands the food industry requirements perfectly. They're thorough, reliable, and always professional. Couldn't ask for more!",
    service: "Commercial Cleaning"
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
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'MonteCarlo, cursive' }}>
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
                      <div className="font-semibold text-[var(--text-dark)] text-base mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-[var(--text-light)] text-sm mb-3">
                        {testimonial.location}
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
        </div>
      </div>
    </section>
  );
}