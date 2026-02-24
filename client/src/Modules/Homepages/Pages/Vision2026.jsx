import React from "react";
import { Globe, Tent, Mic, Handshake, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Vision2026 = () => {
    const visionPoints = [
        {
            title: "District Youth Chapters",
            description: "Establishing district-level youth chapters to strengthen local leadership and create organized volunteer communities across Tamil Nadu.",
            icon: Globe,
        },
        {
            title: "Leadership Development Camps",
            description: "Conducting structured leadership training camps focused on responsibility, teamwork, discipline, and civic engagement.",
            icon: Tent,
        },
        {
            title: "Youth Summit",
            description: "Hosting annual youth summits to connect emerging leaders, social contributors, and community influencers under one platform.",
            icon: Mic,
        },
        {
            title: "Structured Volunteer System",
            description: "Developing a transparent and organized volunteer management system to ensure effective community service and measurable impact.",
            icon: Handshake,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Intro Section - Updated with Full Content */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mb-16 w-full text-center"
                >
                    <div className="flex justify-center w-full mb-6">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#002d4b] rounded-full text-sm font-bold uppercase tracking-wider border border-blue-100">
                            Our Future
                        </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#002d4b] mb-6">
                        Vision 2026 – <span className="text-[#d4a017]">Empowering Youth Across Districts</span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-600 leading-[1.8] max-w-4xl mx-auto text-center">
                        By 2026, BM Foundation aims to expand its impact across multiple districts through structured youth development programs, leadership training, and organized volunteer systems. Our vision is to build a strong network of responsible youth leaders who actively contribute to community growth and social transformation.
                    </p>
                </motion.div>

                {/* 2. GRID CARDS - Alignment Fixed */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-[#002d4b] hover:bg-[#001f35] border border-[#002d4b] hover:border-[#d4a017] rounded-2xl p-8 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 group h-full"
                        >
                            <div className="w-16 h-16 bg-[#ffffff]/10 group-hover:bg-[#d4a017] rounded-full flex items-center justify-center mb-6 shrink-0 transition-colors duration-300">
                                <point.icon className="text-[#d4a017] group-hover:text-[#002d4b] transition-colors duration-300" size={32} />
                            </div>
                            
                            <div className="min-h-[60px] flex items-center justify-center w-full mb-4">
                                <h3 className="text-lg font-bold text-white leading-tight">
                                    {point.title}
                                </h3>
                            </div>

                            {/* Text starts from the same alignment (Left Aligned) */}
                            <div className="w-full text-left">
                                <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-200 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 3. Closing Section & CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center flex flex-col items-center"
                >
                    <div className="p-8 bg-orange-50 border-x-4 border-[#d4a017] rounded-md shadow-sm mb-10">
                        <p className="text-[#002d4b] font-semibold text-lg md:text-xl italic leading-relaxed">
                            "Vision 2026 moolama, BM Foundation responsible youth leaders ah build panna committed ah irukku. Structured volunteer system moolama grassroots level la real impact create panni, Tamil Nadu la meaningful change kondu varuvadhu namma goal."
                        </p>
                    </div>

                    <Link to="/join">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#d4a017] hover:bg-[#b58812] text-[#002d4b] px-10 py-4 rounded-md font-bold text-lg shadow-lg flex items-center gap-3 group"
                        >
                            <span>Be Part of the Vision</span>
                            <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Vision2026;