"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import Image from "next/image";

export function CondoCta() {
  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto p-12 lg:p-20 rounded-[40px] bg-surface/40 backdrop-blur-md border border-gold/20 text-center shadow-glow-gold/10 relative overflow-hidden">
          {/* Background decoration with real image */}
          <div className="absolute inset-0 z-0 opacity-10 grayscale">
            <Image
              src="/condo-lounge.png"
              alt="Lounge de luxo"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-heading font-bold text-white mb-8"
            >
              Tenha um condomínio funcionando <span className="text-gradient">sem dor de cabeça</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            >
              Nossa equipe está pronta para assumir a gestão operacional do seu condomínio com o padrão de excelência BRD.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto" href="https://wa.me/5521990975359">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Falar com especialista
              </Button>
              <p className="mt-6 text-sm text-gold/60 font-medium tracking-wide uppercase">Atendimento humanizado imediato</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
