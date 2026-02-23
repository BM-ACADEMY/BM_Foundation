import React from "react";
import { motion } from "framer-motion";
import { Quote, MoveRight, Award, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FounderMessage = () => {
    return (
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* ALIGNMENT FIX: items-start keeps both boxes aligned at the top */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Side: Visual/Image Element */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full"
                    >
                        {/* Decorative Background Card */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#d4a017] rounded-sm -z-10 hidden md:block" />

                        <div className="bg-[#002d4b] p-8 md:p-12 rounded-sm shadow-2xl relative w-full">
                            <Quote className="text-[#d4a017] mb-6 opacity-50" size={48} />

                            {/* TAMIL FONT STYLING: Applied custom font, bold sizing, and golden accent styling to match your reference */}
                            <h2 className="text-3xl md:text-4xl font-['Tiro_Tamil',_serif] text-white leading-[1.6] mb-8 drop-shadow-md">
                                "நாட்டை மாற்ற வேண்டும் என்றால், <br/>
                                <span className="text-[#d4a017] font-bold tracking-wide">முதலில் இளைஞர்களை மாற்ற வேண்டும்.</span>"
                            </h2>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                                <div className="w-12 h-12 rounded-full bg-[#d4a017] flex shrink-0 items-center justify-center text-[#002d4b]">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">BM Foundation</p>
                                    <p className="text-[#d4a017] text-sm uppercase tracking-widest font-semibold">Our Vision</p>
                                </div>
                            </div>

                            
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full justify-start mt-8 lg:mt-0"
                    >
                        <div className="self-start px-4 py-1.5 bg-blue-50 text-[#002d4b] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-100">
                            Founder's Vision
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002d4b] leading-tight mb-4">
                            Founder’s Message – <br />
                            <span className="text-[#d4a017]">Building Responsible Youth Leadership</span>
                        </h1>

                        <p className="text-xl font-semibold text-gray-700 mb-8 italic">
                            "Leadership begins with responsibility."
                        </p>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
                            <p>
                                BM Foundation was created with a clear belief — <span className="text-[#002d4b] font-bold">real change begins with responsible youth</span>. Our mission is to guide young individuals in Puducherry and across Tamil Nadu towards leadership, discipline, and community service.
                            </p>
                            <p>
                                We believe that when youth take responsibility for their actions, communities become stronger, more united, and more progressive. Through structured volunteering, leadership initiatives, and grassroots programs, BM Foundation is nurturing a generation that values integrity, service, and impact.
                            </p>
                            <p>
                                Our founder envisions a society where young people are not just participants but leaders — committed to social development, civic responsibility, and nation-building.
                            </p>
                            <div className="p-5 bg-orange-50 border-l-4 border-[#d4a017] rounded-r-md shadow-sm">
                                <p className="text-[#002d4b] font-bold italic">
                                    At BM Foundation, leadership is not about position — it is about responsibility, action, and service.
                                </p>
                            </div>
                        </div>

                        <Link to="/license" className="inline-flex self-start">
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

                {/* Bottom Feature Bar */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-gray-200">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-[#002d4b] shrink-0">
                            <Target size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#002d4b]">Clear Mission</h4>
                            <p className="text-sm text-gray-500 mt-1">Guiding youth towards purposeful leadership.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-50 rounded-lg text-[#d4a017] shrink-0">
                            <Users size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#002d4b]">Community First</h4>
                            <p className="text-sm text-gray-500 mt-1">Focusing on grassroots impact and service.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-50 rounded-lg text-green-700 shrink-0">
                            <Award size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#002d4b]">Integrity & Value</h4>
                            <p className="text-sm text-gray-500 mt-1">Nurturing ethical leaders for tomorrow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderMessage;