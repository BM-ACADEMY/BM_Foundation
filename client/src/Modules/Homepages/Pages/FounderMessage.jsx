import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const FounderMessageCentered = () => {
    // Animation variants for reusability
    const fadeInVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
        })
    };

    return (
        <section id="about" style={{ scrollMarginTop: "100px" }} className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                
                {/* 1. Header & English Subtitle */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeInVariant}
                    className="flex flex-col items-center mb-10 w-full"
                >
                    <div className="px-4 py-1.5 bg-blue-50 text-[#002d4b] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-100">
                        Founder's Vision
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002d4b] leading-tight mb-4 w-full">
                        Founder’s Message – <span className="text-[#d4a017]">Building Responsible Youth Leadership</span>
                    </h1>

                    <p className="text-xl font-semibold text-gray-700 italic">
                        "Leadership begins with responsibility."
                    </p>
                </motion.div>

                {/* 2. Tamil Quote - Added Scale and Fade effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-14 w-full max-w-6xl mx-auto"
                >
                    <div className="bg-[#002d4b] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center text-center w-full border-b-4 border-[#d4a017]">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Tiro_Tamil',_serif] text-[#d4a017] font-bold mb-3 tracking-wide leading-tight block w-full">
                            "நாட்டை மாற்ற வேண்டும் என்றால்,
                        </h2>
                        <p className="text-xl md:text-2xl font-['Tiro_Tamil',_serif] text-gray-200 tracking-wide block w-full">
                            முதலில் இளைஞர்களை மாற்ற வேண்டும்."
                        </p>
                    </div>
                </motion.div>

                {/* 3. Main Content - Staggered Slide Up */}
                <div className="flex flex-col items-center max-w-4xl">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10 text-center"
                    >
                        <motion.p custom={1} variants={fadeInVariant}>
                            BM Foundation was created with a clear belief — <span className="text-[#002d4b] font-bold">real change begins with responsible youth</span>. Our mission is to guide young individuals in Puducherry and across Tamil Nadu towards leadership, discipline, and community service.
                        </motion.p>
                        
                        <motion.p custom={2} variants={fadeInVariant}>
                            We believe that when youth take responsibility for their actions, communities become stronger, more united, and more progressive. Through structured volunteering, leadership initiatives, and grassroots programs, BM Foundation is nurturing a generation that values integrity, service, and impact.
                        </motion.p>
                        
                        <motion.p custom={3} variants={fadeInVariant}>
                            Our founder envisions a society where young people are not just participants but leaders — committed to social development, civic responsibility, and nation-building.
                        </motion.p>
                        
                        <motion.div 
                            custom={4} 
                            variants={fadeInVariant}
                            className="p-6 bg-orange-50 border-t-4 border-[#d4a017] rounded-b-md shadow-sm mt-8 max-w-2xl mx-auto"
                        >
                            <p className="text-[#002d4b] font-bold italic text-center">
                                At BM Foundation, leadership is not about position — it is about responsibility, action, and service.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/license" className="inline-flex">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#002d4b] hover:bg-[#001f35] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-all flex items-center gap-3 group"
                            >
                                <span>Join the Responsible Generation</span>
                                <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default FounderMessageCentered;