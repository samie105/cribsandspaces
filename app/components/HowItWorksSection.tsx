"use client";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Setup Account",
      description: "We create your account and you gain access to your dedicated account manager."
    },
    {
      id: 2,
      title: "Book Deliveries",
      description: "Book collections and deliveries until 3:30pm the day before, or same-day subject to availability."
    },
    {
      id: 3,
      title: "Quality Delivered",
      description: "Premium quality linen delivered in 90-minute slots, including same-day deliveries for both contract and one-off hires."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[var(--text-dark)] mb-4" style={{ fontFamily: 'var(--font-montecarlo), cursive' }}>
                How It <span className="text-[var(--primary-color)]">Works</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
              </div>
              <p className="text-lg text-[var(--text-light)] font-light leading-relaxed max-w-2xl mx-auto">
                Simple, streamlined process designed for busy property managers and hosts
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Process Flow */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-18 left-0 right-0 h-px bg-gray-200 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary-color)]/40 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">

                {/* Step Content */}
                <div className="text-center lg:pt-12">
                  {/* Step Number & Title */}
                  <div className="mb-4">
                    <span className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold text-lg rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      {step.id}
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                  </div>                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
                
                {/* Mobile Arrow - Only between steps */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}