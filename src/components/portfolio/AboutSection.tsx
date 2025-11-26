import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Target, Lightbulb, Sparkles } from "lucide-react";

// Stat Card - Clean dark style
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
    className="text-center p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-400/20 rounded-2xl hover:border-cyan-400/40 transition-all"
  >
    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent mb-2">
      {value}
    </div>
    <div className="text-slate-300">{label}</div>
  </motion.div>
);

// Coursework Item - Clean dark style
const CourseworkItem = ({ course, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ x: 5, scale: 1.02 }}
    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
    className="p-4 rounded-xl bg-cyan-900/20 border border-cyan-400/10 hover:border-cyan-400/30 transition-all group"
  >
    <h4 className="font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
      {course.title}
    </h4>
    <p className="text-sm text-slate-400">
      {course.description}
    </p>
  </motion.div>
);

// Strength Item - Clean dark style
const StrengthItem = ({ icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ x: 5, scale: 1.02 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className="p-4 rounded-xl bg-cyan-900/20 border border-cyan-400/10 hover:border-cyan-400/30 transition-all group"
  >
    <p className="text-cyan-300 font-semibold flex items-center gap-2">
      <span>{icon}</span>
      {title}
    </p>
    <p className="text-sm text-slate-400 mt-1">
      {description}
    </p>
  </motion.div>
);

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const coursework = [
    { title: "Linear Algebra", description: "Matrices, eigenvalues, and vector spaces" },
    { title: "Probability & Statistics", description: "Distributions, hypothesis testing, and inference" },
    { title: "Calculus I & II", description: "Differentiation, integration, and optimization" },
    { title: "Discrete Mathematics", description: "Logic, sets, graphs, and combinatorics" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Data Analytics professional with a strong mathematical foundation, transitioning into Data Science with a unique edge in interactive React dashboards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Personal Statement & Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Personal Statement Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Who I Am
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm a Data Analytics Intern at <span className="text-cyan-300 font-semibold">Elevvo Pathways</span>, currently pursuing a <span className="text-cyan-300 font-semibold">BSCS degree at Air University, Islamabad</span>. My passion lies in transforming raw data into actionable insights through statistical analysis, machine learning, and interactive dashboards.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  What makes me unique is my ability to bridge data science and frontend development—I don't just analyze data, I visualize it beautifully and deploy it via React dashboards and Streamlit applications. This combination of skills positions me to create end-to-end data solutions that are both analytically rigorous and user-friendly.
                </p>
              </motion.div>

              {/* Education Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6" />
                  Education
                </h3>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-5 rounded-xl bg-cyan-900/30 border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
                >
                  <h4 className="text-lg font-semibold text-cyan-300 mb-1">Bachelor of Science in Computer Science</h4>
                  <p className="text-slate-300 mb-2">Air University, Islamabad, Pakistan</p>
                  <p className="text-sm text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Current | Expected Graduation: 2026
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Relevant Coursework & Strengths */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Relevant Coursework Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  Relevant Coursework
                </h3>
                
                <div className="space-y-3">
                  {coursework.map((course, index) => (
                    <CourseworkItem key={course.title} course={course} index={index} />
                  ))}
                </div>
                
                <motion.div 
                  className="mt-5 p-4 rounded-xl bg-green-900/20 border border-green-400/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-green-300 flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>Strong mathematical foundation ideal for advanced ML, statistical modeling, and data-driven decision-making.</span>
                  </p>
                </motion.div>
              </motion.div>

              {/* Key Strengths Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6" />
                  Key Strengths
                </h3>
                
                <div className="space-y-3">
                  <StrengthItem
                    icon="📊"
                    title="Data Storytelling"
                    description="Translate complex data into clear narratives for stakeholders."
                    delay={0}
                  />
                  <StrengthItem
                    icon="🚀"
                    title="Full-Stack Analytics"
                    description="From SQL queries to interactive Dashboards and React apps."
                    delay={0.1}
                  />
                  <StrengthItem
                    icon="🎯"
                    title="Problem-Solving"
                    description="Approach every challenge with curiosity, analytical rigor, and creativity."
                    delay={0.2}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <StatCard value="3+" label="Programming Languages" delay={0} />
            <StatCard value="18+" label="Data & Analytics Tools" delay={0.1} />
            <StatCard value="5+" label="Major Projects Delivered" delay={0.2} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
