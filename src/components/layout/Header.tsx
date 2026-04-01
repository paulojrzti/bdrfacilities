"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Protocolo", href: "#protocolo" },
  { label: "Processo", href: "#processo" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border-dark shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Nav links — desktop only */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="BRD Facilities Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-heading font-bold text-base tracking-wider">BRD</span>
            <span className="text-text-secondary text-[10px] tracking-widest uppercase">Facilities</span>
          </div>
        </div>
        <Button size="sm" href="#orcamento">
          Solicitar orçamento
        </Button>
      </div>
    </header>
  );
}
