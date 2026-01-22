import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Cpu, Code2, Globe, Terminal } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "AI Resume Screening Tool",
    type: "AI_NLP_AUTOMATION",
    description: "A Streamlit-based tool that automates resume analysis using NLP and ML. It extracts text from PDF/DOCX files, evaluates candidates using SentenceTransformer embeddings, and generates Match Scores through a weighted algorithm.",
    tools: ["Python", "Streamlit", "NLP", "SentenceTransformer", "PyMuPDF", "OCR", "Pandas"],
    github: "https://github.com/mspoul/AI_Resume_Screening_Tool",
    link: "https://airesumescreeningtool-ffbsu9eg8atzdhyafafihf.streamlit.app/",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
    
  },
  {
    id: "02",
    name: "Personal Portfolio Website",
    type: "FRONTEND_ENGINEERING",
    description: "A modern, fully responsive portfolio built with React.js and Tailwind CSS. Showcases interactive UI components, smooth animations via Framer Motion, and glass-morphism effects for a premium user experience.",
    tools: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/mspoul/suraj-portfolio",
    link: "https://surajpoul.netlify.app/",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
     
  },
  {
    id: "03",
    name: "Charity Management System",
    type: "FULL_STACK_SYSTEM",
    description: "A full-stack system designed to manage donors and tracking. Built with Node.js and MySQL, providing a seamless workflow for recording donations and organizing events with secure backend APIs.",
    tools: ["Node.js", "Express.js", "MySQL", "REST APIs", "JavaScript"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
     
  },
  {
    id: "04",
    name: "Simon Says Memory Game",
    type: "INTERACTIVE_LOGIC",
    description: "An interactive memory-based challenge built from scratch. Demonstrates core JavaScript skills in event handling, DOM manipulation, and real-time interactive logic with increasing difficulty levels.",
    tools: ["HTML", "CSS", "JavaScript", "DOM API"],
    github: "https://github.com/mspoul/Siman-Says-Game",
    link: "https://lively-malabi-b5862a.netlify.app/",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000",
     
  }
];

function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="min-h-screen bg-zinc-950 flex flex-col lg:flex-row border-t border-white/5">
      
      {/* LEFT: THE VISUALIZER (Fixed on desktop) */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-screen sticky top-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 0.5, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-full h-full relative"
          >
            <img 
              src={projects[active].image} 
              alt={projects[active].name}
              className="w-full h-full object-cover"
            />
            {/* Cyber Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
          </motion.div>
        </AnimatePresence>
        
         
      </div>

      {/* RIGHT: THE CONTENT (Scrollable) */}
      <div className="w-full lg:w-1/2 p-8 md:p-20 flex flex-col">
        <div className="mb-24">
          <h2 className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] mb-4">// DEPLOYMENT_HISTORY_ARCHIVE</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
            Selected <br /> <span className="text-zinc-800 italic">Work</span>
          </h3>
        </div>

        <div className="space-y-40">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onViewportEnter={() => setActive(i)}
              viewport={{ amount: 0.6 }}
              className="flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-zinc-800 text-6xl font-black">0{i + 1}</span>
                <div className="h-px flex-1 bg-zinc-900 group-hover:bg-blue-500/50 transition-colors duration-500" />
              </div>

              <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                {project.name}
              </h4>
              
              <div className="flex items-center gap-2 mb-4 text-blue-500/80 font-mono text-[10px] tracking-widest uppercase">
                 <Terminal size={14} />
                 <span>Status: {project.type}</span>
              </div>

              <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10 max-w-md">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {project.tools.map((tool, j) => (
                  <span key={j} className="px-3 py-1 bg-zinc-900 border border-white/5 rounded-md text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {tool.trim()}
                  </span>
                ))}
              </div>

              <div className="flex gap-8">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-all group/link"
                >
                  <Github size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover/link:border-blue-500">Source</span>
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-all group/link"
                >
                  <ExternalLink size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover/link:border-blue-500">Live Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer padding for scroll */}
        <div className="h-64" />
      </div>
    </section>
  );
}

export default Projects;