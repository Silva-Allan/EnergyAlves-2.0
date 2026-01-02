import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, AlertTriangle, Zap, CheckCircle } from "lucide-react";

const tips = [
  {
    icon: AlertTriangle,
    title: "Sinais de Problemas Elétricos",
    content:
      "Cheiro de queimado, tomadas quentes, quedas de energia e lâmpadas piscando indicam riscos.",
    type: "warning",
  },
  {
    icon: Lightbulb,
    title: "Economize Energia",
    content:
      "Use LED, desligue aparelhos da tomada e aproveite a iluminação natural.",
    type: "tip",
  },
  {
    icon: CheckCircle,
    title: "Manutenção Preventiva",
    content:
      "Inspeções periódicas evitam falhas graves e custos elevados.",
    type: "tip",
  },
  {
    icon: Zap,
    title: "Evite Sobrecarga",
    content:
      "Não ligue vários aparelhos na mesma tomada.",
    type: "warning",
  },
];

export const TipsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dicas" className="py-20 relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-wider">
            Blog & Dicas
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3">
            Dicas de <span className="text-gradient">Elétrica</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
            Orientações rápidas para segurança e economia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {tips.map((tip, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`
                bg-white border rounded-lg
                p-4 md:p-8
                hover:shadow-card transition-all
                ${tip.type === "warning" ? "border-primary/30" : "border-border"}
              `}
            >
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                {/* Icon */}
                <div
                  className={`
                    w-8 h-8 md:w-12 md:h-12
                    rounded-lg flex items-center justify-center
                    ${
                      tip.type === "warning"
                        ? "bg-primary/20"
                        : "bg-secondary/20"
                    }
                  `}
                >
                  <tip.icon
                    className={`
                      w-4 h-4 md:w-6 md:h-6
                      ${
                        tip.type === "warning"
                          ? "text-primary"
                          : "text-secondary"
                      }
                    `}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-heading text-sm md:text-xl font-bold mb-1">
                    {tip.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-base leading-tight md:leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
