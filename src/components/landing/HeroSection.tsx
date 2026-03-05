import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";

const HOTMART_URL = "#checkout";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={heroImage}
      alt="Veterinário atendendo animais no campo"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-heading font-semibold text-sm mb-6 backdrop-blur-sm border border-accent/30">
          Curso 100% Prático
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight text-primary-foreground mb-6">
          Aprenda a prática real da{" "}
          <span className="text-accent">medicina veterinária</span> no campo
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 font-body mb-10 max-w-2xl leading-relaxed">
          Domine procedimentos reais com animais de grande porte e ganhe a
          segurança que a faculdade não te deu. Aprenda com quem vive o campo
          todos os dias.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={HOTMART_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent font-heading font-bold text-lg text-accent-foreground shadow-elevated hover:scale-105 transition-transform"
          >
            Garantir minha vaga
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={HOTMART_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 font-heading font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            <Play className="w-5 h-5" />
            Conheça o curso
          </a>
        </div>
        <div className="mt-10 flex items-center gap-6 text-primary-foreground/70 text-sm font-body">
          <span className="flex items-center gap-2">✅ Acesso imediato</span>
          <span className="flex items-center gap-2">✅ Garantia de 7 dias</span>
          <span className="flex items-center gap-2">✅ Certificado incluso</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
