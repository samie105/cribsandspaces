"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { useContactModal } from "../hooks/useContactModal";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { isOpen, openModal, closeModal } = useContactModal();

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Are you insured?",
      answer: "Yes, we are fully insured."
    },
    {
      question: "What is included in your standard Cleaning?",
      answer: "We clean bedrooms, bathrooms, kitchen, living room, etc. We vacuum & clean the floor. We dust, wipe & wash."
    },
    {
      question: "How long will it take to clean my home?",
      answer: "The most asked question out there! It's no surprise! But, unfortunately there's no set time limit. We like to take our time and pride ourselves on the quality of our work - so while we would be able to give you a baseline average number, we don't want to be held to that. We want the work to speak for itself. Depending on the size of the home and the amount of work required to clean, it will vary greatly. If you find us still scrubbing baseboards at 10pm, don't hesitate to ask us to leave."
    },
    {
      question: "What about my Laundry?",
      answer: "You can request a laundry service, please contact us for more details."
    },
    {
      question: "What is the cost of cleaning?",
      answer: "You can use our free quote service on the front page of the website or our app."
    },
    {
      question: "Do you do background checks on your cleaners?",
      answer: "We do a background checks on every single independent contractor which consists of a DBS background check."
    },
    {
      question: "What happens if a customer is not satisfied?",
      answer: "We have an AMAZING redo policy! If you are not completely satisfied - we'll come back and redo any missed spots/areas completely free of charge, whenever you want!"
    },
    {
      question: "How many cleaners are used?",
      answer: "This depends on the size of your house."
    },
    {
      question: "Do your cleaners bring their own cleaning equipment?",
      answer: "We use your equipment and chemicals as you know what your house smells like and what is safe. So please leave out what you would like us to use."
    },
    {
      question: "Does somebody have to be at home?",
      answer: "No, if you have a security or alarm system then please inform us of the codes."
    },
    {
      question: "I have pets is that ok?",
      answer: "Of course, please inform us of the animal and make sure its in a safe place on our visit."
    },
    {
      question: "Can I book a Bi-Weekly/Monthly/Weekly cleaning just for the discount but get a one-time cleaning using the frequency discount and cancel the service?",
      answer: "No, those discounts are strictly for frequency cleanings - Bi-Weekly, Monthly or Weekly - if you cancel after the 1st service, the difference from the discount you received will be applied (you will be charged) towards your initial balance and it will be treated as a one-time cleaning.You may cancel or switch after 3 cleanings. We don't want anyone to take advantage of the deals we offer to our loyal customers!"
    },
    {
      question: "Payments",
      answer: "All payments are covered on line."
    },
    {
      question: "Cancellations?",
      answer: "You can make a cancellation up to 24 hours before the bookings."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'MonteCarlo, cursive' }}>
                <span className="text-[var(--primary-color)]">Frequently</span> Asked Questions
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about our professional cleaning services
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                  openItems.includes(index) ? 'rotate-45' : ''
                }`}>
                  <svg
                    className="w-3 h-3 text-[var(--primary-color)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={openModal}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
