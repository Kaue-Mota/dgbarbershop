import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="DG Barber Shop"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-[fadeInUp_0.9s_ease-out]">
        <img
          src={logo}
          alt="DG Barber Shop"
          width={120}
          height={120}
          className="w-28 md:w-36 mb-6 drop-shadow-2xl"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl poppins-extrabold tracking-wider uppercase text-white mb-3 drop-shadow-lg">
          DG Barber Shop
        </h1>
        <div className="w-16 h-px bg-gradient-to-r from-blue-600 via-red-600 to-transparent mb-6" />
        <p className="text-muted-foreground text-base md:text-lg poppins-light tracking-widest mb-10 animate-[fadeInUp_0.9s_ease-out_0.3s_both] uppercase">
          Estilo e técnica que transformam
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 animate-[fadeInUp_0.9s_ease-out_0.5s_both]">
          <a
            href="https://cashbarber.com.br/dgbarbershop"
            className="bg-blue-red-gradient text-white poppins-bold px-10 py-3.5 rounded text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Agendar Horário
          </a>
          <Link
            to="/galeria"
            className="border border-blue-600/50 text-foreground poppins-light px-10 py-3.5 rounded text-sm uppercase tracking-widest hover:bg-blue-600/10 hover:border-blue-600 transition-all hover:-translate-y-0.5"
          >
            Ver Galeria
          </Link>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 z-10 text-blue-500/70 hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Rolar para serviços"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
};

export default HeroSection;
