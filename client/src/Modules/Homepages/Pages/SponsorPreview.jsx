import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SponsorPreview = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const truncate = (text, words = 4) => {
        const parts = text.split(" ");
        return parts.length <= words ? text : parts.slice(0, words).join(" ") + "...";
    };
    const programs = [
        {
            title: "Exam Success Program",
            shortLine: "Supporting students with effective exam preparation and guidance."
        },
        {
            title: "Career Assessment & Guidance",
            shortLine: "Helping students identify the right career path through assessment and mentoring."
        },
        {
            title: "Summer Youth Empowerment",
            shortLine: "Skill development and leadership training programs for youth."
        }
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-24 font-sans relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#f2bc1c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#002d4b]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-end">

                    {/* ── Left: Content ── */}
                    <div className="space-y-8">

                        {/* Label + Heading + Description */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#002d4b]/5 text-[#002d4b] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#002d4b]/10">
                                <ShieldCheck size={14} className="text-[#d4a017]" />
                                Upcoming Initiatives
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight mb-6">
                                Make an Impact with <br />
                                <span className="text-[#d4a017]">BM Foundation</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                Support our upcoming initiatives focused on education, career guidance, and youth empowerment. Your contribution helps us organize impactful programs that create real opportunities for students and young leaders.
                            </p>
                        </div>

                        {/* Program Cards */}
                        <div className="flex flex-col gap-4">
                            {programs.map((prog, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                                    className="group flex flex-col gap-2 p-5 rounded-2xl border border-gray-100 hover:border-[#002d4b]/20 hover:shadow-[0_8px_30px_rgba(0,45,75,0.06)] bg-white transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="font-bold text-[#002d4b] text-base leading-snug">
                                            {prog.title}
                                        </h4>
                                        <div className={`mt-1 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${expandedCard === idx ? "bg-[#002d4b]" : "bg-gray-50 group-hover:bg-[#002d4b]"}`}>
                                            <ArrowUpRight
                                                size={15}
                                                className={`transition-all duration-300 ${expandedCard === idx ? "text-white rotate-180" : "text-[#d4a017] group-hover:text-white"}`}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed transition-all duration-300">
                                        {expandedCard === idx ? prog.shortLine : truncate(prog.shortLine)}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                            <Link
                                to="/sponsor"
                                className="inline-flex items-center gap-2 bg-[#002d4b] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#001f35] transition-all shadow-xl hover:shadow-[#002d4b]/20 active:scale-95 group cursor-pointer whitespace-nowrap"
                            >
                                Donate &amp; Support Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* ── Right: Navy Blue Card ── */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, rotate: 2 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#002d4b] p-8 md:p-12 rounded-[40px] text-white shadow-2xl relative z-10 overflow-hidden border-t-8 border-[#d4a017]"
                        >
                            {/* Decorative blobs */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute top-0 left-0 w-24 h-24 bg-[#d4a017]/10 rounded-full blur-2xl pointer-events-none" />

                            {/* 1. Heading */}
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                                அறம் செய விரும்பு –{" "}
                                <span className="text-[#d4a017]">Give with Purpose. Create Real Impact</span>
                            </h3>

                            {/* 2. Description */}
                            <div className="space-y-6 mb-10 text-blue-100/80">
                                <p className="text-base leading-relaxed font-medium">
                                    Join BM Foundation in supporting impactful grassroots initiatives across Puducherry and Tamil Nadu. Your contribution helps us organize education programs, career guidance sessions, and youth empowerment initiatives that create meaningful opportunities for the next generation.
                                </p>

                                {/* 3. Key Points */}
                                <div className="flex items-center gap-10">
                                    <div>
                                        <p className="text-[#d4a017] text-2xl font-bold">100%</p>
                                        <p className="text-xs uppercase tracking-widest font-bold opacity-60">Goes to Program</p>
                                    </div>
                                    <div className="w-px h-10 bg-white/20" />
                                    <div>
                                        <p className="text-[#d4a017] text-2xl font-bold">Real-time</p>
                                        <p className="text-xs uppercase tracking-widest font-bold opacity-60">Impact Tracking</p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Progress Bar Area */}
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-sm font-bold text-[#d4a017] uppercase tracking-wider mb-3">
                                    Ongoing Goal
                                </p>
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-xl font-bold">6-Month Impact Programs</span>
                                    <span className="text-xs opacity-60">Goal: ₹4.25 Lakhs</span>
                                </div>
                                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                    <div className="w-[30%] h-full bg-[#d4a017] rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating verified badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                    <p className="text-[#002d4b] font-bold">Audited &amp; Verified</p>
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
