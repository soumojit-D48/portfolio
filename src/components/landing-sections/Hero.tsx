
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Terminal } from "lucide-react";
import TypeWriter from "../terminal/TypeWriter";
import GlitchText from "../terminal/GlitchText";
import MatrixRain from "../terminal/MatrixRain";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [bootSequence, setBootSequence] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setBootSequence(1), 500),
      setTimeout(() => setBootSequence(2), 1200),
      setTimeout(() => setBootSequence(3), 1800),
      setTimeout(() => setShowContent(true), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <MatrixRain />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Boot Sequence with Status Dots */}
          <div className="mb-8 text-sm space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: bootSequence >= 1 ? 1 : 0 }}
              className="flex items-center gap-2"
            >
              <span className="status-dot status-warning" />
              <span className="text-terminal-amber">[SYSTEM]</span>
              <span className="text-muted-foreground">Initializing portfolio...</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: bootSequence >= 2 ? 1 : 0 }}
              className="flex items-center gap-2"
            >
              <span className="status-dot status-info" />
              <span className="text-terminal-cyan">[SYSTEM]</span>
              <span className="text-muted-foreground">Loading developer profile...</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: bootSequence >= 3 ? 1 : 0 }}
              className="flex items-center gap-2"
            >
              <span className="status-dot status-online" />
              <span className="text-terminal-green">[SUCCESS]</span>
              <span className="text-primary">Welcome to the matrix.</span>
            </motion.div>
          </div>

          {showContent && (
            <>
              {/* Terminal Prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 mb-4 text-lg"
              >
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-terminal-cyan">root@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-terminal-amber">~</span>
                <span className="text-muted-foreground">$</span>
                <TypeWriter text="whoami" delay={80} showCursor={false} />
              </motion.div>

              {/* Name with Controlled Glow */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4"
                style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}
              >
                <GlitchText text="SOUMOJIT DAS" />
              </motion.h1>

              {/* Title with Color Coding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl mb-6 font-mono"
              >
                <span className="text-terminal-cyan">&gt;</span>{" "}
                <span className="text-primary">Full-Stack Developer</span>{" "}
                <span className="text-terminal-amber">&&</span>{" "}
                <span className="text-terminal-cyan">CS Engineering Student</span>
              </motion.div>

              {/* Location with Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mb-8 flex items-center gap-2 flex-wrap"
              >
                <span className="text-terminal-cyan">$</span>
                <span className="text-muted-foreground">location:</span>
                <span className="text-foreground">Howrah, West Bengal, India</span>
                <span className="status-dot status-online" />
                <span className="text-terminal-green text-sm">Available for work</span>
              </motion.div>

              {/* ASCII Art Divider with Border Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="border-glow rounded p-4 mb-8 hidden md:block"
              >
                <pre className="text-primary text-xs glow-text">
{`╔══════════════════════════════════════════════════════════════╗
║  Building the future, one commit at a time.                  ║
╚══════════════════════════════════════════════════════════════╝`}
                </pre>
              </motion.div>

              {/* Social Links with Enhanced Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex items-center gap-4 mb-12 flex-wrap"
              >
                {[
                  { icon: Github, href: "https://github.com/soumojitdas", label: "GitHub", cmd: "git remote -v", color: "border-glow" },
                  { icon: Linkedin, href: "https://linkedin.com/in/soumojitdas", label: "LinkedIn", cmd: "linkedin --connect", color: "border-glow-cyan" },
                  { icon: Twitter, href: "https://x.com/soumojitdas", label: "X", cmd: "curl twitter.com", color: "border-glow" },
                  { icon: Mail, href: "mailto:soumojitdas107@gmail.com", label: "Email", cmd: "mail -s 'Hello'", color: "border-glow-red" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded ${social.color} bg-card hover:bg-primary/10 transition-all`}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card border border-primary rounded text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-glow">
                      <span className="text-terminal-cyan">$</span> {social.cmd}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="inline-block"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-primary hover:text-accent transition-colors cursor-pointer flex items-center gap-2 border-glow rounded px-4 py-2"
                >
                  <span className="text-sm terminal-prompt">scroll_down</span>
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
