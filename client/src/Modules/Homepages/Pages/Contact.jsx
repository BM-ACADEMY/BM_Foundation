import React from "react";
import { Phone, MapPin, Smartphone, Building2, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We’re always ready to listen and help. Reach out to BM Foundation anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">

            {/* FOUNDATION CARD */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-[#f26522]">
                  <User size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    BM Foundation
                  </h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-orange-100 text-[#f26522] text-xs font-bold uppercase tracking-wider rounded-full">
                    Kottakuppam
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Working for community upliftment through education, health,
                public awareness, food support, job guidance, and disaster relief.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 space-y-8">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-lg text-[#f26522]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Office Address
                  </h4>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    No.252, 2nd Floor,<br />
                    M.G. Road, Kottakuppam,<br />
                    Puducherry – 605104
                  </p>
                </div>
              </div>

              {/* OFFICE PHONE */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-lg text-[#f26522]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Office Phone
                  </h4>
                  <a
                    href="tel:1234567890"
                    className="text-slate-800 font-medium text-lg hover:text-[#f26522] transition"
                  >
                    12345 67890
                  </a>
                </div>
              </div>

              {/* MOBILE */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-lg text-[#f26522]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Direct Mobile
                  </h4>
                  <a
                    href="tel:+919843048384"
                    className="text-slate-800 font-medium text-lg hover:text-[#f26522] transition"
                  >
                    +91 98430 48384
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN — MAP */}
          <div className="lg:col-span-3 min-h-[450px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                title="BM Foundation Location"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7420.129808273369!2d79.82649217416686!3d11.961234618581182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53636a1752dc05%3A0xaa5795ccc1815bf7!2sBM%20Academy!5e0!3m2!1sen!2sin!4v1765891902420"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
