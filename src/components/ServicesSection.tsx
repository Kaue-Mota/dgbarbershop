import serviceHaircut from "/images/infantilservice.jpg";
import serviceBeard from "/images/barbaservice.jpg";
import serviceTreatment from "/images/style.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Cortes Infantis",
    description: "Nosso serviço de corte personalizado transforma o seu visual, na corte e na barba.",
    image: serviceHaircut,
  },
  {
    title: "Barba Impecável",
    description: "O cuidado além do corte, remoção de fio a fio para uma barba impecável com sensação de frescor.",
    image: serviceBeard,
  },
  {
    title: "Style",
    description: "O toque final para um visual completo, com modelagem e finalização que realçam seu estilo único.",
    image: serviceTreatment,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="poppins-light py-20 md:py-28 bg-background relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-display  text-center uppercase tracking-wider text-foreground mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nossos Serviços
        </h2>
        <p
          className={`text-muted-foreground text-center mb-16 max-w-md mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Confira o nosso cardápio de serviços
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-primary uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
