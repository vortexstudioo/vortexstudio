
import React from 'react';
import { Filter, Brain, Zap, Target, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Solution: React.FC = () => {
  return (
    <section className="py-[var(--sp-2xl)] md:py-[var(--sp-3xl)] relative overflow-hidden bg-black">
       <div className="golden-container flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%]"
          >
            <div className="mb-8 flex items-center gap-4 text-blue-500">
              <div className="h-px w-12 bg-blue-500/30"></div>
              <span className="text-xs font-black tracking-[0.4em] uppercase">A ESTRATÉGIA VORTEX</span>
            </div>

            <h2 className="text-phi-h2 font-black text-white mb-8 tracking-tighter">
              A pessoa lê, o bot vende, <br className="hidden md:block" />
              <span className="text-blue-600 italic">você só fecha.</span>
            </h2>
            
            <p className="text-phi-body text-zinc-400 mb-12 font-medium leading-relaxed">
              Nossa estrutura não é focada em "beleza", é focada em <span className="text-white font-bold">psicologia de consumo</span>. O cliente entra com dúvida e sai com urgência.
            </p>

            <div className="space-y-8">
              {[
                { 
                  title: "Informação Mastigada", 
                  desc: "IA que entende o que o cliente quer e entrega a resposta sem ele precisar procurar.", 
                  icon: <MousePointer2 className="w-5 h-5"/>
                },
                { 
                  title: "Filtro de Intenção", 
                  desc: "Perguntas estratégicas que colocam gatilhos de necessidade na mente do lead.", 
                  icon: <Filter className="w-5 h-5"/>
                },
                { 
                  title: "WhatsApp Qualificado", 
                  desc: "Ele não chega perguntando 'preço?'. Ele chega perguntando 'como eu pago?'.", 
                  icon: <Target className="w-5 h-5"/>
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] relative"
          >
            <div className="glass rounded-[3rem] p-4 md:p-8 border border-white/10 shadow-[0_0_80px_rgba(0,112,255,0.15)] bg-zinc-900/50">
               <div className="bg-black rounded-[2rem] overflow-hidden aspect-video relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic Dashboard" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-600/10 backdrop-blur-[2px]">
                    <div className="text-center p-8 glass rounded-3xl border border-white/20">
                      <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-pulse" />
                      <p className="text-white font-black text-2xl uppercase italic tracking-tighter">Site rodando 24h em <br/> piloto automático.</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
       </div>
    </section>
  );
};
