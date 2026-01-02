import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-energy-alves.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#dicas", label: "Dicas" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 z-50
        w-full max-w-[100vw] overflow-x-hidden
        transition-all duration-300
        ${isScrolled
          ? "bg-zinc-900/95 backdrop-blur-xl shadow-lg border-b border-white/5"
          : "bg-gradient-to-b from-zinc-900/90 to-transparent backdrop-blur-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo + Texto (sempre visível) */}
          <a href="#home" className="flex items-center gap-3 min-w-0">
            <img
              src={logo}
              alt="Energy Alves"
              className="h-11 w-auto rounded-md flex-shrink-0"
            />
            <div className="leading-tight truncate">
              <h1 className="font-bold text-sm sm:text-base md:text-lg text-white truncate">
                Energy Alves
              </h1>
              <p className="text-[11px] sm:text-xs text-zinc-400 truncate">
                Soluções Elétricas
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition
                    ${activeSection === item.href
                      ? "text-cyan-400 bg-white/5"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href="https://wa.me/5547920006964" target="_blank" rel="noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl px-5">
                <MessageCircle className="w-4 h-4 mr-2" />
                (47) 92000-6964
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? (
              <X size={26} className="text-white" />
            ) : (
              <Menu size={26} className="text-white" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="lg:hidden bg-zinc-900 w-full overflow-hidden border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide transition
                    ${activeSection === item.href
                      ? "bg-white/5 text-cyan-400"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"}
                  `}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/5547920006964"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
