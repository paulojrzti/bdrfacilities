import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CondoHero } from "@/components/condominios/CondoHero";
import { CondoProblem } from "@/components/condominios/CondoProblem";
import { CondoConsequence } from "@/components/condominios/CondoConsequence";
import { CondoAuthority } from "@/components/condominios/CondoAuthority";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CondoMechanism } from "@/components/condominios/CondoMechanism";
import { CondoBenefits } from "@/components/condominios/CondoBenefits";
import { CondoProcess } from "@/components/condominios/CondoProcess";
import { CondoComparison } from "@/components/condominios/CondoComparison";
import { CondoFaq } from "@/components/condominios/CondoFaq";
import { CondoCta } from "@/components/condominios/CondoCta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestão de Condomínios | BRD Facilities",
  description: "Terceirização e gestão operacional premium para condomínios no Rio de Janeiro. Reduza riscos e tenha controle total.",
};

export default function CondominiosPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pt-16 selection:bg-gold/30 overflow-hidden">
        <CondoHero />
        <CondoProblem />
        <CondoConsequence />
        <CondoAuthority />
        <BeforeAfterSection />
        <CondoMechanism />
        <CondoBenefits />
        <CondoProcess />
        <CondoComparison />
        <CondoFaq />
        <CondoCta />
      </main>
      <Footer />
    </>
  );
}
