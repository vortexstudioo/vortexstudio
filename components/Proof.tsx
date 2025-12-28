
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export const Proof: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%]"
        >
          <div className="mb-8 flex items-center gap-4 text-blue-500">
            <div className="h-px w-12 bg-blue-500/30"></div>
            <span className="text-xs font-black tracking-[0.4em] uppercase">🎯 O RESULTADO</span>
          </div>
          <h3 className="text-4xl md:text-7xl font-black text-white leading-[1] mb-8 tracking-tighter">
            Seu WhatsApp <span className="text-blue-600 italic pr-2">muda de perfil.</span>
          </h3>
          <p className="text-phi-body text-zinc-500 font-medium mb-12">
            Seu site deixa de ser uma simples vitrine estática e passa a ser o seu melhor vendedor, trabalhando 24h por dia.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 opacity-50 relative group">
              <span className="absolute -top-3 left-6 bg-zinc-800 px-3 py-1 rounded-full text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Antes:</span>
              <div className="flex items-center gap-4 text-zinc-400 font-bold italic">
                <MessageCircle className="w-5 h-5" />
                "Qual o preço?"
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl glass border border-blue-500/30 shadow-[0_0_30px_rgba(0,112,255,0.1)] relative"
            >
              <span className="absolute -top-3 left-6 bg-blue-600 px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-widest">Depois:</span>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white text-xl md:text-2xl font-black italic">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  "Como funciona?"
                </div>
                <div className="flex items-center gap-4 text-white text-xl md:text-2xl font-black italic">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  "Quando podemos começar?"
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%] glass rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none w-full text-center">
            <span className="text-[15rem] font-black italic tracking-tighter text-white select-none leading-none">RESULT</span>
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] mb-12 tracking-tighter">
              “Nós não vendemos tecnologia. Vendemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 pr-2">recuperação de faturamento</span> e velocidade de decisão.”
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
