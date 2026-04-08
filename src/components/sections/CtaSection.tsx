"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function CtaSection() {
  return (
    <section
      id="orcamento"
      className="py-32 relative bg-background overflow-hidden border-t border-gold/10"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/cta.png" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>
      {/* Top gold accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gold-gradient" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold/30 bg-gold/5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-text-secondary text-xs tracking-widest uppercase">
              Equipe disponível agora
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-[3.5rem] font-heading font-bold mb-6 text-white leading-tight">
            Evite atraso na última etapa da sua obra
          </h2>

          <p className="text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            Fale com um especialista e receba um orçamento sob medida para sua necessidade.
          </p>

          <Button size="lg" href="https://wa.me/5521990975359">
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Solicitar orçamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
