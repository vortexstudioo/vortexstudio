
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Brain, Target, Filter, Globe, Zap } from 'lucide-react';
import { Logo } from './Logo';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const STEPS = [
  {
    question: "Qual o seu maior desafio hoje na hora de vender?",
    options: [
      { text: "Não tenho um site que vende", next: 1, icon: <Globe className="w-4 h-4" /> },
      { text: "Chega muito curioso no Zap", next: 2, icon: <Filter className="w-4 h-4" /> }
    ]
  },
  {
    question: "Um site comum é só despesa. Você quer um Sistema que educa o lead antes de ele te chamar?",
    options: [
      { text: "Sim, preciso de um Site Vortex", next: 3, icon: <Target className="w-4 h-4" /> },
      { text: "Quero automatizar tudo", next: 3, icon: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    question: "O Quiz Estratégico filtra quem não tem dinheiro e aquece quem quer comprar. Faz sentido pra você?",
    options: [
      { text: "Preciso desse filtro agora", next: 3, icon: <Filter className="w-4 h-4" /> },
      { text: "Quero leads mastigados", next: 3, icon: <Brain className="w-4 h-4" /> }
    ]
  },
  {
    question: "Excelente. Você está a um passo de blindar seu faturamento. Como quer começar?",
    options: [
      { text: "Falar com Especialista Vortex", action: 'whatsapp' }
    ]
  }
];

const MESSAGES = [
  "Olá, posso ajudar? 👋"
];

const TypewriterText = ({ text }: { text: string }) => {
  const characters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.2 
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 8,
    },
  };

  return (
    <motion.span
      className="flex flex-wrap justify-end"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const QuizBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsTooltipActive(false);
      return;
    }

    let isCancelled = false;
    const runCycle = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      while (!isCancelled && !isOpen) {
        await new Promise(resolve => setTimeout(resolve, 4000));
        if (isCancelled || isOpen) break;

        setIsTooltipActive(true);
        await new Promise(resolve => setTimeout(resolve, 6000));
        if (isCancelled || isOpen) break;
        
        setIsTooltipActive(false);
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (isCancelled || isOpen) break;
        
        setMsgIndex((prev) => (MESSAGES.length > 1 ? (prev + 1) % MESSAGES.length : prev));
      }
    };

    runCycle();
    return () => { isCancelled = true; };
  }, [isOpen]);

  const handleOptionClick = (option: any) => {
    if (option.action === 'whatsapp') {
      window.open('https://wa.me/5511969454854?text=Ol%C3%A1%20Vortex%20Studio%2C%20vim%20pelo%20chatbot%20e%20quero%20blindar%20meu%20faturamento', '_blank');
      setIsOpen(false);
      setTimeout(() => setCurrentStep(0), 500);
    } else if (typeof option.next === 'number') {
      setCurrentStep(option.next);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[380px] bg-[#0A0A0A] rounded-[2rem] border border-blue-500/30 overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,112,255,0.7)]"
          >
            {/* Header */}
            <div className="bg-blue-600/20 px-6 py-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(0,112,255,1)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Consultor de Estratégia Vortex</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-zinc-500 hover:text-white transition-colors p-1"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <p className="text-white text-xl md:text-2xl font-black mb-8 leading-[1.2] tracking-tight">
                    {STEPS[currentStep].question}
                  </p>

                  <div className="space-y-3">
                    {STEPS[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className={`w-full py-4 md:py-5 px-5 md:px-6 rounded-2xl text-xs md:text-sm font-black transition-all flex items-center justify-between group text-left
                          ${option.action === 'whatsapp' 
                            ? 'bg-green-600 text-white shadow-[0_10px_30px_rgba(34,197,94,0.5)] hover:bg-green-500 hover:scale-[1.02]' 
                            : 'bg-white/5 text-zinc-300 hover:bg-blue-600/30 hover:text-white border border-white/10'
                          }`}
                      >
                        <span className="flex items-center gap-3 md:gap-4">
                          {option.action === 'whatsapp' ? <WhatsAppIcon /> : (option.icon || <Brain className="w-4 h-4" />)}
                          {option.text}
                        </span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicator */}
              <div className="mt-8 flex gap-2 h-1.5 w-20 mx-auto opacity-40">
                {STEPS.map((_, i) => (
                  <div key={i} className={`flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-blue-500 scale-x-110' : 'bg-zinc-800'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <div className="w-full flex justify-end relative">
        <AnimatePresence>
          {!isOpen && isTooltipActive && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, y: 20, scale: 0.9, x: 10 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={{ opacity: 0, y: 15, scale: 0.9, x: 5 }}
              transition={{ 
                type: 'spring', 
                damping: 20, 
                stiffness: 100,
                opacity: { duration: 0.6 }
              }}
              className="mb-4 bg-white text-black px-6 py-4 rounded-2xl rounded-br-none text-[12px] md:text-[14px] font-black uppercase tracking-wider shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] border border-white/20 relative cursor-pointer max-w-[calc(100vw-5rem)] md:max-w-xs md:mr-1"
              onClick={() => setIsOpen(true)}
            >
              <div className="flex justify-end text-right overflow-hidden">
                 <TypewriterText text={MESSAGES[msgIndex]} />
              </div>
              
              <div className="absolute -bottom-[6px] right-0 md:right-0 w-4 h-4 bg-white rotate-45 transform origin-top-left" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Botão Flutuante Principal */}
      <div className="relative flex justify-end">
        {!isOpen && (
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.05, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-blue-600 rounded-full blur-2xl -z-10"
          />
        )}
        
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={!isOpen ? { y: [0, -5, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`relative z-10 flex items-center justify-center bg-white text-black w-14 h-14 md:w-20 md:h-20 rounded-full shadow-[0_25px_50px_-12px_rgba(0,112,255,0.4)] group overflow-hidden border border-white/10`}
          aria-label={isOpen ? "Fechar Chat" : "Abrir Chat"}
        >
          <div className={`transition-all duration-600 ease-in-out ${isOpen ? 'rotate-90 scale-90' : 'rotate-0'}`}>
            {isOpen ? (
              <X className="w-7 h-7 md:w-8 md:h-8" />
            ) : (
              <div className="relative flex items-center justify-center">
                <Logo hideText className="h-7 w-7 md:h-10 md:w-10" />
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 md:-top-1 md:-right-1 md:w-4 md:h-4 bg-red-600 rounded-full border-2 border-white shadow-md"
                />
              </div>
            )}
          </div>
        </motion.button>
      </div>
    </div>
  );
};
