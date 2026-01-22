import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "surajpoulmulkalapally@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-zinc-950 flex items-center justify-center py-20 px-6 lg:px-24 overflow-hidden">
      
      {/* 1. BACKGROUND ACCENT */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* 2. LEFT: THE BIG STATEMENT */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.6em] mb-4 block">Available_for_Projects</span>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
              Let's <br /> Start <br /> The <span className="text-zinc-800">Link.</span>
            </h2>
          </motion.div>
        </div>

        {/* 3. RIGHT: INTERACTIVE CONNECTORS */}
        <div className="flex flex-col justify-center space-y-12">
          
          {/* Email Interaction Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">_Primary_Protocol</p>
            <div className="group relative flex items-center justify-between p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-xs font-mono mb-1 uppercase tracking-widest">Secure_Mail</span>
                {/* Updated Email Font: Mono for a technical look, bold, and tracking-tight */}
                <span className="text-white text-lg md:text-xl font-mono font-medium tracking-tight break-all">
                  {email}
                </span>
              </div>
              
              <div className="flex gap-2 ml-4">
                <button 
                  onClick={copyToClipboard}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all active:scale-90"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                </button>
                <a 
                  href={`mailto:${email}`}
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              
              <AnimatePresence>
                {copied && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-emerald-500 uppercase tracking-[0.3em]"
                  >
                    Address_Copied_to_Buffer
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Social Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "LinkedIn", icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/suraj-poul-mulkalapally-038021326/", color: "hover:text-blue-400" },
              { label: "GitHub", icon: <Github size={16} />, href: "https://github.com/mspoul", color: "hover:text-white" },
              { label: "X / Twitter", icon: <Twitter size={16} />, href: "https://x.com/SurajPoul0608", color: "hover:text-sky-400" },
              { label: "Resume", icon: <ArrowUpRight size={16} />, href: "/SurajPoul_Mulkalapally.pdf", color: "hover:text-emerald-400" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target={social.label !== "Resume" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group transition-all duration-300 ${social.color}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 group-hover:inherit transition-colors">{social.icon}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">{social.label}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-current transition-colors" />
              </a>
            ))}
          </div>

          {/* 4. SYSTEM STATUS FOOTER */}
          <div className="pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Node_Active: Hyderabad, IN
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;