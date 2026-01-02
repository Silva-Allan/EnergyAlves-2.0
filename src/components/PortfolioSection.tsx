import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const portfolioItems = [
  {
    title: "Instalação Residencial Completa",
    category: "Residencial",
    description: "Projeto elétrico completo em residência de alto padrão",
    image: image1
  },
  {
    title: "Quadro de Distribuição Industrial",
    category: "Comercial",
    description: "Instalação de quadro de força para indústria",
    image: image2
  },
  {
    title: "Iluminação LED Comercial",
    category: "Iluminação",
    description: "Retrofit de iluminação em loja de shopping",
    image: image6
  },
  {
    title: "Manutenção Predial",
    category: "Manutenção",
    description: "Manutenção preventiva em condomínio residencial",
    image: image3
  },
  {
    title: "Cabeamento Estruturado",
    category: "Comercial",
    description: "Infraestrutura de rede para escritório corporativo",
    image: image4
  },
  {
    title: "Instalação Residencial Completa",
    category: "Residencial",
    description: "Projeto elétrico completo em residência de alto padrão",
    image: image5
  }
];

const categories = [
  "Todos",
  "Residencial",
  "Comercial",
  "Iluminação",
  "Manutenção",
];

export const PortfolioSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const filtersRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter(
        (item) => item.category === activeCategory
      );

  const scrollFilters = (direction: "left" | "right") => {
    if (!filtersRef.current) return;

    filtersRef.current.scrollBy({
      left: direction === "left" ? -140 : 140,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="py-24 overflow-x-hidden">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfólio
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Nossos <span className="text-gradient">Trabalhos</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Alguns projetos executados com foco em segurança, técnica e alto padrão.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative mb-10"
        >
          {/* Setas - somente mobile */}
          <button
            onClick={() => scrollFilters("left")}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 px-2 text-xl text-muted-foreground"
          >
            ‹
          </button>

          <div
            ref={filtersRef}
            className="
              flex gap-2 px-8
              md:px-0
              md:justify-center
              overflow-hidden
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap
                  px-4 py-2 rounded-full text-xs sm:text-sm font-medium
                  transition-all duration-300
                  ${activeCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollFilters("right")}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 px-2 text-xl text-muted-foreground"
          >
            ›
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="
                group bg-background border border-border rounded-lg
                hover:border-primary/50 transition-all
                overflow-hidden
                flex flex-col
              "
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-3 flex-1 flex flex-col">
                <span className="text-primary text-[10px] font-semibold uppercase tracking-wider mb-1">
                  {item.category}
                </span>

                <h3 className="font-heading text-sm font-bold leading-snug group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-xs leading-snug line-clamp-3 mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
