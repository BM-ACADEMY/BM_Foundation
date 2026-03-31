import React from "react";
import { motion } from "framer-motion";
import { QrCode, ShieldCheck, Info, CheckCircle2, MessageCircle } from "lucide-react";
import qrImage from "../../../../assets/qr/qr.png";

const ContributionSection = () => {
    return (
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans selection:bg-blue-100">
            <div className="max-w-5xl mx-auto">
                
                {/* 1. Section Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
                    >
                        <ShieldCheck size={14} />
                        Secure Contribution
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-[#002d4b] mb-4 tracking-tight"
                    >
                        Support the <span className="text-[#d4a017]">Mission</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Your contribution directly funds grassroots youth development and community welfare across Tamil Nadu.
                    </motion.p>
                </div>

                {/* 2. Main Card Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-12 items-stretch">
                        
                        {/* LEFT SIDE: QR / Merchant Details */}
                        <div className="lg:col-span-5 bg-gray-50/50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                            <div className="flex flex-col items-center">
                                {/* Axis Bank Branded QR Frame */}
                                <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
                                    <div className="bg-[#9e0a4f] px-5 py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-white transform rotate-45 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-[#9e0a4f]"></div>
                                            </div>
                                            <span className="text-white font-bold text-[10px] tracking-widest">AXIS BANK</span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 text-center">
                                        <h4 className="text-[#002d4b] text-sm font-bold mb-1">Open a world of</h4>
                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-6">digital payments</p>
                                        
                                        <div className="bg-gray-50 p-4 rounded-xl inline-block border border-gray-100 mb-6">
                                            <img 
                                                src={qrImage} 
                                                alt="BM Foundation Official QR Code" 
                                                className="w-40 h-40 md:w-44 md:h-44 object-contain mix-blend-multiply"
                                            />
                                        </div>

                                        {/* Merchant Details */}
                                        <div className="text-left space-y-2.5">
                                            {[
                                                { label: "Merchant", val: "BM Foundation" },
                                                { label: "MID", val: "037349063450017" },
                                                { label: "TID", val: "88974314" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-center text-[11px] border-b border-gray-50 pb-1.5">
                                                    <span className="text-gray-400 font-medium">{item.label}</span>
                                                    <span className="text-[#002d4b] font-bold">{item.val}</span>
                                                </div>
                                            ))}
                                            <div className="pt-1 text-[10px] text-gray-400 text-center leading-tight">
                                                Helpdesk: 18602332332 / 022-40426060
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[11px] text-blue-600 font-semibold bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                    <CheckCircle2 size={14} className="text-blue-500" />
                                    <span>Instant UPI/Bank Verification</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Instructions & CTA */}
                        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-white">
                            <div className="max-w-md">
                                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-8 border border-green-100">
                                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-bold text-[#002d4b] mb-6 leading-tight">
                                    Next Step: Share Your Payment Confirmation
                                </h3>
                                
                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    After completing your contribution, please send your payment confirmation screenshot via WhatsApp to receive an official acknowledgment and 80G receipt.
                                </p>

                                <div className="bg-gray-50/80 p-4 rounded-xl border-l-4 border-green-500 mb-10">
                                    <p className="text-gray-600 text-sm italic">
                                        Our team will verify and confirm your contribution within 24–48 hours.
                                    </p>
                                </div>
                                
                                <a
                                    href="https://wa.me/918056889971" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-green-200 hover:-translate-y-1 w-full"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <div className="text-left leading-tight">
                                        <span className="block text-xs opacity-90 font-medium">Click to Message</span>
                                        <span className="text-sm md:text-base">Send Screenshot (+91 80568 89971)</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Voluntary Contribution Policy Box */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 bg-white border border-gray-100 p-8 rounded-[24px] flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm"
                >
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100">
                        <Info className="text-amber-600" size={24} />
                    </div>
                    <div>
                        <h4 className="text-[#002d4b] font-bold text-lg mb-2">Voluntary Contribution Policy</h4>
                        <p className="text-gray-500 leading-relaxed max-w-3xl">
                            All programs conducted by BM Foundation are entirely free for beneficiaries. Voluntary contributions are deeply appreciated to sustain our efforts, but they are never mandatory.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContributionSection;