import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pt-16 selection:bg-gold/30">
        <HeroSection />
        <ProblemSection />
        <AuthoritySection />
        <BeforeAfterSection />
        <MechanismSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
