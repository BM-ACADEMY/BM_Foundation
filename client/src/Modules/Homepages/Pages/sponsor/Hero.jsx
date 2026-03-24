import React from "react";
import { motion } from "framer-motion";
import { MoveRight, CalendarDays, Target, ArrowUpRight } from "lucide-react";

const Hero = () => {
    // Staggered animation for the left column text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="bg-[#fcfcfc] relative overflow-hidden py-20 lg:py-32 px-6 lg:px-24 font-sans">
            {/* Subtle background pattern/grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* LEFT COLUMN: Main Typography & CTAs */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start"
                >
                    <motion.div variants={itemVariants} className="px-4 py-1.5 bg-blue-50 text-[#002d4b] rounded-full text-sm font-bold uppercase tracking-wider mb-8 border border-blue-100 flex items-center gap-2">
                        <Target size={16} className="text-[#d4a017]" />
                        Sponsorship Portal
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#002d4b] leading-[1.15] mb-8">
                        BM Foundation – <br />
                        <span className="text-[#d4a017] block mt-2">Cares for Education.</span>
                        <span className="block mt-2">Cares for Society.</span>
                        <span className="block mt-2">Cares for Justice.</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
                        <button className="bg-[#002d4b] hover:bg-[#001f35] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-all flex items-center gap-3 group">
                            Become a Sponsor
                            <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="bg-white border-2 border-[#002d4b] text-[#002d4b] hover:bg-blue-50 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center gap-3 group">
                            Support a Program
                            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>

                {/* RIGHT COLUMN: The "Impact Plan" Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative w-full max-w-md mx-auto lg:ml-auto"
                >
                    {/* Decorative gold square behind the card */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#d4a017] rounded-2xl opacity-50 blur-2xl"></div>
                    
                    <div className="bg-[#002d4b] rounded-3xl p-8 md:p-10 shadow-2xl relative border-t-4 border-[#d4a017] overflow-hidden">
                        {/* Internal decorative circles */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
                        
                        <div className="w-14 h-14 bg-[#ffffff15] rounded-xl flex items-center justify-center mb-8 backdrop-blur-sm">
                            <CalendarDays className="text-[#d4a017]" size={28} />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                            Structured 6-Month Social Impact Plan
                        </h2>

                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Timeline</p>
                                <p className="text-[#d4a017] font-bold text-xl">March – August 2030</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;