"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CustomCursor from "../components/CustomCursor";
import SocialSidebar from "../components/SocialSidebar";
import FooterSection from "../components/FooterSection";
import Link from "next/link";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { submitQuoteForm } from "../actions/quoteActions";

// Types
interface Option {
  value: string;
  label: string;
}

interface CustomCheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: { target: { name: string; checked: boolean; type: string } }) => void;
  className?: string;
}

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string; type: string } }) => void;
  options: Option[];
  placeholder: string;
  required?: boolean;
  className?: string;
}

// Zod validation schema
const quoteFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  otherServiceDetails: z.string().optional(),
  frequency: z.string().optional(),
  bedrooms: z.string().optional(),
  receptionRooms: z.string().optional(),
  bathrooms: z.string().optional(),
  hoursRequired: z.string().optional(),
  clientMessage: z.string().optional(),
  smsConsent: z.boolean()
});

// Custom Checkbox Component
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ name, checked, onChange, className = "" }) => {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        onClick={() => onChange({ target: { name, checked: !checked, type: 'checkbox' }})}
        className={`w-5 h-5 rounded border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
          checked
            ? 'bg-[var(--primary-color)] border-[var(--primary-color)] shadow-lg scale-105'
            : 'bg-white border-gray-300 hover:border-[var(--primary-color)] hover:shadow-md'
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white animate-in zoom-in duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

// Custom Select Component
const CustomSelect: React.FC<CustomSelectProps> = ({ name, value, onChange, options, placeholder, required = false, className = "" }) => { // eslint-disable-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue: string) => {
    onChange({
      target: {
        name,
        value: optionValue,
        type: 'select'
      }
    });
    setIsOpen(false);
  };

  const selectedOption = options.find((option: Option) => option.value === value);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-left flex items-center justify-between ${
          !selectedOption ? 'text-gray-500' : 'text-gray-800'
        }`}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option: Option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-4 py-3 text-left hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] transition-colors duration-150 ${
                value === option.value ? 'bg-[var(--primary-color)]/10 text-[var(--primary-color)] font-medium' : 'text-gray-800'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    serviceType: '',
    otherServiceDetails: '',
    frequency: '',
    bedrooms: '',
    receptionRooms: '',
    bathrooms: '',
    hoursRequired: '',
    clientMessage: '',
    smsConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Select options
  const serviceTypeOptions: Option[] = [
    { value: '', label: 'Select service type' },
    { value: 'one-time', label: 'One-time Clean' },
    { value: 'regular', label: 'Regular Clean' },
    { value: 'deep-clean', label: 'Deep Clean' },
    { value: 'move-in-out', label: 'Move In/Out Clean' },
    { value: 'post-construction', label: 'Post Construction Clean' },
    { value: 'serviced-accommodation', label: 'Serviced Accommodation Clean' },
    { value: 'office-clean', label: 'Office Clean' },
    { value: 'other', label: 'Other' }
  ];

  const frequencyOptions: Option[] = [
    { value: '', label: 'Select frequency' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const bedroomOptions: Option[] = [
    { value: '', label: 'Select bedrooms' },
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' },
    { value: '3', label: '3 Bedrooms' },
    { value: '4', label: '4 Bedrooms' },
    { value: '5', label: '5 Bedrooms' },
    { value: '6+', label: '6+ Bedrooms' }
  ];

  const receptionRoomOptions: Option[] = [
    { value: '', label: 'Select reception rooms' },
    { value: '1', label: '1 Room' },
    { value: '2', label: '2 Rooms' },
    { value: '3', label: '3 Rooms' },
    { value: '4', label: '4 Rooms' },
    { value: '5+', label: '5+ Rooms' }
  ];

  const bathroomOptions: Option[] = [
    { value: '', label: 'Select bathrooms' },
    { value: '1', label: '1 Bathroom' },
    { value: '2', label: '2 Bathrooms' },
    { value: '3', label: '3 Bathrooms' },
    { value: '4+', label: '4+ Bathrooms' }
  ];

  const hoursOptions: Option[] = [
    { value: '', label: 'Select hours' },
    { value: '2', label: '2 Hours' },
    { value: '2.5', label: '2.5 Hours' },
    { value: '3', label: '3 Hours' },
    { value: '3.5', label: '3.5 Hours' },
    { value: '4', label: '4 Hours' },
    { value: '5', label: '5 Hours' },
    { value: '6', label: '6 Hours' },
    { value: 'custom', label: 'Custom Hours' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string; value?: string; checked?: boolean; type: string } }) => {
    const { name, type } = e.target;
    let value: string | boolean;

    if (type === 'checkbox' && 'checked' in e.target) {
      value = e.target.checked as boolean;
    } else if ('value' in e.target) {
      value = e.target.value as string || '';
    } else {
      value = '';
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data with Zod
      const validatedData = quoteFormSchema.parse(formData);

      // Submit to server action
      const result = await submitQuoteForm(validatedData);

      if (result.success) {
        // Success toast
        toast.success("Quote request submitted successfully!", {
          description: "We'll review your request and get back to you within 24 hours.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          postalCode: '',
          serviceType: '',
          otherServiceDetails: '',
          frequency: '',
          bedrooms: '',
          receptionRooms: '',
          bathrooms: '',
          hoursRequired: '',
          clientMessage: '',
          smsConsent: false
        });
      } else {
        toast.error("Failed to submit request", {
          description: result.message || "Please try again later.",
          duration: 4000,
        });
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);

        toast.error("Please fix the errors in the form", {
          description: "Check the highlighted fields and try again.",
          duration: 4000,
        });
      } else {
        toast.error("Something went wrong", {
          description: "Please try again later.",
          duration: 4000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">
      {/* Toast Container */}
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid #e5e7eb',
            color: '#111827',
          },
        }}
      />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Social Media Sidebar - Desktop Only */}
      <SocialSidebar />

      {/* Navigation Component - Fixed */}
      <Navigation />

      {/* Main Content */}
      <div className="">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/get-a-quote-hero.jpg')",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                  Get <span className="text-[var(--primary-color)]">A Quote</span>
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                </div>
                <p className="text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                 A spotless space is just a click away!
                </p>
              </div>
            </div>

            <div className="space-y-4">
          

              <p className="text-base lg:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
                Cleaning made easy! Just tell us what you need and we&apos;ll whip up a personalized quote in no time. No stress, no strings — just sparkling results that fit your lifestyle.
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
            onClick={() => {
              const nextSection = document.querySelector('[data-section="quote-form"]');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="bg-black/30 backdrop-blur-md rounded-full p-3 group-hover:bg-black/50 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Recommended Hours Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Recommended Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">1-bed</h3>
                  <p className="text-[var(--primary-color)] font-medium">2 hours</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">2-bed 1-bath</h3>
                  <p className="text-[var(--primary-color)] font-medium">2.5 hours</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">2-bed 2-bath</h3>
                  <p className="text-[var(--primary-color)] font-medium">3 hours</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">3-bed</h3>
                  <p className="text-[var(--primary-color)] font-medium">3.5 hours</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">4-bed</h3>
                  <p className="text-[var(--primary-color)] font-medium">5 hours</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">5-bed</h3>
                  <p className="text-[var(--primary-color)] font-medium">6 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section data-section="quote-form" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Request Your Free Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500 ${
                        errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Enter your first name"
                      required
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500 ${
                        errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Enter your phone number"
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500 ${
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Enter your email address"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Address Fields */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500"
                        placeholder="Enter your postal code"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Type Of Service *
                  </label>
                  <CustomSelect
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    options={serviceTypeOptions}
                    placeholder="Select service type"
                    required
                  />
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
                  )}
                </div>

                {/* Other Service Details - Only show if "Other" is selected */}
                {formData.serviceType === 'other' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Please Describe The Service You Need *
                    </label>
                    <input
                      name="otherServiceDetails"
                      value={formData.otherServiceDetails}
                      onChange={handleInputChange}
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 resize-none placeholder-gray-400 text-gray-800"
                      placeholder="Tell us about the specific cleaning service you're looking for..."
                    />
                  </div>
                )}

                {/* Frequency - Only show if regular clean is selected */}
                {formData.serviceType === 'regular' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      If Looking For A Regular Clean Please State Frequency
                    </label>
                    <CustomSelect
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      options={frequencyOptions}
                      placeholder="Select frequency"
                    />
                  </div>
                )}

                {/* Property Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Number Of Bedrooms
                    </label>
                    <CustomSelect
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      options={bedroomOptions}
                      placeholder="Select bedrooms"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Number Of Reception Room (lounge, dining, kitchen)
                    </label>
                    <CustomSelect
                      name="receptionRooms"
                      value={formData.receptionRooms}
                      onChange={handleInputChange}
                      options={receptionRoomOptions}
                      placeholder="Select reception rooms"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Number of Bathrooms
                    </label>
                    <CustomSelect
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      options={bathroomOptions}
                      placeholder="Select bathrooms"
                    />
                  </div>
                </div>

                {/* Hours Required */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Hours Required
                  </label>
                  <CustomSelect
                    name="hoursRequired"
                    value={formData.hoursRequired}
                    onChange={handleInputChange}
                    options={hoursOptions}
                    placeholder="Select hours"
                  />
                </div>

                {/* Client Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Client Message
                  </label>
                  <textarea
                    name="clientMessage"
                    value={formData.clientMessage}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-white text-gray-800 placeholder-gray-500 resize-vertical"
                    placeholder="Please provide any additional information or special requirements..."
                  />
                </div>

                {/* SMS Consent */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <CustomCheckbox
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-700 leading-relaxed cursor-pointer" onClick={() => handleInputChange({ target: { name: 'smsConsent', checked: !formData.smsConsent, type: 'checkbox' }})}>
                    I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from company. Message frequency varies. Message & data rates may apply. You can reply STOP to unsubscribe at any time.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="relative z-10 text-lg">SUBMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 text-lg mr-3">REQUEST QUOTE</span>
                        <div className="relative z-10 flex items-center">
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Links */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    <Link href="#" className="text-[var(--primary-color)] hover:underline">Privacy Policy</Link> | <Link href="#" className="text-[var(--primary-color)] hover:underline">Terms of Service</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}