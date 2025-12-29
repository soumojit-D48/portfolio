
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`terminal-card ${className}`}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal Header with Status Dots */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
        <div className="flex items-center gap-1.5">
          <motion.div 
            className="w-3 h-3 rounded-full cursor-pointer hover:brightness-110"
            style={{ 
              background: "hsl(0 100% 60%)",
              boxShadow: "0 0 10px hsl(0 100% 60% / 0.8)" 
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full cursor-pointer hover:brightness-110"
            style={{ 
              background: "hsl(45 100% 55%)",
              boxShadow: "0 0 10px hsl(45 100% 55% / 0.8)" 
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full cursor-pointer hover:brightness-110"
            style={{ 
              background: "hsl(120 100% 50%)",
              boxShadow: "0 0 10px hsl(120 100% 50% / 0.8)" 
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <span className="text-muted-foreground text-sm ml-2 font-mono flex items-center gap-2">
          <span className="text-terminal-cyan">~</span>/{title}
          <span className="status-dot status-online ml-auto" />
        </span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;