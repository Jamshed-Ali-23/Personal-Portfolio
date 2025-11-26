import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, TrendingUp, BarChart3, Activity } from "lucide-react";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Turning Raw Data into Business Impact.";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Analytics Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0B1120] via-[#0f1629] to-[#1a1f35]" aria-hidden />
      
      {/* Abstract Data Visualization - Animated Grid */}
      <div className="absolute inset-0 -z-10 opacity-40">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-pattern" />
        
        {/* Floating data nodes */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Connecting lines */}
          <motion.line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
          <motion.line x1="20%" y1="10%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
          <motion.line x1="30%" y1="85%" x2="70%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
        </svg>
        
        {/* Animated circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full bg-cyan-400/60 shadow-lg shadow-cyan-400/50"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
      
      {/* Floating icons - Data Analysis Theme */}
      <motion.div
        className="absolute top-20 left-10 text-cyan-400/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <BarChart3 className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-16 text-cyan-400/20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <TrendingUp className="w-6 h-6" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-cyan-400/25"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Activity className="w-10 h-10" />
      </motion.div>
      
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center lg:text-left"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen flex items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            {/* Status Badge */}
            <motion.div
              className="mb-8 flex lg:justify-start justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-cyan-300 font-medium">Currently analyzing data at Elevvo Pathways [Remote]</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", damping: 12 }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                {text}
              </span>
              <motion.span
                className="inline-block w-1 h-16 bg-cyan-400 ml-2 rounded-full"
                animate={{ 
                  opacity: [0, 1, 0],
                  scaleY: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>

            {/* Sub-headline with Clear Separation */}
            <motion.div
              className="mb-8 space-y-4 text-lg md:text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, type: "spring", damping: 10 }}
            >
              <p>
                Data Analytics Intern at <span className="text-cyan-300 font-semibold">Elevvo Pathways</span>.
              </p>
              
              <div className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-4">
                <p className="mb-3">
                  <span className="text-cyan-300 font-semibold">📊 Data Skills:</span> Specialized in <span className="text-sky-300 font-semibold">Python, SQL, and Power BI</span> for actionable insights.
                </p>
                <p>
                  <span className="text-cyan-300 font-semibold">⚛️ Web Skills:</span> Proficient in <span className="text-sky-300 font-semibold">React</span> for modern web engineering.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring", damping: 10 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-bold px-10 py-6 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Case Studies
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-all duration-300 px-10 py-6 text-lg backdrop-blur-sm"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Resume/Jamshed_Ali_Resume.pdf';
                    link.download = 'Jamshed_Ali_Resume.pdf';
                    link.click();
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", damping: 10 }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glowing Circular Frame */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Profile Image Container */}
              <div className="relative z-10 w-80 h-80 rounded-full border-4 border-cyan-400/50 overflow-hidden bg-slate-900/50 backdrop-blur-md shadow-2xl shadow-cyan-500/20">
                <img
                  src="/profile.png"
                  alt="Jamshed Ali"
                  className="w-full h-full object-cover"
                />
                
                {/* Fallback gradient if image not loaded */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-sky-900/20" />
              </div>

              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.1, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                style={{ width: '320px', height: '320px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full border border-sky-400/20"
                animate={{ 
                  scale: [1, 1.35, 1],
                  opacity: [0.3, 0.05, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{ width: '360px', height: '360px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />

              {/* Floating Data Badges */}
              {[
                { label: 'Python', icon: '🐍', top: '-20px', right: '40px' },
                { label: 'SQL', icon: '🗄️', top: '180px', right: '-40px' },
                { label: 'React', icon: '⚛️', top: '200px', left: '-40px' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="absolute px-3 py-2 bg-slate-900/80 border border-cyan-400/50 rounded-lg text-xs font-semibold text-cyan-300 backdrop-blur-md whitespace-nowrap"
                  style={{ top: badge.top, right: badge.right, left: badge.left }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3 + idx * 0.5,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                >
                  <span className="mr-1.5">{badge.icon}</span> {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};