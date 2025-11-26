import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Project Card Component - Problem -> Tech -> Solution Layout
const ProjectCard = ({ project, index, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="group bg-slate-900/50 border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all"
  >
    {/* Header with category */}
    <div className="bg-gradient-to-r from-cyan-900/30 to-sky-900/30 border-b border-cyan-400/20 px-6 py-4">
      <h3 className="text-xl font-bold text-cyan-300">{project.title}</h3>
    </div>

    {/* Content - Problem / Tech / Solution */}
    <div className="p-6 space-y-6">
      {/* Problem */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-xs font-bold text-red-400">
            ?
          </div>
          <h4 className="font-semibold text-slate-200">The Problem</h4>
        </div>
        <p className="text-slate-400 text-sm ml-8">{project.problem}</p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-xs font-bold text-cyan-400">
            ⚙️
          </div>
          <h4 className="font-semibold text-slate-200">Technologies Used</h4>
        </div>
        <div className="flex flex-wrap gap-2 ml-8">
          {project.techStack.map((tech: string) => (
            <Badge
              key={tech}
              className="px-3 py-1 text-xs bg-cyan-900/30 border border-cyan-400/50 text-cyan-200 hover:bg-cyan-900/50 hover:border-cyan-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Solution */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-xs font-bold text-green-400">
            ✓
          </div>
          <h4 className="font-semibold text-slate-200">The Solution</h4>
        </div>
        <p className="text-slate-400 text-sm ml-8">{project.solution}</p>
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-cyan-400/10">
        <Button
          variant="ghost"
          size="sm"
          className="text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 flex-1"
          asChild
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        </Button>
        {project.liveUrl && project.liveUrl !== "#" && (
          <Button
            variant="ghost"
            size="sm"
            className="text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 flex-1"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  </motion.div>
);

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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl -z-10" />

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
                Featured Data Science Projects
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Case studies demonstrating my ability to identify business problems, select appropriate technologies, and deliver data-driven solutions.
            </p>
          </motion.div>

          {/* Projects Grid - 3 columns on desktop, 1 on mobile */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            className="text-center mt-16"
          >
            <p className="text-slate-300 mb-6">
              Explore more projects on my GitHub, including additional case studies in data visualization, SQL optimization, and machine learning.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-bold px-10 py-6 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Jamshed-Ali-23" target="_blank" rel="noopener noreferrer">
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