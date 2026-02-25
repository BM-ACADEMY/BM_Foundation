import React from "react";
import { MessageCircle, CheckCircle } from "lucide-react";

const NextStep = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 px-4 font-sans">
      {/* Changed max-w-3xl to max-w-4xl to match the width of the above components */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-[#002d4b] p-8 md:p-10 text-center">
        
        {/* Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-50 p-4 rounded-full border border-green-100">
            <CheckCircle className="text-green-600 w-8 h-8" />
          </div>
        </div>
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#002d4b] mb-4">
          Next Step: Share Your Payment Confirmation
        </h2>
        
        {/* Supporting Content */}
        <p className="text-gray-600 text-lg leading-relaxed mb-3">
          After completing your contribution, please send your payment confirmation screenshot via WhatsApp to receive an official acknowledgment and 80G receipt.
        </p>
        
        <p className="text-gray-500 text-sm mb-8 bg-gray-50 inline-block px-4 py-2 rounded-md border border-gray-100">
          Our team will verify and confirm your contribution within 24–48 hours.
        </p>
        
        {/* CTA Button */}
        <div>
          <a
            href="https://wa.me/918056889971" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span>
              Send Your Confirmation Screenshot on WhatsApp <br className="md:hidden" />
              <span className="font-normal opacity-90 block md:inline md:ml-1">
                (+91 80568 89971)
              </span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default NextStep;