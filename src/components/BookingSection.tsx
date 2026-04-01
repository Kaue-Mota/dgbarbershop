import bookingImg from "@/assets/booking-img.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BookingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div
            className={`flex-1 text-center md:text-left transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold italic text-foreground mb-1">
              Agende seu horário
            </h2>
            <p className="text-2xl md:text-3xl font-display font-bold text-gold-gradient mb-4">
              Experiência
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Escolha o serviço e o melhor horário para você
            </p>
            <a
              href=""
              className="inline-block bg-gold-gradient text-primary-foreground font-semibold px-8 py-3.5 rounded text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Fazer Agendamento
            </a>
          </div>
          <div
            className={`flex-1 max-w-sm transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              <img
                src={bookingImg}
                alt="Agendamento"
                loading="lazy"
                width={640}
                height={640}
                className="rounded-lg w-full object-cover aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Frame accent */}
              <div className="absolute -inset-2 border border-primary/20 rounded-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
