import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GitPullRequest, ChevronDown, ExternalLink , GitMerge } from "lucide-react";
import TerminalWindow from "../terminal/TerminalWindow";
import GlitchText from "../terminal/GlitchText";
import CommandLine from "../terminal/CommandLine";
import { projects } from "@/data/Open-source";

const totalPRs = projects.reduce((sum, p) => sum + p.prs.length, 0);

const OpenSource = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (name: string) => {
    setOpenProject(openProject === name ? null : name);
  };

  return (
    <section id="opensource" ref={ref} className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <CommandLine command="cat open-source.log" />

          <div className="mt-8 flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <GlitchText text="Open Source" />
            </h2>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="px-4 py-1.5 rounded-full border border-primary/50 text-primary font-mono text-sm"
              style={{ boxShadow: "0 0 10px hsl(120 100% 50% / 0.2)" }}
            >
              {totalPRs} PRs merged
            </motion.div>
          </div>

          <TerminalWindow title="open-source">
            <div className="space-y-2">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  {/* Project Header */}
                  <button
                    onClick={() => toggleProject(project.name)}
                    className="w-full flex items-center justify-between py-3 px-2 rounded hover:bg-secondary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-foreground font-mono font-bold text-base">
                        {project.name}
                      </span>
                      <span className="text-muted-foreground font-mono text-sm">
                        {project.prs.length} PRs
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openProject === project.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </button>

                  {/* PR List */}
                  <AnimatePresence>
                    {openProject === project.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 border-l border-border/50 ml-2 space-y-1 pb-2">
                          {project.prs.map((pr, prIdx) => (
                            <motion.a
                              key={prIdx}
                              href={pr.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: prIdx * 0.03 }}
                              className="flex items-center gap-3 py-2 px-2 rounded hover:bg-secondary/20 transition-colors group/pr"
                            >
                              <GitMerge className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-sm font-mono">
                                <span className={pr.type === "feat" ? "text-primary" : "text-chart-3"}>
                                  {pr.type}:
                                </span>{" "}
                                <span className="text-foreground/80 group-hover/pr:text-foreground transition-colors underline underline-offset-2 decoration-border group-hover/pr:decoration-primary">
                                  {pr.title}
                                </span>
                              </span>
                              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover/pr:opacity-100 transition-opacity shrink-0 ml-auto" />
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
