"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CondoAuthority() {
  const clients = [
    { name: "AquaRio", desc: "operação com alto fluxo diário", img: "/aquario.png" },
    { name: "Cristo Redentor", desc: "padrão elevado de exigência", img: "/cristo-redentor.webp" },
    { name: "Parque Lage", desc: "ambiente com controle rigoroso", img: "/parquelage.png" },
  ];

  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4"
          >
            Nossos clientes
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-heading font-bold text-zinc-900 mb-12"
          >
            Gestão aplicada em operações com alto nível de exigência
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-zinc-200 hover:border-gold/40 transition-all duration-500"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-heading font-bold text-white text-lg leading-tight">{client.name}</p>
                  <p className="text-xs text-gold/80 mt-0.5 tracking-wide">{client.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-zinc-600 font-medium text-base"
          >
            Esse mesmo nível de gestão é aplicado no seu condomínio.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
