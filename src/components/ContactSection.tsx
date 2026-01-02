import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contato" className="py-20 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">
            Entre em Contato
          </h2>

          <p className="text-muted-foreground">
            Solicite um orçamento ou fale diretamente com um profissional.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
          {/* Coluna esquerda – WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex h-full bg-white border border-border rounded-xl p-8"
          >
            <div className="flex flex-col justify-center text-center w-full">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-heading text-xl font-bold mb-2">
                WhatsApp Direto
              </h3>

              <p className="text-muted-foreground text-sm mb-6">
                Atendimento rápido, direto e sem compromisso.
              </p>

              <a
                href="https://wa.me/5547920006964?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="whatsapp"
                  className="w-full py-3 text-sm font-medium"
                >
                  Iniciar Conversa
                </Button>
              </a>

              <p className="text-xs text-muted-foreground mt-6">
                Atendimento: Segunda a Sábado
              </p>
            </div>
          </motion.div>

          {/* Coluna direita */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex flex-col h-full space-y-6"
          >
            {/* Informações */}
            <div className="bg-white border border-border rounded-xl p-6 space-y-5">
              {/* Telefone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Telefone / WhatsApp
                  </p>
                  <p className="font-medium">(47) 92000-6964</p>
                  <a
                    href="https://wa.me/5547920006964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-medium inline-flex items-center gap-1 mt-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Local */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Atendimento</p>
                  <p className="font-medium">Chapecó / SC e região</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário</p>
                  <p className="text-sm">Seg–Sex: 8h às 18h</p>
                  <p className="text-sm">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/energy_alves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium">Instagram</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:energyyalves@gmail.com"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium">E-mail</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/energyalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition"
                >
                  <div className="w-9 h-9 bg-[#1877F2] rounded-lg flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
