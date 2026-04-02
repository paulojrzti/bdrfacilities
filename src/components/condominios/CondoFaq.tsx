"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function CondoFaq() {
  const faqs = [
    {
      question: "Substituem funcionário em caso de falta?",
      answer: "Sim. Em caso de falta ou afastamento, nossa central de operações aciona a substituição imediata para garantir que o posto nunca fique descoberto.",
    },
    {
      question: "Como é feito o controle da equipe?",
      answer: "Utilizamos supervisão presencial regular e checklists digitais de controle. Você recebe relatórios periódicos sobre a performance operacional.",
    },
    {
      question: "Vocês atendem em todo o Rio de Janeiro?",
      answer: "Sim, atendemos condomínios em toda a região metropolitana do Rio de Janeiro com equipes prontas para atuar.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-heading font-bold text-center text-white mb-16"
          >
            Dúvidas frequentes
          </motion.h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-border-dark rounded-xl bg-surface/20 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group transition-colors duration-300 hover:bg-surface/30"
      >
        <span className="text-lg font-medium text-white/90 font-heading">{question}</span>
        <div className={`p-1 rounded-full border border-gold/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? <Minus className="w-4 h-4 text-gold" /> : <Plus className="w-4 h-4 text-gold" />}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-dark/50 pt-4">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}
