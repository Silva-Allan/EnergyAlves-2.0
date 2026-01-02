import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BudgetSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="orcamento" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Orçamento
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 md:mb-6">
            Um processo profissional, do início ao{" "}
            <span className="text-gradient">atendimento</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-lg">
            Um fluxo inteligente para entender sua necessidade e garantir um
            atendimento técnico, transparente e seguro.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 md:grid-cols-3 md:gap-6 max-w-5xl mx-auto mb-12 md:mb-14"
        >
          {[
            {
              icon: FileText,
              title: "Diagnóstico Claro",
              text: "Informações essenciais para evitar surpresas.",
            },
            {
              icon: ShieldCheck,
              title: "Padrão Profissional",
              text: "Processo ideal para projetos residenciais e comerciais.",
            },
            {
              icon: Clock,
              title: "Agilidade no Retorno",
              text: "Contato rápido e tomada de decisão eficiente.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-white border border-border rounded-lg
                p-4 md:p-6
              "
            >
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />

              <h3 className="font-heading text-sm md:text-xl font-semibold mb-1 md:mb-2">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-xs md:text-sm leading-tight md:leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/Orcamento"
            className="
              inline-flex items-center gap-3
              bg-primary text-black font-semibold
              px-6 py-3 md:px-8 md:py-4
              rounded-lg hover:bg-primary/90 transition
            "
          >
            Solicitar Orçamento
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
