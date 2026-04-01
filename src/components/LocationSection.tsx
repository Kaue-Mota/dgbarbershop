import { MapPin, Clock, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      <div ref={ref} className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl poppins-extrabold  text-center text-foreground mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Onde Estamos <span className="text-red-600 italic">Localização</span>
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
                  Segunda: <br />8:00 às 20:00 <br /><br />
                  Terça - Sexta:<br />09:00 às 19:30 <br /><br />
                  Sábado:<br />09:00 às 17:00 <br /><br />
                  Domingo :<br />Fechado
                </>
              ),
            },
            {
              icon: Mail,
              title: "Contato",
              content: (
                <>
                  61 99108-4160 <br />
                  @dgbarbershop.df <br />
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
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-blue-600" />
              </div>
              <h4 className="poppins-extrabold text-foreground mb-2">{item.title}</h4>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122915.36600047765!2d-47.95706315177966!3d-15.692567520486184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a415caf2caa67%3A0x51ca25d7b81fe391!2sDG%20BARBERSHOP%20%7C%20BARBEARIA%20POR%20ASSINATURA%20EM%20SOBRADINHO!5e0!3m2!1spt-BR!2sbr!4v1775071566165!5m2!1spt-BR!2sbr" 
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
