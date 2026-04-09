import logo from "@/assets/logo.svg";
import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-14 bg-secondary border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <img
          src={logo}
          alt="Rex Barber Co. Logo"
          width={64}
          height={64}
          className="mb-5 hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
          loading="lazy"
        />

        <p className="text-blue-red-gradient poppins-semibold text-xs uppercase tracking-widest mb-5">
          Precisão, estilo e identidade
        </p>

        <div className="flex gap-3 mb-8">
          <a
            href="https://www.instagram.com/rexbarberco/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white px-5 py-2.5 rounded-lg text-sm poppins-medium flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <Instagram size={15} />
            Instagram
          </a>
          <a
            href="https://wa.me/5511945217830?text=Olá! Gostaria de agendar um horário na Rex Barber Co."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:opacity-90 text-white px-5 py-2.5 rounded-lg text-sm poppins-medium flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-blue-600/40 via-red-600/40 to-transparent mb-5" />

        <p className="text-muted-foreground text-xs poppins-light">
          © 2025 Rex Barber Co. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
