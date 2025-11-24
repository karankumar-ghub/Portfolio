import React, { useState, useEffect } from 'react';

const TimeStatus = ({ isDark }) => {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("Awake");

  useEffect(() => {
    const updateTime = () => {
      // Get current time in India (IST)
      const now = new Date();
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      setTime(timeString);

      // Simple logic: Awake between 6 AM and 11 PM
      const indiaHour = parseInt(new Intl.DateTimeFormat('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour: 'numeric', 
        hour12: false 
      }).format(now));

      if (indiaHour >= 6 && indiaHour < 23) {
        setStatus("Awake");
      } else {
        setStatus("Sleeping");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border backdrop-blur-md shadow-md
      ${isDark 
        ? 'border-white/10 bg-white/5 text-zinc-300' 
        : 'border-black/20 bg-cyan-500/5 text-black'}
    `}>
      <div className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
            ${status === "Awake" ? 'bg-green-400' : 'bg-orange-400'}
        `}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3
            ${status === "Awake" ? 'bg-green-500' : 'bg-orange-500'}
        `}></span>
      </div>
      
      <div className="flex flex-col leading-none">
         <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">India • {time}</span>
         <span className="text-xs font-bold">{status === "Awake" ? "Open to Work" : "Currently Offline"}</span>
      </div>
    </div>
  );
};

export default TimeStatus;