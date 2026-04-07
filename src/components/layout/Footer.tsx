import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-dark py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative h-14 w-36 opacity-70 mx-auto md:mx-0">
          <Image
            src="/logo.png"
            alt="BRD Facilities"
            fill
            className="object-contain object-center md:object-left"
          />
        </div>
        <p className="text-text-secondary text-sm text-center">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <p className="text-text-secondary text-xs">Padrão técnico de excelência.</p>
      </div>
    </footer>
  );
}
