
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Target, Terminal } from "lucide-react";
import TerminalWindow from "../terminal/TerminalWindow";

const features = [
  {
    icon: GraduationCap,
    title: "education.txt",
    command: "cat education.txt",
    description: "B.Tech in CSE @ MCKV Institute of Engineering (2024-2028), currently in 2nd year.",
  },
  {
    icon: Code2,
    title: "skills.json",
    command: "cat skills.json | jq .",
    description: "Building scalable web apps with React, Next.js, Node.js, and modern databases.",
  },
  {
    icon: Target,
    title: "achievements.log",
    command: "tail -f achievements.log",
    description: "200+ problems on LeetCode (Max Rating: 1512). Passionate about algorithms.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="text-accent">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-chart-3">~/about</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">ls -la</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 20px hsl(120 100% 50% / 0.3)" }}>
            {"/* ABOUT_ME */"}
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-primary">//</span> A passionate developer focused on building impactful web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <TerminalWindow title={feature.title}>
                <div className="mb-3">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-foreground">{feature.command}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* ASCII Stats */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-xs text-muted-foreground text-center hidden md:block"
        >
{`┌─────────────────────────────────────────────────────────────────┐
│  STATS: Projects: 10+ | Commits: 500+ | Coffee: ∞ | Bugs: 0*   │
│  *may contain traces of bugs                                    │
└─────────────────────────────────────────────────────────────────┘`}
        </motion.pre>
      </div>
    </section>
  );
};

export default About;
