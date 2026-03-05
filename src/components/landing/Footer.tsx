const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div>
          <h3 className="font-heading font-bold text-background text-lg mb-2">
            Vet de Campo Aprimoramentos
          </h3>
          <p className="text-background/50 font-body text-sm">
            Curso de prática veterinária no campo.
          </p>
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/70 font-body text-sm hover:text-background transition-colors"
          >
            📱 WhatsApp: (00) 00000-0000
          </a>
        </div>
        <div className="text-right space-y-1">
          <a href="#" className="block text-background/50 font-body text-sm hover:text-background/70 transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="block text-background/50 font-body text-sm hover:text-background/70 transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-6 text-center">
        <p className="text-background/40 font-body text-xs">
          © {new Date().getFullYear()} Vet de Campo Aprimoramentos. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
