"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const services = [
  {
    tag: "Entrega de Módulo",
    title: "Limpeza de Entrega de Módulo",
    desc: "Limpeza geral de superfícies com produtos alcalinos e desincrustantes, preparando o ambiente para a entrega do módulo construtivo.",
    bullets: [
      "Remoção de resíduos de construção",
      "Limpeza de pisos e revestimentos",
      "Limpeza de esquadrias e vidros externos",
      "Desincrustação de argamassa e cimento",
      "Entrega pronta para vistoria",
    ],
    highlight: false,
  },
  {
    tag: "Premium",
    title: "Pós-Obra de Fino Acabamento",
    desc: "Processo completo com tratamento refinado para pisos, vidros e esquadrias — destinado a obras com padrão premium de entrega.",
    bullets: [
      "Todo o processo de entrega de módulo incluso",
      "Polimento e tratamento de pisos nobres",
      "Limpeza técnica de vidros com químico especializado",
      "Limpeza de esquadrias com detalhe em perfis",
      "Remoção de resíduos em pontos críticos de inspeção",
    ],
    highlight: true,
  },
];

export function MechanismSection() {
  return (
    <section id="protocolo" className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4"
          >
            Serviços disponíveis
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight"
          >
            Dois serviços, um{" "}
            <span className="text-gradient">padrão de entrega</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-text-secondary mt-4 max-w-xl mx-auto"
          >
            Escolha o nível de limpeza adequado para a sua obra. Em ambos, a entrega é pronta para vistoria, sem retrabalho.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className={`rounded-2xl p-8 flex flex-col gap-6 border ${
                service.highlight
                  ? "border-gold/40 bg-surface/20"
                  : "border-gold/20"
              }`}
            >
              <div>
                <span
                  className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
                    service.highlight
                      ? "bg-gold/20 text-gold"
                      : "bg-white/5 text-text-secondary"
                  }`}
                >
                  {service.tag}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button href="https://wa.me/5521990975359" size="sm">
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                Solicitar orçamento
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
