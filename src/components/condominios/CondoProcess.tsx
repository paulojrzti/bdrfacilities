"use client";

import { motion } from "framer-motion";

export function CondoProcess() {
  const steps = [
    { title: "Diagnóstico", description: "Análise técnica da operação atual e levantamento de necessidades específicas." },
    { title: "Planejamento", description: "Desenvolvimento do cronograma operacional e seleção do perfil da equipe." },
    { title: "Implementação", description: "Adequação de processos e início da operação com supervisão dedicada." },
    { title: "Gestão contínua", description: "Acompanhamento em tempo real e entrega técnica constante." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-heading font-bold text-center text-white mb-20"
        >
          Como funciona
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="relative p-8 rounded-2xl border border-border-dark bg-surface/30 group hover:bg-surface/50 transition-all duration-500"
            >
              {/* Step number bg */}
              <div className="absolute -top-6 -right-4 font-heading font-black text-8xl text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
                0{i + 1}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-10 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="text-xl font-heading font-bold text-gold">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
