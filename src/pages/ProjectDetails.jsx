import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion'
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { PROJECTS } from '../constants';

const ProjectDetails = ({ isDark }) => {
  const { id } = useParams(); // Get the "id" from the URL
  const navigate = useNavigate();
  
  // Find the specific project data
  const project = PROJECTS.find((p) => p.id === id);


  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // If project doesn't exist (e.g. wrong URL), go back to projects page
  useEffect(() => {
    if (!project) navigate('/projects');
  }, [project, navigate]);

  if (!project) return null;

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.desc} />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 origin-left z-50 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        style={{ scaleX }}
      />
      <section className="min-h-screen pt-32 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className={`mb-12 flex items-center gap-2 text-sm font-bold uppercase tracking-wider interactive hover:opacity-70 transition-opacity
             ${isDark ? 'text-zinc-400' : 'text-zinc-600'}
          `}
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>

        {/* Header */}
        <Reveal>
            <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4 block">{project.category}</span>
            <h1 className={`text-5xl md:text-8xl font-black mb-8 leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
            {project.title}
            </h1>
        </Reveal>

        {/* Hero Image */}
        <Reveal delay={0.1}>
            <div className="w-full h-full aspect-video rounded-3xl overflow-hidden mb-16 bg-zinc-900">
            <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy" 
            decoding="async" 
            className="w-full h-full object-cover" />
            </div>
        </Reveal>

        {/* Content / Case Study Block */}
<div className="mb-24 max-w-5xl mx-auto">
  {/* Technologies + Links (Top) */}
  <div className="mb-12 space-y-8">
    <Reveal delay={0.2}>
      <div>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-mono border ${
                isDark
                  ? 'border-white/20 text-zinc-300'
                  : 'border-black/10 text-zinc-600'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.3}>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://flipzonekk.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold border transition-all interactive
            ${isDark ? 'bg-white text-black hover:bg-cyan-400' : 'bg-black text-white hover:bg-cyan-600'}
          `}
        >
          Live Demo <ExternalLink size={16} />
        </a>
        <a
          href="https://github.com/karankumar-ghub/Flipzone"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold border transition-all interactive
            ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/5'}
          `}
        >
          <Github size={18} /> Code
        </a>
      </div>
    </Reveal>
  </div>

  {/* Story Sections (Below) */}
  <div className="space-y-12 max-w-3xl">
    <Reveal delay={0.2}>
      <div>
        <h3
          className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Overview
        </h3>
        <div
          className={`text-lg leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
          dangerouslySetInnerHTML={{ __html: project.desc }}
        />
      </div>
    </Reveal>

    <Reveal delay={0.3}>
      <div>
        <h3
          className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          The Challenge
        </h3>
        <div
          className={`text-lg leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
          dangerouslySetInnerHTML={{ __html: project.challenge }}
        />
      </div>
    </Reveal>

    <Reveal delay={0.4}>
      <div>
        <h3
          className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          The Solution
        </h3>
        <div
          className={`text-lg  leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
          dangerouslySetInnerHTML={{ __html: project.solution }}
        />
      </div>
    </Reveal>
  </div>
</div>
      </section>
      <div className={`my-32 p-12 rounded-3xl text-center border relative overflow-hidden
    ${isDark ? 'border-white/10 bg-zinc-900' : 'border-black/10 bg-zinc-100'}
`}>
    <div className="relative z-10">
        <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Like what you see?
        </h2>
        <p className={`text-xl mb-8 max-w-xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            I am currently available for freelance work. If you have a project that needs some creative love, let's talk.
        </p>
        <button 
            onClick={() => navigate('/contact')}
            className={`px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 interactive
                ${isDark ? 'bg-cyan-400 text-black hover:bg-white' : 'bg-black text-white hover:bg-cyan-600'}
            `}
        >
            Start a Project
        </button>
    </div>

    {/* Decorative BG element */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className={`absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-[spin_20s_linear_infinite]
            ${isDark 
                ? 'bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]' 
                : 'bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)]'}
        `}></div>
    </div>
</div>
      <Footer isDark={isDark} />
    </PageTransition>
  );
};

export default ProjectDetails;