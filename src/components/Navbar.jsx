import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react'; // Added Menu, X
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion
import TimeStatus from './TimeStatus';

const Navbar = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = ['Home', 'Projects', 'About', 'Contact', 'Lab'];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
        <Link 
          to="/" 
          className="text-xl font-black tracking-tighter hover:scale-110 transition-transform interactive"
        >
          KK.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 md:gap-8 bg-zinc-900/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">

        <div className="flex items-center gap-2 md:gap-6 bg-zinc-900/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        {navLinks.map((item) => {
             const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
             return (
              <Link
                key={item}
                to={path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors interactive
                  ${isActive(path) ? (isDark ? 'text-cyan-400' : 'text-cyan-600') : 'text-zinc-300 hover:text-white'} 
                `}
              >
                {item}
              </Link>
            );
          })}
          </div>
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className={`hover:${(isDark ? 'text-cyan-400' : 'text-cyan-600')} transition-colors interactive`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-4 z-50">
           <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="bg-white/10 p-2 rounded-full interactive">
             {isDark ? <Sun size={18} /> : <Moon size={18} />}
           </button>
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             aria-label="Toggle Menu" className="bg-white/10 p-2 rounded-full interactive"
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
              ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-black'}
            `}
          >
            {navLinks.map((item, i) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`text-4xl font-black uppercase tracking-tighter interactive
                    ${isActive(path) ? 'text-cyan-500' : 'text-zinc-500'}
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