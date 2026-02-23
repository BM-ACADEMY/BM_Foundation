import React from "react";
import { motion } from "framer-motion";
import { Globe, Tent, Mic, Handshake, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

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

    // Animation variants for staggered grid loading
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Intro Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#002d4b] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-100">
                        Our Future
                    </div>
                    
                    {/* UPDATED HEADING: Single Line */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002d4b] leading-tight mb-6">
                        Vision 2026 – <span className="text-[#d4a017]">Empowering Youth Across Districts</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        By 2026, BM Foundation aims to expand its impact across multiple districts through structured youth development programs, leadership training, and organized volunteer systems. Our vision is to build a strong network of responsible youth leaders who actively contribute to community growth and social transformation.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
                >
                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-[#002d4b] p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group overflow-hidden border border-[#002d4b]/80"
                        >
                            {/* Decorative background glow on hover */}
                            <div className="absolute -inset-24 bg-gradient-to-br from-[#d4a017]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-3xl" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-white pr-4 leading-tight">
                                        {point.title}
                                    </h3>
                                    <div className="p-3 bg-[#ffffff]/10 rounded-xl shrink-0">
                                        <point.icon className="text-[#d4a017]" size={28} />
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed mt-auto">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing Section & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center flex flex-col items-center"
                >
                    <div className="p-6 bg-orange-50 border-l-4 border-r-4 border-[#d4a017] rounded-md shadow-sm mb-10">
                        <p className="text-[#002d4b] font-semibold text-lg italic leading-relaxed">
                            Vision 2026 moolama, BM Foundation responsible youth leaders ah build panna committed ah irukku. Structured volunteer system moolama grassroots level la real impact create panni, Tamil Nadu la meaningful change kondu varuvadhu namma goal.
                        </p>
                    </div>

                    <Link to="/join">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#d4a017] hover:bg-[#b58812] text-[#002d4b] px-10 py-4 rounded-md font-bold text-lg shadow-lg transition-all flex items-center gap-3 group"
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