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
    <section className="py-16 lg:py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
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
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-zinc-900 mb-6">
                Não é terceirização comum. <br className="hidden sm:block" />
                <span className="text-gradient">É gestão operacional.</span>
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-heading font-medium italic border-l-2 border-gold/30 pl-6">
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
                  className="flex items-center gap-4 text-zinc-700 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-medium">{bullet}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-zinc-900 font-bold tracking-tight"
            >
              Você deixa de apagar incêndio e passa a ter controle.
            </motion.p>
          </motion.div>

          {/* Right — card clean */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-10 flex flex-col gap-8 shadow-sm">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Protocolo BRD</span>
                <h3 className="text-2xl font-heading font-bold text-zinc-900 mt-1">Gestão Unificada</h3>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Cobertura de postos", value: "100%" },
                  { label: "Tempo de substituição", value: "45 min" },
                  { label: "Risco trabalhista", value: "Reduzido" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-zinc-500">{item.label}</span>
                    <span className="text-sm font-bold text-zinc-900">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <p className="text-sm text-zinc-600 leading-snug italic">
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
