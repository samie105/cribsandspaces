import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import OfficeCleaningSection from "./components/OfficeCleaningSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GallerySection from "./components/GallerySection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import CustomCursor from "./components/CustomCursor";
import SocialSidebar from "./components/SocialSidebar";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-white">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Social Media Sidebar - Desktop Only */}
      <SocialSidebar />

      {/* Navigation Component - Fixed */}
      <Navigation />

      {/* Main Content with padding for fixed nav */}
      <div className="">
        {/* Hero Section Component */}
        <section id="home">
          <HeroSection />
        </section>

        

        {/* About Section Component */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Why Choose Us Section Component */}
        <section id="why-choose-us">
          <WhyChooseUsSection />
        </section>

        {/* Services Section Component */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Office Cleaning Section Component */}
        <section id="office-cleaning">
          <OfficeCleaningSection />
        </section>

        {/* Testimonials Section Component */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* Gallery Section Component */}
        <section id="gallery">
          <GallerySection />
        </section>

        {/* FAQ Section Component */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Footer Section Component */}
        <FooterSection />
      </div>
    </div>
  );
}