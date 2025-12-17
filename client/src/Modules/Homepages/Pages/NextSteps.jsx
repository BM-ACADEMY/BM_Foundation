import React from 'react';
import { FaWhatsapp, FaBoxOpen, FaRocket } from 'react-icons/fa';

const NextSteps = () => {
  const steps = [
    {
      title: "WhatsApp Contact",
      description: "Namma team WhatsApp-la contact pannuvanga (48 hours-ku ullae)",
      icon: <FaWhatsapp className="w-8 h-8 text-[#d4a017]" />
    },
    {
      title: "Onboarding Kit",
      description: "Onboarding kit, welcome call, upcoming events info ellam kudukkalaam",
      icon: <FaBoxOpen className="w-8 h-8 text-[#d4a017]" />
    },
    {
      title: "Start Your Journey",
      description: "Nalla vibes, no pressure – unga pace-le start pannunga!",
      icon: <FaRocket className="w-8 h-8 text-[#d4a017]" />
    }
  ];

  return (
    <section className="bg-[#fcfcfc] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Updated Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002d4b] leading-tight">
            Empowering your journey through clarity, support, and <br className="hidden md:block" />
            <span className="text-[#d4a017]">Next Steps</span> After Enrollment
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 mt-6 text-lg">
            Your journey with BM Foundation starts here. We make sure you have everything you need to succeed.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              // 1. ADD 'group' and 'hover:bg-[#002d4b]'
              className="group bg-white hover:bg-[#002d4b] p-10 rounded-sm border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon Container - Stays white on hover */}
              <div className="w-20 h-20 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center mb-8 shadow-inner transition-colors">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              {/* 2. ADD 'group-hover:text-white' */}
              <h3 className="text-xl font-bold text-[#002d4b] group-hover:text-white mb-4 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              {/* 3. ADD 'group-hover:text-blue-50' */}
              <p className="text-gray-500 group-hover:text-blue-50 leading-relaxed transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
