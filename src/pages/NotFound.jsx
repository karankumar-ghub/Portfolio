import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const NotFound = ({ isDark }) => {
  return (
    <PageTransition>
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className={`text-[10rem] md:text-[20rem] font-black leading-none opacity-10 select-none
           ${isDark ? 'text-white' : 'text-black'}
        `}>
          404
        </h1>
        <div className="absolute z-10 flex flex-col items-center gap-6">
           <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
             Page Not Found
           </h2>
           <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
             The page you are looking for doesn't exist or has been moved.
           </p>
           <Link 
             to="/" 
             className={`px-8 py-4 rounded-full font-bold transition-all interactive hover:scale-105
                ${isDark ? 'bg-white text-black hover:bg-cyan-400' : 'bg-black text-white hover:bg-cyan-600'}
             `}
           >
             Go Back Home
           </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;