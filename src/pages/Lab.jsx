import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Beaker, ArrowUpRight, FlaskConical } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

const LAB_ITEMS = [
  { 
    name: "3D Card Hover", 
    desc: "Mouse-tracking perspective effect using CSS transforms.", 
    tags: ["CSS", "Math"],
    link: "#" 
  },
  { 
    name: "Magnetic Button", 
    desc: "Button that sticks to the cursor using Framer Motion spring physics.", 
    tags: ["React", "Framer"],
    link: "#" 
  },
  { 
    name: "Grainy Gradient", 
    desc: "SVG noise filter overlay applied to moving CSS gradients.", 
    tags: ["SVG", "Design"],
    link: "#" 
  },
  { 
    name: "Text Scramble", 
    desc: "Matrix-style character decoding animation on hover.", 
    tags: ["JS", "Algorithm"],
    link: "#" 
  }
];

const Lab = ({ isDark }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>The Lab | Karan Kumar</title>
        <meta name="description" content="Experimental UI components and creative coding playground." />
      </Helmet>

      <section className="min-h-screen pt-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-20">
            <Reveal>
                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-full ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                        <FlaskConical size={32} />
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-black ${isDark ? 'text-white' : 'text-black'}`}>The Lab</h1>
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <p className={`text-xl max-w-2xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    A playground for UI experiments, micro-interactions, and visual tests that didn't make it into full projects.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {LAB_ITEMS.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                    <a href={item.link} className={`group block h-full p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 interactive
                        ${isDark 
                            ? 'border-white/10 bg-zinc-900/50 hover:bg-zinc-900 hover:border-cyan-500/30' 
                            : 'border-black/10 bg-zinc-50 hover:bg-white hover:shadow-xl'}
                    `}>
                        <div className="flex justify-between items-start mb-8">
                            <Beaker className={isDark ? 'text-cyan-400' : 'text-cyan-600'} />
                            <ArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-white' : 'text-black'}`} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{item.name}</h3>
                        <p className={`text-sm mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.desc}</p>
                        <div className="flex gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className={`text-xs font-mono px-2 py-1 rounded border
                                    ${isDark ? 'border-white/10 text-zinc-500' : 'border-black/10 text-zinc-400'}
                                `}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                </Reveal>
            ))}
        </div>
      </section>
      <Footer isDark={isDark} />
    </PageTransition>
  );
};

export default Lab;