import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Marquee from '../components/Marquee';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { SERVICES } from '../constants';
import { Helmet } from 'react-helmet-async';
import Testimonials from '../components/Testimonials'; 
import TimeStatus from '../components/TimeStatus';


const ServicesSection = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <section className={`py-32 px-6 md:px-20 border-b ${isDark ? 'border-white/10 bg-zinc-900/30' : 'border-black/10 bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <Reveal>
               <h2 className={`text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>What I Do</h2>
            </Reveal>
            <Reveal delay={0.1}>
               <p className={`text-xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                 I don't just write code; I build immersive environments. My focus is on creating fluid, responsive, and accessible web applications.
               </p>
            </Reveal>
            <div className="mt-12">
               <Reveal delay={0.2}>
                  <button onClick={() => navigate('/contact')} className={`inline-flex items-center gap-2 border-b-2 pb-1 font-bold interactive
                     ${isDark ? 'border-cyan-400 text-cyan-400' : 'border-black text-black'}
                  `}>
                     Start a project <ArrowRight size={18} />
                  </button>
               </Reveal>
            </div>
          </div>
          
          <div className="space-y-8">
            {SERVICES.map((s, i) => ( // <--- Using SERVICES constant
              <Reveal key={i} delay={i * 0.1}>
                <div className={`p-8 border rounded-2xl transition-all hover:-translate-y-2 interactive
                   ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-white hover:shadow-lg'}
                `}>
                  <div className={`mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{s.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{s.title}</h3>
                  <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = ({ isDark }) => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Helmet>
        <title>Karan Kumar | Creative Developer</title>
        <meta name="description" content="Portfolio of Karan Kumar, a Creative Developer specializing in React, GSAP, and UI/UX Design." />
      </Helmet>
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden pt-32 pb-20">
        <div className={`absolute -right-20 top-1/4 text-[40vh] font-black leading-none opacity-5 select-none pointer-events-none
          ${isDark ? 'text-white' : 'text-black'}
        `}>DEV</div>

        <div className="max-w-5xl z-10">
           <Reveal>
           <div className="mb-8">
        <TimeStatus isDark={isDark} />
     </div>
           </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10 interactive
              ${isDark ? 'text-white' : 'text-zinc-900'}
            `}>
              CREATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">DEVELOPER.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-xl md:text-3xl max-w-3xl font-light leading-relaxed mb-16
              ${isDark ? 'text-zinc-400' : 'text-zinc-600'}
            `}>
              I'm <span className={isDark ? 'text-white font-medium' : 'text-black font-medium'}>Karan Kumar</span>. 
              I construct digital experiences that blend aesthetic perfection with engineering excellence.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => navigate('/projects')}
                className={`group px-10 py-6 rounded-full text-lg font-bold flex items-center gap-4 transition-all interactive
                  ${isDark 
                    ? 'bg-white text-black hover:bg-cyan-400' 
                    : 'bg-black text-white hover:bg-cyan-600'
                  }
                `}
              >
                See My Work 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                className={`px-10 py-6 rounded-full text-lg font-bold border flex items-center gap-4 transition-all interactive
                  ${isDark 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-black/20 text-black hover:bg-black/5'
                  }
                `}
              >
                Contact Me
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee isDark={isDark} items={["Frontend", "React", "Design", "GSAP", "UI/UX", "Creative"]} />
      <FeaturedProjects isDark={isDark} />
      <ServicesSection isDark={isDark} />
      <Testimonials isDark={isDark} />
      <Footer isDark={isDark} />
    </PageTransition>
  );
};

export default Home;