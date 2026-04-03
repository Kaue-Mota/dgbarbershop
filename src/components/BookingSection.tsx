import bookingImg from "@/assets/booking-img.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BookingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div
            className={`flex-1 text-center md:text-left transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-red-500 poppins-semibold text-sm uppercase tracking-widest mb-3">
              Reserve seu momento
            </p>
            <h2 className="text-4xl md:text-5xl poppins-extrabold text-foreground mb-2 leading-tight">
              Agende seu<br />horário
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 my-4 md:mx-0 mx-auto" />
            <p className="text-muted-foreground mb-8 leading-relaxed poppins-light max-w-sm">
              Escolha o serviço e o melhor horário para você. Atendimento rápido e agendamento online.
            </p>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fcashbarber.com.br%2Fdgbarbershop%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnKRPyLVKfB-tPneyNQ6YaRB6ck5z27Fl7m6Nhq1wOrfPlnHCzYLrL6rruuO0_aem_cuBpsnIQ9xo9IX5OBBLdWQ&e=AT6qwM_nXnb1__ERZrwlds7NRqKosWzgobNH8mIyvbLCbEFWh9ycC7I3Yl1HW_reVHcpQkFM08r2x2hGyN9owhBCxMl-c8n6ClZF1nPqtUSCGYfYZB-azRLj2Q"
              className="inline-block bg-blue-red-gradient text-white poppins-bold px-8 py-3.5 rounded text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              Fazer Agendamento
            </a>
          </div>

          <div
            className={`flex-1 max-w-sm w-full transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 blur-sm group-hover:blur-md transition-all duration-500" />
              <img
                src={bookingImg}
                alt="Agendamento"
                loading="lazy"
                width={640}
                height={800}
                className="relative rounded-lg w-full object-cover aspect-[4/5] group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
