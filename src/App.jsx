import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation(); // For page transitions

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 cursor-none
      ${isDark 
        ? 'bg-zinc-950 text-zinc-200 selection:bg-cyan-500/30 selection:text-cyan-200' 
        : 'bg-white text-zinc-900 selection:bg-cyan-200 selection:text-cyan-900'
      }
    `}>
      <ScrollToTop />
      <CustomCursor isDark={isDark} />
      
      {/* Background Noise */}
      <div className={`fixed inset-0 opacity-[0.03] pointer-events-none z-0
        ${isDark ? 'bg-[url("https://grainy-gradients.vercel.app/noise.svg")] invert' : 'bg-[url("https://grainy-gradients.vercel.app/noise.svg")]'}
      `}></div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/projects" element={<ProjectsPage isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
          <Route path="*" element={<NotFound isDark={isDark} />} />
        </Routes>
      </main>
    </div>
  );
}