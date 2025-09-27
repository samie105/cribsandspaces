"use client";

import Navigation from "../components/Navigation";
import CustomCursor from "../components/CustomCursor";
import SocialSidebar from "../components/SocialSidebar";
import FooterSection from "../components/FooterSection";
import ContactModal from "../components/ContactModal";
import { useContactModal } from "../hooks/useContactModal";
import AirlinenHeroSection from "../components/AirlinenHeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BedPacksSection from "../components/BedPacksSection";
import AirlinenWhyChooseUsSection from "../components/AirlinenWhyChooseUsSection";
import ContactSection from "../components/ContactSection";

export default function AirlinenHirePage() {
  const { isOpen, openModal, closeModal } = useContactModal();

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
        <AirlinenHeroSection openModal={openModal} />
        <HowItWorksSection />
        <BedPacksSection />
        <AirlinenWhyChooseUsSection openModal={openModal} />
        <ContactSection openModal={openModal} />

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}