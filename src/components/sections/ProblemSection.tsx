"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle, Clock, XCircle, DollarSign } from "lucide-react";

const problems = [
  { icon: Clock, text: "Atraso na entrega" },
  { icon: XCircle, text: "Sujeira que trava a vistoria" },
  { icon: AlertTriangle, text: "Equipe despreparada" },
  { icon: DollarSign, text: "Retrabalho que gera custo" },
];

export function ProblemSection() {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden border-t border-border-dark">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/problem.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold leading-tight"
            >
              A obra termina. <br />
              <span className="text-text-secondary">O problema começa.</span>
            </motion.h2>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 gap-5">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-surface border-l-2 border-l-gold/30 border border-border-dark rounded-sm group hover:-translate-y-0.5 transition-transform duration-300"
              >
                <problem.icon className="w-5 h-5 text-gold mb-3" />
                <p className="text-base font-medium text-white leading-snug">{problem.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
