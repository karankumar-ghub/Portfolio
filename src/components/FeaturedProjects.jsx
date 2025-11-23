import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { PROJECTS } from '../constants';

const FeaturedProjects = ({ isDark }) => {
  return (
    <section className={`py-32 px-6 md:px-20 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
           <h2 className={`text-5xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Selected Work</h2>
           <span className="hidden md:block font-mono text-sm opacity-50 interactive">SCROLL DOWN</span>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {PROJECTS.map((project, idx) => (
        <Reveal key={idx} delay={idx * 0.2}>
            <Link to={`/projects/${project.id}`} key={idx} className="group w-full interactive">
              
              {/* --- DESKTOP LAYOUT (Image + Hover Overlay) --- */}
              <div className="hidden md:block relative overflow-hidden rounded-3xl aspect-[21/9] cursor-pointer bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"    // <--- Add this
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.3]" 
                />
                
                {/* Overlay Content - Reveal on Hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 p-8 text-center">
                    <span className="font-mono text-xs md:text-sm text-cyan-400 uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.category}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.title}
                    </h3>
                    <p className="text-lg text-zinc-300 max-w-xl mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {project.desc}
                    </p>
                    
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        <span className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors">
                            View Case Study <ArrowUpRight size={20} />
                        </span>
                    </div>
                </div>
              </div>

              {/* --- MOBILE LAYOUT (Image Top, Details Bottom) --- */}
              <div className="md:hidden">
                 <div className="relative overflow-hidden rounded-3xl aspect-[16/9] mb-6 bg-zinc-900">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"    // <--- Add this
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="font-mono text-xs text-cyan-500 uppercase tracking-widest block mb-1">
                                {project.category}
                            </span>
                            <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                                {project.title}
                            </h3>
                        </div>
                        <a href="#" className={`p-3 rounded-full border ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                           <ArrowUpRight size={20} />
                        </a>
                    </div>
                    
                    <p className={`text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t, i) => (
                           <span key={i} className={`text-xs font-mono px-3 py-1 rounded-full border
                              ${isDark ? 'text-zinc-400 border-zinc-800' : 'text-zinc-600 border-zinc-300'}
                           `}>
                              {t}
                           </span>
                        ))}
                    </div>
                 </div>
              </div>

            </Link>
        </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;