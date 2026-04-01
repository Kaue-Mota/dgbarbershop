import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Barbearia Mattos interior" width={1920} height={1080} className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-[fadeInUp_1s_ease-out]">
        <img src={logo} alt="Barbearia Mattos logo" width={120} height={120} className="mb-6 drop-shadow-2xl" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wider uppercase text-gold-gradient mb-4">
          Barbearia Mattos
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide mb-10 animate-[fadeInUp_1s_ease-out_0.3s_both]">
          Estilo e técnica que transformam
        </p>
        <a
          href="https://chat.inbarberapp.com/barbeariamatos"
          className="bg-gold-gradient text-primary-foreground font-semibold px-10 py-3.5 rounded text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20 animate-[fadeInUp_1s_ease-out_0.5s_both]"
        >
          Agendar Horário
        </a>
        <Link
          to="/galeria"
          className="mt-4 border border-primary/50 text-primary font-semibold px-10 py-3.5 rounded text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 animate-[fadeInUp_1s_ease-out_0.7s_both]"
        >
          Ver Galeria
        </Link>
      </div>
      <a href="#servicos" className="absolute bottom-8 z-10 text-primary animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
