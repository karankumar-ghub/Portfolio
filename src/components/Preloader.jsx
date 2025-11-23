import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Namaste", "Bonjour", "Ciao", "Hola", "Welcome"];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 140); // Change word every 140ms

    return () => clearTimeout(timeout);
  }, [index]);

  // When words finish, trigger the exit animation
  useEffect(() => {
    if (index === words.length - 1) {
       // Wait a moment on the last word ("Welcome"), then finish
       const t = setTimeout(onComplete, 800); 
       return () => clearTimeout(t);
    }
  }, [index, onComplete]);

  // SVG Curve Path for the "Curtain" effect
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

  const curve = {
    initial: { d: initialPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: targetPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }
  }

  return (
    <motion.div
      variants={{
         initial: { top: 0 },
         exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
      }}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-zinc-950 text-white"
    >
        {/* Animated Greeting Text */}
        <motion.p 
            variants={{
                initial: { opacity: 0 },
                enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
            }}
            initial="initial"
            animate="enter"
            className="text-4xl md:text-6xl font-black tracking-widest flex items-center gap-2"
        >
            <span className="w-4 h-4 rounded-full bg-cyan-500 inline-block"></span>
            {words[index]}
        </motion.p>
        
        {/* The SVG Curve (Optional Polish) */}
        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-zinc-950 z-[-1]">
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
        </svg>
    </motion.div>
  );
};

export default Preloader;