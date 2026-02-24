import React from "react";
import { motion } from "framer-motion";
import { Landmark, FileCheck, Receipt, BarChart3, Lock, ShieldCheck } from "lucide-react";

const TransparencySection = () => {
    // Animation variants for smooth, formal entry
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <section className="bg-gray-50 py-24 px-6 lg:px-24 font-sans border-y border-gray-200">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Centered Formal Header */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-2 text-[#d4a017] font-bold uppercase tracking-widest text-sm mb-4">
                        <ShieldCheck size={18} />
                        100% Financial Accountability
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight mb-6">
                        Verified. Compliant. <br className="hidden md:block" />
                        <span className="text-[#d4a017]">Transparent.</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We hold ourselves to the strictest legal and financial standards, ensuring that every contribution is secure, tax-deductible, and utilized precisely as promised.
                    </p>
                </motion.div>

                {/* 2. The Primary Authority Banner (12A & 80G) */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    className="bg-[#002d4b] rounded-2xl shadow-2xl overflow-hidden mb-12 border-t-4 border-[#d4a017]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        
                        {/* 12A Block */}
                        <div className="p-10 md:p-12 md:border-r border-white/10 relative group">
                            <div className="w-16 h-16 bg-[#ffffff10] rounded-xl flex items-center justify-center text-[#d4a017] mb-6 transition-transform group-hover:scale-105">
                                <Landmark size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">12A Registered Entity</h3>
                            <p className="text-blue-100/80 leading-relaxed font-medium">
                                Legally recognized by the Income Tax Department of India as a non-profit. This ensures all foundation income is strictly exempt and dedicated to charitable initiatives.
                            </p>
                        </div>

                        {/* 80G Block */}
                        <div className="p-10 md:p-12 relative group">
                            <div className="w-16 h-16 bg-[#ffffff10] rounded-xl flex items-center justify-center text-[#d4a017] mb-6 transition-transform group-hover:scale-105">
                                <FileCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">80G Tax Exemption</h3>
                            <p className="text-blue-100/80 leading-relaxed font-medium">
                                Maximize your philanthropic impact. All financial contributions made to BM Foundation are eligible for tax deductions under Section 80G of the Income Tax Act, 1961.
                            </p>
                        </div>

                    </div>
                </motion.div>

                {/* 3. The Three Operational Pillars */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Pillar 1 */}
                    <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#002d4b] mb-6 border border-gray-100">
                            <Receipt size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-[#002d4b] mb-3">Audit-Ready Receipts</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Official, legally valid tax receipts are issued immediately for all individual and corporate contributions for your accounting records.
                        </p>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#002d4b] mb-6 border border-gray-100">
                            <BarChart3 size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-[#002d4b] mb-3">Published Impact</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Program-wise financial and operational impact reports are published and distributed directly to our sponsors post-execution.
                        </p>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#002d4b] mb-6 border border-gray-100">
                            <Lock size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-[#002d4b] mb-3">Strict Allocation</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Funds are legally locked and utilized exclusively for charitable purposes as strictly mandated by our registered trust deed.
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default TransparencySection;