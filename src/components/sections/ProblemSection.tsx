"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, XCircle, DollarSign } from "lucide-react";

const problems = [
  { icon: Clock, text: "A vistoria trava" },
  { icon: XCircle, text: "O cliente pressiona" },
  { icon: AlertTriangle, text: "O prazo estoura" },
  { icon: DollarSign, text: "E o retrabalho começa" },
];

export function ProblemSection() {
  return (
    <section id="sobre" className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold leading-tight text-zinc-900"
            >
              Se a limpeza pós-obra for mal feita,{" "}
              <span className="text-gold">sua entrega não acontece.</span>
            </motion.h2>
          </div>

          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-5">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-white border-l-2 border-l-gold/50 border border-zinc-200 rounded-sm group hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <problem.icon className="w-5 h-5 text-gold mb-3" />
                  <p className="text-base font-medium text-zinc-900 leading-snug">{problem.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-zinc-600 border-l-2 border-gold/40 pl-5 leading-relaxed"
            >
              O problema não é a obra.{" "}
              <span className="font-semibold text-zinc-900">É a última etapa mal executada.</span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
