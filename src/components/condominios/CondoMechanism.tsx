"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cog } from "lucide-react";

export function CondoMechanism() {
  const mechanismBullets = [
    "Seleção e gestão da equipe",
    "Substituição rápida",
    "Supervisão contínua",
    "Padronização",
    "Redução de risco trabalhista",
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Logic / Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6"
              >
                <Cog className="w-8 h-8 text-gold animate-spin-slow" />
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
                Não é terceirização comum. <br className="hidden sm:block" />
                <span className="text-gradient">É gestão operacional.</span>
              </h2>
              <p className="text-lg lg:text-2xl text-text-secondary leading-relaxed font-heading font-medium italic border-l-2 border-gold/30 pl-6">
                Sistema de Gestão Operacional Terceirizada
              </p>
            </div>
            
            <div className="space-y-4">
              {mechanismBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 text-white/80 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-medium">{bullet}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-white font-bold tracking-tight"
            >
              Você deixa de apagar incêndio e passa a ter controle.
            </motion.p>
          </motion.div>

          {/* Right Side: Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[480px] w-full hidden lg:flex items-center justify-center"
          >
            {/* Design elements following standard BRD style (lines, shapes) */}
            <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full" />
            
            <div className="relative w-full max-w-md h-full border border-border-dark bg-surface/40 backdrop-blur-sm rounded-3xl p-10 flex flex-col justify-between overflow-hidden group">
               {/* Decorative diagonal line as per reference */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -rotate-45 translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-150" />
               
               <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Protocolo BRD</span>
                     <h3 className="text-2xl font-heading font-bold text-white">Gestão Unificada</h3>
                  </div>
                  
                  <div className="space-y-4">
                     {[1, 2, 3].map((n) => (
                        <div key={n} className="h-2 bg-border-dark rounded-full overflow-hidden w-full">
                           <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${60 + n * 10}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.3 * n }}
                              className="h-full bg-gold/60"
                           />
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="p-6 bg-background rounded-xl border border-border-dark mt-8 self-end shadow-2xl">
                  <p className="text-sm font-medium text-text-secondary leading-snug">
                    "O padrão BRD me deu a tranquilidade que nenhum síndico deveria abrir mão."
                  </p>
                  <p className="text-xs text-gold mt-2 font-bold">— Síndico Profissional</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
