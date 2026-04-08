"use client";

import { motion } from "framer-motion";
import { X, Check, UserMinus, UserCheck } from "lucide-react";

export function CondoComparison() {
  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl lg:text-5xl font-heading font-bold text-center text-zinc-900 mb-12"
          >
            A diferença do <span className="text-gradient">Padrão BRD</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Funcionário Próprio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-white border border-zinc-200"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200">
                  <UserMinus className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-zinc-900">Funcionário Próprio</h3>
              </div>
              <ul className="space-y-5">
                {["Risco trabalhista alto", "Gestão complexa e morosa", "Sem substituição imediata"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Com a BRD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="p-8 rounded-2xl bg-surface border border-gold/30"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20">
                  <UserCheck className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">Com a BRD</h3>
              </div>
              <ul className="space-y-5">
                {["Gestão completa e técnica", "Substituição imediata em faltas", "Operação 100% padronizada"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
