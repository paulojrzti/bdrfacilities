"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, ShieldAlert, UserX, Brain } from "lucide-react";

export function CondoConsequence() {
  const consequences = [
    { text: "Risco trabalhista constante", icon: ShieldAlert },
    { text: "Desgaste com moradores", icon: UserX },
    { text: "Falta de controle", icon: TrendingUp },
    { text: "Tempo perdido", icon: Clock },
    { text: "Estresse contínuo", icon: Brain },
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-heading font-bold text-center text-white mb-16"
          >
            E isso custa mais do que parece
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {consequences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="p-8 rounded-xl border border-border-dark bg-background/40 flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500"
              >
                <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-lg text-white/90 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center text-xl lg:text-3xl text-gold font-heading font-medium"
          >
            Se nada muda, o problema só cresce.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
