import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Menu, X, FileText, Download, 
  Home, Briefcase, User, Mail, 
  Github, Linkedin, Terminal 
} from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Projects", href: "/projects", icon: <Briefcase size={18} /> },
    { name: "About", href: "/about", icon: <User size={18} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* 1. DESKTOP VERTICAL SIDE DOCK */}
      <motion.nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ x: -100 }}
        animate={{ x: 0, width: isHovered ? "260px" : "80px" }}
        className="hidden md:flex fixed top-0 left-0 h-screen z-[100] bg-zinc-950/40 backdrop-blur-3xl border-r border-white/10 flex-col justify-between py-10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
      >
        {/* Branding */}
        <div className="px-6">
          <Link to="/" className="relative flex items-center">
            <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black text-xl shadow-xl">S</div>
            {isHovered && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="ml-4 whitespace-nowrap">
                <p className="text-white font-bold text-xs uppercase tracking-tighter">Suraj Poul</p>
                 
              </motion.div>
            )}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="group relative flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-white/5"
            >
              <div className="text-zinc-500 group-hover:text-blue-400 transition-colors">
                {link.icon}
              </div>
              {isHovered && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-white">
                  {link.name}
                </motion.span>
              )}
            </Link>
          ))}
        </div>

        {/* Actions & Progress */}
        <div className="flex flex-col items-center gap-6 px-4">
          <div className={`flex gap-3 transition-all ${isHovered ? "flex-row w-full justify-center" : "flex-col"}`}>
            <button 
              onClick={() => setShowPreview(true)}
              className="p-3 text-zinc-500 hover:text-white bg-white/5 rounded-xl transition-all"
              title="View CV"
            >
              <FileText size={18} />
            </button>
            <a 
              href="/SurajPoul_Mulkalapally.pdf" 
              download 
              className="p-3 text-zinc-500 hover:text-white bg-white/5 rounded-xl transition-all"
              title="Download Resume"
            >
              <Download size={18} />
            </a>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="relative w-1 h-24 bg-zinc-900 rounded-full overflow-hidden">
            <motion.div style={{ scaleY, originY: 0 }} className="absolute inset-0 bg-blue-500" />
          </div>
        </div>
      </motion.nav>

      {/* 2. MOBILE TOP BAR */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-[100] bg-zinc-950/80 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center justify-between">
        <h1 className="text-white font-bold tracking-tighter uppercase text-sm">S. <span className="text-blue-500">Poul</span></h1>
        <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[90] bg-zinc-950 pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl font-black text-zinc-500 hover:text-white uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full my-4" />
              <button onClick={() => { setShowPreview(true); setMobileOpen(false); }} className="flex items-center gap-4 text-xl text-blue-500 font-bold uppercase">
                <FileText /> View_CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. RESUME MODAL */}
      <AnimatePresence>
        {showPreview && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[110] p-4"
          >
            <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-5xl h-[85vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Document_Viewer / CV</span>
                <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={20} className="text-white" />
                </button>
              </div>
              <iframe src="/SurajPoul_Mulkalapally.pdf" className="w-full h-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;