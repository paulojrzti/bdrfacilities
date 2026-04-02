"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CondoAuthority() {
  const clients = [
    { name: "AquaRio", logo: "/clients/aquario.png" },
    { name: "Cristo Redentor", logo: "/clients/cristo.png" },
    { name: "Parque Lage", logo: "/clients/parquelage.png" },
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
          
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Note: In a real project, these would be actual logos. I'll use placeholders if images are missing */}
             {clients.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="relative h-12 w-32"
                >
                  {/* Since I don't have the logos, I'll display the name in a stylized way */}
                  <div className="flex items-center justify-center w-full h-full text-white font-bold tracking-tighter text-xl">
                    {client.name}
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
