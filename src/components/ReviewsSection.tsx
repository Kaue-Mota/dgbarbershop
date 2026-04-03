import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "Anderson Turial",
    text: "Trata-se de uma barbearia com profissionais prontos para atendê-los. Aceitam agendamento, cartões e Pix. Ambiente bem arejado e limpo, possui 5 cadeiras para barbeiros, bancos de espera e som ambiente.",
  },
  {
    name: "Robson Carlos",
    text: "Excelente, fiz meu primeiro corte no Studio do DG e gostei muito, espero poder voltar mais vezes. Parabéns pela organização do espaço e pelo trabalho muito bem feito.",
  },
  {
    name: "Renato Giovanny",
    text: "Excelente atendimento, profissionais competentes. Virei freguês junto com meus filhos.",
  },
  {
    name: "João Carlos Gonzaga Filho",
    text: "Local simples mas agradável. Corte bem feito. Preço muito bom.",
  },
  {
    name: "Adrian Matheus",
    text: "Boa localização, organizado e os serviços são excelentes!",
  },
  {
    name: "Thomas Santos",
    text: "Um ambiente agradável com ótimos profissionais.",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl md:text-4xl poppins-extrabold text-center text-foreground mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Avaliações
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 poppins-light transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          O que nossos clientes dizem sobre nós
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary poppins-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <p className="poppins-semibold text-sm text-foreground leading-tight">{review.name}</p>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed poppins-light italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
