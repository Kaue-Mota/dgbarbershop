import { MapPin, Clock, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div ref={ref} className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Onde Estamos <span className="text-primary italic">Localização</span>
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Venha nos visitar e conheça nossa barbearia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            {
              icon: MapPin,
              title: "Endereço",
              content: (
                <>
                  AR 01 Conjunto 03, Loja 01, Lote 18<br />Sobradinho 2 - Brasília - DF<br />CEP: 73060-103
                </>
              ),
            },
            {
              icon: Clock,
              title: "Horário",
              content: (
                <>
                  Seg - Sáb:<br />09:00 às 19:00
                </>
              ),
            },
            {
              icon: Mail,
              title: "Contato",
              content: (
                <>
                  61 9238-9117
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.content}</p>
            </div>
          ))}
        </div>
        <div
          className={`max-w-4xl mx-auto rounded-lg overflow-hidden border border-border transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <iframe
            title="Localização DG Barber Shop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.159494391848!2d-47.83341622487303!3d-15.636492984982036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a40b878a1ecdf%3A0xff0b4395cb872afc!2sBarbearia%20mattos!5e0!3m2!1spt-BR!2sbr!4v1774854329724!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
