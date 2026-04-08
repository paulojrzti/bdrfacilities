"use client";

import { motion } from "framer-motion";
import { Smile, LayoutDashboard, RefreshCcw, Heart, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Menos estresse",
    description: "Você para de lidar com problemas operacionais e ganha tranquilidade no dia a dia.",
    icon: Smile,
  },
  {
    title: "Mais organização",
    description: "Processos claros, tudo no lugar certo e decisões mais rápidas.",
    icon: LayoutDashboard,
  },
  {
    title: "Operação previsível",
    description: "Menos imprevistos, mais controle e visão do que está acontecendo.",
    icon: RefreshCcw,
  },
  {
    title: "Melhor experiência para moradores",
    description: "Ambiente mais funcional, agradável e valorizado.",
    icon: Heart,
  },
  {
    title: "Mais tempo livre",
    description: "Você deixa de apagar incêndios e passa a focar no que realmente importa.",
    icon: Clock,
  },
];

export function CondoBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      {/* Background aesthetic touches */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mb-10"
            >
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-zinc-900 mb-6 leading-tight">
                O que muda na <span className="text-gradient">prática</span>
              </h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed border-l-2 border-gold/40 pl-6">
                Mais do que estética ou organização, é uma transformação na forma como você vive e administra seu espaço.
              </p>
            </motion.div>

            <div className="space-y-12">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.35 }}
                  className="group flex gap-6 lg:gap-8 items-start relative p-4 rounded-2xl hover:bg-gold/5 transition-all duration-500 border border-transparent hover:border-gold/20"
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 shadow-sm">
                    <benefit.icon className="w-7 h-7 lg:w-8 lg:h-8 text-gold transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-zinc-900 group-hover:text-gold transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-600 text-base lg:text-lg leading-relaxed max-w-lg">
                      {benefit.description}
                    </p>
                    
                    {/* Visual accent: active line */}
                    <motion.div 
                        className="h-px bg-gradient-to-r from-gold/40 to-transparent mt-4 opacity-0 group-hover:opacity-100"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                      />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composition (Opção C) */}
          <div className="relative sticky top-32 hidden lg:flex items-center justify-center min-h-[600px]">
            
            {/* Main glass card (Dashboard-like) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-[400px] h-[520px] bg-white border border-zinc-200 rounded-[32px] p-8 overflow-hidden shadow-lg flex flex-col justify-between"
            >
               {/* Background texture/blur */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 -rotate-45 translate-x-12 -translate-y-12 blur-3xl " />
               
               <div className="relative z-10 space-y-10">
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Monitoramento Ativo</span>
                     <h4 className="text-2xl font-heading font-bold text-zinc-900">Gestão 360º</h4>
                  </div>

                  <div className="space-y-6">
                     {[85, 98, 100].map((val, i) => (
                        <div key={i} className="flex flex-col gap-2">
                           <div className="flex justify-between text-xs">
                              <span className="text-text-secondary uppercase tracking-tighter">Métrica de Performance</span>
                              <span className="text-gold font-bold">{val}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-border-dark rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${val}%` }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                                 className="h-full bg-gold"
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative z-10 bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-black text-xs">BRD</div>
                     <p className="text-xs font-bold text-zinc-900 uppercase tracking-tighter">Relatório Diário</p>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-normal">
                     Todos os postos cobertos. Substituição realizada em 45min. Padrão operacional mantido em 100% dos setores vistoriados.
                  </p>
               </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 z-20 p-5 rounded-2xl bg-white border border-gold/30 shadow-lg"
            >
               <CheckCircle2 className="w-6 h-6 text-gold mb-2" />
               <p className="text-xs font-bold text-zinc-900 leading-tight">Vistoria<br/>Aprovada</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-12 z-20 p-5 rounded-2xl bg-white border border-zinc-200 shadow-lg"
            >
               <Clock className="w-6 h-6 text-gold mb-2" />
               <p className="text-xs font-bold text-zinc-900 leading-tight">Tempo Real</p>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-10 -right-8 z-20 p-5 rounded-2xl bg-white border border-zinc-200 shadow-lg text-center"
            >
               <p className="text-sm font-black text-gold mb-1">ZERO</p>
               <p className="text-[10px] text-zinc-500 uppercase font-bold">Retrabalho</p>
            </motion.div>

            {/* Glow / Light circles in background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
               <div className="w-[480px] h-[480px] bg-gold/10 blur-[150px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
