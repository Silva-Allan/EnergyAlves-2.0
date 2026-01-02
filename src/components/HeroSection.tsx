import { motion } from "framer-motion";
import { ArrowDown, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-electrician.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative 
        min-h-screen 
        flex items-center 
        justify-center 
        pt-20 md:pt-16
        overflow-hidden
        overflow-x-hidden
        bg-zinc-900
      "
    >
      {/* ===== BACKGROUND DESKTOP (imagem) ===== */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">
        <img
          src={heroImage}
          alt="Eletricista profissional"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Gradientes de contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ===== BACKGROUND MOBILE (sem imagem) ===== */}
      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-b from-zinc-900 via-zinc-900 to-black" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2 
              bg-white/15 backdrop-blur-sm 
              border border-white/25 
              rounded-full 
              px-4 py-2 
              mb-6
            "
          >
            <div className="relative">
              <Zap className="w-4 h-4 text-white" />
              <Sparkles className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300 animate-pulse" />
            </div>
            <span className="text-white text-xs font-semibold tracking-wide">
              Instalação e Manutenção Elétrica
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-heading 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold 
              leading-tight 
              mb-6
            "
          >
            <span className="block text-white mb-2">
              Soluções elétricas
            </span>

            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              seguras e precisas
            </span>

            <span className="block text-white">
              para quem exige alto padrão.
            </span>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              text-white/90 
              text-base sm:text-lg 
              max-w-2xl 
              mb-8 
              leading-relaxed
            "
          >
            Há mais de <strong className="text-white">10 anos</strong> oferecendo
            serviços elétricos residenciais, prediais e comerciais com excelência
            em <strong className="text-white">Chapecó/SC</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#orcamento" className="w-full sm:w-auto">
              <Button
                className="
                  w-full sm:w-auto
                  bg-gradient-to-r from-blue-600 to-blue-700
                  hover:from-blue-700 hover:to-blue-800
                  text-white
                  px-6 py-4
                  rounded-xl
                  text-base font-semibold
                  shadow-xl
                "
              >
                <span className="flex items-center gap-3">
                  <Zap className="w-4 h-4" />
                  Solicitar Orçamento
                </span>
              </Button>
            </a>

            <a href="#servicos" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="
                  w-full sm:w-auto
                  border-white/30
                  text-white
                  hover:bg-white/10
                  px-6 py-4
                  rounded-xl
                  text-base font-semibold
                "
              >
                <span className="flex items-center gap-3">
                  Nossos Serviços
                  <ArrowDown className="w-4 h-4" />
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (somente desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <a
          href="#quem-somos"
          className="flex flex-col items-center text-white/70 hover:text-white"
        >
          <span className="text-sm mb-1">Saiba mais</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
