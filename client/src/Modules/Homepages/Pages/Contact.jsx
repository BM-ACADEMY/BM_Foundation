import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Smartphone, Building2, User, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-20 md:py-24 bg-[#fcfcfc] overflow-hidden font-sans">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
             <h2 className="text-4xl md:text-5xl font-black text-[#002d4b] mb-4 tracking-tight uppercase">
                Get in <span className="text-[#f26522]">Touch</span>
             </h2>
             <div className="h-1.5 w-24 bg-[#d4a017] mx-auto rounded-full"></div>
          </motion.div>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            We’re always ready to listen and help. Reach out to BM Foundation anytime to join our mission or seek support.
          </p>
        </div>

        {/* GRID CONTAINER - Removed 'items-start' so columns stretch to equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT COLUMN: INFO CARDS */}
          <div className="lg:col-span-2 space-y-6">

            {/* 1. FOUNDATION CARD */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="relative rounded-2xl p-8 shadow-2xl overflow-hidden text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#b38a11] via-[#1a1a1a] to-[#8b0000]"></div>

              <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-[#f2bc1c]">
                      <User size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        BM Foundation
                      </h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-[#f26522] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                        Headquarters
                      </span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed text-sm mb-4">
                    Working for community upliftment through education, health,
                    public awareness, and disaster relief.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#f2bc1c] font-bold uppercase tracking-wider">
                     <Clock size={14} /> Open: Mon - Sat (9 AM - 6 PM)
                  </div>
              </div>
            </motion.div>

            {/* 2. CONTACT DETAILS */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8"
            >
              {/* ADDRESS */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-orange-50 rounded-lg text-[#f26522] group-hover:bg-[#002d4b] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#002d4b] uppercase tracking-widest mb-1 opacity-60">
                    Office Address
                  </h4>
                  <p className="text-slate-700 leading-relaxed font-bold">
                    No.252, 2nd Floor, M.G. Road,<br />
                    Kottakuppam, Puducherry – 605104
                  </p>
                </div>
              </div>

              {/* PHONES */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-orange-50 rounded-lg text-[#f26522] group-hover:bg-[#002d4b] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#002d4b] uppercase tracking-widest mb-1 opacity-60">
                    Phone Support
                  </h4>
                  <div className="flex flex-col gap-1">
                      <a href="tel:04132234567" className="text-slate-800 font-bold hover:text-[#f26522] transition">
                        0413 - 223 4567 (Office)
                      </a>
                      <a href="tel:+919843048384" className="text-slate-800 font-bold hover:text-[#f26522] transition">
                        +91 98430 48384 (Mobile)
                      </a>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-orange-50 rounded-lg text-[#f26522] group-hover:bg-[#002d4b] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#002d4b] uppercase tracking-widest mb-1 opacity-60">
                    Email Us
                  </h4>
                  <a href="mailto:support@bmfoundation.org" className="text-slate-800 font-bold hover:text-[#f26522] transition break-all">
                    support@bmfoundation.org
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // FIX: 'h-full' allows it to stretch. 'h-[500px]' is fallback for mobile.
            className="lg:col-span-3 h-[500px] lg:h-full w-full"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <iframe
                title="BM Foundation Location"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.220163353457!2d79.81423797505963!3d11.959247088270546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616a2469d763%3A0x673193638c4c66!2sKottakuppam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
