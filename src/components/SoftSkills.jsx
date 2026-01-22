import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Flag, 
  Clock, 
  Brain, 
  Palette, 
  Zap,
  User
} from "lucide-react";

const skills = [
  { icon: <Users size={20} />, title: "Teamwork", desc: "Collaborating to build better products.", color: "#3b82f6" },
  { icon: <MessageSquare size={20} />, title: "Communication", desc: "Bridging the gap between tech and business.", color: "#06b6d4" },
  { icon: <Lightbulb size={20} />, title: "Problem Solving", desc: "Finding efficient solutions to complex logic.", color: "#f59e0b" },
  { icon: <Flag size={20} />, title: "Leadership", desc: "Taking ownership of project outcomes.", color: "#ef4444" },
  { icon: <Clock size={20} />, title: "Time Management", desc: "Delivering high-quality code on schedule.", color: "#8b5cf6" },
  { icon: <Brain size={20} />, title: "Critical Thinking", desc: "Analyzing problems from multiple angles.", color: "#ec4899" },
  { icon: <Palette size={20} />, title: "Creativity", desc: "Innovating beyond standard solutions.", color: "#10b981" },
  { icon: <Zap size={20} />, title: "Adaptability", desc: "Thriving in fast-paced tech environments.", color: "#6366f1" },
];

function SoftSkills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="py-32 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          The <span className="text-blue-500">Core</span> Competencies
        </h2>
      </div>

      <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        
        {/* Orbital Rings */}
        <div className="absolute inset-0 border border-white/5 rounded-full" />
        <div className="absolute inset-12 border border-white/5 rounded-full" />
        
        {/* Center Core */}
        <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
          <AnimatePresence mode="wait">
            {!activeSkill ? (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center p-4"
              >
                <User size={40} className="text-zinc-500 mb-2" />
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Suraj Poul</span>
              </motion.div>
            ) : (
              <motion.div
                key={activeSkill.title}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div style={{ color: activeSkill.color }} className="mb-2">
                  {activeSkill.icon}
                </div>
                <h3 className="text-white font-bold text-sm md:text-lg mb-1">{activeSkill.title}</h3>
                <p className="text-[10px] md:text-xs text-zinc-400 leading-tight">{activeSkill.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Orbiting Icons */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * (2 * Math.PI);
          const radius = 160; // Adjust for mobile/desktop radius
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute z-30 cursor-pointer"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ 
                x: x, 
                y: y, 
                opacity: 1,
              }}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div 
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center transition-all duration-300 ${activeSkill?.title === skill.title ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {skill.icon}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default SoftSkills;