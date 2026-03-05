import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-20 md:py-28 bg-gradient-dark">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mb-6">
          Comece agora sua jornada como{" "}
          <span className="text-accent">veterinário de campo</span>
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg mb-10 max-w-2xl mx-auto">
          Não espere mais para conquistar a prática que você sempre quis. O
          campo está te esperando.
        </p>
        <a
          href="#checkout"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-accent font-heading font-bold text-xl text-accent-foreground shadow-elevated hover:scale-105 transition-transform"
        >
          Quero aprender prática veterinária no campo
          <ArrowRight className="w-6 h-6" />
        </a>
        <p className="text-primary-foreground/40 font-body text-sm mt-6">
          Vagas limitadas • Garantia de 7 dias • Acesso imediato
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
