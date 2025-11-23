import React from 'react';

const Marquee = ({ isDark, items }) => (
  <div className={`relative py-8 overflow-hidden border-y
    ${isDark ? 'bg-zinc-950 border-white/10' : 'bg-white border-zinc-200'}
  `}>
    <div className="flex gap-12 animate-marquee whitespace-nowrap px-4">
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
           {items.map((item, idx) => (
             <span key={idx} className={`text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-10
               ${isDark ? 'text-white' : 'text-black'}
             `}>
               {item}
             </span>
           ))}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Marquee;