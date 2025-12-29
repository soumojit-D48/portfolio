import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

const TypeWriter = ({ 
  text, 
  delay = 50, 
  className = "", 
  onComplete,
  showCursor = true 
}: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
        onComplete?.();
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span 
          className="inline-block w-2 h-5 bg-primary ml-1 cursor-blink"
          animate={{ opacity: isComplete ? [1, 0] : 1 }}
          transition={{ duration: 0.5, repeat: isComplete ? Infinity : 0 }}
        />
      )}
    </span>
  );
};

export default TypeWriter;
