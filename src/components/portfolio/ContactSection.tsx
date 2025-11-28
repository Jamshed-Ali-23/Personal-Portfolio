import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ExternalLink, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Jamshed-Ali-23",
      label: "GitHub"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jamshedali23/",
      label: "LinkedIn"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jamshedsaiin@gmail.com",
      label: "Email"
    }
  ];

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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Jamshed_Ali_Resume.pdf';
    link.download = 'Jamshed_Ali_Resume.pdf';
    link.click();
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:jamshedsaiin@gmail.com';
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
                Ready to Uncover Hidden Patterns in Your Data?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed px-4">
              Let's collaborate on data-driven projects that transform raw information into strategic decisions. Whether you need exploratory analysis, machine learning models, interactive dashboards, or custom data applications—I'm here to help.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 lg:mb-16 px-4">
            {/* Primary CTA - Email */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Email Me: </span>jamshedsaiin@gmail.com
              </Button>
            </motion.div>

            {/* Secondary CTA - Download Resume */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                onClick={handleDownloadResume}
                variant="outline"
                className="w-full sm:w-auto border-2 border-amber-400/60 text-amber-300 hover:bg-amber-400/10 hover:border-amber-300 transition-all duration-300 px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg backdrop-blur-sm"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download Resume (PDF)
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            {/* Response Time */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-stone-900/50 border border-amber-400/20 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 mb-4 mx-auto">
                <MessageSquare className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-amber-300 mb-2">Quick Response</h3>
              <p className="text-stone-400 text-sm">I typically respond within 24 hours</p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-stone-900/50 border border-amber-400/20 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 mb-4 mx-auto">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="font-bold text-amber-300 mb-2">Location</h3>
              <p className="text-stone-400 text-sm">Islamabad, Pakistan (Open to Remote)</p>
            </motion.div>

            {/* Availability */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-stone-900/50 border border-amber-400/20 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 mb-4 mx-auto">
                <span className="text-xl">✓</span>
              </div>
              <h3 className="font-bold text-amber-300 mb-2">Currently Available</h3>
              <p className="text-stone-400 text-sm">Open for Data Science & Analytics opportunities</p>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h3 className="text-lg sm:text-xl font-bold text-stone-200 mb-4 sm:mb-6">Connect On Social Media</h3>
            <div className="flex justify-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-900/30 border border-amber-400/50 text-amber-300 hover:bg-amber-900/50 hover:border-amber-300 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-400/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-3 sm:mb-4">Let's Work Together</h3>
            <p className="text-sm sm:text-base text-stone-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm excited to collaborate on projects that leverage data for strategic advantage. Whether you're looking to:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-3 rounded-lg bg-stone-900/50">
                <p className="text-amber-300 font-semibold text-sm">📊 Analyze Complex Data</p>
              </div>
              <div className="p-3 rounded-lg bg-stone-900/50">
                <p className="text-amber-300 font-semibold text-sm">📈 Build Interactive Dashboards</p>
              </div>
              <div className="p-3 rounded-lg bg-stone-900/50">
                <p className="text-amber-300 font-semibold text-sm">🚀 Deploy Data Apps</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-300 mb-4 sm:mb-6">
              Let's have a conversation. <span className="text-amber-300 font-semibold">Reach out today!</span>
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-stone-400 text-sm">
              💡 Tip: Check out my GitHub for more project examples and feel free to contribute or fork any project!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
