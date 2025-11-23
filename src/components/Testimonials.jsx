import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from './Reveal';
import { TESTIMONIALS } from '../constants';

const Testimonials = ({ isDark }) => {
  return (
    <section className={`py-32 px-6 md:px-20 border-b ${isDark ? 'border-white/10 bg-zinc-900/50' : 'border-black/10 bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
            <div className="flex items-center gap-4 mb-16">
                <div className={`p-4 rounded-full ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                    <Quote size={32} />
                </div>
                <h2 className={`text-4xl md:text-6xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                    CLIENT <span className="text-cyan-500">STORIES</span>
                </h2>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                    <div className={`h-full p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2
                        ${isDark 
                            ? 'border-white/10 bg-black/20 hover:bg-white/5 hover:border-cyan-500/30' 
                            : 'border-black/10 bg-white hover:shadow-xl'}
                    `}>
                        <p className={`text-lg leading-relaxed mb-8 italic
                            ${isDark ? 'text-zinc-300' : 'text-zinc-600'}
                        `}>
                            "{item.text}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <div>
                                <h4 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>{item.name}</h4>
                                <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}>
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;