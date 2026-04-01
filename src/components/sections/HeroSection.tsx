"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

const tags = ["Limpeza técnica", "Pós-obra", "Vistoria aprovada", "Operação imediata"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background diagonal line pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-lines.svg')] opacity-[0.06]" />
      </div>


<div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center py-28 lg:py-0 min-h-screen">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold/30 bg-gold/5"
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
            className="text-5xl lg:text-[4.25rem] font-heading font-bold leading-[1.08] mb-6 tracking-tight text-white"
          >
            Sua obra pronta{" "}
            <br className="hidden sm:block" />
            para entrega {" "}
            <span className="text-gradient">
              sem risco de reprovação ou atraso
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-lg text-text-secondary mb-10 leading-relaxed max-w-lg"
          >
            Padrão técnico de limpeza para liberação imediata e sem retrabalho.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" href="#orcamento">
              Solicitar orçamento
            </Button>
            <Button size="lg" variant="outline" href="#processo">
              Ver metodologia
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual Panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-[560px] w-full hidden lg:flex flex-col"
        >
          <div className="relative h-full rounded-2xl border border-border-dark overflow-hidden shadow-2xl">
            {/* Real image */}
            <Image
              src="/hero.png"
              alt="Interior de obra pronto para entrega"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background/55" />


{/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Aprovação na vistoria" },
                  { value: "Zero", label: "Chamados de retrabalho" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 + i * 0.15, duration: 0.6 }}
                    className="p-5 rounded-xl bg-background/70 border border-border-dark backdrop-blur-sm"
                  >
                    <p className="text-3xl font-heading font-bold text-gold">{stat.value}</p>
                    <p className="text-xs text-text-secondary mt-1 leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-4 py-2 rounded-full border border-gold/40 text-white/80 bg-background/75 backdrop-blur-sm font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
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
