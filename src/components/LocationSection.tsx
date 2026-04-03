import { MapPin, Clock, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-background relative">
      <div className="section-divider" />

      <div ref={ref} className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl poppins-extrabold text-center text-foreground mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Onde Estamos
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 poppins-light transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Venha nos visitar e conheça nossa barbearia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {[
            {
              icon: MapPin,
              title: "Endereço",
              content: (
                <>
                  SH Mansões Sobradinho<br />
                  Condomínio Mini-Chácaras<br />
                  QMS 23 lote 1 - Sobradinho II<br />
                  Brasília - DF, 73082-260
                </>
              ),
            },
            {
              icon: Clock,
              title: "Horário de Funcionamento",
              content: (
                <div className="space-y-1.5">
                  <div><span className="text-foreground poppins-medium">Segunda</span><br />8:00 às 20:00</div>
                  <div><span className="text-foreground poppins-medium">Terça – Sexta</span><br />09:00 às 19:30</div>
                  <div><span className="text-foreground poppins-medium">Sábado</span><br />09:00 às 17:00</div>
                  <div><span className="text-foreground poppins-medium">Domingo</span><br />Fechado</div>
                </div>
              ),
            },
            {
              icon: Phone,
              title: "Contato",
              content: (
                <>
                  <a href="tel:5561991084160" className="hover:text-primary transition-colors">
                    (61) 99108-4160
                  </a>
                  <br />
                  <a
                    href="https://www.instagram.com/dgbarbershop.df/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @dgbarbershop.df
                  </a>
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
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h4 className="poppins-bold text-sm text-foreground mb-3 uppercase tracking-wide">{item.title}</h4>
              <p className="text-muted-foreground text-sm poppins-light leading-relaxed">{item.content}</p>
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
            height="320"
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
