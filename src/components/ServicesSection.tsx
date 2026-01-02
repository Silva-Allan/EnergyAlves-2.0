import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Home,
  Building2,
  Wrench,
  Lightbulb,
  Cable,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Instalações Residenciais",
    description:
      "Projetos elétricos completos com foco em segurança e eficiência energética para residências.",
    features: ["NBR 5410", "Quadros de distribuição", "Automação residencial"]
  },
  {
    icon: Building2,
    title: "Sistemas Comerciais",
    description:
      "Soluções elétricas para estabelecimentos comerciais com padronização e conformidade.",
    features: ["Padrão comercial", "Sistemas trifásicos", "Quadros de comando"]
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Inspeções periódicas para garantir a segurança e evitar falhas no sistema elétrico.",
    features: ["Diagnóstico técnico", "Relatório detalhado", "Manutenção programada"]
  },
  {
    icon: Lightbulb,
    title: "Projetos de Iluminação",
    description:
      "Soluções luminotécnicas modernas com eficiência energética e design funcional.",
    features: ["Tecnologia LED", "Controle inteligente", "Eficiência energética"]
  },
  {
    icon: Cable,
    title: "Cabeamento Estruturado",
    description:
      "Infraestrutura de redes e comunicação com organização e certificação profissional.",
    features: ["Redes organizadas", "Certificação de cabos", "Padrão TIA/EIA"]
  },
  {
    icon: ShieldCheck,
    title: "Laudos Técnicos",
    description:
      "Documentação técnica e certificações conforme normas regulatórias vigentes.",
    features: ["Norma NBR 5410", "ART registrada", "Certificação CREA"]
  }
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="servicos" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* Header — intacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" />
            Nossas Especialidades
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços <span className="text-blue-700">Técnicos Especializados</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Soluções elétricas profissionais com expertise técnica, segurança garantida e
            conformidade com as normas regulatórias brasileiras.
          </p>
        </motion.div>

        {/* Grid — desktop igual, mobile ajustado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div
                className="
                  bg-white
                  rounded-xl
                  border border-gray-200
                  h-full
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:shadow-lg
                  
                  p-5 md:p-6
                "
              >
                {/* Ícone */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 md:mb-5">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>

                {/* Título */}
                <h3 className="font-heading text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3 md:mb-4">
                  {service.description}
                </p>

                {/* Features — compactadas no mobile */}
                <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-500 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA interno — intacto */}
                <div className="pt-3 md:pt-4 border-t border-gray-100">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Solicitar orçamento
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final — desktop intacto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 bg-white border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  Projeto Personalizado
                </h3>
                <p className="text-gray-600 text-sm">
                  Precisa de uma solução específica para seu negócio?
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#contato">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                  Consultoria Técnica
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" className="px-6 py-3 rounded-lg">
                  Ver Portfólio
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
