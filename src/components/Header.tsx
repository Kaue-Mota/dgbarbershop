import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Início", href: "/#hero" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Galeria", href: "/galeria" },
  { label: "Localização", href: "/#localizacao" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const linkClass =
    "px-4 py-2 text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Rex Barber Co."
            width={38}
            height={38}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="hidden sm:block poppins-bold text-xs uppercase tracking-widest text-gold-gradient">
            Rex Barber Co.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link key={link.label} to={link.href} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={linkClass}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://cashbarber.com.br/rexbarberco"
            className="ml-4 bg-blue-red-gradient text-white poppins-semibold px-5 py-2 rounded text-xs uppercase tracking-widest hover:opacity-90 transition-all hover:shadow-md hover:shadow-blue-600/30"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-background/98 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.label}
                to={link.href}
                className="py-3 text-sm uppercase tracking-widest poppins-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-3 text-sm uppercase tracking-widest poppins-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://cashbarber.com.br/rexbarberco"
            className="mt-4 bg-blue-red-gradient text-white poppins-semibold px-6 py-3 rounded text-sm uppercase tracking-widest hover:opacity-90 transition-all text-center"
          >
            Agendar Horário
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
