import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import FounderImg from "../../../assets/bm2.png";

const FounderMessageSplit = () => {
    // Animation variants for horizontal sliding
    const slideRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" style={{ scrollMarginTop: "100px" }} className="bg-[#fcfcfc] py-24 px-6 lg:px-16 xl:px-24 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* LEFT COLUMN: Image Area */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideRight}
                        className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d4a017]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#002d4b]/10 rounded-full blur-2xl"></div>

                        {/* Main Image Frame */}
                        <div className="relative bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 z-10">
                            <div className="rounded-xl overflow-hidden relative aspect-[4/5] bg-gray-100">
                                <img
                                    src={FounderImg}
                                    alt="BM Foundation Founder"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Overlay gradient for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002d4b]/60 via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Floating Quote Badge overlapping the image */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#002d4b] rounded-lg p-4 shadow-xl border-b-4 border-[#d4a017]">
                                <p className="text-sm md:text-base font-semibold text-white text-center italic">
                                    "Leadership begins with responsibility."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Content Area */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideLeft}
                        className="lg:col-span-7 flex flex-col pt-8 lg:pt-0"
                    >
                        {/* Header Section */}
                        <motion.div variants={itemVariant} className="mb-8">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#002d4b] rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-100">
                                Founder's Vision
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002d4b] leading-tight">
                                Founder’s Message <br className="hidden lg:block" />
                                <span className="text-[#d4a017] text-2xl md:text-3xl lg:text-4xl block mt-2">Building Responsible Youth Leadership</span>
                            </h1>
                        </motion.div>

                        {/* Tamil Quote Blockquote style */}
                        <motion.div variants={itemVariant} className="mb-8 border-l-4 border-[#d4a017] pl-6 py-2 bg-gradient-to-r from-orange-50 to-transparent">
                            <h2 className="text-2xl md:text-3xl font-['Tiro_Tamil',_serif] text-[#002d4b] font-bold mb-2 tracking-wide">
                                "நாட்டை மாற்ற வேண்டும் என்றால்,
                            </h2>
                            <p className="text-lg md:text-xl font-['Tiro_Tamil',_serif] text-gray-700 tracking-wide">
                                முதலில் இளைஞர்களை மாற்ற வேண்டும்."
                            </p>
                        </motion.div>

                        {/* Paragraphs */}
                        <div className="space-y-5 text-gray-600 leading-relaxed text-lg mb-10">
                            <motion.p variants={itemVariant}>
                                BM Foundation was created with a clear belief — <span className="text-[#002d4b] font-bold">real change begins with responsible youth</span>. Our mission is to guide young individuals in Puducherry and across Tamil Nadu towards leadership, discipline, and community service.
                            </motion.p>
                            
                            <motion.p variants={itemVariant}>
                                We believe that when youth take responsibility for their actions, communities become stronger, more united, and more progressive. Through structured volunteering, leadership initiatives, and grassroots programs, BM Foundation is nurturing a generation that values integrity, service, and impact.
                            </motion.p>
                            
                            <motion.p variants={itemVariant}>
                                Our founder envisions a society where young people are not just participants but leaders — committed to social development, civic responsibility, and nation-building.
                            </motion.p>
                        </div>

                        {/* Highlighted Closing Statement & Button */}
                        <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <Link to="/license" className="shrink-0">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="bg-[#002d4b] hover:bg-[#001f35] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-all flex items-center gap-3 group"
                                >
                                    <span>Join Us</span>
                                    <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            
                            <p className="text-[#002d4b] font-bold italic text-sm md:text-base border-l-2 border-gray-200 pl-4">
                                Leadership is not about position — it is about responsibility, action, and service.
                            </p>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FounderMessageSplit;