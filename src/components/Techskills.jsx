import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Cpu, Globe, Database, 
  Terminal, ArrowRight, Sparkles 
} from "lucide-react";

const skillCategories = [
  {
    id: "01",
    title: "Programming",
    icon: <Code2 />,
    skills: ["Java", "Python", "JavaScript", "C++", "SQL"],
    description: "Developing robust core logic and efficient data structures for enterprise-scale applications.",
    color: "from-blue-600/20"
  },
  {
    id: "02",
    title: "AI & Data",
    icon: <Cpu />,
    skills: ["NLP", "Streamlit", "Pandas", "Transformers"],
    description: "Building intelligent systems that process natural language and visualize complex data patterns.",
    color: "from-purple-600/20"
  },
  {
    id: "03",
    title: "Frontend",
    icon: <Globe />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Motion"],
    description: "Crafting fluid user interfaces with a focus on motion design and accessibility.",
    color: "from-cyan-600/20"
  },
  {
    id: "04",
    title: "Backend",
    icon: <Database />,
    skills: ["Node.js", "Express.js", "MySQL", "REST APIs"],
    description: "Architecting secure server-side solutions and managing relational database ecosystems.",
    color: "from-emerald-600/20"
  }
];

function Techskills() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="skills" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">
              <Sparkles size={14} />
              <span>Technical Infrastructure</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
              The <span className="text-zinc-800">Stack</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block">
            // Hover to expand architecture
          </p>
        </div>

        {/* The Accordion Blade System */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[500px]">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setExpanded(index)}
              className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-500 ${
                expanded === index ? "flex-[3] bg-zinc-900/40" : "flex-1 bg-zinc-900/10"
              }`}
              layout
            >
              {/* Subtle Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-30`} />

              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                
                {/* Header (Always Visible) */}
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl bg-zinc-950 border border-white/5 ${expanded === index ? 'text-blue-500' : 'text-zinc-600'} transition-colors duration-500`}>
                    {cat.icon}
                  </div>
                  <span className="text-zinc-800 font-black text-2xl">{cat.id}</span>
                </div>

                {/* Vertical Text (Visible when collapsed) */}
                <AnimatePresence>
                  {expanded !== index && (
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-12 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-xl font-bold text-zinc-700 uppercase tracking-widest origin-center"
                    >
                      {cat.title}
                    </motion.h3>
                  )}
                </AnimatePresence>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col h-full pt-10"
                    >
                      <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">
                        {cat.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-sm">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {cat.skills.map((skill) => (
                          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Indicator (Mobile only) */}
                <div className="md:hidden flex justify-end">
                   <ArrowRight className={`transition-transform ${expanded === index ? 'rotate-90' : ''}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Techskills;