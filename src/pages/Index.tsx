import { useState, useEffect } from "react";
import { HeroSection } from "../components/portfolio/HeroSection";
import { AboutSection } from "../components/portfolio/AboutSection";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { ResumeSection } from "../components/portfolio/ResumeSection";
import { CertificatesSection } from "../components/portfolio/CertificatesSection";
import { SkillsSection } from "../components/portfolio/SkillsSection";
import { ContactSection } from "../components/portfolio/ContactSection";
import { Navigation } from "../components/portfolio/Navigation";
import { LoadingScreen } from "../components/ui/loading-screen";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for faster experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Navigation />
      
      <motion.main
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <AboutSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ResumeSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <CertificatesSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <SkillsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Index;