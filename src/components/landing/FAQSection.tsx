import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "O curso é indicado para iniciantes?",
    a: "Sim! O curso foi pensado para veterinários recém-formados ou com pouca experiência prática no campo. Mas também é excelente para quem já atua e quer se aprimorar.",
  },
  {
    q: "O conteúdo é gravado diretamente no campo?",
    a: "Sim, todas as aulas práticas são gravadas em propriedades rurais reais, com animais de grande porte, mostrando a rotina real do veterinário de campo.",
  },
  {
    q: "O acesso ao curso é vitalício?",
    a: "Sim! Após a compra, você terá acesso vitalício a todo o conteúdo do curso, incluindo futuras atualizações.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é processado pela Hotmart, plataforma 100% segura. Você pode pagar via cartão de crédito, boleto bancário ou PIX.",
  },
  {
    q: "Posso assistir no celular?",
    a: "Sim! O curso é totalmente responsivo e pode ser acessado de qualquer dispositivo: computador, tablet ou celular.",
  },
  {
    q: "Recebo certificado ao finalizar?",
    a: "Sim, ao concluir todos os módulos você receberá um certificado de conclusão do curso Vet de Campo Aprimoramentos.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Perguntas Frequentes
        </h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card border border-border rounded-xl px-6 shadow-card"
          >
            <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
