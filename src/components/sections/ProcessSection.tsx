"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Análise da obra", desc: "Avaliação técnica do nível de sujidade e exigências da vistoria." },
  { id: "02", title: "Planejamento", desc: "Definição da equipe, produtos e estratégia de execução." },
  { id: "03", title: "Execução técnica", desc: "Limpeza direcionada para superfícies críticas." },
  { id: "04", title: "Entrega pronta", desc: "Ambiente liberado para vistoria e operação imediata." },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 mb-4">
            Processo estruturado para garantir entrega sem falhas
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Cada etapa é executada com foco na aprovação da vistoria e na liberação imediata da obra.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-zinc-200">
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{ background: "linear-gradient(90deg, #178FE6 0%, #3FD3FF 100%)" }}
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
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gold flex items-center justify-center text-gold font-bold mb-6 relative z-10 mx-auto shadow-sm">
                  <span className="text-sm">{step.id}</span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
