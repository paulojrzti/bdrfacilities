"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/freepik__ambiente-corporativo-moderno-recm-construdo-piso-b__83788.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-medium tracking-widest uppercase">
              Padrão Operacional Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="text-5xl lg:text-[4.5rem] font-heading font-bold leading-[1.08] mb-6 tracking-tight text-white"
          >
            Limpeza Pós-Obra{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">no Rio de Janeiro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto"
          >
            Equipe técnica especializada em obras de grande porte. Entrega pronta para vistoria, sem retrabalho e sem atraso.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-2 mb-10"
          >
            {["+240 obras atendidas", "100% de aprovação em vistorias", "Zero retrabalho reportado"].map((item) => (
              <li key={item} className="flex items-center justify-center gap-2 text-white/75 text-sm">
                <span className="text-gold font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Button size="lg" href="#orcamento">
              Solicitar orçamento
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
