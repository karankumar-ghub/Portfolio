import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Loading from './components/Loading';


const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Lab = lazy(() => import('./pages/Lab'));




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
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/projects" element={<ProjectsPage isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/projects/:id" element={<ProjectDetails isDark={isDark} />} />
          <Route path="/lab" element={<Lab isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
          <Route path="*" element={<NotFound isDark={isDark} />} />
          
        </Routes>
        </Suspense>
      </main>
    </div>
  );
}