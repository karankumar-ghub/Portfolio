import React from 'react';

const Loading = ({ isDark }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-500
      ${isDark ? 'bg-zinc-950' : 'bg-zinc-100'} 
    `}>
      <div className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 border-4 border-cyan-500 border-t-transparent animate-spin"></span>
      </div>
    </div>
  );
};

export default Loading;