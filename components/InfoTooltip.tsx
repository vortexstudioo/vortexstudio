
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
            className={`absolute z-[110] w-64 p-4 glass rounded-2xl border border-blue-500/30 shadow-[0_10px_30px_rgba(0,112,255,0.2)] text-left
              ${position === 'top' ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 -translate-x-1/2`}
          >
            <div className="flex gap-3">
              <div className="mt-1">
                <Info className="w-4 h-4 text-blue-500" />
              </div>
              <p className="text-[11px] font-bold text-zinc-300 leading-relaxed uppercase tracking-wider">
                {content}
              </p>
            </div>
            <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 glass border-r border-b border-blue-500/30 rotate-45 
              ${position === 'top' ? '-bottom-1.5' : '-top-1.5 border-l border-t border-r-0 border-b-0'}`} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
