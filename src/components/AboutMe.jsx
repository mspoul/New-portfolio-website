import { motion } from "framer-motion";
// Added Briefcase to the imports below
import { User, Languages, Heart, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import Techskills from "./Techskills";
import SoftSkills from "./SoftSkills";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-zinc-950 text-zinc-300 py-32 px-6 md:px-20 overflow-hidden"
        >
            <motion.div
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                // Changed amount to 0.1 to make sure it triggers even on smaller screens
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                {/* HEADER SECTION */}
                <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-24">
                    <div className="flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
                        <User size={14} />
                        <span>Profile</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                        About <span className="text-zinc-600">Me</span>
                    </h1>

                    {/* PROFILE IMAGE & INTRO */}
                    <div className="relative group mb-12">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900">
                            <img
                                src="/poul.png"
                                alt="Suraj Poul"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </div>

                    <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Suraj Poul Mulkalapally
                    </motion.h2>
                    <p className="text-blue-400 font-medium text-lg mb-6">Full Stack Developer </p>
                    <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Open to Opportunities • Hyderabad, India
                    </div>
                    <p className="max-w-2xl text-zinc-400 leading-relaxed text-lg font-light">
                        I’m a Computer Science student focused on bridging the gap between
                        complex AI logic and intuitive user interfaces.
                    </p>
                </motion.div>

                {/* BENTO DETAILS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

                    {/* BIO CARD */}
                    <motion.div
                        variants={fadeInUp}
                        className="md:col-span-2 p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md"
                    >
                        <div className="flex items-center gap-3 mb-6 text-white">
                            <Sparkles className="text-blue-500" size={24} />
                            <h3 className="text-2xl font-bold">The Journey</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            I engineer high-performance <span className="text-white">Full-Stack systems</span> where
                            clean architecture meets complex logic. My focus is on bridging
                            <span className="text-white">scalable backend logic</span> with seamless
                            <span className="text-white">user interfaces</span> to deliver robust digital solutions.
                        </p>
                    </motion.div>

                    {/* EDUCATION/QUICK STAT CARD */}
                    <motion.div
                        variants={fadeInUp}
                        className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 flex flex-col justify-center items-center text-center"
                    >
                        <GraduationCap className="text-blue-500 mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                        <p className="text-zinc-400">Computer Science & Engineering</p>
                    </motion.div>

                    {/* LANGUAGES CARD */}
                    <motion.div
                        variants={fadeInUp}
                        className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Languages className="text-blue-500" size={20} />
                            <h3 className="text-xl font-bold text-white">Languages</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-400">
                            <li className="flex justify-between items-center"><span>English</span> <span className="text-[10px] text-zinc-600 tracking-widest uppercase">Fluent</span></li>
                            <li className="flex justify-between items-center"><span>Telugu</span> <span className="text-[10px] text-zinc-600 tracking-widest uppercase">Native</span></li>
                            <li className="flex justify-between items-center"><span>Hindi</span> <span className="text-[10px] text-zinc-600 tracking-widest uppercase">Fluent</span></li>
                        </ul>
                    </motion.div>

                    {/* HOBBIES CARD */}
                    <motion.div
                        variants={fadeInUp}
                        className="md:col-span-2 p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="text-blue-500" size={20} />
                            <h3 className="text-xl font-bold text-white">Beyond Coding</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['Playing Cricket', 'Listening to Music', 'Reading Books', 'Exploring AI Tech'].map((hobby) => (
                                <span key={hobby} className="px-5 py-2 bg-zinc-950 border border-white/5 rounded-full text-sm text-zinc-400">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* TIMELINE SECTION */}
                <motion.div variants={fadeInUp} className="mb-32 px-4 md:px-8">
                    <div className="flex items-center gap-3 mb-16">
                        <Briefcase className="text-blue-500" size={24} />
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Academic Roadmap</h3>
                    </div>
                    <div className="relative border-l border-zinc-800 ml-4 space-y-16">
                        {[
                            { year: "2019 — 2020", title: "Secondary Education (10th)", sub: "Foundational Logic", desc: "Developed a strong foundation in Mathematics and analytical thinking." },
                            { year: "2020 — 2022", title: "Intermediate (MPC)", sub: "Problem Solving", desc: "Focused on advanced physics and mathematics, honing logical reasoning skills." },
                            { year: "2022 — 2024", title: "B.Tech Early Years", sub: "Core Engineering", desc: "Mastering C, C++, and Data Structures to build efficient system foundations." },
                            { year: "2024 — 2025", title: "B.Tech 3rd Year", sub: "Full Stack Specialization", desc: "Deep dive into React, Node.js, and database design for web applications." },
                            { year: "2025 — 2026", title: "B.Tech Final Year", sub: "Advanced System Design", desc: "Architecting end-to-end systems and deploying complex Full-Stack projects.", active: true }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className="relative pl-8 group">
                                <div className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full border border-zinc-950 transition-all duration-500 
                  ${item.active ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'bg-zinc-700 group-hover:bg-blue-400'}`}
                                />
                                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1 block">{item.year}</span>
                                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                <p className="text-sm text-blue-500/80 mb-2 font-medium uppercase tracking-wide">{item.sub}</p>
                                <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* SKILLS SECTIONS */}
                <motion.div variants={fadeInUp}>
                    <Techskills />
                </motion.div>
                <motion.div variants={fadeInUp} >
                    <SoftSkills />
                </motion.div>

            </motion.div>
        </section>
    );
}

export default About;