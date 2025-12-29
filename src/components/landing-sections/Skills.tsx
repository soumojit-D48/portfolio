

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu } from "lucide-react";
import TerminalWindow from "../terminal/TerminalWindow";

const skillCategories = [
  {
    title: "languages",
    command: "echo $LANGUAGES",
    skills: ["JavaScript", "TypeScript", "Java", "Python"],
    color: "text-terminal-cyan",
  },
  {
    title: "frontend",
    command: "npm list --depth=0",
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"],
    color: "text-terminal-green",
  },
  {
    title: "backend",
    command: "node --version && npm --version",
    skills: ["Node.js", "Express.js"],
    color: "text-terminal-amber",
  },
  {
    title: "database_tools",
    command: "docker ps -a",
    skills: ["MongoDB", "PostgreSQL", "Git", "Docker", "Prisma"],
    color: "text-terminal-cyan",
  },
  {
    title: "soft_skills",
    command: "cat ~/.personality",
    skills: ["Teamwork", "Public Speaking", "Problem Solving"],
    color: "text-terminal-purple",
  },
  {
    title: "languages_known",
    command: "locale -a",
    skills: ["English", "Bengali", "Hindi"],
    color: "text-terminal-amber",
  },
];

const interests = ["Open-Source Contribution", "Competitive Coding", "Blogging"];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Cpu className="w-6 h-6 text-primary glow-text" />
            <span className="text-terminal-cyan">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-amber">~/skills</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">neofetch</span>
            <span className="status-dot status-online" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}>
            {"/* SKILLS */"}
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-terminal-cyan">//</span> Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Neofetch Style Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ASCII Art */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalWindow title="neofetch">
              <pre className="text-primary text-xs md:text-sm leading-relaxed">
{`
   ███████╗ ██████╗ ██╗   ██╗███╗   ███╗ ██████╗ 
   ██╔════╝██╔═══██╗██║   ██║████╗ ████║██╔═══██╗
   ███████╗██║   ██║██║   ██║██╔████╔██║██║   ██║
   ╚════██║██║   ██║██║   ██║██║╚██╔╝██║██║   ██║
   ███████║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║╚██████╔╝
   ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ 
`}
              </pre>
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="status-dot status-online" />
                  <span className="text-terminal-cyan">OS:</span>
                  <span className="text-muted-foreground">Developer Linux</span>
                </div>
                <div>
                  <span className="text-terminal-cyan">Host:</span>
                  <span className="text-muted-foreground ml-2">MCKV Institute</span>
                </div>
                <div>
                  <span className="text-terminal-green">Kernel:</span>
                  <span className="text-muted-foreground ml-2">Full-Stack v2.0</span>
                </div>
                <div>
                  <span className="text-terminal-amber">Uptime:</span>
                  <span className="text-muted-foreground ml-2">2 years (studying)</span>
                </div>
                <div>
                  <span className="text-terminal-cyan">Shell:</span>
                  <span className="text-muted-foreground ml-2">zsh with oh-my-zsh</span>
                </div>
                <div>
                  <span className="text-terminal-purple">DE:</span>
                  <span className="text-muted-foreground ml-2">VS Code</span>
                </div>
                <div>
                  <span className="text-terminal-green">Theme:</span>
                  <span className="text-primary ml-2">Matrix Green</span>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-4">
            {skillCategories.slice(0, 4).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 }}
              >
                <TerminalWindow title={category.title}>
                  <div className="mb-2 text-xs flex items-center gap-2">
                    <span className="text-terminal-cyan">$</span>
                    <span className="text-foreground">{category.command}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-2 py-1 text-xs font-medium border border-border rounded hover:border-primary hover:text-primary transition-colors cursor-default ${category.color}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TerminalWindow>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Skills */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {skillCategories.slice(4).map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + categoryIndex * 0.1 }}
            >
              <TerminalWindow title={category.title}>
                <div className="mb-2 text-xs flex items-center gap-2">
                  <span className="text-terminal-cyan">$</span>
                  <span className="text-foreground">{category.command}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs font-medium border border-border rounded hover:border-primary hover:text-primary transition-colors cursor-default ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="inline-block">
            <TerminalWindow title="interests">
              <div className="mb-3 text-xs flex items-center gap-2">
                <span className="status-dot status-info" />
                <span className="text-terminal-cyan">$</span>
                <span className="text-foreground">cat ~/interests.txt</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 text-sm font-medium border border-primary bg-primary/10 rounded ${
                      index === 0 ? "text-terminal-green" : 
                      index === 1 ? "text-terminal-cyan" : 
                      "text-terminal-amber"
                    }`}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;