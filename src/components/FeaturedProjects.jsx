import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import Reveal from './Reveal';
import { PROJECTS } from '../constants';

const FeaturedProjects = ({ isDark }) => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const sectionRef = useRef(null);

  // --- VELOCITY TEXT SKEW (Kept this, it's efficient) ---
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewX = useTransform(smoothVelocity, [-1000, 0, 1000], [-5, 0, 5]);
  // --------------------------

  useEffect(() => {
    // Scroll Logic: Check which project is in the middle of the screen
    let ticking = false;
    const mousePosRef = { x: 0, y: 0 };

    // We only track mouse position ONCE per frame to check for hover interactions
    const trackMouseRaw = (e) => {
        mousePosRef.x = e.clientX;
        mousePosRef.y = e.clientY;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Check what element is under the "virtual" mouse position
          const elementUnderCursor = document.elementFromPoint(mousePosRef.x, mousePosRef.y);
          if (elementUnderCursor) {
            const projectRow = elementUnderCursor.closest('[data-project-id]');
            if (projectRow) {
              const id = projectRow.getAttribute('data-project-id');
              const newActive = PROJECTS.find(p => p.id === id);
              if (newActive && newActive.id !== activeProject.id) {
                setActiveProject(newActive);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', trackMouseRaw);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', trackMouseRaw);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeProject]);

  return (
    <section ref={sectionRef} className={`py-32 px-6 md:px-20 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
            <h2 className={`text-5xl md:text-8xl font-black mb-20 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              SELECTED <span className="text-cyan-500">WORK</span>
            </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
            
            {/* --- LIST SECTION (Left) --- */}
            <div className="w-full md:w-1/2 flex flex-col z-10 py-[10vh]"> 
                {PROJECTS.map((project, idx) => (
                    <div 
                        key={idx}
                        data-project-id={project.id}
                        onMouseEnter={() => setActiveProject(project)}
                        className={`group border-b transition-all duration-500 py-16 flex flex-col justify-center interactive cursor-pointer
                            ${isDark ? 'border-white/10' : 'border-black/10'}
                        `}
                    >
                        <Reveal delay={idx * 0.1}>
                            <Link to={`/projects/${project.id}`} className="block overflow-hidden">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className={`font-mono text-xs uppercase tracking-widest transition-colors duration-500
                                        ${activeProject.id === project.id ? 'text-cyan-500' : (isDark ? 'text-zinc-600' : 'text-zinc-400')}
                                    `}>
                                        0{idx + 1} / {project.category}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <motion.h3 
                                        style={{ skewX }}
                                        className={`text-4xl md:text-6xl font-black transition-all duration-500 origin-left
                                            ${isDark 
                                                ? (activeProject.id === project.id ? 'text-white translate-x-4' : 'text-zinc-800 hover:text-zinc-600') 
                                                : (activeProject.id === project.id ? 'text-black translate-x-4' : 'text-zinc-200 hover:text-zinc-300')
                                            }
                                        `}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    
                                    <ArrowUpRight 
                                        className={`transition-all duration-500 opacity-0 -translate-x-4
                                            ${activeProject.id === project.id ? 'opacity-100 translate-x-0' : ''}
                                            ${isDark ? 'text-cyan-500' : 'text-cyan-600'}
                                        `}
                                        size={32}
                                    />
                                </div>
                            </Link>
                        </Reveal>
                    </div>
                ))}
            </div>

            {/* --- PREVIEW IMAGE SECTION (Right - Sticky) --- */}
            <div className="hidden md:block w-1/2 h-[60vh] sticky top-32">
                 {/* Removed 3D Transform styles here */}
                 <div className="w-full h-full relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 shadow-2xl">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                ${activeProject.id === project.id 
                                    ? 'opacity-100 scale-100 translate-y-0 blur-0 z-10'  
                                    : 'opacity-0 scale-90 translate-y-12 blur-lg z-0'   
                                }
                            `}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex flex-wrap gap-2 translate-y-4 opacity-0 transition-all duration-500 delay-100"
                                     style={{ 
                                         opacity: activeProject.id === project.id ? 1 : 0, 
                                         transform: activeProject.id === project.id ? 'translateY(0)' : 'translateY(20px)' 
                                     }}
                                >
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono font-bold text-white/90 border border-white/20 rounded-full bg-black/30 backdrop-blur-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;