
import React from 'react';
import { Timer, MessageSquareOff, UserMinus, BatteryLow } from 'lucide-react';
import { motion } from 'framer-motion';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Timer className="w-10 h-10 text-red-500" />,
      title: "O Imposto da Demora",
      description: "O cliente moderno não quer esperar. Se você demora 5 minutos para responder 'qual o preço', ele já comprou de quem tem um sistema automático."
    },
    {
      icon: <BatteryLow className="w-10 h-10 text-red-500" />,
      title: "Exaustão Repetitiva",
      description: "Você passa o dia respondendo as mesmas 10 perguntas? Isso não é gerir um negócio, é ser escravo de um chat que não filtra quem realmente quer comprar."
    },
    {
      icon: <MessageSquareOff className="w-10 h-10 text-red-500" />,
      title: "O Lead 'Curioso'",
      description: "Sites comuns atraem curiosos. Sites Vortex filtram curiosos e entregam compradores. Pare de gastar energia com quem só quer 'saber o valor'."
    }
  ];

  return (
    <section className="py-[var(--sp-2xl)] md:py-[var(--sp-3xl)] bg-[#050505] relative border-t border-white/5">
      <div className="golden-container">
        <div className="mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-widest mb-6"
          >
            O CUSTO DA INEFICIÊNCIA
          </motion.div>
          <h2 className="text-phi-h2 font-black text-white mb-6 tracking-tighter">
            Seu tempo vale ouro, <br className="hidden md:block" />
            <span className="text-zinc-600 italic">pare de jogá-lo no lixo.</span>
          </h2>
          <p className="text-xl text-zinc-500 font-medium max-w-2xl">
            Sites estáticos são cemitérios de leads. Você precisa de um fluxo que mastigue a informação para o cliente e poupe o seu esforço manual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/30 p-10 rounded-[2.5rem] border border-white/5 hover:border-red-500/20 transition-all group"
            >
              <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                {point.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{point.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-lg">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
