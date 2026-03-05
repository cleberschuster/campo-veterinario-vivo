import { motion } from "framer-motion";
import professorImg from "@/assets/professor-vet.jpg";

const ProfessorSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={professorImg}
                alt="Professor veterinário"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-bold text-sm shadow-card">
              +15 anos de campo
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wider">
            Seu Professor
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            Conheça o especialista por trás do curso
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
            Veterinário com mais de 15 anos de experiência exclusiva no campo.
            Especialista em clínica e cirurgia de grandes animais, já atendeu
            milhares de animais em propriedades rurais.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Apaixonado por ensinar, criou o Vet de Campo Aprimoramentos para
            compartilhar todo seu conhecimento prático e ajudar novos
            veterinários a conquistarem segurança e excelência no campo.
          </p>
          <ul className="space-y-2 text-foreground font-body text-sm">
            <li>🎓 Graduação em Medicina Veterinária</li>
            <li>📋 Especialização em Clínica de Grandes Animais</li>
            <li>🐄 +15 anos atuando exclusivamente no campo</li>
            <li>📍 Mais de 500 propriedades atendidas</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProfessorSection;
