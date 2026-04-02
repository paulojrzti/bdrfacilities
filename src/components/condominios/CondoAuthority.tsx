"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CondoAuthority() {
  const clients = [
    { name: "AquaRio", desc: "Complexo aquático — RJ", img: "/AquaRio-1024x753.png" },
    { name: "Cristo Redentor", desc: "Patrimônio mundial — UNESCO", img: "/2017-10-29-cristo-redentor-conheca-a-historia-dessa-maravilha-do-mundo-moderno2.jpg.webp" },
    { name: "Parque Lage", desc: "Centro cultural — RJ", img: "/parquelage.png" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background border-y border-border-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-heading font-bold text-white mb-6"
          >
            Quem já exige padrão alto, confia na BRD
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-text-secondary mb-12"
          >
            A BRD atua em operações com alto fluxo e exigência, como AquaRio, Cristo Redentor e Parque Lage.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.7 }}
                className="group relative rounded-2xl overflow-hidden border border-border-dark hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-heading font-bold text-white text-lg leading-tight">{client.name}</p>
                  <p className="text-xs text-gold/60 mt-0.5 tracking-wide">{client.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
