import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-accent z-0"
        variants={{
          hover: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 2, -2, 0],
            transition: { duration: 0.3, repeat: Infinity }
          }
        }}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-destructive z-0"
        variants={{
          hover: {
            x: [0, 2, -2, 1, -1, 0],
            y: [0, -1, 1, -2, 2, 0],
            transition: { duration: 0.3, repeat: Infinity }
          }
        }}
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;
