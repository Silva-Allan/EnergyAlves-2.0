import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Clock, value: "5+", label: "Anos de Experiência" },
  { icon: Users, value: "600+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "100+", label: "Projetos Concluídos" },
  { icon: Shield, value: "100%", label: "Segurança Garantida" },
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quem-somos" className="py-20 md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Quem Somos
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Tradição e{" "}
            <span className="text-gradient">Excelência</span> em Serviços Elétricos
          </h2>

          <p className="text-muted-foreground max-w-1xl mx-auto text-base md:text-lg">
            Fundada em 2020, a empresa Energy Alves nasceu da visão de um negócio familiar 
            comprometido com a excelência técnica e a segurança elétrica. Com 5 anos de 
            atuação sólida no mercado, evoluímos de pequenos reparos para projetos complexos 
            nos setores residencial, predial e industrial. 
            Nosso diferencial está na responsabilidade: somos uma empresa registrada que 
            prioriza a vida acima de tudo. Por isso, contamos com todas as certificações 
            obrigatórias, incluindo as NR-10 (Segurança em Eletricidade) e NR-35 (Trabalho em Altura). 
            Quando você contrata a nossa família para cuidar da sua, você recebe mais do que energia; 
            recebe o compromisso de quem entende que uma instalação segura é a base de qualquer 
            empreendimento.
          </p>
        </motion.div>

        {/* Conteúdo principal */}
        <div className="grid gap-14 md:grid-cols-2 md:items-start-reverse">

          {/* Cards — esquerda no desktop, abaixo no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              order-3 md:order-1
              grid grid-cols-2 gap-4
              max-w-md md:max-w-none mx-auto md:mx-0
            "
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.1,
                }}
                className="
                  bg-white
                  px-4 py-5
                  rounded-2xl
                  border border-border
                  border-2
                  text-center
                "
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Missão + Valores — direita no desktop, topo no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 md:order-2 space-y-10"
          >
            {/* Missão */}
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                Nossa <span className="text-primary">Missão</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Fornecer soluções em instalações elétricas residenciais,
                prediais e industriais com excelência técnica e rigorosa
                conformidade às normas de segurança (NRs), garantindo o
                bem-estar dos nossos clientes e a eficiência de seus sistemas.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                Nossos <span className="text-primary">Valores</span>
              </h3>

              <ul className="space-y-3">
                {[
                  "Segurança: Rigoroso cumprimento das NRs para proteger vidas e patrimônios.",
                  "Transparência: Honestidade em orçamentos e prazos, honrando sua confiança.",
                  "Excelência Técnica: Perfeccionismo e atualização constante na execução.",
                  "Confiança: Relações duradouras com o cuidado de nossa história.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="
                      flex items-start gap-3
                      text-muted-foreground
                      justify-center md:justify-start
                      text-sm md:text-base
                    "
                  >
                    <span className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
