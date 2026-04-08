"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function CondoProblem() {
  const problems = [
    "Funcionário falta e ninguém avisa.",
    "Morador reclama de tudo.",
    "A operação não tem padrão.",
    "E quando dá problema… sobra pra você.",
  ];

  return (
    <section className="py-16 lg:py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Headline & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-zinc-900 leading-tight">
              Se você é síndico, <br className="hidden sm:block" />
              já sabe como isso funciona…
            </h2>
            
            <div className="space-y-4">
              {problems.map((problem, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 text-zinc-600 border-l border-gold/30 pl-6 py-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0" />
                <p className="text-lg italic">{problem}</p>
              </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Asymmetric Box & Closing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-10 lg:p-14 border border-zinc-200 rounded-br-[60px] rounded-tl-[60px] overflow-hidden">
              <div className="relative z-10">
                <AlertCircle className="w-12 h-12 text-gold mb-8 stroke-1" />
                <p className="text-xl lg:text-2xl text-zinc-800 leading-relaxed mb-8">
                  No final, o condomínio vira um trabalho diário — e não uma gestão.
                </p>

                <div className="h-px w-full bg-gradient-to-r from-gold/40 to-transparent mb-8" />

                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed">
                  <span className="text-zinc-900 font-semibold">O problema não é o condomínio.</span>
                  <br />
                  É a forma como a operação está sendo gerida.
                </p>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 -left-8 w-1 h-32 bg-gold/40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
