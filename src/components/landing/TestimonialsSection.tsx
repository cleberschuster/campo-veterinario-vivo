import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Lucas Mendes",
    role: "Veterinário de Campo — MG",
    text: "O curso mudou minha forma de atender. Hoje tenho segurança para realizar procedimentos que antes me deixavam inseguro. Recomendo demais!",
  },
  {
    name: "Dra. Camila Torres",
    role: "Recém-formada — SP",
    text: "Saí da faculdade sentindo que faltava prática. O Vet de Campo me deu exatamente o que eu precisava: experiência real com animais de grande porte.",
  },
  {
    name: "Dr. Rafael Oliveira",
    role: "Veterinário Autônomo — GO",
    text: "Conteúdo direto ao ponto. Sem enrolação. Cada módulo é uma aula prática que eu aplico no meu dia a dia no campo. Investimento que vale cada centavo.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          O que nossos alunos dizem
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground font-body text-sm leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <div className="font-heading font-bold text-foreground text-sm">
                {t.name}
              </div>
              <div className="text-muted-foreground text-xs font-body">
                {t.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
