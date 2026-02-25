import React, { useState } from "react";
import { motion } from "framer-motion";
import { Landmark, QrCode, ShieldCheck, Info, Copy, CheckCircle2, Send, MessageCircle } from "lucide-react";

const ContributionSection = () => {
    const [copiedField, setCopiedField] = useState(null);

    // Helper function to copy text to clipboard
    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans">
            <div className="max-w-4xl mx-auto">
                
                {/* 1. Section Header */}
                <div className="text-center mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <ShieldCheck size={16} />
                        Secure Contribution
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#002d4b] mb-4"
                    >
                        Support the <span className="text-[#d4a017]">Mission</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-600"
                    >
                        Your contribution directly funds grassroots youth development and community welfare across Tamil Nadu.
                    </motion.p>
                </div>

                {/* 2. Combined Secure Payment & Next Step Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                >
                    {/* Bank Details Header */}
                    <div className="bg-[#002d4b] px-8 py-5 flex items-center gap-3">
                        <Landmark className="text-[#d4a017]" size={24} />
                        <h3 className="text-xl font-bold text-white tracking-wide">Official Bank Details</h3>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* A. Bank Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account Name</p>
                                <p className="text-lg font-bold text-[#002d4b]">BM FOUNDATION</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Branch</p>
                                <p className="text-lg font-bold text-[#002d4b]">LAWSPET</p>
                            </div>
                            
                            {/* Account Number with Copy Button */}
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account Number</p>
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-mono font-bold text-[#002d4b] tracking-wider">926020006701771</p>
                                    <button 
                                        onClick={() => handleCopy('12345678901234', 'acc')}
                                        className="text-gray-400 hover:text-[#d4a017] transition-colors"
                                        title="Copy Account Number"
                                    >
                                        {copiedField === 'acc' ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* IFSC with Copy Button */}
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">IFSC Code</p>
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-mono font-bold text-[#002d4b] tracking-wider">UTIB0006345</p>
                                    <button 
                                        onClick={() => handleCopy('BANK0001234', 'ifsc')}
                                        className="text-gray-400 hover:text-[#d4a017] transition-colors"
                                        title="Copy IFSC Code"
                                    >
                                        {copiedField === 'ifsc' ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative flex py-5 items-center mb-8">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                <QrCode size={16} /> Or Scan to Pay
                            </span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        {/* B. Centered QR Code Area */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-6 p-2">
                                <span className="text-gray-400 font-medium text-sm">Place QR Image Here</span>
                            </div>

                            <p className="text-[#002d4b] font-bold text-lg mb-2">
                                UPI ID: <span className="font-mono text-[#d4a017]">bmfoundation@upi</span>
                            </p>

                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg mt-2 mb-10">
                                <CheckCircle2 size={16} className="text-green-600" />
                                After payment, share confirmation to receive official 80G receipt.
                            </div>
                        </div>

                        {/* C. Next Step Section (Inside the same card) */}
                        {/* Removed border-l-4 and border-l-[#002d4b] from className below */}
                        <div className="mt-4 bg-gray-50/50 rounded-xl border border-gray-100 p-8 md:p-10 text-center">
                            {/* Icon Header */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-green-50 p-4 rounded-full border border-green-100">
                                    <CheckCircle2 className="text-green-600 w-8 h-8" />
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
                            
                            <p className="text-gray-500 text-sm mb-8 bg-white inline-block px-4 py-2 rounded-md border border-gray-200 shadow-sm">
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
                    </div>
                </motion.div>

                {/* 3. Voluntary Contribution Policy Box (Moved to bottom) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 bg-orange-50 border-l-4 border-[#d4a017] p-6 rounded-r-lg flex items-start gap-4 shadow-sm"
                >
                    <Info className="text-[#d4a017] shrink-0 mt-0.5" size={24} />
                    <div>
                        <h4 className="text-[#002d4b] font-bold text-lg mb-1">Voluntary Contribution Policy</h4>
                        <p className="text-gray-700 leading-relaxed">
                            All programs conducted by BM Foundation are entirely free for beneficiaries. Voluntary contributions are deeply appreciated to sustain our efforts, but they are never mandatory.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContributionSection;