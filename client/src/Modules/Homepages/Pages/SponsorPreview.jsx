import React from "react";
import { motion } from "framer-motion";
import { Heart, Globe, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SponsorPreview = () => {
    const impactAreas = [
        {
            title: "Cares for Education",
            desc: "Supporting underprivileged students with exam prep, materials, and guidance.",
            icon: GraduationCap,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Cares for Society",
            desc: "Organizing medical camps and providing essential food support to those in need.",
            icon: Heart,
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            title: "Cares for Justice",
            desc: "Empowering youth and women through awareness and leadership programs.",
            icon: Globe,
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-24 font-sans relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2bc1c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#002d4b]/5 text-[#002d4b] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#002d4b]/10">
                                <ShieldCheck size={14} className="text-[#d4a017]" />
                                Transparent Philanthropy
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight mb-6">
                                Make an Impact with <br />
                                <span className="text-[#d4a017]">BM Foundation</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                Your contribution directly funds our grassroots initiatives. From sponsoring a student's education to providing life-saving medical aid, every rupee brings meaningful change.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {impactAreas.map((area, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                                >
                                    <div className={`w-12 h-12 ${area.bg} ${area.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <area.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#002d4b] mb-1">{area.title}</h4>
                                        <p className="text-sm text-gray-500">{area.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link to="/sponsor" className="inline-flex items-center gap-2 bg-[#002d4b] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#001f35] transition-all shadow-xl hover:shadow-[#002d4b]/20 active:scale-95 group cursor-pointer">
                                Donate & Support Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Modern Card Preview */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, rotate: 2 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            className="bg-[#002d4b] p-8 md:p-12 rounded-[40px] text-white shadow-2xl relative z-10 overflow-hidden border-t-8 border-[#d4a017]"
                        >
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 italic leading-snug">
                                "அறம் செய்ய விரும்பு – <br />
                                <span className="text-[#d4a017] not-italic">Desire to do Charity."</span>
                            </h3>
                            
                            <div className="space-y-6 mb-10 text-blue-100/80">
                                <p className="text-lg leading-relaxed font-medium">
                                    Join us in our mission to build a more responsible and equitable society. Your sponsorship is handled with 100% financial transparency.
                                </p>
                                <div className="flex items-center gap-10">
                                    <div>
                                        <p className="text-[#d4a017] text-2xl font-bold">100%</p>
                                        <p className="text-xs uppercase tracking-widest font-bold opacity-60">Goes to Program</p>
                                    </div>
                                    <div className="w-px h-10 bg-white/20"></div>
                                    <div>
                                        <p className="text-[#d4a017] text-2xl font-bold">Real-time</p>
                                        <p className="text-xs uppercase tracking-widest font-bold opacity-60">Impact Tracking</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-sm font-bold text-[#d4a017] uppercase tracking-wider mb-2">Ongoing Goal</p>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xl font-bold">6-Month Prospectus</span>
                                    <span className="text-xs opacity-60">₹ 4.25 Lakhs Goal</span>
                                </div>
                                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                    <div className="w-[30%] h-full bg-[#d4a017]"></div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Smaller Floating Cards */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                    <p className="text-[#002d4b] font-bold">Audited & Verified</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SponsorPreview;
