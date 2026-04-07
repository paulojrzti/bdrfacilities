"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const serviceImages = [
  {
    src: "/freepik__profissional-de-limpeza-psobra-utilizando-equipame__83785.png",
    alt: "Profissional com equipamento de limpeza pós-obra",
  },
  {
    src: "/freepik__closeup-de-aplicao-de-produto-de-limpeza-profissio__83787.png",
    alt: "Aplicação de produto de limpeza profissional",
  },
  {
    src: "/freepik__profissional-limpando-grandes-janelas-de-vidro-em-__83786.png",
    alt: "Limpeza de janelas de vidro",
  },
];

const pairs = [
  { before: "/antes-1.png", after: "/depois-1.png" },
  { before: "/antes-2.png", after: "/depois-2.png" },
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">
            Resultado real
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900">
            Veja o padrão na prática
          </h2>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-200 shadow-lg mb-16"
        >
          <video
            src="/antes-depois.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Service images strip */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 text-center mb-6"
          >
            O trabalho em ação
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {serviceImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className="relative h-52 rounded-xl overflow-hidden border border-zinc-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Before / After grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 text-center mb-6"
        >
          Antes e depois
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pairs.map((pair, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Antes */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 text-center">
                  Antes
                </span>
                <div className="relative h-52 rounded-xl overflow-hidden border border-zinc-200">
                  <Image src={pair.before} alt={`Antes ${idx + 1}`} fill className="object-cover" />
                </div>
              </div>

              {/* Depois */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-widest uppercase text-gold text-center">
                  Depois
                </span>
                <div className="relative h-52 rounded-xl overflow-hidden border border-zinc-200">
                  <Image src={pair.after} alt={`Depois ${idx + 1}`} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
