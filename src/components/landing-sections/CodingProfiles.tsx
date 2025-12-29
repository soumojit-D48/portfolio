
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Trophy, Target, Activity } from "lucide-react";
import TerminalWindow from "../terminal/TerminalWindow";

const profiles = [
  {
    platform: "LeetCode",
    stats: "200+ problems solved",
    highlight: "Max Rating: 1512",
    icon: Code,
    progress: 75,
    url: "https://leetcode.com/",
    color: "text-terminal-amber",
    status: "online",
  },
  {
    platform: "GeeksforGeeks",
    stats: "50+ problems solved",
    highlight: "DSA Practice",
    icon: Trophy,
    progress: 60,
    url: "https://geeksforgeeks.org/",
    color: "text-terminal-cyan",
    status: "warning",
  },
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Activity className="w-6 h-6 text-primary glow-text" />
            <span className="text-terminal-cyan">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-amber">~/coding</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">htop --filter=dsa</span>
            <span className="status-dot status-online" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}>
            {"/* CODING_PROFILES */"}
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-terminal-cyan">//</span> Actively improving problem-solving and algorithmic thinking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              <TerminalWindow title={profile.platform.toLowerCase()}>
                <div className="mb-4 text-xs flex items-center gap-2">
                  <span 
                    className={`status-dot ${
                      profile.status === "online" ? "status-online" : "status-warning"
                    }`}
                  />
                  <span className="text-terminal-cyan">$</span>
                  <span className="text-foreground">curl api.{profile.platform.toLowerCase()}.com/stats</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded border-glow bg-primary/10 flex items-center justify-center">
                    <profile.icon className="w-6 h-6 text-primary glow-text" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 ${profile.color}`}>
                      {profile.platform}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{profile.stats}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-terminal-amber" />
                      <span className="text-terminal-amber font-medium text-sm">{profile.highlight}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="h-2 bg-secondary rounded overflow-hidden border border-border">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${profile.progress}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          className="h-full"
                          style={{ 
                            background: index === 0 
                              ? "hsl(45 100% 55%)" 
                              : "hsl(180 100% 55%)",
                            boxShadow: index === 0
                              ? "0 0 10px hsl(45 100% 55% / 0.5)"
                              : "0 0 10px hsl(180 100% 55% / 0.5)"
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Progress</span>
                        <span className={profile.color}>{profile.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border text-xs flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-terminal-green">STATUS:</span>
                    <span className="text-foreground">Active</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <div className="flex items-center gap-1">
                    <span className="text-terminal-cyan">GRINDING:</span>
                    <span className="text-foreground">Daily</span>
                  </div>
                </div>
              </TerminalWindow>
            </motion.a>
          ))}
        </div>

        {/* Stats ASCII */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 border-glow rounded p-4"
        >
          <pre className="text-xs text-center text-muted-foreground hidden md:block">
{`╭───────────────────────────────────────────╮
│  Total Problems: 250+ | Streak: Active    │
│  Focus: DSA, Algorithms, System Design    │
╰───────────────────────────────────────────╯`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;