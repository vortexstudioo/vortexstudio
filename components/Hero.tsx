
import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-[15vh] md:pt-[20vh] pb-[var(--sp-2xl)] md:pb-[var(--sp-3xl)] overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,112,255,0.15),transparent_70%)]" />
      
      <div className="golden-container text-center flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-8 md:mb-12"
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          ESTRATÉGIA DIGITAL DE ELITE
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-phi-hero font-extrabold text-white mb-6 md:mb-10 tracking-tight"
        >
          Seu site deve ser seu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 italic">melhor vendedor,</span> <br className="hidden md:block" />
          não um gasto.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-phi-body text-zinc-400 max-w-[850px] mx-auto mb-10 md:mb-14 font-medium leading-relaxed px-4 md:px-0"
        >
          Clientes têm pressa. Você tem cansaço de responder as mesmas perguntas. <br className="hidden md:block" />
          Nós criamos <span className="text-white font-bold">Sistemas Inteligentes</span> que filtram curiosos e entregam o lead pronto para o fechamento.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6 md:gap-8 w-full px-4"
        >
          <button 
            onClick={() => window.open('https://wa.me/5511969454854?text=Ol%C3%A1%20Vortex%20Studio%2C%20gostaria%20de%20um%20Site%20de%20Alta%20Convers%C3%A3o', '_blank')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-base md:text-xl font-black py-6 md:py-8 px-10 md:px-16 rounded-2xl transition-all shadow-[0_20px_50px_rgba(0,112,255,0.4)] group flex items-center justify-center gap-4 active:scale-95 uppercase tracking-wider btn-hover-effect"
          >
            ATIVAR MINHA MÁQUINA DE VENDAS
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 opacity-40">
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Leads Qualificados</span>
             <span className="hidden md:block text-zinc-700">•</span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Zero Perda de Tempo</span>
             <span className="hidden md:block text-zinc-700">•</span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Eficiência Máxima</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
