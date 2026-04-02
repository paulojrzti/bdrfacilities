"use client";

import { motion } from "framer-motion";
import { X, Check, Users, ShieldCheck, UserCog, UserMinus, UserCheck, Settings2 } from "lucide-react";

export function CondoComparison() {
  const comparison = [
    { label: "Risco trabalhista", own: "Alto", brd: "Reduzido", icon: ShieldCheck },
    { label: "Gestão operacional", own: "Complexa (Síndico)", brd: "Completa (BRD)", icon: UserCog },
    { label: "Substituição de faltas", own: "Lenta ou inexistente", brd: "Imediata e padronizada", icon: UserMinus },
  ];

  return (
    <section className="py-24 bg-surface/10 border-y border-border-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-heading font-bold text-center text-white mb-20"
          >
            A diferença do <span className="text-gold">Padrão BRD</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Vertical divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-dark hidden md:block" />
            
            {/* Funcionário Próprio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-3xl bg-background border border-border-dark"
            >
              <div className="flex items-center gap-4 mb-12">
                 <div className="p-3 rounded-xl bg-background border border-border-dark">
                    <UserMinus className="w-6 h-6 text-text-secondary" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-white">Funcionário Próprio</h3>
              </div>
              
              <ul className="space-y-8">
                {[
                  "Risco trabalhista alto",
                  "Gestão complexa e morosa",
                  "Falta de substituição imediata",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <X className="w-6 h-6 text-red-500/60 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-text-secondary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Com a BRD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-3xl bg-surface/40 border border-gold/30 shadow-glow-gold"
            >
              <div className="flex items-center gap-4 mb-12">
                 <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <UserCheck className="w-6 h-6 text-gold" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-white">Com a BRD</h3>
              </div>
              
              <ul className="space-y-8">
                {[
                  "Gestão completa e técnica",
                  "Substituição imediata em faltas",
                  "Operação 100% padronizada",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-white font-medium leading-snug">{item}</span>
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
