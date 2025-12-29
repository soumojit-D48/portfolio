
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, FileCheck } from "lucide-react";
import TerminalWindow from "../terminal/TerminalWindow";

const certifications = [
  {
    title: "The Joy of Programming using Python",
    issuer: "NPTEL",
    url: "#",
    date: "2024",
    id: "NPTEL-PY-2024",
    color: "text-terminal-cyan",
  },
  {
    title: "AIML Basics Workshop",
    issuer: "Hyper Stack",
    url: "#",
    date: "2024",
    id: "HS-AIML-2024",
    color: "text-terminal-amber",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <FileCheck className="w-6 h-6 text-primary glow-text" />
            <span className="text-terminal-cyan">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-amber">~/certifications</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">gpg --verify certificates/*</span>
            <span className="status-dot status-online" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}>
            {"/* CERTIFICATIONS */"}
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-terminal-cyan">//</span> Professional certifications and courses completed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              <TerminalWindow title={`cert_${index + 1}.pem`}>
                <div className="mb-4 text-xs flex items-center gap-2">
                  <span className="status-dot status-online" />
                  <span className="text-terminal-cyan">$</span>
                  <span className="text-foreground">openssl x509 -in cert_{index + 1}.pem -text</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded border-glow bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary glow-text" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 ${cert.color}`}>
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2 flex items-center gap-2">
                      <span>Issuer:</span>
                      <span className="text-terminal-amber">{cert.issuer}</span>
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-terminal-green">Valid From:</span>
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-terminal-cyan">Serial:</span>
                        <span className="font-mono">{cert.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="status-dot status-online" />
                    <span className="text-xs text-terminal-green">Signature verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-terminal-cyan text-sm hover:text-primary transition-colors">
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </TerminalWindow>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;