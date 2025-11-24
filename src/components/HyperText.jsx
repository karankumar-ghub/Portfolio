import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=";

const HyperText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const iterations = useRef(0);

  const triggerAnimation = () => {
    let iteration = 0;
    clearInterval(iterations.current);

    iterations.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(iterations.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  // Trigger on initial load
  useEffect(() => {
    triggerAnimation();
  }, [text]);

  return (
    <motion.span
      className={`inline-block font-mono cursor-default interactive ${className}`}
      onMouseEnter={triggerAnimation}
    >
      {displayText}
    </motion.span>
  );
};

export default HyperText;