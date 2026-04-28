"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const bullets = [
  "Substituição rápida em caso de falta",
  "Menos imprevistos na rotina",
  "Operação organizada e previsível",
];

export function CondoHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background">
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
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-4xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 tracking-tight text-white"
          >
            Terceirize a{" "}
            <span className="text-gradient">Gestão Operacional</span>{" "}
            do Seu Condomínio
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-2 mb-8"
          >
            {bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
                className="flex items-center justify-center gap-2 text-white/75 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto"
          >
            Pare de lidar com falta de funcionário, reclamação de morador e falhas na operação do dia a dia. A BRD assume a equipe, mantém todos os postos cobertos e garante padrão na operação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.35 }}
            className="flex flex-col items-center gap-3"
          >
            <Button size="lg" href="https://wa.me/5521990975359?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+terceiriza%C3%A7%C3%A3o+da+gest%C3%A3o+operacional+do+meu+condom%C3%ADnio.">
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Falar com especialista
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
