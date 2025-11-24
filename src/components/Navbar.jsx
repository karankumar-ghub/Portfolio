import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TimeStatus from './TimeStatus'; // Ensure this path is correct based on your file structure

const Navbar = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = ['Home', 'Projects', 'Lab', 'About', 'Contact'];

  return (
    <>
      {/* 1. REMOVED 'mix-blend-difference' and 'text-white' to fix color issues */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-center transition-colors duration-500
         ${isDark ? 'text-white' : 'text-black'} 
      `}>
        <Link 
          to="/" 
          className="text-xl font-black tracking-tighter hover:scale-110 transition-transform interactive"
        >
          KK.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
           

           <div className={`flex items-center gap-2 backdrop-blur-md px-2 py-2 rounded-full border transition-colors duration-500
              ${isDark 
                ? 'bg-zinc-900/50 border-white/10' 
                : 'bg-white/50 border-black/10 shadow-sm'} 
           `}>
            {navLinks.map((item) => {
                 const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                 const active = isActive(path);
                 
                 return (
                  <Link
                    key={item}
                    to={path}
                    className="relative px-4 py-2 group"
                  >
                    {/* Floating Pill Animation */}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`absolute inset-0 rounded-full -z-10
                          ${isDark ? 'bg-zinc-800' : 'bg-cyan-500 shadow-md'}
                        `}
                      />
                    )}

                    {/* Link Text */}
                    <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative z-10
                      ${active 
                         ? (isDark ? 'text-cyan-400' : 'text-white') // <--- Active Color
                         : (isDark ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-500 group-hover:text-black') // <--- Inactive Color
                      } 
                    `}>
                      {item}
                    </span>
                  </Link>
                );
              })}
              
              <div className={`w-px h-4 mx-2 ${isDark ? 'bg-white/20' : 'bg-black/10'}`}></div>
              
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle Dark Mode" 
                className={`p-2 rounded-full transition-all interactive hover:scale-110
                  ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'}
                `}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
           </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-4 z-50">
           <button 
             onClick={toggleTheme} 
             aria-label="Toggle Dark Mode" 
             className={`p-2 rounded-full interactive transition-colors
                ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}
             `}
           >
             {isDark ? <Sun size={18} /> : <Moon size={18} />}
           </button>
           
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             aria-label="Toggle Menu" 
             className={`p-2 rounded-full interactive transition-colors
                ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}
             `}
           >
             {isOpen ? <X size={18} /> : <Menu size={18} />}
           </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8
              ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}
            `}
          >
            {navLinks.map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`text-4xl font-black uppercase tracking-tighter interactive
                    ${isActive(path) 
                        ? (isDark ? 'text-cyan-400' : 'text-cyan-600') 
                        : (isDark ? 'text-zinc-600' : 'text-zinc-400')
                    }
                  `}
                >
                  {item}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;