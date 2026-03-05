import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import CourseSection from "@/components/landing/CourseSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ModulesSection from "@/components/landing/ModulesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ProfessorSection from "@/components/landing/ProfessorSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => (
  <>
    <Helmet>
      <title>Vet de Campo Aprimoramentos — Curso de Prática Veterinária no Campo</title>
      <meta
        name="description"
        content="Aprenda prática real de medicina veterinária no campo. Curso 100% prático com procedimentos reais em animais de grande porte. Domine a veterinária de campo."
      />
      <meta name="keywords" content="curso de veterinária de campo, prática veterinária no campo, veterinária de grandes animais, medicina veterinária prática, curso para veterinários de campo" />
    </Helmet>
    <main>
      <HeroSection />
      <ProblemsSection />
      <CourseSection />
      <BenefitsSection />
      <ModulesSection />
      <TestimonialsSection />
      <ProfessorSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
