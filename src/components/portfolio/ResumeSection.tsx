import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Briefcase } from "lucide-react";

// Experience Timeline Item
const ExperienceItem = ({ role, company, date, achievements, delay, isCurrent }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="mb-8"
  >
    <div className="flex gap-4">
      {/* Timeline Connector */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 ${isCurrent ? 'bg-green-400 border-green-400' : 'bg-amber-400 border-amber-400'} mb-2`} />
        <div className="w-1 h-32 bg-gradient-to-b from-amber-400/50 to-amber-400/10" />
      </div>
      
      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="bg-stone-900/50 border border-amber-400/20 rounded-xl p-6 hover:border-amber-400/50 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-amber-300">{role}</h3>
              <p className="text-stone-300 text-sm">{company}</p>
            </div>
            {isCurrent && (
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-300 text-xs font-semibold rounded-full">
                Current
              </span>
            )}
          </div>
          
          <p className="text-stone-400 text-sm mb-4">{date}</p>
          
          <ul className="space-y-2">
            {achievements.map((achievement: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.1 + idx * 0.1 }}
                className="flex items-start gap-2 text-stone-300 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ResumeSection = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Jamshed_Ali_Resume.pdf';
    link.download = 'Jamshed_Ali_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg text-stone-300">
              My professional journey in Data Analytics and insights-driven problem solving.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-12">
            <ExperienceItem
              role="Data Analytics Intern"
              company="Elevvo Pathways"
              date="Aug 2025 - Present"
              isCurrent={true}
              achievements={[
                "Spearheaded exploratory data analysis (EDA) on large datasets using Python & SQL to identify key business metrics.",
                "Reduced manual reporting time by 20% through development of automated Power BI dashboards with real-time data connections.",
                "Performed rigorous data cleaning and validation to ensure high-quality downstream analysis and decision-making.",
                "Engineered complex DAX measures for advanced analytics and KPI tracking in Power BI dashboards."
              ]}
              delay={0}
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-stone-900/50 border border-amber-400/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-amber-300 mb-2">3+</div>
              <div className="text-sm text-stone-300">Programming Languages</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-stone-900/50 border border-amber-400/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-amber-300 mb-2">6+</div>
              <div className="text-sm text-stone-300">Data Tools & Platforms</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-stone-900/50 border border-amber-400/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-amber-300 mb-2">5+</div>
              <div className="text-sm text-stone-300">Major Projects Delivered</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-stone-900/50 border border-amber-400/20 rounded-xl"
            >
              <div className="text-3xl font-bold text-amber-300 mb-2">20%</div>
              <div className="text-sm text-stone-300">Efficiency Improvement</div>
            </motion.div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-400/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Key Achievements at Elevvo Pathways
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 rounded-lg bg-stone-900/50 border border-amber-400/10"
              >
                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
                  <span className="text-lg">📊</span> EDA & Data Analysis
                </h4>
                <p className="text-stone-400 text-sm">Performed comprehensive exploratory analysis on multi-dimensional datasets using Python pandas, SQL, and Jupyter notebooks to uncover hidden patterns.</p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 rounded-lg bg-stone-900/50 border border-amber-400/10"
              >
                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
                  <span className="text-lg">📈</span> Dashboard Development
                </h4>
                <p className="text-stone-400 text-sm">Engineered custom Power BI dashboards with advanced DAX measures that reduced reporting time by 20% and improved decision-making speed.</p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 rounded-lg bg-stone-900/50 border border-amber-400/10"
              >
                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
                  <span className="text-lg">🧹</span> Data Quality & Cleaning
                </h4>
                <p className="text-stone-400 text-sm">Implemented rigorous data validation and cleaning protocols to ensure data integrity, resulting in higher confidence in downstream analytical models.</p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="p-4 rounded-lg bg-stone-900/50 border border-amber-400/10"
              >
                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
                  <span className="text-lg">🎯</span> SQL Optimization
                </h4>
                <p className="text-stone-400 text-sm">Optimized complex SQL queries to enhance query performance and scalability, enabling faster data retrieval for real-time dashboards.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-10 py-6 text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Resume (PDF)
              </Button>
            </motion.div>
            <p className="text-stone-400 text-sm mt-4">Last updated: November 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
