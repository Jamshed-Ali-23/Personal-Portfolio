import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sparkles } from "lucide-react";

// Project Card Component - Clean dark style with warm colors
const ProjectCard = ({ project, index, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-gradient-to-br from-stone-900/90 to-stone-800/70 border border-amber-400/20 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-300"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-b border-amber-400/20 px-6 py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-xl font-bold text-amber-300 relative z-10 flex items-center gap-2">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            📊
          </motion.span>
          {project.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Problem */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-xs font-bold text-red-400">
              ?
            </div>
            <h4 className="font-semibold text-stone-200">The Problem</h4>
          </div>
          <p className="text-stone-400 text-sm ml-9">{project.problem}</p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-xs">
              ⚙️
            </div>
            <h4 className="font-semibold text-stone-200">Technologies Used</h4>
          </div>
          <div className="flex flex-wrap gap-2 ml-9">
            {project.techStack.map((tech: string, i: number) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ delay: delay + 0.1 + i * 0.05, type: "spring" }}
              >
                <Badge className="px-3 py-1.5 text-xs bg-amber-900/40 border border-amber-400/50 text-amber-200 hover:bg-amber-800/50 hover:border-amber-300 cursor-pointer transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-xs font-bold text-green-400">
              ✓
            </div>
            <h4 className="font-semibold text-stone-200">The Solution</h4>
          </div>
          <p className="text-stone-400 text-sm ml-9">{project.solution}</p>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-5 border-t border-amber-400/10">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-amber-300 hover:text-amber-200 hover:bg-amber-500/15 border border-amber-400/20 hover:border-amber-400/40 transition-all"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </motion.div>
          {project.liveUrl && project.liveUrl !== "#" && (
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-amber-300 hover:text-amber-200 hover:bg-amber-500/15 border border-amber-400/20 hover:border-amber-400/40 transition-all"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Asia Cup 2025 Predictor",
      problem: "Accurately forecasting cricket match outcomes in the Asia Cup tournament based on historical powerplay statistics and real-time scenarios.",
      techStack: ["Python", "Streamlit", "Machine Learning", "Scikit-learn"],
      solution: "Built a predictive model analyzing historical powerplay data with real-time match simulations. Deployed on Streamlit Cloud for interactive predictions with live score integration.",
      githubUrl: "https://github.com/Jamshed-Ali-23/Asia-Cup-2025-Predictor-Dashboard",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation (RFM Analysis)",
      problem: "Identifying high-value vs at-risk customer segments for targeted retention and marketing strategies in a competitive retail environment.",
      techStack: ["Python", "Pandas", "K-Means Clustering", "Seaborn"],
      solution: "Implemented unsupervised learning with K-Means clustering to segment customers into 'Champions', 'Loyal', and 'At-Risk' groups based on Recency, Frequency, and Monetary value metrics.",
      githubUrl: "https://github.com/Jamshed-Ali-23/-Customer-Segmentation-with-RFM-Analysis",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Retail Insights Dashboard",
      problem: "Tracking complex retail KPIs across multiple product categories and time periods with manual reporting consuming 25+ hours monthly.",
      techStack: ["Power BI", "DAX", "Power Query", "SQL"],
      solution: "Engineered custom DAX measures for revenue trends, inventory tracking, and profit margin analysis. Automated data refresh reduced manual reporting by 20% with real-time KPI dashboards.",
      githubUrl: "https://github.com/Jamshed-Ali-23/Sales-Dashboard-PowerBI",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Walmart Sales Forecasting",
      problem: "Predicting future sales volumes to optimize inventory and staffing decisions across multiple Walmart store locations.",
      techStack: ["Python", "Pandas", "NumPy", "Seaborn", "Power BI"],
      solution: "Performed EDA to identify seasonal patterns and trends. Built time-series forecasting models and visualized insights in interactive Power BI dashboards for decision-makers.",
      githubUrl: "https://github.com/Jamshed-Ali-23/Walmart-Sales-Analysis",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Titanic Survival Prediction",
      problem: "Predicting passenger survival rates on the Titanic using historical passenger data with varying levels of data completeness.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
      solution: "Applied rigorous EDA and feature engineering to handle missing values. Trained ensemble models (Random Forest, XGBoost) achieving 82% accuracy. Deployed on Kaggle with detailed documentation.",
      githubUrl: "https://github.com/Jamshed-Ali-23/Titanic-dataset-Kaggle-Analysis-",
      liveUrl: "#"
    },
    {
      id: 6,
      title: "Multivariable Calculus Visualizer",
      problem: "Making complex mathematical concepts like gradient descent and multivariable calculus intuitive for learning through interactive visualization.",
      techStack: ["Python", "SymPy", "Plotly", "Streamlit"],
      solution: "Built an interactive web app using Streamlit that visualizes 3D gradients, partial derivatives, and optimization algorithms with real-time parameter adjustment.",
      githubUrl: "https://github.com/Jamshed-Ali-23/MVC-Graph-Plotter",
      liveUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl -z-10" />

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
                Featured Data Science Projects
              </span>
            </h2>
            <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto">
              Case studies demonstrating my ability to identify business problems, select appropriate technologies, and deliver data-driven solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* CTA for more projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <p className="text-stone-300 mb-8 text-lg">
              Explore more projects on my GitHub, including additional case studies in data visualization, SQL optimization, and machine learning.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-12 py-7 text-lg shadow-xl shadow-amber-500/40 hover:shadow-amber-500/60 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Jamshed-Ali-23" target="_blank" rel="noopener noreferrer">
                  <Sparkles className="w-5 h-5 mr-2" />
                  View All Projects on GitHub
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
