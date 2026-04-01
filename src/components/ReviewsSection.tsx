import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "Johny Alves",
    text: "Corto desde os meus 15 anos de idade, melhor barbeiro da cidade, agora corto o cabelo do meu filho seguindo a mesma tradição! Atendimento top, ambiente super limpo, cara extrovertido bom demais! Nota milll",
  },
  {
    name: "Rondinelly Nacimento",
    text: "Lugar simples e sofisticado, atendimento a altura do cliente... façam uma visita e confira.",
  },
  {
    name: "Luciano Cordeiro",
    text: "Sempre fui bem atendido aqui, sou cliente já tem uns 5 anos.",
  },
  {
    name: "Henrique Rodrigues",
    text: "A melhor de Sobradinho, sem dúvidas!",
  },
  {
    name: "Josair Braz",
    text: "Atendimento da melhor qualidade, um espaço amigável e confortável!",
  },
  {
    name: "Renato Rabelo",
    text: "Excelente profissional, ótima localização, recomendo a todos!",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl md:text-4xl poppins-extrabold  text-center text-white italic mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Avaliações
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          O que nossos clientes dizem sobre nós
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-card border-red-600 border-border rounded-lg p-6 hover:border-blue-600 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center text-white poppins-extrabold text-sm border border-blue-600">
                  {review.name.charAt(0)}
                </div>
                <p className="font-display font-semibold text-foreground">{review.name}</p>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
