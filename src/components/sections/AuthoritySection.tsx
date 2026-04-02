"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "AquaRio", desc: "Complexo aquático — RJ", img: "/aquario.png" },
  { name: "Cristo Redentor", desc: "Patrimônio mundial — UNESCO", img: "/cristo-redentor.webp" },
  { name: "Parque Lage", desc: "Centro cultural — RJ", img: "/parquelage.png" },
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

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-0 md:divide-x divide-border-dark">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="group flex-1 flex flex-col items-center gap-4 px-8 py-4"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={client.img}
                  alt={client.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="text-center">
                <p className="text-base font-heading font-bold text-white/60 group-hover:text-white transition-colors duration-500 tracking-tight">
                  {client.name}
                </p>
                <p className="text-xs text-text-secondary/50 group-hover:text-gold/70 transition-colors duration-500 tracking-wide mt-0.5">
                  {client.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
