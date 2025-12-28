
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, ArrowRight, ShieldCheck, BarChart4, Sparkles } from 'lucide-react';

export const Products: React.FC = () => {
  const products = [
    {
      title: "Site de Alta Conversão",
      subtitle: "Máquina de Vendas 24h",
      desc: "Não é apenas um site. É um organismo digital treinado para converter visitantes em clientes. Design de alto luxo aliado à engenharia de conversão de elite.",
      features: ["IA Atendente 24/7", "Interface de Ultra-Luxo", "Carregamento Instantâneo", "SEO de Dominação"],
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
      color: "from-blue-600/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-[0_0_50px_rgba(0,112,255,0.2)]",
      link: "https://wa.me/5511969454854?text=Ol%C3%A1%20Vortex%20Studio%2C%20gostaria%20de%20um%20Site%20de%20Alta%20Convers%C3%A3o"
    },
    {
      title: "Quiz Qualificador",
      subtitle: "Filtro de Clientes Reais",
      desc: "O fim dos curiosos. Um funil de segmentação em formato de quiz que extrai o desejo do lead e o entrega pronto para o checkout. Escala sem perda de tempo.",
      features: ["Qualificação Psicológica", "Geração de Urgência", "Abandono Zero", "Direto para o Fechamento"],
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />,
      color: "from-cyan-600/20 to-transparent",
      borderColor: "group-hover:border-cyan-400/50",
      glow: "group-hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]",
      link: "https://wa.me/5511969454854?text=Ol%C3%A1%20Vortex%20Studio%2C%20gostaria%20de%20um%20Quiz%20Qualificador"
    }
  ];

  return (
    <section className="py-[var(--sp-2xl)] md:py-[var(--sp-3xl)] bg-[#020202] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,71,255,0.03),transparent_70%)]" />
      
      <div className="golden-container relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles className="w-3 h-3 text-blue-500" />
            ARSENAL DE ALTA PERFORMANCE
          </motion.div>
          <h2 className="text-phi-h2 font-black text-white mb-6 tracking-tight leading-none">
            Escolha sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 italic pr-2">Arma Principal</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium">
            Sistemas modulares desenhados para extrair o máximo de lucro de cada clique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative h-full bg-gradient-to-b ${product.color} rounded-[2rem] md:rounded-[3rem] p-px overflow-hidden`}
            >
              <div className={`absolute inset-0 transition-all duration-700 ${product.glow}`} />
              
              <div className={`h-full bg-[#080808]/95 backdrop-blur-3xl p-8 md:p-16 rounded-[1.95rem] md:rounded-[2.95rem] flex flex-col border border-white/5 transition-all duration-500 ${product.borderColor}`}>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-4 md:p-6 bg-zinc-900 rounded-2xl md:rounded-[2rem] border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[8px] md:text-[9px] font-black text-zinc-500 tracking-widest uppercase group-hover:text-white transition-colors">
                    Módulo #{idx + 1}
                  </div>
                </div>

                <div className="mb-8 md:mb-10">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-3 uppercase tracking-tight group-hover:tracking-normal transition-all">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-6 md:w-8 bg-blue-500/50" />
                    <span className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                      {product.subtitle}
                    </span>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-base md:text-lg mb-8 md:mb-12 font-medium leading-relaxed">
                  {product.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-16">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl md:rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <div className="p-1 rounded-md bg-blue-500/10">
                        <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" />
                      </div>
                      <span className="text-white/80 text-[10px] md:text-[11px] font-black uppercase tracking-wider">{feat}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.open(product.link, '_blank')}
                  className="mt-auto w-full py-5 md:py-7 rounded-xl md:rounded-[1.5rem] bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-[0.98] btn-hover-effect"
                >
                  CONFIGURAR MÓDULO
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 text-zinc-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-center">
            <BarChart4 className="w-4 h-4 hidden md:block" />
            Combine módulos para dominância total do mercado
          </div>
        </motion.div>
      </div>
    </section>
  );
};
