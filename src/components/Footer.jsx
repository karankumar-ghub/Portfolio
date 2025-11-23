import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { SOCIAL_LINKS } from '../constants'; // Import the links

const Footer = ({ isDark }) => (
  <footer className={`py-20 px-6 md:px-20 border-t ${isDark ? 'border-white/10 bg-zinc-950' : 'border-black/10 bg-zinc-100'}`}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Reveal>
             <h2 className={`text-3xl font-black tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-black'}`}>KK.</h2>
          </Reveal>
          <Reveal delay={0.1}>
             <p className={`max-w-sm text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
               Crafting digital experiences with code and creativity. Based in Bulandshahr, India.
             </p>
          </Reveal>
        </div>
        
        <div>
          <Reveal delay={0.2}>
             <h4 className={`font-bold mb-6 uppercase tracking-wider text-sm ${isDark ? 'text-white' : 'text-black'}`}>Sitemap</h4>
          </Reveal>
          <ul className="space-y-4 flex flex-col">
            {['Home', 'Projects', 'About', 'Contact'].map((item, i) => {
               const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
               return (
                 <Reveal key={item} delay={0.3 + (i * 0.05)}>
                     <Link 
                        to={path}
                        className={`text-sm w-fit interactive hover:translate-x-1 transition-transform ${isDark ? 'text-zinc-400 hover:text-cyan-400' : 'text-zinc-600 hover:text-cyan-600'}`}
                      >
                        {item}
                      </Link>
                 </Reveal>
               );
            })}
          </ul>
        </div>

        <div>
          <Reveal delay={0.2}>
             <h4 className={`font-bold mb-6 uppercase tracking-wider text-sm ${isDark ? 'text-white' : 'text-black'}`}>Socials</h4>
          </Reveal>
          <ul className="space-y-4">
            {SOCIAL_LINKS.map((social, i) => (
              <Reveal key={social.name} delay={0.3 + (i * 0.05)}>
                  <li>
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`text-sm interactive hover:translate-x-1 transition-transform block ${isDark ? 'text-zinc-400 hover:text-cyan-400' : 'text-zinc-600 hover:text-cyan-600'}`}
                    >
                      {social.name}
                    </a>
                  </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono ${isDark ? 'border-white/10 text-zinc-500' : 'border-black/10 text-zinc-400'}`}>
        <p>© {new Date().getFullYear()} Karan Kumar. All Rights Reserved.</p>
        <p>Designed & Built by Karan Kumar</p>
      </div>
    </div>
  </footer>
);

export default Footer;