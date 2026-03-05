import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, ShieldOff, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: BookOpen,
    title: "Faculdade muito teórica",
    desc: "Você se formou, mas sente que aprendeu mais na teoria do que na prática real com animais de grande porte.",
  },
  {
    icon: ShieldOff,
    title: "Insegurança nos atendimentos",
    desc: "Na hora de atender no campo, bate aquela insegurança por falta de experiência prática.",
  },
  {
    icon: AlertTriangle,
    title: "Pouca prática com grandes animais",
    desc: "Oportunidades de treinar procedimentos reais com bovinos e equinos são raras na graduação.",
  },
  {
    icon: HelpCircle,
    title: "Sem referências práticas",
    desc: "Faltam profissionais experientes para te guiar nos procedimentos do dia a dia no campo.",
  },
];

const ProblemsSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Você se identifica com algum desses problemas?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
          A maioria dos veterinários enfrentam as mesmas dificuldades ao sair da
          faculdade.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
