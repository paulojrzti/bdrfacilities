"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, DoorOpen, Wrench, PhoneCall, HardHat } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    name: "ASG",
    desc: "Auxiliar de Serviços Gerais para apoio às operações do condomínio",
  },
  {
    icon: Shield,
    name: "Vigia",
    desc: "Profissional de vigia para rondas e fiscalização das dependências",
  },
  {
    icon: DoorOpen,
    name: "Porteiro",
    desc: "Portaria profissional com controle de entrada e atendimento aos moradores",
  },
  {
    icon: HardHat,
    name: "Zeladoria",
    desc: "Zelador responsável pela conservação e pequenos reparos no condomínio",
  },
  {
    icon: PhoneCall,
    name: "Recepção e Atendimento",
    desc: "Recepcionista treinado para atendimento presencial e telefônico",
  },
  {
    icon: Wrench,
    name: "Técnico em Manutenção",
    desc: "Técnico qualificado para manutenção preventiva e corretiva predial",
  },
];

export function CondoServices() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4"
          >
            Prestação de serviços
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight"
          >
            Serviços que a{" "}
            <span className="text-gradient">BRD disponibiliza</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-text-secondary mt-4 max-w-xl mx-auto"
          >
            Equipe treinada, postos cobertos e operação sem imprevistos tudo sob gestão da BRD.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
                className="flex items-start gap-4 rounded-2xl border border-gold/15 bg-surface/10 p-6 hover:border-gold/30 hover:bg-surface/20 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-base leading-tight mb-1">
                    {service.name}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
