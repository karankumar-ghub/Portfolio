import React from 'react';
import { Layers, Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { TOOLKIT_ITEMS, SKILLS_STATS, EDUCATION_TIMELINE, CERTIFICATIONS } from '../constants';


const Toolkit = ({ isDark }) => (
    <section className={`py-24 px-6 md:px-20 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
       <div className="max-w-7xl mx-auto">
          <Reveal>
             <h3 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>My Toolkit</h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
             {TOOLKIT_ITEMS.map((tool, i) => (
                <Reveal key={i} delay={i * 0.05}>
                    <div className={`flex flex-col items-center justify-center p-6 rounded-xl border interactive transition-colors
                       ${isDark 
                          ? 'border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10' 
                          : 'border-black/10 bg-zinc-50 hover:border-cyan-500/50 hover:bg-cyan-50'}
                    `}>
                       <div className={`mb-3 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{tool.icon}</div>
                       <span className={`font-mono text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{tool.name}</span>
                    </div>
                </Reveal>
             ))}
          </div>
       </div>
    </section>
);

const About = ({ isDark }) => (
  <PageTransition>
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div>
          <Reveal>
              <h2 className={`text-5xl md:text-7xl font-bold mb-12 leading-tight
                ${isDark ? 'text-white' : 'text-zinc-900'}
              `}>
                Bridging the gap between <span className="text-cyan-500">Design</span> and <span className="text-blue-600">Engineering.</span>
              </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
              <div className={`text-xl space-y-8 leading-relaxed
                 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}
              `}>
                <p>I am Karan Kumar, a Frontend Developer and UI Enthusiast currently pursuing my BCA at CCS University.</p>
                <p>My journey started with simple HTML pages and has evolved into building complex, interactive web applications. I obsess over pixel-perfect design, smooth animations, and clean, maintainable code.</p>
              </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-6">
            {SKILLS_STATS.map((skill, i) => (
              <Reveal key={i} delay={0.2 + (i * 0.1)}>
                  <div className={`p-6 rounded-2xl border interactive
                    ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-zinc-50 hover:bg-zinc-100'}
                  `}>
                    <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{skill.val}</div>
                    <div className={`text-sm font-mono uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{skill.label}</div>
                  </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:pl-20">
          <Reveal delay={0.2}>
              <h3 className={`text-2xl font-bold mb-10 flex items-center gap-3
                 ${isDark ? 'text-white' : 'text-black'}
              `}>
                <Layers className="text-cyan-500" /> Education Timeline
              </h3>
          </Reveal>

          <div className={`space-y-12 border-l-2 pl-8 py-2
             ${isDark ? 'border-white/10' : 'border-black/10'}
          `}>
            {EDUCATION_TIMELINE.map((item, i) => (
              <Reveal key={i} delay={0.3 + (i * 0.1)}>
                  <div className="relative interactive">
                    <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4
                       ${isDark ? 'bg-cyan-500 border-zinc-900' : 'bg-cyan-600 border-white'}
                    `}/>
                    <span className={`text-sm font-mono mb-1 block ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{item.year}</span>
                    <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{item.title}</h4>
                    <p className={`text-sm mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{item.place}</p>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{item.desc}</p>
                  </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      
      {/* Toolkit Section */}
      <Toolkit isDark={isDark} />

      <div className={`py-16 border-y ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-zinc-50'}`}>
         <div className="max-w-7xl mx-auto px-6">
            <Reveal>
                <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Additional Certifications</h3>
            </Reveal>
            <div className="flex flex-wrap gap-4">
               {CERTIFICATIONS.map((cert, i) => (
                  <Reveal key={i} delay={i * 0.05} width="auto">
                      <div className={`px-6 py-3 rounded-full border flex items-center gap-3 interactive
                         ${isDark ? 'border-white/20 text-zinc-300' : 'border-black/10 text-zinc-700'}
                      `}>
                         <Check size={16} className="text-cyan-500" />
                         {cert}
                      </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </div>
      <Footer isDark={isDark} />
    </section>
  </PageTransition>
);

export default About;