import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Target, CheckCircle2, ArrowUpRight } from "lucide-react";

const ImpactPlan = () => {
    // Static data array
    const programs = [
        {
            id: 1,
            month: "March",
            title: "Face the Exam Easily",
            subtitle: "10th & 12th Grade Prep",
            target: "200 Students",
            budget: 50000,
            description: "Exam strategy, stress management and career clarity session.",
            received: 15000, // Example funded amount
        },
        {
            id: 2,
            month: "April",
            title: "SACT Career Assessment",
            subtitle: "Aptitude & Mapping",
            target: "200 Students",
            budget: 60000,
            description: "Aptitude test, interest mapping and parent orientation.",
            received: 30000,
        },
        {
            id: 3,
            month: "May",
            title: "Summer Empowerment",
            subtitle: "Skill Development Series",
            target: "150+ Participants",
            budget: 120000,
            description: "Student skills, women empowerment and youth leadership.",
            received: 0,
        },
        {
            id: 4,
            month: "June",
            title: "Back to School Drive",
            subtitle: "Educational Material Distribution",
            target: "100 Students",
            budget: 100000,
            description: "School bags, notebooks and stationery distribution.",
            received: 0,
        },
        {
            id: 5,
            month: "July",
            title: "Community Medical Camp",
            subtitle: "Preventative Healthcare",
            target: "200+ Beneficiaries",
            budget: 50000,
            description: "Free health checkups including BP and sugar testing.",
            received: 0,
        },
        {
            id: 6,
            month: "Monthly",
            title: "Food Support Program",
            subtitle: "Emergency & Sustenance Aid",
            target: "Ongoing Monthly",
            budget: 45000,
            description: "Emergency food distribution + monthly grocery kits.",
            received: 0,
        },
    ];

    const formatRupees = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

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
        <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Trust & Accountability Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-[#d4a017] font-bold uppercase tracking-widest text-sm mb-4">
                            <ShieldCheck size={18} />
                            100% Financial Transparency
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight mb-4">
                            Impact & Allocation <br/> <span className="text-gray-400">Prospectus 2026</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Every rupee sponsored is directed strictly towards the designated program. Post-execution, sponsors receive detailed impact reports and audited expense breakdowns.
                        </p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shrink-0 w-full lg:w-auto">
                        <p className="text-sm text-[#002d4b] font-bold uppercase mb-2">Total 6-Month Budget</p>
                        <p className="text-4xl font-bold text-[#d4a017]">₹ 4,25,000</p>
                        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                            <CheckCircle2 size={12} className="text-green-600" />
                            Verified Allocation Plan
                        </p>
                    </div>
                </div>

                {/* 2. Structured Financial Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {programs.map((prog) => {
                        const balance = prog.budget - prog.received;
                        const progressPercentage = (prog.received / prog.budget) * 100;
                        const isFullyFunded = balance === 0;

                        return (
                            <motion.div 
                                key={prog.id}
                                variants={cardVariants}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,45,75,0.1)] transition-all duration-300 flex flex-col"
                            >
                                {/* Card Header (Timeline & Status) */}
                                <div className="bg-[#002d4b] px-6 py-4 flex justify-between items-center">
                                    <span className="text-[#d4a017] font-bold tracking-widest uppercase text-xs">
                                        Timeline: {prog.month}
                                    </span>
                                    {isFullyFunded ? (
                                        <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] font-bold uppercase px-2 py-1 rounded-sm flex items-center gap-1">
                                            Funded
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-xs text-blue-100 font-medium">
                                            <span className="relative flex h-2 w-2">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a017] opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a017]"></span>
                                            </span>
                                            Seeking Funds
                                        </span>
                                    )}
                                </div>

                                {/* Project Details */}
                                <div className="p-6 flex-grow border-b border-gray-100">
                                    <h3 className="text-xl font-bold text-[#002d4b] mb-1 leading-snug">
                                        {prog.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium mb-4">
                                        {prog.subtitle}
                                    </p>
                                    
                                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                                        {prog.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm font-semibold text-[#002d4b]">
                                        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                                            <Target size={14} className="text-[#d4a017]" />
                                            Target: {prog.target}
                                        </div>
                                    </div>
                                </div>

                                {/* Financial Ledger Section */}
                                <div className="p-6 bg-gray-50/50">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Required Budget</p>
                                            <p className="text-lg font-bold text-[#002d4b]">{formatRupees(prog.budget)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Funds Received</p>
                                            <p className={`text-lg font-bold ${prog.received > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                                                {formatRupees(prog.received)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sleek Progress Bar */}
                                    <div className="w-full bg-gray-200 rounded-sm h-1.5 mb-2 overflow-hidden">
                                        <motion.div 
                                            className="bg-[#d4a017] h-full rounded-sm"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${progressPercentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center text-xs font-bold mt-2">
                                        <span className="text-gray-400">{progressPercentage.toFixed(0)}% Funded</span>
                                        <span className={isFullyFunded ? "text-green-600" : "text-[#d4a017]"}>
                                            {isFullyFunded ? "Goal Reached" : `Deficit: ${formatRupees(balance)}`}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                

            </div>
        </section>
    );
};

export default ImpactPlan;