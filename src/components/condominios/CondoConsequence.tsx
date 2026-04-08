"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, UserX, EyeOff, Clock, Brain } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    icon: ShieldAlert,
    title: "Risco trabalhista constante",
    description: "Um erro simples pode virar um problema jurídico caro e inesperado.",
  },
  {
    icon: UserX,
    title: "Desgaste com moradores",
    description: "Pequenos atritos se acumulam e viram conflitos frequentes.",
  },
  {
    icon: EyeOff,
    title: "Falta de controle",
    description: "Você nunca tem certeza do que está acontecendo de verdade.",
  },
  {
    icon: Clock,
    title: "Tempo perdido",
    description: "O dia passa resolvendo urgências que nem deveriam existir.",
  },
  {
    icon: Brain,
    title: "Estresse contínuo",
    description: "A pressão constante vira parte da rotina — e cobra seu preço.",
  },
];

// Progressive glow per item
const cardGlows = [
  "radial-gradient(ellipse at top left, rgba(212,175,55,0.05) 0%, transparent 65%)",
  "radial-gradient(ellipse at top left, rgba(212,175,55,0.08) 0%, transparent 65%)",
  "radial-gradient(ellipse at top left, rgba(212,175,55,0.11) 0%, transparent 65%)",
  "radial-gradient(ellipse at top left, rgba(212,175,55,0.15) 0%, transparent 65%)",
  "radial-gradient(ellipse at top left, rgba(212,175,55,0.21) 0%, transparent 65%)",
];
const cardGlowsRight = [
  "radial-gradient(ellipse at top right, rgba(212,175,55,0.05) 0%, transparent 65%)",
  "radial-gradient(ellipse at top right, rgba(212,175,55,0.08) 0%, transparent 65%)",
  "radial-gradient(ellipse at top right, rgba(212,175,55,0.11) 0%, transparent 65%)",
  "radial-gradient(ellipse at top right, rgba(212,175,55,0.15) 0%, transparent 65%)",
  "radial-gradient(ellipse at top right, rgba(212,175,55,0.21) 0%, transparent 65%)",
];
const dotGlows = [
  "0 0 14px rgba(212,175,55,0.25)",
  "0 0 16px rgba(212,175,55,0.33)",
  "0 0 20px rgba(212,175,55,0.42)",
  "0 0 24px rgba(212,175,55,0.52)",
  "0 0 30px rgba(212,175,55,0.65)",
];
const pulseColors = [
  "rgba(212,175,55,0.15)",
  "rgba(212,175,55,0.20)",
  "rgba(212,175,55,0.26)",
  "rgba(212,175,55,0.33)",
  "rgba(212,175,55,0.42)",
];

function TimelineDot({ i, mobile = false }: { i: number; mobile?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.12 * i + 0.08, duration: 0.5, type: "spring", stiffness: 200 }}
      className={`relative flex items-center justify-center flex-shrink-0 ${mobile ? "w-8 h-8" : "w-12 h-12"}`}
    >
      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.4 + i * 0.4, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full"
        style={{ background: pulseColors[i] }}
      />
      {/* Dot */}
      <span
        className={`relative z-10 rounded-full border-2 border-gold bg-background ${mobile ? "w-3 h-3" : "w-4 h-4"}`}
        style={{ boxShadow: dotGlows[i] }}
      />
      {/* Step number (desktop only) */}
      {!mobile && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gold/50 tracking-[0.2em]">
          {String(i + 1).padStart(2, "0")}
        </span>
      )}
    </motion.div>
  );
}

function ItemCard({
  item,
  i,
  side,
}: {
  item: (typeof items)[0];
  i: number;
  side: "left" | "right";
}) {
  const Icon = item.icon;
  const fromX = side === "left" ? -36 : 36;
  const gradient = side === "left" ? cardGlows[i] : cardGlowsRight[i];

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.12 * i, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.025 }}
      className="group relative p-6 lg:p-8 rounded-2xl border border-border-dark transition-all duration-500 cursor-default"
      style={{ background: gradient }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.28)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = dotGlows[i].replace("0 0", "0 4px");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(42,42,45,1)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div className="flex gap-4 items-start">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-border-dark bg-background/70 transition-all duration-500 group-hover:border-gold/25"
          style={{ boxShadow: `inset 0 0 10px rgba(212,175,55,${0.03 + i * 0.03})` }}
        >
          <Icon
            className="text-gold transition-transform duration-500 group-hover:scale-110"
            style={{ width: "1.1rem", height: "1.1rem" }}
            strokeWidth={1.5}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3
            className="font-heading font-bold text-white leading-snug transition-colors duration-300 group-hover:text-gold/90"
            style={{ fontSize: `${1 + i * 0.035}rem` }}
          >
            {item.title}
          </h3>
          <p
            className="text-text-secondary leading-relaxed"
            style={{ fontSize: "0.9rem", opacity: 0.85 + i * 0.03 }}
          >
            {item.description}
          </p>

          {/* Progressive accent line */}
          <motion.div
            className="h-px mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to right, rgba(212,175,55,${0.3 + i * 0.1}), transparent)`,
              transitionDuration: "500ms",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function CondoConsequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.35"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/4 blur-[220px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mx-auto text-center mb-20 lg:mb-32"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-gold/60 mb-6"
          >
            O custo oculto da inação
          </motion.span>

          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            E isso custa{" "}
            <span className="text-gradient">mais do que parece</span>
          </h2>

          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto">
            Enquanto parece apenas rotina, na prática você está perdendo
            tempo, dinheiro e energia todos os dias.
          </p>
        </motion.div>

        {/* ── Timeline Desktop (zig-zag) ── */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-px bg-border-dark overflow-hidden">
            <motion.div
              className="w-full h-full origin-top"
              style={{
                scaleY: lineScaleY,
                background:
                  "linear-gradient(to bottom, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0.4) 50%, rgba(212,175,55,0.15) 100%)",
              }}
            />
          </div>

          <div className="space-y-10">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_80px_1fr] items-center gap-0"
                >
                  {/* Left slot */}
                  <div className="pr-10 flex justify-end">
                    {isLeft ? (
                      <div className="w-full max-w-md">
                        <ItemCard item={item} i={i} side="left" />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="flex justify-center">
                    <TimelineDot i={i} />
                  </div>

                  {/* Right slot */}
                  <div className="pl-10 flex justify-start">
                    {!isLeft ? (
                      <div className="w-full max-w-md">
                        <ItemCard item={item} i={i} side="right" />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Timeline Mobile (vertical) ── */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Left line */}
          <div className="absolute left-3.5 top-4 bottom-4 w-px bg-border-dark overflow-hidden">
            <motion.div
              className="w-full h-full origin-top"
              style={{
                scaleY: lineScaleY,
                background:
                  "linear-gradient(to bottom, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.35) 60%, rgba(212,175,55,0.1) 100%)",
              }}
            />
          </div>

          <div className="space-y-8">
            {items.map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <TimelineDot i={i} mobile />
                <div className="flex-1 pb-2">
                  <ItemCard item={item} i={i} side="left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Final Impact Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-24 lg:mt-36 max-w-2xl mx-auto text-center"
        >
          {/* Separator */}
          <div className="flex items-center gap-5 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-gold/30" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0"
              style={{ boxShadow: "0 0 18px rgba(212,175,55,0.7)" }}
            />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/30 to-gold/30" />
          </div>

          <p className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
            Se nada muda,{" "}
            <span className="text-gradient">o problema só cresce.</span>
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg lg:text-xl text-text-secondary"
          >
            E quanto mais você adia, mais caro isso fica.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
