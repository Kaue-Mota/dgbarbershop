import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-secondary border-t border-border relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <img
          src={logo}
          alt="Barbearia Mattos"
          width={72}
          height={72}
          className="mb-6 hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="flex gap-3 mb-8">
          <a
            href="https://www.instagram.com/mattos_barbeariabr/"
            target="_blank"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-foreground px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <Instagram size={16} /> Instagram
          </a>
            <a
            href="https://wa.me/5561992389117?text=Olá! Gostaria de agendar um horário na Barbearia Mattos."
            className="bg-gradient-to-r from-green-600 to-green-700 hover:opacity-90 text-foreground px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
            WhatsApp
            </a>
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
        <p className="text-primary font-display italic text-sm mb-2">
          Estilo, técnica e bom gosto em um só lugar
        </p>
        <p className="text-muted-foreground text-xs">
          © 2025 Barbearia Mattos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
