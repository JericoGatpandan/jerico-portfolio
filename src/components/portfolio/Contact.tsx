import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      
      if (data.success) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="section relative flex items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
                05 — contact
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white display-font">
                Open to <span className="grad-text">collaborations</span>
              </h2>
              <p className="text-lg text-white/70 max-w-md">
                Have a project in mind, a hackathon team to fill, or a role I might fit?
                I'm always happy to chat about full-stack builds, cooperative and civic tech, or AI-assisted tools.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass-strong text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 font-medium">Email</p>
                  <p className="text-white">jericogatpandan0905@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass-strong text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 font-medium">Phone</p>
                  <p className="text-white">+63 991 251 1750</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass-strong text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 font-medium">Location</p>
                  <p className="text-white">Naga City, Philippines</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/JericoGatpandan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg glass-strong glass-hover text-cyan-400 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jericogatpandan/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg glass-strong glass-hover text-purple-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column (Form) */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 lg:p-10 relative overflow-hidden code-card">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    required
                    placeholder="Jericho"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    required
                    placeholder="Rosales"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <select
                  name="project_type"
                  id="project_type"
                  defaultValue=""
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled hidden className="bg-[#060a18] text-white/30">Project Type</option>
                  <option value="fullstack" className="bg-[#060a18]">Full-Stack Development</option>
                  <option value="frontend" className="bg-[#060a18]">Frontend / UI</option>
                  <option value="backend" className="bg-[#060a18]">Backend / Database</option>
                  <option value="other" className="bg-[#060a18]">Other / Inquiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-medium text-white shadow-lg glass-strong glass-hover transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border border-white/10 hover:border-white/30"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
