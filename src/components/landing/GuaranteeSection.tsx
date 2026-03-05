import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Garantia incondicional de 7 dias
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
          Se dentro de 7 dias você sentir que o curso não é para você, devolvemos
          100% do seu investimento. Sem burocracia, sem perguntas. O risco é
          todo nosso.
        </p>
        <div className="inline-block bg-card border border-primary/20 rounded-xl px-8 py-4 shadow-card">
          <p className="font-heading font-bold text-primary text-lg">
            🔒 Compra 100% segura via Hotmart
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
