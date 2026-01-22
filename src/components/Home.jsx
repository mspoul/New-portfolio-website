import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added for internal navigation
import { Github, Linkedin, Mail, ArrowRight, Code, Database, Terminal, Cpu } from 'lucide-react';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    { text: 'Full Stack Developer', icon: <Code size={16} />, color: 'blue' },
    { text: 'Frontend Developer', icon: <Cpu size={16} />, color: 'purple' },
    { text: 'Backend Developer', icon: <Database size={16} />, color: 'emerald' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[roleIndex].text;
    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedRole(prev => isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1));
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen w-full bg-zinc-950 flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`, 
            transition: 'transform 0.2s ease-out' 
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
         
            <br />
            <br />
            <br />
            <motion.h1 
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-6 
                            bg-gradient-to-br from-white via-zinc-400 to-blue-600
                            bg-clip-text text-transparent
                            drop-shadow-[0_10px_15px_rgba(0,0,0,1)]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                 SURAJ POUL
  
            </motion.h1>

          <div className="flex items-center gap-3 mb-8 h-8">
            <span className="text-blue-500 font-mono text-lg">{">"}</span>
            <span className="text-xl md:text-2xl font-mono text-zinc-300">
              {displayedRole}<span className="animate-pulse text-blue-500">_</span>
            </span>
          </div>

          <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-10 font-light">
  Architecting high-performance <span className="text-white">Full-Stack Systems</span>—from 
  scalable <span className="text-white">Server-Side Logic</span> to refined, 
  user-centric <span className="text-white">Frontend Experiences</span>.
</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {/* LINK COMPONENT USED HERE */}
            <Link 
              to="/projects" 
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold uppercase text-xs tracking-widest transition-all hover:bg-blue-500 hover:text-white"
            >
              View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex gap-2">
              {[
                { icon: <Github size={20} />, link: "https://github.com/mspoul" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/suraj-poul-mulkalapally-038021326/" },
                { icon: <Mail size={20} />, link: "mailto:mspoul8044@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white hover:border-blue-500/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            <motion.div 
              className="absolute inset-16 overflow-hidden rounded-full border-2 border-white/10 p-2 backdrop-blur-3xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/poul.png" 
                alt="Suraj Poul" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>

            <div className="absolute top-0 right-10 p-3 bg-zinc-900/80 border border-white/10 rounded-2xl backdrop-blur-md">
              <Terminal size={16} className="text-blue-500" />
            </div>
            <div className="absolute bottom-20 -left-4 p-3 bg-zinc-900/80 border border-white/10 rounded-2xl backdrop-blur-md">
              <Database size={16} className="text-emerald-500" />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Initialization Complete</span>
      </div>
    </section>
  );
}

export default Home;