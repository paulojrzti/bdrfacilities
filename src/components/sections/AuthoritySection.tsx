"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "AquaRio", desc: "alto fluxo diário de visitantes", img: "/aquario.png" },
  { name: "Cristo Redentor", desc: "padrão máximo de conservação", img: "/cristo-redentor.webp" },
  { name: "Parque Lage", desc: "ambiente histórico com exigência técnica", img: "/parquelage.png" },
];

export function AuthoritySection() {
  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-bold tracking-widest text-xs uppercase text-center mb-12"
        >
          Experiência em operações de alto nível de exigência
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-0 md:divide-x divide-zinc-200">
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
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
              </div>
              <div className="text-center">
                <p className="text-base font-heading font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors duration-500 tracking-tight">
                  {client.name}
                </p>
                <p className="text-xs text-zinc-500 group-hover:text-gold transition-colors duration-500 tracking-wide mt-0.5">
                  {client.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-zinc-600 font-medium mt-12 text-sm"
        >
          Esse mesmo padrão é aplicado na sua obra.
        </motion.p>
      </div>
    </section>
  );
}
