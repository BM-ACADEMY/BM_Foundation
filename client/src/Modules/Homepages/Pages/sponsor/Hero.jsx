import React from "react";
import { motion } from "framer-motion";
import { MoveRight, CalendarDays, Target, ArrowUpRight } from "lucide-react";
import bgImage from "../../../../assets/bm foundation.jpg.jpeg";

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
        <section className="relative overflow-hidden py-20 lg:py-32 px-6 lg:px-24 font-sans bg-black">
            {/* Background Banner Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                {/* Dark overlay to make white text readable */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* LEFT COLUMN: Main Typography & CTAs */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start"
                >
                    <motion.div variants={itemVariants} className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-8 border border-white/20 flex items-center gap-2 backdrop-blur-md">
                        <Target size={16} className="text-[#d4a017]" />
                        Sponsorship Portal
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] mb-8">
                        BM Foundation – <br />
                        <span className="text-[#d4a017] block mt-2 drop-shadow-lg">Cares for Education.</span>
                        <span className="block mt-2 drop-shadow-lg">Cares for Society.</span>
                        <span className="block mt-2 drop-shadow-lg">Cares for Justice.</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
                        <button className="bg-[#f2bc1c] hover:bg-[#b8860b] text-[#002d4b] px-8 py-4 rounded-md font-bold text-lg shadow-[0_0_15px_rgba(212,160,23,0.4)] transition-all flex items-center gap-3 group">
                            Become a Sponsor
                            <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center gap-3 group backdrop-blur-sm">
                            Support a Program
                            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>

                

            </div>
        </section>
    );
};

export default Hero;