"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Clock, CheckCircle2 } from "lucide-react";

const points = [
  {
    icon: Shield,
    text: "Foco em vistoria",
    desc: "Limpeza orientada a pontos de inspeção técnica.",
  },
  {
    icon: Award,
    text: "Execução técnica",
    desc: "Profissionais treinados em padrões de entrega.",
  },
  {
    icon: Clock,
    text: "Equipe preparada",
    desc: "Time mobilizado no prazo que você precisar.",
  },
  {
    icon: CheckCircle2,
    text: "Redução de risco",
    desc: "Eliminação das causas de reprovação na vistoria.",
  },
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
          transition={{ duration: 0.7 }}
          className="relative h-[440px] w-full rounded-2xl border border-border-dark overflow-hidden shadow-2xl"
        >
          {/* Real image */}
          <Image
            src="/mechanism.png"
            alt="Equipe técnica de limpeza pós-obra em ação"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/60" />
{/* Ambient glow */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gold/5 blur-2xl pointer-events-none z-10" />

          {/* Content overlay */}
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
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              Protocolo de Limpeza{" "}
              <br />
              <span className="text-gradient">para Entrega Técnica</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-md leading-relaxed">
              Não é limpeza comum. É execução orientada para aprovação.
            </p>
          </motion.div>

          <ul className="space-y-5">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <point.icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold font-heading text-base">{point.text}</p>
                  <p className="text-text-secondary text-sm mt-0.5">{point.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
