
import React from 'react';

export const Logo: React.FC<{ className?: string, hideText?: boolean }> = ({ className = "h-8", hideText = false }) => {
  return (
    <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
      {/* Vortex Icon - Precise Swirl Geometry */}
      <svg viewBox="0 0 100 100" className="h-full w-auto filter drop-shadow-[0_0_12px_rgba(0,112,255,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 35 80 20 65 15" stroke="url(#logo_grad)" strokeWidth="8" strokeLinecap="round"/>
        <path d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50C75 42 70 32 60 28" stroke="url(#logo_grad)" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="10" fill="url(#logo_grad)" />
        <defs>
          <linearGradient id="logo_grad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0047FF"/>
            <stop offset="1" stopColor="#00C2FF"/>
          </linearGradient>
        </defs>
      </svg>
      
      {!hideText && (
        <div className="flex flex-col justify-center select-none pt-1">
          <span className="text-white font-extrabold text-lg md:text-2xl tracking-[0.2em] uppercase leading-none">Vortex</span>
          <span className="text-zinc-500 font-bold text-[0.55rem] md:text-[0.65rem] tracking-[0.6em] uppercase mt-1 leading-none">Studio</span>
        </div>
      )}
    </div>
  );
};
