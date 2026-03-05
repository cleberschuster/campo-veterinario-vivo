import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Aulas gravadas diretamente no campo",
  "Procedimentos reais com animais de grande porte",
  "Técnicas usadas por veterinários experientes",
  "Conteúdo direto ao ponto, sem enrolação",
  "Casos reais de atendimento veterinário",
  "Acesso a uma comunidade exclusiva",
];

const CourseSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wider">
            Sobre o Curso
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            Vet de Campo{" "}
            <span className="text-gradient">Aprimoramentos</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            Um curso desenvolvido para veterinários que querem dominar a prática
            de campo. Aqui você aprende com situações reais do dia a dia, com
            quem vive a rotina veterinária no campo.
          </p>
          <ul className="space-y-4">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-body">{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-dark rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="text-accent font-heading font-bold text-lg mb-2">
            OFERTA ESPECIAL
          </div>
          <div className="text-primary-foreground font-heading text-5xl font-black mb-2">
            R$ 297
          </div>
          <div className="text-primary-foreground/60 font-body mb-1 line-through">
            De R$ 497,00
          </div>
          <div className="text-primary-foreground/80 font-body text-sm mb-8">
            ou 12x de R$ 29,02
          </div>
          <a
            href="#checkout"
            className="inline-flex items-center justify-center w-full px-8 py-4 rounded-lg bg-gradient-accent font-heading font-bold text-lg text-accent-foreground shadow-elevated hover:scale-105 transition-transform"
          >
            Acessar o curso agora
          </a>
          <p className="text-primary-foreground/50 text-xs mt-4 font-body">
            Pagamento 100% seguro via Hotmart
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CourseSection;
