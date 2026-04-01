"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "AquaRio", desc: "Complexo aquático — RJ" },
  { name: "Cristo Redentor", desc: "Patrimônio mundial — UNESCO" },
  { name: "Parque Lage", desc: "Centro cultural — RJ" },
];

export function AuthoritySection() {
  return (
    <section className="py-16 bg-surface/30 border-y border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary font-medium tracking-widest text-xs uppercase text-center mb-12"
        >
          Padrão exigido em operações de alto fluxo
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-stretch divide-y md:divide-y-0 md:divide-x divide-border-dark">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="group flex-1 text-center px-10 py-6 hover:bg-gold/5 transition-colors duration-500 rounded-xl md:rounded-none"
            >
              <p className="text-2xl md:text-[1.65rem] font-heading font-bold text-white/40 group-hover:text-white transition-all duration-500 mb-1.5 tracking-tight">
                {client.name}
              </p>
              <p className="text-xs text-text-secondary/50 group-hover:text-gold/70 transition-colors duration-500 tracking-wide">
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
