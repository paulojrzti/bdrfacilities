"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  { id: "01", title: "Análise da obra", desc: "Avaliação do nível de sujidade e requisitos de vistoria." },
  { id: "02", title: "Planejamento", desc: "Alocação de equipe técnica e produtos específicos." },
  { id: "03", title: "Execução", desc: "Limpeza tática direcionada a superfícies críticas." },
  { id: "04", title: "Entrega pronta", desc: "Liberação final e imediata para operações." },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-24 bg-surface border-t border-border-dark overflow-hidden relative">
      {/* Texture background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/process-bg.png" alt="" fill className="object-cover opacity-[0.07]" />
        <div className="absolute inset-0 bg-surface/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Metodologia de Operação</h2>
          <p className="text-text-secondary max-w-xl mx-auto">Processo estruturado para garantir a assertividade da entrega no prazo estabelecido.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line Generator */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-border-dark">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gold-gradient" 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Node */}
                <div className="w-10 h-10 rounded-full bg-surface border-2 border-gold flex items-center justify-center text-gold font-bold mb-6 relative z-10 mx-auto">
                  <span className="text-sm">{step.id}</span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
