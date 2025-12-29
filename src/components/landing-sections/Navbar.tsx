
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { name: "./about", href: "#about" },
  { name: "./projects", href: "#projects" },
  { name: "./skills", href: "#skills" },
  { name: "./coding", href: "#coding" },
  { name: "./contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
      style={{ boxShadow: "0 0 20px hsl(120 100% 50% / 0.1)" }}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <Terminal className="w-5 h-5 text-primary glow-text" />
          <span className="text-terminal-cyan">{"~/"}</span>
          <span className="text-primary">soumojit</span>
          <span className="status-dot status-online ml-2" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all font-mono text-sm border border-transparent hover:border-primary/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded border-glow hover:bg-primary/10 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card/95 border-t border-border backdrop-blur-md"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
              <span className="text-terminal-cyan">$</span> 
              <span>ls -la navigation/</span>
              <span className="status-dot status-info" />
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-mono py-2 pl-4 border-l-2 border-border hover:border-primary hover:bg-primary/5 rounded-r"
              >
                <span className="text-terminal-cyan mr-2">&gt;</span>
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;



