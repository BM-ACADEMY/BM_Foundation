import React from 'react';
import { FaWhatsapp, FaBoxOpen, FaRocket } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NextSteps = () => {
  const steps = [
    {
      title: "WhatsApp Contact",
      description: "Namma team WhatsApp-la 48 hours-kulla ungalai contact pannuvaanga. Unga details verify panni next steps explain pannuvaanga.",
      icon: <FaWhatsapp className="w-8 h-8 text-[#d4a017]" />
    },
    {
      title: "Onboarding Kit",
      description: "Welcome call, onboarding details, upcoming events information ellam clear-a share pannuvaanga. Unga volunteering journey smooth-a start aagum.",
      icon: <FaBoxOpen className="w-8 h-8 text-[#d4a017]" />
    },
    {
      title: "Start Your Journey",
      description: "Yedhum pressure illa. Unga pace-ku suitable-a volunteering start pannalaam. Namma team full support kudukkum.",
      icon: <FaRocket className="w-8 h-8 text-[#d4a017]" />
    }
  ];

  return (
    <section className="bg-[#fcfcfc] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Updated Header Section */}
        <div className="text-center mb-16">

          {/* 1. Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#002d4b] leading-tight mb-3">
            Next Steps After Enrollment
          </h2>

          {/* 2. Subheading */}
          <p className="text-[#d4a017] font-bold text-lg tracking-wide uppercase italic">
            Empowering your journey through clarity and support
          </p>

          {/* 3. Supporting Paragraph */}
          <p className="max-w-2xl mx-auto text-gray-500 mt-6 text-lg">
            Your journey with the BM Foundation starts here. These simple steps will guide you from onboarding to active volunteering.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-[#002d4b] p-10 rounded-sm border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon Container - Stays white on hover */}
              <div className="w-20 h-20 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center mb-8 shadow-inner transition-colors">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#002d4b] group-hover:text-white mb-4 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 group-hover:text-blue-50 leading-relaxed transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link to="/license">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#002d4b] hover:bg-[#001f35] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              Start Volunteering →
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NextSteps;