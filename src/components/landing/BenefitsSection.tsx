import { motion } from "framer-motion";
import { Stethoscope, Shield, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Stethoscope,
    title: "Procedimentos reais",
    desc: "Aprenda passo a passo procedimentos veterinários praticados diretamente no campo.",
  },
  {
    icon: Shield,
    title: "Segurança no atendimento",
    desc: "Desenvolva a confiança necessária para atender animais de grande porte com tranquilidade.",
  },
  {
    icon: TrendingUp,
    title: "Evolução profissional",
    desc: "Acelere sua carreira dominando técnicas usadas por veterinários de referência no mercado.",
  },
  {
    icon: Users,
    title: "Networking no campo",
    desc: "Conecte-se a uma comunidade de veterinários que vivem a prática de campo todos os dias.",
  },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          O que você vai conquistar
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
          Benefícios que transformam sua carreira veterinária no campo.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-elevated transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-4">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">
              {b.title}
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
