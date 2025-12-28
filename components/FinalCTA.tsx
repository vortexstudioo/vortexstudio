
import React from 'react';
import { ArrowUpRight, TrendingUp, AlertTriangle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-[var(--sp-2xl)] md:py-[var(--sp-3xl)] relative overflow-hidden bg-black border-t border-white/5">
      {/* Intense Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="golden-container text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="mb-8 flex items-center justify-center gap-3 text-amber-500">
             <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
             <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">MERCADO EM TRANSIÇÃO</span>
          </div>

          <h2 className="text-phi-hero font-extrabold text-white mb-8 md:mb-12 tracking-tight leading-tight">
            Quem demora, <span className="text-red-600 italic">perde.</span> <br />
            Quem automatiza, <span className="text-blue-600 italic">domina.</span>
          </h2>
          
          <p className="text-phi-body text-zinc-500 mb-12 md:mb-20 max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
            A pergunta não é se você precisa de um sistema inteligente, mas <span className="text-white">quanto você vai queimar</span> de caixa se deixar para amanhã.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 md:gap-12 w-full px-4"
        >
          <button 
            onClick={() => window.open('https://wa.me/5511969454854?text=Ol%C3%A1%20Vortex%20Studio%2C%20gostaria%20de%20falar%20sobre%20um%20projeto', '_blank')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg md:text-2xl font-black py-7 md:py-10 px-10 md:px-24 rounded-2xl md:rounded-[2.5rem] transition-all shadow-[0_30px_70px_rgba(0,112,255,0.4)] hover:shadow-[0_40px_90px_rgba(0,112,255,0.6)] flex items-center justify-center gap-6 active:scale-95 uppercase tracking-wider btn-hover-effect"
          >
            ATIVAR MEU VENDEDOR AGORA
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 opacity-60">
            <div className="flex items-center gap-3 text-white text-[10px] md:text-xs font-black uppercase tracking-widest">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              ROI Imediato
            </div>
            <div className="flex items-center gap-3 text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-widest">
              <Zap className="w-4 h-4 text-blue-500" />
              Implementação Completa
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
