import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Database, BarChart3, Brain, Code2 } from "lucide-react";

// Animated Background Grid
const GridBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:60px_60px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
  </div>
);

// Floating Orbs
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

// Tech Badge Component
const TechBadge = ({ icon: Icon, label, delay }: { icon: any; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm"
  >
    <Icon className="w-4 h-4 text-cyan-400" />
    <span className="text-sm text-slate-300">{label}</span>
  </motion.div>
);

// Stat Card
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className="text-center"
  >
    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm text-slate-400 mt-1">{label}</div>
  </motion.div>
);

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Data Scientist & Analytics Expert";
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Effects */}
      <GridBackground />
      <FloatingOrb className="w-[600px] h-[600px] bg-cyan-500/20 top-[-200px] left-[-200px]" delay={0} />
      <FloatingOrb className="w-[500px] h-[500px] bg-blue-500/15 bottom-[-150px] right-[-150px]" delay={2} />
      <FloatingOrb className="w-[300px] h-[300px] bg-purple-500/10 top-[40%] right-[10%]" delay={4} />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 py-20 relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-cyan-300">Available for opportunities</span>
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Jamshed Ali
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-slate-300 h-10"
              >
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-8 bg-cyan-400 ml-1 align-middle"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              I transform complex data into actionable insights. Specializing in 
              <span className="text-cyan-400 font-medium"> Python, Power BI, SQL</span>, and 
              <span className="text-cyan-400 font-medium"> Machine Learning</span> with a unique edge in 
              building interactive dashboards.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <TechBadge icon={Database} label="SQL & Python" delay={0.8} />
              <TechBadge icon={BarChart3} label="Power BI" delay={0.9} />
              <TechBadge icon={Brain} label="Machine Learning" delay={1.0} />
              <TechBadge icon={Code2} label="React & Streamlit" delay={1.1} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Resume/Jamshed_Ali_Resume.pdf';
                  link.download = 'Jamshed_Ali_Resume.pdf';
                  link.click();
                }}
                className="border-2 border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/10 px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-slate-500">Connect:</span>
              {[
                { icon: Github, href: "https://github.com/Jamshed-Ali-23" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/jamshedali23/" },
                { icon: Mail, href: "mailto:jamshedsaiin@gmail.com" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex flex-col items-center"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative mb-12"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/images/profile.jpg"
                  alt="Jamshed Ali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-2xl"></span>
                <span className="ml-2 text-sm font-medium text-cyan-400">Python</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-8 px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl"></span>
                <span className="ml-2 text-sm font-medium text-blue-400">Power BI</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 right-0 px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-2xl"></span>
                <span className="ml-2 text-sm font-medium text-purple-400">React</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl backdrop-blur-sm"
            >
              <StatCard value="5+" label="Projects" delay={1.1} />
              <StatCard value="6+" label="Tools" delay={1.2} />
              <StatCard value="20%" label="Efficiency" delay={1.3} />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
