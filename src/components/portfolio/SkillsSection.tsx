import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Tech Badge Component
const TechBadge = ({ name, delay }: { name: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ delay, type: "spring", damping: 15 }}
  >
    <Badge className="px-4 py-2 text-sm bg-cyan-900/30 border border-cyan-400/50 text-cyan-200 hover:bg-cyan-900/50 hover:border-cyan-300 cursor-pointer transition-all">
      {name}
    </Badge>
  </motion.div>
);

// Category Card Component
const CategoryCard = ({ title, description, badges, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/50 transition-all"
  >
    <h3 className="text-2xl font-bold text-cyan-300 mb-3">{title}</h3>
    <p className="text-slate-300 text-sm mb-6">{description}</p>
    <div className="flex flex-wrap gap-3">
      {badges.map((badge: string, index: number) => (
        <TechBadge key={badge} name={badge} delay={delay + index * 0.05} />
      ))}
    </div>
  </motion.div>
);

export const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Core Data Science Technologies
  const coreTech = ["Python", "SQL", "Power BI", "DAX", "Pandas", "NumPy"];

  // Machine Learning & Advanced Analytics
  const mlTech = ["Scikit-learn", "K-Means Clustering", "RFM Analysis", "Unsupervised Learning", "Statistical Analysis", "Seaborn"];

  // Engineering Edge - Frontend & Deployment
  const engineeringTech = ["React.js", "Streamlit", "Git", "Plotly", "TypeScript", "Tailwind CSS"];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A comprehensive toolkit for transforming raw data into actionable insights. Specialized in Python, SQL, and Power BI with a unique edge in interactive React dashboards.
            </p>
          </motion.div>

          {/* Three Categories Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <CategoryCard
              title="Core Technologies"
              description="The foundation of modern data analytics. My primary stack for exploratory analysis, querying, and visualization."
              badges={coreTech}
              delay={0}
            />
            
            <CategoryCard
              title="Machine Learning & Analytics"
              description="Advanced techniques for pattern recognition, customer segmentation, and predictive modeling."
              badges={mlTech}
              delay={0.1}
            />
            
            <CategoryCard
              title="The Engineering Edge"
              description="React + Streamlit for deploying interactive data tools. Making insights accessible and actionable."
              badges={engineeringTech}
              delay={0.2}
            />
          </motion.div>

          {/* Skills Summary Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">6+</div>
              <div className="text-slate-300">Core Data Science Tools</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">6+</div>
              <div className="text-slate-300">ML & Analytics Techniques</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">6+</div>
              <div className="text-slate-300">Engineering & Deployment Tools</div>
            </motion.div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-cyan-900/30 to-sky-900/30 border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Key Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-400/10"
              >
                <div className="text-2xl mt-1">📊</div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-1">Exploratory Data Analysis</h4>
                  <p className="text-slate-400 text-sm">Deep dive into datasets using Python & SQL. Uncover trends, outliers, and hidden patterns.</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-400/10"
              >
                <div className="text-2xl mt-1">📈</div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-1">Dashboard Engineering</h4>
                  <p className="text-slate-400 text-sm">Create interactive Power BI dashboards with complex DAX measures and real-time data flows.</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-400/10"
              >
                <div className="text-2xl mt-1">🤖</div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-1">Unsupervised Learning</h4>
                  <p className="text-slate-400 text-sm">Customer segmentation via K-Means clustering and RFM analysis for targeted strategies.</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-400/10"
              >
                <div className="text-2xl mt-1">⚛️</div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-1">Interactive Data Apps</h4>
                  <p className="text-slate-400 text-sm">Deploy Streamlit and React dashboards for seamless user experience and self-service analytics.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};