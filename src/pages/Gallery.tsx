import { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages as images } from "@/data/gallery";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const goNext = () => {
    if (selectedImage !== null) setSelectedImage((selectedImage + 1) % images.length);
  };
  const goPrev = () => {
    if (selectedImage !== null) setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 md:py-24">
        <div ref={ref} className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-xs poppins-medium uppercase tracking-widest"
          >
            <ArrowLeft size={14} />
            Voltar
          </Link>

          <h1
            className={`text-3xl md:text-5xl poppins-extrabold text-center text-gold-gradient mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Galeria
          </h1>
          <p
            className={`text-muted-foreground text-center mb-12 max-w-md mx-auto poppins-light transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Confira alguns dos nossos trabalhos realizados
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`group relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: isVisible ? `${100 + index * 60}ms` : "0ms" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/97 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Anterior"
          >
            <ChevronLeft size={34} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Próxima"
          >
            <ChevronRight size={34} />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain animate-[fadeInUp_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted-foreground text-xs poppins-light">
            {selectedImage + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
