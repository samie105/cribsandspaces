"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close modal only if clicking directly on the backdrop (not child elements)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Floating Element */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 opacity-10 hover:opacity-30 transition-opacity duration-300">
        <Image
          src="/floating-elements/floater.svg"
          alt="Decorative floating element"
          width={384}
          height={384}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                Our <span className="text-[var(--primary-color)]">Gallery</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                Take a look at our work in action. Professional cleaning results that speak for themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Simple grid for mobile, bento for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 md:auto-rows-[180px] lg:auto-rows-[220px] xl:auto-rows-[250px]">
          
          {/* Mobile: Simple 2-column grid, Desktop: Bento grid */}
          <div className="group relative overflow-hidden md:col-span-2 lg:col-span-2 xl:col-span-3 cursor-pointer" onClick={() => openModal('/gallery/galleryimg1.png')}>
            <div className="aspect-square md:aspect-[16/9] relative">
              <Image
                src="/gallery/galleryimg1.png"
                alt="Featured gallery image 1"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 66vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/galleryimg2.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/galleryimg2.png"
                alt="Gallery image 2"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden md:col-span-1 lg:col-span-1 xl:col-span-1 cursor-pointer" onClick={() => openModal('/gallery/galleryimg3.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/galleryimg3.png"
                alt="Gallery image 3"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/galleryimg4.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/galleryimg4.png"
                alt="Gallery image 4"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden md:col-span-2 lg:col-span-2 xl:col-span-2 cursor-pointer" onClick={() => openModal('/gallery/galleryimg5.png')}>
            <div className="aspect-square md:aspect-[2/1] relative">
              <Image
                src="/gallery/galleryimg5.png"
                alt="Gallery image 5"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 66vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/IMG_0021.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/IMG_0021.png"
                alt="Gallery image 6"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden md:row-span-2 lg:row-span-2 xl:row-span-2 cursor-pointer" onClick={() => openModal('/gallery/IMG_0035.png')}>
            <div className="aspect-square md:aspect-[2/3] md:h-full relative">
              <Image
                src="/gallery/IMG_0035.png"
                alt="Gallery image 7"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/IMG_0308.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/IMG_0308.png"
                alt="Gallery image 8"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden md:col-span-2 lg:col-span-2 xl:col-span-2 cursor-pointer" onClick={() => openModal('/gallery/IMG_0328.png')}>
            <div className="aspect-square md:aspect-[2/1] relative">
              <Image
                src="/gallery/IMG_0328.png"
                alt="Gallery image 9"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 66vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/IMG_0332.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/IMG_0332.png"
                alt="Gallery image 10"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/IMG_0358.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/IMG_0358.png"
                alt="Gallery image 11"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden md:col-span-2 lg:col-span-1 xl:col-span-1 cursor-pointer" onClick={() => openModal('/gallery/IMG_1361.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/IMG_1361.png"
                alt="Gallery image 12"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden md:col-span-2 lg:col-span-2 xl:col-span-2 cursor-pointer" onClick={() => openModal('/gallery/IMG_1451.png')}>
            <div className="aspect-square md:aspect-[2/1] relative">
              <Image
                src="/gallery/IMG_1451.png"
                alt="Gallery image 13"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 66vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer" onClick={() => openModal('/gallery/IMG_1479.png')}>
            <div className="aspect-square relative">
              <Image
                src="/gallery/IMG_1479.png"
                alt="Gallery image 14"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* <div className="group relative overflow-hidden md:row-span-2 lg:row-span-2 xl:row-span-2 cursor-pointer" onClick={() => openModal('/gallery/IMG_1480.png')}>
            <div className="aspect-square md:aspect-[2/3] md:h-full relative">
              <Image
                src="/gallery/IMG_1480.png"
                alt="Gallery image 15"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div> */}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see your space looking this good?
          </p>
          <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Get Your Free Quote</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleBackdropClick}
          onTouchStart={handleTouchStart}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-4 right-4 z-60 p-3 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full hover:bg-black/70 touch-none"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full p-4 touch-none"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full size gallery image"
              fill
              className="object-contain touch-none"
              sizes="90vw"
              priority
            />
          </div>

          {/* Click outside hint */}
          {/* <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm touch-none"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            Tap outside or press ESC to close
          </div> */}
        </div>
      )}
    </section>
  );
}