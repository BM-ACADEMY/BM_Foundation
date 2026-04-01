import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, Headphones, ExternalLink } from "lucide-react";

const SupportWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contactOptions = [
        // {
        //     name: "Call Office",
        //     icon: Phone,
        //     value: "0413-2234567",
        //     link: "tel:04132234567",
        //     color: "bg-blue-50 text-blue-600"
        // },
        {
            name: "WhatsApp Support",
            icon: MessageCircle,
            value: "+91 98430 48384",
            link: "https://wa.me/919843048384",
            color: "bg-green-50 text-green-600"
        },
        {
            name: "Email Us",
            icon: Mail,
            value: "admin@abmgroups.org",
            link: "mailto:admin@abmgroups.org",
            color: "bg-red-50 text-red-600"
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
            
            {/* Pop-up Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 w-[320px] mb-2 pointer-events-auto"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#002d4b] text-white rounded-xl flex items-center justify-center">
                                    <Headphones size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#002d4b]">Live Support</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-green-500 font-bold">Online Now</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            How can we help you today? Reach out to us through any of the following channels:
                        </p>

                        <div className="space-y-3">
                            {contactOptions.map((option, idx) => (
                                <a 
                                    key={idx}
                                    href={option.link}
                                    target={option.link.startsWith("http") ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <option.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{option.name}</p>
                                            <p className="text-sm font-bold text-[#002d4b]">{option.value}</p>
                                        </div>
                                    </div>
                                    <ExternalLink size={14} className="text-gray-300 group-hover:text-[#d4a017] transition-colors" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-100">
                           <p className="text-[10px] text-center text-gray-400 uppercase tracking-[0.2em] font-bold">
                               BM Foundation Service Desk
                           </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button 
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 pointer-events-auto group cursor-pointer ${
                    isOpen ? "bg-[#d4a017] text-white rotate-90" : "bg-[#002d4b] text-white"
                }`}
            >
                {isOpen ? <X size={28} /> : (
                    <div className="relative">
                        <Headphones size={28} />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#002d4b] rounded-full animate-pulse"></span>
                    </div>
                )}
            </motion.button>
            
        </div>
    );
};

export default SupportWidget;
