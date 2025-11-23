import React, { useState, useEffect } from 'react';

const CustomCursor = ({ isDark }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    setIsVisible(isDesktop);

    if (!isDesktop) return;

    const updateMousePos = (ev) => {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, []);

  // NEW: Handle Scroll & Hover Detection
  useEffect(() => {
    if (!isVisible) return;

    const checkHover = () => {
      // Use the current mouse position to find what's underneath
      // We need to use the DOM state directly for scroll updates to be instant
      const element = document.elementFromPoint(mousePos.x, mousePos.y);
      if (element) {
        const interactive = element.closest('button, a, input, textarea, select, .interactive');
        setIsHovering(!!interactive);
      }
    };

    // Check on mouse move
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('button, a, input, textarea, select, .interactive');
      setIsHovering(!!interactive);
    };

    window.addEventListener('scroll', checkHover, { passive: true }); // Check when scrolling
    document.addEventListener('mouseover', handleMouseOver); // Check when moving mouse

    return () => {
      window.removeEventListener('scroll', checkHover);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mousePos]); // Re-binds when mousePos updates to keep coordinates fresh

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed pointer-events-none z-[100] transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center mix-blend-difference bg-white
        ${isHovering ? 'w-24 h-24 opacity-90' : 'w-4 h-4 opacity-100'}
      `}
      style={{ left: mousePos.x, top: mousePos.y }}
    />
  );
};

export default CustomCursor;