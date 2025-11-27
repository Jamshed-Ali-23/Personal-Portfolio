import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Tech Badge Component - Clean dark style with warm colors
const TechBadge = ({ name, delay }: { name: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, y: -3 }}
    transition={{ delay, type: "spring", damping: 15, stiffness: 200 }}
  >
    <Badge className="px-4 py-2 text-sm bg-amber-900/40 border border-amber-400/50 text-amber-200 hover:bg-amber-800/50 hover:border-amber-300 cursor-pointer transition-all">
      {name}
    </Badge>
  </motion.div>
);

// Category Card Component - Clean dark style with warm colors
const CategoryCard = ({ title, description, badges, delay, icon }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-gradient-to-br from-stone-900/80 to-stone-800/50 border border-amber-400/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all"
    >
      {/* Icon & Title */}
      <motion.div 
        className="text-5xl mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold text-amber-300 mb-3">{title}</h3>
      
      <p className="text-stone-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {badges.map((badge: string, index: number) => (
          <TechBadge key={badge} name={badge} delay={delay + index * 0.05} />
        ))}
      </div>
    </motion.div>
  );
};

// Stats Card - Clean dark style with warm colors
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
    className="text-center p-8 bg-gradient-to-br from-stone-900/80 to-stone-800/50 border border-amber-400/20 rounded-2xl hover:border-amber-400/40 transition-all"
  >
    <div className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent mb-2">
      {value}
    </div>
    <div className="text-stone-300">{label}</div>
  </motion.div>
);

// Strength Card - Clean dark style with warm colors
const StrengthCard = ({ icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ x: 5, scale: 1.02 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    className="flex items-start gap-4 p-5 rounded-xl bg-stone-900/60 border border-amber-400/10 hover:border-amber-400/30 transition-all group"
  >
    <div className="text-3xl mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-amber-300 mb-1 group-hover:text-amber-200 transition-colors">{title}</h4>
      <p className="text-stone-400 text-sm">{description}</p>
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
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              A comprehensive toolkit for transforming raw data into actionable insights. Specialized in Python, SQL, and Power BI with a unique edge in interactive React dashboards.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <CategoryCard
              icon="🔧"
              title="Core Technologies"
              description="The foundation of modern data analytics. My primary stack for exploratory analysis, querying, and visualization."
              badges={coreTech}
              delay={0}
            />
            
            <CategoryCard
              icon="🧠"
              title="Machine Learning & Analytics"
              description="Advanced techniques for pattern recognition, customer segmentation, and predictive modeling."
              badges={mlTech}
              delay={0.15}
            />
            
            <CategoryCard
              icon="⚡"
              title="The Engineering Edge"
              description="React + Streamlit for deploying interactive data tools. Making insights accessible and actionable."
              badges={engineeringTech}
              delay={0.3}
            />
          </motion.div>

          {/* Skills Summary Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <StatCard value="6+" label="Core Data Science Tools" delay={0} />
            <StatCard value="6+" label="ML & Analytics Techniques" delay={0.1} />
            <StatCard value="6+" label="Engineering & Deployment Tools" delay={0.2} />
          </motion.div>

          {/* Key Strengths */}
          <motion.div 
            variants={itemVariants} 
            className="bg-gradient-to-br from-amber-900/20 via-stone-900/50 to-orange-900/20 border border-amber-400/20 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold text-amber-300 mb-8">
              Key Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StrengthCard
                icon="📊"
                title="Exploratory Data Analysis"
                description="Deep dive into datasets using Python & SQL. Uncover trends, outliers, and hidden patterns."
                delay={0}
              />
              
              <StrengthCard
                icon="📈"
                title="Dashboard Engineering"
                description="Create interactive Power BI dashboards with complex DAX measures and real-time data flows."
                delay={0.1}
              />
              
              <StrengthCard
                icon="🤖"
                title="Unsupervised Learning"
                description="Customer segmentation via K-Means clustering and RFM analysis for targeted strategies."
                delay={0.2}
              />
              
              <StrengthCard
                icon="⚛️"
                title="Interactive Data Apps"
                description="Deploy Streamlit and React dashboards for seamless user experience and self-service analytics."
                delay={0.3}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
