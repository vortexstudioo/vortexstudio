
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-zinc-900 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <Logo className="h-7 md:h-8" />
        
        <div className="text-zinc-600 text-[10px] md:text-xs text-center font-bold uppercase tracking-[0.2em] leading-relaxed">
          &copy; {new Date().getFullYear()} VORTEX STUDIO SYSTEMS. TODOS OS DIREITOS RESERVADOS.
          <br className="md:hidden" />
          <span className="hidden md:inline mx-4">|</span>
          TECNOLOGIA PARA RESULTADOS LÍQUIDOS.
        </div>
        
        <div className="flex gap-8 text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-500">
           <a href="#" className="hover:text-blue-500 transition-colors">POLÍTICAS</a>
           <a href="#" className="hover:text-blue-500 transition-colors">CONTATO</a>
        </div>
      </div>
    </footer>
  );
};
