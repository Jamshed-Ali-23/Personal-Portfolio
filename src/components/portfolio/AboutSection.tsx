import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Target, Lightbulb } from "lucide-react";

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Data Analytics professional with a strong mathematical foundation, transitioning into Data Science with a unique edge in interactive React dashboards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Personal Statement & Education */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                {/* Personal Statement */}
                <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Who I Am
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I'm a Data Analytics Intern at <span className="text-cyan-300 font-semibold">Elevvo Pathways</span>, currently pursuing a <span className="text-cyan-300 font-semibold">BSCS degree at Air University, Islamabad</span>. My passion lies in transforming raw data into actionable insights through statistical analysis, machine learning, and interactive dashboards.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    What makes me unique is my ability to bridge data science and frontend development—I don't just analyze data, I visualize it beautifully and deploy it via React dashboards and Streamlit applications. This combination of skills positions me to create end-to-end data solutions that are both analytically rigorous and user-friendly.
                  </p>
                </div>

                {/* Education */}
                <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    Education
                  </h3>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="p-4 rounded-lg bg-cyan-900/20 border border-cyan-400/10"
                  >
                    <h4 className="text-lg font-semibold text-cyan-300 mb-1">Bachelor of Science in Computer Science</h4>
                    <p className="text-slate-300 mb-2">Air University, Islamabad, Pakistan</p>
                    <p className="text-sm text-slate-400">Current | Expected Graduation: 2026</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Relevant Coursework & Strengths */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                {/* Relevant Coursework */}
                <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Relevant Coursework
                  </h3>
                  
                  <div className="space-y-3">
                    {coursework.map((course, index) => (
                      <motion.div
                        key={course.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
                      >
                        <h4 className="font-semibold text-cyan-300">{course.title}</h4>
                        <p className="text-sm text-slate-400">{course.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 rounded-lg bg-green-900/20 border border-green-400/20">
                    <p className="text-sm text-green-300 flex items-start gap-2">
                      <span className="mt-0.5">✓</span>
                      <span>Strong mathematical foundation ideal for advanced ML, statistical modeling, and data-driven decision-making.</span>
                    </p>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    Key Strengths
                  </h3>
                  
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-400/10"
                    >
                      <p className="text-cyan-300 font-semibold">📊 Data Storytelling</p>
                      <p className="text-sm text-slate-400">Translate complex data into clear narratives for stakeholders.</p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-400/10"
                    >
                      <p className="text-cyan-300 font-semibold">🚀 Full-Stack Analytics</p>
                      <p className="text-sm text-slate-400">From SQL queries to interactive Dashboards and React apps.</p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-400/10"
                    >
                      <p className="text-cyan-300 font-semibold">🎯 Problem-Solving</p>
                      <p className="text-sm text-slate-400">Approach every challenge with curiosity, analytical rigor, and creativity.</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-slate-300">Programming Languages</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent mb-2">18+</div>
              <div className="text-slate-300">Data & Analytics Tools</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-slate-300">Major Projects Delivered</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};