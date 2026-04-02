import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Calendar, MapPin, X, ArrowUpRight, CheckCircle2 } from "lucide-react";

const ImpactPlan = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    // New Data Structure based on User Request
    const programs = [
        {
            id: 1,
            title: "Exam Success Program",
            shortLine: "Supporting students with effective exam preparation and guidance.",
            subheading: "Student Exam Preparation & Guidance",
            month: "March 2026",
            venue: "Puducherry / Program Location",
            points: [
                "Exam strategy and stress-management workshops for students",
                "Career clarity sessions to guide academic decisions",
                "Mentorship support for students preparing for board and competitive exams"
            ]
        },
        {
            id: 2,
            title: "Career Assessment & Guidance",
            shortLine: "Helping students identify the right career path through assessment and mentoring.",
            subheading: "Aptitude Testing & Career Mapping",
            month: "April 2026",
            venue: "Puducherry / Program Location",
            points: [
                "Scientific aptitude assessments to identify student strengths",
                "Career interest mapping and personalized guidance",
                "Parent orientation sessions for better career planning"
            ]
        },
        {
            id: 3,
            title: "Summer Youth Empowerment",
            shortLine: "Skill development and leadership training programs for youth.",
            subheading: "Skill Development & Leadership Training",
            month: "May 2026",
            venue: "Puducherry / Program Location",
            points: [
                "Skill development workshops for students and youth",
                "Leadership and personality development sessions",
                "Women empowerment and youth leadership initiatives"
            ]
        },
        {
            id: 4,
            title: "Back to School Support",
            shortLine: "Providing essential educational materials to students in need.",
            subheading: "Educational Materials Distribution",
            month: "June 2026",
            venue: "Puducherry / Program Location",
            points: [
                "Distribution of school bags, notebooks, and essential stationery",
                "Supporting students from underserved communities",
                "Encouraging school participation and education continuity"
            ]
        },
        {
            id: 5,
            title: "General Medical Camp",
            shortLine: "Free health checkups and basic medical consultation for beneficiaries.",
            subheading: "Preventive Healthcare Initiative",
            month: "July 2026",
            venue: "Puducherry / Program Location",
            points: [
                "Free health checkups including BP and sugar tests",
                "Basic medical consultation for rural and underserved communities",
                "Health awareness sessions focused on preventive care"
            ]
        },
        {
            id: 6,
            title: "Food Support Program",
            shortLine: "Providing essential food and grocery support to families in need.",
            subheading: "Emergency Food & Grocery Assistance",
            month: "Monthly Program",
            venue: "Puducherry / Program Location",
            points: [
                "Monthly grocery kits for families in need",
                "Emergency food distribution during crisis situations",
                "Supporting vulnerable families with essential nutrition"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans selection:bg-blue-100">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Header Section */}
                <div className="max-w-3xl mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-[#d4a017] font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        <ShieldCheck size={18} />
                        Measurable Impact
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight mb-6"
                    >
                        Impact & Allocation <br/> <span className="text-gray-400">Prospectus 2030</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 leading-relaxed"
                    >
                        Every contribution supports meaningful grassroots programs across Tamil Nadu. From education and career guidance to healthcare and food assistance, BM Foundation initiatives focus on creating measurable and sustainable community impact.
                    </motion.p>
                </div>

                {/* 2. Program Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {programs.map((prog) => (
                        <motion.div 
                            key={prog.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProgram(prog)}
                            className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,45,75,0.08)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-[#d4a017] group-hover:bg-[#002d4b] group-hover:text-white transition-colors duration-300">
                                    <ArrowUpRight size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#002d4b] mb-3 transition-colors duration-300">
                                    {prog.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {prog.shortLine}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-2 text-[#d4a017] font-bold text-xs uppercase tracking-widest pt-4 border-t border-gray-50">
                                View Program Details
                                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 3. Program Detail Modal */}
                <AnimatePresence>
                    {selectedProgram && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProgram(null)}
                                className="absolute inset-0 bg-[#002d4b]/60 backdrop-blur-sm"
                            />
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
                            >
                                {/* Modal Header */}
                                <div className="bg-[#002d4b] p-8 text-white relative">
                                    <button 
                                        onClick={() => setSelectedProgram(null)}
                                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div className="inline-flex items-center gap-2 text-[#d4a017] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                                        <ShieldCheck size={14} />
                                        Program Overview
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedProgram.title}</h3>
                                    <p className="text-blue-100/70 font-medium">{selectedProgram.subheading}</p>
                                </div>

                                {/* Modal Content */}
                                <div className="p-8 md:p-10">
                                    <div className="space-y-6 mb-10">
                                        {selectedProgram.points.map((point, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-green-50 rounded-full flex items-center justify-center">
                                                    <CheckCircle2 size={14} className="text-green-600" />
                                                </div>
                                                <p className="text-gray-600 leading-relaxed font-medium">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Modal Footer / Actions */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
                                        <div className="flex flex-wrap items-center gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={18} className="text-[#d4a017]" />
                                                <div>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Date</p>
                                                    <p className="text-[#002d4b] font-bold leading-none">{selectedProgram.month}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={18} className="text-[#d4a017]" />
                                                <div>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Venue</p>
                                                    <p className="text-[#002d4b] font-bold leading-none">{selectedProgram.venue}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <a 
                                            href="https://wa.me/918056889971"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-auto bg-[#002d4b] hover:bg-[#003a61] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all group whitespace-nowrap"
                                        >
                                            Support This Program
                                            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ImpactPlan;