import React from 'react';
import PageTransition from '../components/PageTransition';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { PROCESS_STEPS } from '../constants';

const ProjectsPage = ({ isDark }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>Karan Kumar | Creative Developer</title>
        <meta name="description" content="Portfolio of Karan Kumar, a Creative Developer specializing in React, GSAP, and UI/UX Design." />
      </Helmet>
      <div className="pt-32">
         {/* Featured Projects already handles its own internal animation via the component */}
         <FeaturedProjects isDark={isDark} />
         
         {/* Process Section */}
        <div className={`py-20 px-6 md:px-20 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
           <Reveal>
              <h3 className={`text-3xl md:text-5xl font-bold mb-16 ${isDark ? 'text-white' : 'text-black'}`}>My Process</h3>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                 <Reveal key={i} delay={i * 0.1}>
                    <div className="space-y-4">
                        <div className={`text-6xl font-black opacity-20 ${isDark ? 'text-white' : 'text-black'}`}>{step.num}</div>
                        <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{step.title}</h4>
                        <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>{step.desc}</p>
                    </div>
                 </Reveal>
              ))}
           </div>
        </div>
        <Footer isDark={isDark} />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;