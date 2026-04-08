"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const points = [
  "Limpeza orientada para vistoria",
  "Equipe treinada para pós-obra (não é equipe comum)",
  "Atuação em pontos críticos de inspeção",
  "Redução de risco de reprovação",
  "Entrega pronta para operação imediata",
];

export function MechanismSection() {
  return (
    <section id="protocolo" className="relative py-32 bg-background overflow-hidden">

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Visual Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative h-[440px] w-full rounded-2xl border border-border-dark overflow-hidden shadow-2xl"
        >
          <Image
            src="/mechanism.png"
            alt="Equipe técnica de limpeza pós-obra em ação"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute top-0 left-0 right-0 h-48 bg-gold/5 blur-2xl pointer-events-none z-10" />

          <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
            <div>
              <p className="text-xs text-gold tracking-widest uppercase mb-3 font-medium">
                Taxa de aprovação
              </p>
              <div className="flex items-end gap-1">
                <span className="text-7xl font-heading font-bold text-white leading-none">100</span>
                <span className="text-3xl font-heading font-bold text-gold mb-2">%</span>
              </div>
              <p className="text-text-secondary text-sm mt-2 max-w-[220px] leading-relaxed">
                em vistorias de obras atendidas pelo protocolo BRD
              </p>
            </div>

            <div>
              <p className="text-xs text-gold tracking-widest uppercase mb-3 font-medium">
                Método validado
              </p>
              <p className="font-heading text-xl font-semibold text-white leading-snug">
                Limpeza cirúrgica
                <br />
                pós-construção.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center md:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              Execução técnica de limpeza{" "}
              <br />
              <span className="text-gradient">para liberação da obra na vistoria</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-md leading-relaxed">
              Entramos na obra com foco total nos pontos que geram reprovação: acabamentos, resíduos de obra, detalhes de inspeção e áreas críticas. A equipe sabe exatamente onde o fiscal olha e atua para eliminar qualquer risco de retrabalho. Você não precisa revisar, cobrar ou refazer.
            </p>
          </motion.div>

          <ul className="space-y-4 mb-10">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-base">{point}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button href="#orcamento">Solicitar orçamento</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
