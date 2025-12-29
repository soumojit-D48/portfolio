import { motion } from "framer-motion";

interface CommandLineProps {
  command: string;
  output?: string;
  showCursor?: boolean;
  delay?: number;
}

const CommandLine = ({ command, output, showCursor = false, delay = 0 }: CommandLineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="mb-2"
    >
      <div className="flex items-center gap-2">
        <span className="text-accent">visitor@portfolio</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-chart-3">~</span>
        <span className="text-muted-foreground">$</span>
        <span className="text-foreground">{command}</span>
        {showCursor && (
          <span className="inline-block w-2 h-4 bg-primary cursor-blink" />
        )}
      </div>
      {output && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="text-muted-foreground mt-1 pl-4"
        >
          {output}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CommandLine;
