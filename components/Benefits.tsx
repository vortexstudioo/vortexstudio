
import React from 'react';
import { BrainCircuit, Rocket, ShieldCheck, Clock8 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <BrainCircuit className="w-7 h-7" />,
      title: "IA do Seu Negócio",
      text: "Sua IA é treinada com seu serviço específico e seus melhores argumentos de venda."
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Estrutura de Fechamento",
      text: "Layout desenhado exclusivamente para conversão, não para ser uma 'vitrine bonita'."
    },
    {
      icon: <Clock8 className="w-7 h-7" />,
      title: "Atendimento 24h",
      text: "Atendimento automático que não dorme, não almoça e nunca erra o script de venda."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Independência Total",
      text: "Menos dependência de equipe humana lenta. Sua máquina de vendas roda no piloto automático."
    }
  ];

  return (
    <section className="py-[var(--sp-2xl)] md:py-[var(--sp-3xl)] bg-[#030303] px-6 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase italic"
          >
            Inteligência Aplicada ao <span className="text-blue-600">Seu Negócio</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(0,112,255,0.5)]"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--sp-m)] lg:gap-[var(--sp-l)]">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-10 glass rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-10 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_20px_rgba(0,112,255,0.05)]">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-5 tracking-tight uppercase leading-none">{benefit.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-semibold">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <button 
            onClick={() => window.open('https://wa.me/5511969454854?text=Ol%C3%A1%20Vortex%20Studio%2C%20gostaria%20de%20um%20Site%20de%20Alta%20Convers%C3%A3o', '_blank')}
            className="bg-white text-black text-base md:text-lg font-black py-6 px-12 rounded-2xl transition-all hover:bg-blue-600 hover:text-white shadow-2xl uppercase tracking-widest active:scale-95 btn-hover-effect"
          >
            EU QUERO PARAR DE PERDER VENDAS
          </button>
        </div>
      </div>
    </section>
  );
};
