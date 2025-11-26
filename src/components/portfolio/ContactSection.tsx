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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Ready to Uncover Hidden Patterns in Your Data?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate on data-driven projects that transform raw information into strategic decisions. Whether you need exploratory analysis, machine learning models, interactive dashboards, or custom data applications—I'm here to help.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* Primary CTA - Email */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-bold px-10 py-6 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me: jamshedsaiin@gmail.com
              </Button>
            </motion.div>

            {/* Secondary CTA - Download Resume */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleDownloadResume}
                variant="outline"
                className="border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-all duration-300 px-10 py-6 text-lg backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume (PDF)
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Response Time */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4 mx-auto">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-bold text-cyan-300 mb-2">Quick Response</h3>
              <p className="text-slate-400 text-sm">I typically respond within 24 hours</p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4 mx-auto">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="font-bold text-cyan-300 mb-2">Location</h3>
              <p className="text-slate-400 text-sm">Islamabad, Pakistan (Open to Remote)</p>
            </motion.div>

            {/* Availability */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 mb-4 mx-auto">
                <span className="text-xl">✓</span>
              </div>
              <h3 className="font-bold text-cyan-300 mb-2">Currently Available</h3>
              <p className="text-slate-400 text-sm">Open for Data Science & Analytics opportunities</p>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-xl font-bold text-slate-200 mb-6">Connect On Social Media</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-900/30 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-300 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-cyan-900/30 to-sky-900/30 border border-cyan-400/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Let's Work Together</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm excited to collaborate on projects that leverage data for strategic advantage. Whether you're looking to:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-slate-900/50">
                <p className="text-cyan-300 font-semibold text-sm">📊 Analyze Complex Data</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50">
                <p className="text-cyan-300 font-semibold text-sm">📈 Build Interactive Dashboards</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50">
                <p className="text-cyan-300 font-semibold text-sm">🚀 Deploy Data Apps</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6">
              Let's have a conversation. <span className="text-cyan-300 font-semibold">Reach out today!</span>
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-bold px-12 py-6 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
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
            <p className="text-slate-400 text-sm">
              💡 Tip: Check out my GitHub for more project examples and feel free to contribute or fork any project!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};