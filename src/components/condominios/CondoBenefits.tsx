"use client";

import { motion } from "framer-motion";
import { Smile, LayoutDashboard, RefreshCcw, Heart, Clock } from "lucide-react";

export function CondoBenefits() {
  const benefits = [
    { text: "Menos estresse", icon: Smile },
    { text: "Mais organização", icon: LayoutDashboard },
    { text: "Operação previsível", icon: RefreshCcw },
    { text: "Melhor experiência para moradores", icon: Heart },
    { text: "Mais tempo livre", icon: Clock },
  ];

  return (
    <section className="py-24 bg-surface/20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-heading font-bold text-center text-white mb-16"
        >
          O que muda na prática
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-8 lg:p-10 rounded-2xl border border-border-dark bg-background/60 flex flex-col items-center text-center max-w-[280px] w-full hover:border-gold transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-gold" />
              </div>
              <p className="text-lg text-white/90 font-medium font-heading">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
