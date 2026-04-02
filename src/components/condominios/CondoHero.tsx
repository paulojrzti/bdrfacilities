"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function CondoHero() {
  const bullets = [
    "Substituição rápida em caso de falta",
    "Redução de risco trabalhista",
    "Operação organizada e previsível",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-lines.svg')] opacity-[0.04] scale-110" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-32 lg:py-0">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold/20 bg-gold/5"
          >
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-gold text-[10px] sm:text-xs font-medium tracking-widest uppercase">
              Gestão Condominial Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 tracking-tight text-white"
          >
            Pare de resolver problema de{" "}
            <span className="text-gradient">funcionário</span> no seu condomínio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-lg text-text-secondary mb-8 leading-relaxed"
          >
            Terceirize a operação com gestão profissional e tenha controle, padrão e menos dor de cabeça no dia a dia
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4 mb-10"
          >
            {bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 text-white/90 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button size="lg" className="w-full sm:w-auto" href="https://wa.me/5521999999999">
              Solicitar diagnóstico do condomínio
            </Button>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">WhatsApp</span>
              <span className="text-sm text-text-secondary">Resposta rápida no WhatsApp</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual - Asymmetric Image Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Decorative lines / frames */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30" />
          
          <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
            <Image
              src="/condo-hero.png" // User might need to provide this, or I'll use a placeholder/generate
              alt="Condomínio de alto padrão"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-10 left-10 p-6 bg-surface/90 backdrop-blur-md border border-border-dark rounded-xl max-w-[240px]"
            >
              <p className="text-3xl font-heading font-bold text-gold mb-1">24h</p>
              <p className="text-xs text-text-secondary leading-tight">Supervisão ativa para garantir o padrão BRD no seu condomínio.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-text-secondary text-[10px] tracking-widest uppercase">Scroll</span>
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
