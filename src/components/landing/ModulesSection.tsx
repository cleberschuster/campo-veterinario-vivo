import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const modules = [
  { num: "01", title: "Manejo de Grandes Animais", desc: "Técnicas seguras de contenção e manejo de bovinos e equinos." },
  { num: "02", title: "Procedimentos Veterinários de Campo", desc: "Vacinação, vermifugação, coleta de material e mais." },
  { num: "03", title: "Diagnóstico Prático", desc: "Exame clínico completo e identificação de patologias comuns." },
  { num: "04", title: "Técnicas do Dia a Dia", desc: "Procedimentos cirúrgicos menores, curativos e emergências." },
  { num: "05", title: "Reprodução Animal", desc: "Técnicas de reprodução, inseminação e acompanhamento gestacional." },
  { num: "06", title: "Casos Reais de Campo", desc: "Análise de casos clínicos reais com resolução passo a passo." },
];

const ModulesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Conteúdo do Curso
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
          Módulos práticos pensados para a realidade do veterinário de campo.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-colors group"
          >
            <span className="text-5xl font-heading font-black text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
              {m.num}
            </span>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">
              {m.title}
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
